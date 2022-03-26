//rsfp de go tat:

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {
    
};
function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue' ];
    //trunc la ham lam tron lay so chan
    const randomColor = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomColor];
}


function ColorBox() {
    // funtion arrow de k cho default value chay nhieu lan
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        console.log(initColor);
        return initColor;
    });
    /* const initColor = localStorage.getItem('box_color') || 'deeppink';
    const [color, setColor] = useState(initColor); */
    function handlerBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }
    return (
        <div 
            className="color-box"
            style={{backgroundColor: color}}
            onClick={handlerBoxClick}
        >
        ColorBox - useState 
        </div>
    );
}

export default ColorBox;