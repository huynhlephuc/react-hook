
import PropTypes from 'prop-types';
import React, { useState } from 'react';


TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    Onsubmit: null,
}


function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    // do gia tri mặc định là cứng nên cần hàm này để hiển thị dữ liệu tahy đổi
    function handlerValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    function handlerSubmitted(e) {
        e.preventDefault();
        // do onSubmit có thể bị null nên cần hàm này, nếu k có thì không làm gì cả
        if (!onSubmit) return;
        const formValues = {
            title: value, 
        };
        onSubmit(formValues);
        setValue('');
    }

    return (
        <form onSubmit={handlerSubmitted}>
            <input 
                type="text" 
                value={value} 
                onChange={handlerValueChange}
            />
        </form>
    );
}

export default TodoForm;