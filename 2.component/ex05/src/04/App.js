import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(1);

    // const now = new Date();
    // const hours = now.getHours();
    // const minutes = now.getMinutes();
    // const seconds = now.getSeconds();
    const currentTime = {};

    const getTime = (currentTime) => {
        const hours = new Date().getHours();
        const minutes =  new Date().getMinutes();
        const seconds = new Date().getSeconds();

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
                    
                    hours={('0'+(state.hours> 12 ? state.hours - 12 : state.hours)).slice(-2)}
                    minutes={('0'+state.minutes).slice(-2)}
                    seconds={('0'+state.seconds).slice(-2)}/>
            }
        </div>
            // <Clock
            //     message={'ex05: useEffect Hook example'}
            //     hours={state.hours}
            //     minutes={state.minutes}
            //     seconds={state.seconds}/>
    );
}