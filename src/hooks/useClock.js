import {useState, useEffect} from 'react';


function formatDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}: ${minutes}: ${seconds}`;
}

function useClock(props) {

    const [timeString, setTimeString] = useState('');
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

    }, []);

    return {timeString};
}

export default useClock;