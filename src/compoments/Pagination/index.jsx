import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {
    // dustructering ra 2 cai 
    const {pagination , onPageChange} = props;
    const {_page, _limit, _totalRows} = pagination;
    // ham tinh tong so trang
    // chia va luon lam tron so len 
    const totalPages = Math.ceil(_totalRows / _limit);

    // do cai onPageChange co the null
    function handlerPageChange(newPage) {
        if (onPageChange) { 
            onPageChange(newPage);
        }
    }

    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => handlerPageChange(_page - 1)}
            >
                Prev
            </button>

            <button
                disabled={_page >= totalPages}
                onClick={() => handlerPageChange(_page + 1)}
            >
                Next
            </button>
            
        </div>
    );
}

export default Pagination;