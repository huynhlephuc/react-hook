import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
    onSubmit: null, 
}

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    // de su dung ki thuat debound
    // thi can 1 bien tam luon giu nguyen gia tri sau moi lan rendered => su dung hook useRef
    const typingTimeoutRef = useRef(null);

    function handlerSearchTermChanged(e) {
        const value = e.target.value;
        setSearchTerm(value);
        
        if (!onSubmit) return;

        // submit xong thi di clearn no di
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }        
        // neu 300 mili seconds ma k go nua thi no di submit
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);
        }, 300);
    }

    return (
        <form>
            <input 
                type="text" 
                value={searchTerm}
                onChange={handlerSearchTermChanged}
            />
        </form>
    );
}

export default PostFiltersForm;