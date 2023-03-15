import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App2() {
    const [ticks, setTicks] = useState(1);

    const currentTime = {};

    const getTime = (currentTime) => {
        const hours =('0'+(new Date().getHours()> 12 ? new Date().getHours() - 12 : new Date().getHours())).slice(-2);
        const minutes = ('0'+new Date().getMinutes()).slice(-2);
        const seconds = ('0'+new Date().getSeconds()).slice(-2);

        currentTime.hours = hours;
        currentTime.minutes = minutes;
        currentTime.seconds = seconds;

        return currentTime;
    }

    const [state, setState] = useState(getTime(currentTime));
    useEffect(() => {
        setInterval(() => {
            setTicks(e => e+1);
    
            setState(getTime(currentTime));
        },1000);
    },[]);
    return (
        <div>
            <span
                style={{
                    display: "flex",
                    fontSize: "100px",
                    justifyContent: "center"
                    
                }}
                >ticks : {ticks}</span>
            {
                ticks % 10 === 0 ?
                    null : 
                    <Clock 
                        message={'ex05: useEffect Hook example'}
                        
                        hours={state.hours}
                        minutes={state.minutes}
                        seconds={state.seconds}/>
            }
        </div>
    );
}