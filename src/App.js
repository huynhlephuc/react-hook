import logo from './logo.svg';
import queryString from 'query-string';
import './App.scss';
import ColorBox from './compoments/ColorBox';
import React, { useState , useEffect } from 'react';
import TodoForm from './compoments/TodoForm';
import PostList from './compoments/PostList'
import TodoList from './compoments/TodoList';
import Pagination from './compoments/Pagination';


function App() {

  // la thang cha gui du lieu qua thang con
  //TODO LIST

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! ' },
    { id: 2, title: 'We love Easy Frontend '},
    { id: 3, title: 'They love Easy Frontend! ' },
  ]);
  //#1 giong nhau
  function handlerTodoList(todo) {
    console.log(todo);

    //xu li xoa index sau khi click vao no
    //co the dung ham filer
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    console.log(index);
    
    // cai nay la spread k phari rest
    const newTodoList = [...todoList];
    console.log(newTodoList);
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  
  //TODO FORM
  
  function handlerOnSubmit(formValues) {
    console.log('form submit', formValues);
    const newTodo = {
      // id đặt tạm như vậy thôi
      // Nếu đặt vậy thì khi xoá rồi thêm mới thì sẽ kiếm id bị trùng nhau
      // do ID trong mảng thì tăng dần và xoá rồi bị thay thế
      id : todoList.length + 1,
      ...formValues,
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }


  //USER EFECT
  // goi lai ham effect khi co thay doi so trang pagination
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  const [postList, setPostList] = useState([]);

  useEffect(() =>{
    // thao tac bat dong bo thuong di chung de goi APi 
    async function fetchPostList() {
      //...
      try {

        // su dung thu vien quyery-string
        const paramsString = queryString.stringify(filters);

        // code goc cua effect
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log('ResponeJSON',{responseJSON});
  
        // dang su dung oject distruc de lay key "data" trong du lieu tra ve tu responeJson
        // pagetination de render
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Fail to featch: ', error.message);
      }
    }
    fetchPostList();
  },[filters] )
  
  // PAGINATION
  
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  function handlerPageChange(newPage) {
    console.log('New Pages: ',newPage);
    setFilters({
      ...filters,
      // phai goi dung ten neu k code k  bao loi nhung k chay _page
      _page: newPage,
    });
  }

  

  return (
    <div className="app">
      {/* goi compoments sai lam code k bao loi nhung k chay */}
     <h1>Ready for react hooks!!!</h1>
     <Pagination 
        pagination={pagination}
        onPageChange={handlerPageChange}
     />
     <ColorBox />
     <TodoForm  onSubmit={handlerOnSubmit}/>
     <PostList posts={postList} />

     <TodoList todos={todoList} onTodoClick={handlerTodoList}/>
    </div>
  );
}

export default App;
