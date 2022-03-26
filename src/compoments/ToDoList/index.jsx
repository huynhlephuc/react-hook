import React from 'react';
import PropTypes from 'prop-types';

// la thang con nhan du lieu tu thang cha de xu li
//thay vi ghi thnag ben app thi ghi qua day cho de xu li

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}
// nhan du lieu tu app
function TodoList(props) {
    const {todos, onTodoClick} = props;

    // #1 giong nhau
    function handlerClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }
    return (
        // return qua ben app de app reder
        <ul className="todo-list">
            {todos.map(todo =>(
                <li 
                    key={todo.id} 
                    onClick={() => handlerClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
            
        </ul>
    );
}

export default TodoList;