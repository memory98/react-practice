import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(1);

    const date = new Date();
    const [hours, setHours] = useState(date.getHours());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [seconds, setSeconds] = useState(date.getSeconds());

    useEffect(() => {
        setInterval(function() {
            // setTicks(ticks+1);
        },1000);
    });
    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null : 
                <Clock 
                    message={'ex05: useEffect Hook example'}
                    hours={"10"}
                    minutes={"02"}
                    seconds={"50"}
                    session={'am'}/>
            }
        </div>
            // <Clock
            //     message={'ex05: useEffect Hook example'}
            //     hours={state.hours}
            //     minutes={state.minutes}
            //     seconds={state.seconds}/>
            
    );
}