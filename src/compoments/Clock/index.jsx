import React from 'react';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import useClock from '../../hooks/useClock';



function Clock(props) {
    //clock old

    /* const [timeString, setTimeString] = useState('');
    useEffect(()=>{
        const clockInterval = setInterval(()=>{
            const now = new Date();
            const newTimeString = formatDate(now);
            //console.log('doi tuong date()',now);
            setTimeString(newTimeString);
        }, 1000);
        // clearnup cai setTimeString

        return () => {
            console.log('clearnup !');
            clearInterval(clockInterval);
        }

    }, []); */

    // useClock / custom hooks: chi tra ve cai cai data
    // khac voi comp tra ve iu va data luon
    // khi dc goi lai data va state deu doc lap k lien quan toi nhau
    const {timeString} = useClock();

    return (
        <p style={{fontSize: '50px'}}>{timeString}</p>
    );
}

export default Clock;