import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTicks(e => e+1);
            setTime(new Date());
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
                            
                        hours={('0'+(time.getHours()> 12 ? time.getHours() - 12 : time.getHours())).slice(-2)}
                        minutes={('0'+time.getMinutes()).slice(-2)}
                        seconds={('0'+time.getSeconds()).slice(-2)}/>
            }
        </div>
    );
}