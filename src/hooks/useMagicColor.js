import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';


function randomColor(currentColor) {
    
    const color_list = ['red','yellow','green'];
    const currentIndex = color_list.indexOf(currentColor);
    let newIndex = currentIndex;

    // ham lam cho cac mau k dc trung nhau
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() *3);
    }

    //const randonIndex = Math.trunc(Math.random() *3);
    console.log(newIndex);
    return color_list[newIndex];
}

function MagicColor() {
    //console.log(Math.random()*255)
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');
    useEffect(()=>{
        const colorInterval = setInterval(()=>{
            console.log('Change Color: ', colorRef.current);
            const newcolor = randomColor();
            setColor(newcolor);
            colorRef.current = newcolor;
        }, 1000)
        return () => {
            clearInterval(colorInterval);
        }
    })
    return color;
}

export default MagicColor;