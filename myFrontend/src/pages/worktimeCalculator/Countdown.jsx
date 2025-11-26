import {useState, useEffect} from "react";
import "./Css/Countdown.css"

export function Countdown({ totalMinutes, valueStartTime,}) {

    function startTimeToMins(startTime) {
        const [hours, minutes] = startTime.split(":").map(Number);
        return (hours * 60) + minutes;
    }

    const timeDiff = (totalMinutes - startTimeToMins(valueStartTime)) * 60;
    const [time, setTime] = useState(timeDiff);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;

        if(running) {
            interval = setInterval(() => {
                setTime((prevTime) => (prevTime - 1));
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [running]);

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const format = (num) => String(num).padStart(2, "0");

    return(
        <div>
            <div className="countdown-container">
                <h3>Countdown:</h3>
                <p>{format(hours)}:{format(minutes)}:{format(seconds)}</p>
                <div className="timer-controlls">
                <button className="start" onClick={() => setRunning(true)}>Start</button>
                <button className="pause" onClick={() => setRunning(false)}>Pause</button>
                <button className="stop" onClick={() => {
                    setRunning(false)
                    setTime(timeDiff)
                }}>Stop</button>
                </div>

            </div>
        </div>
    );
}