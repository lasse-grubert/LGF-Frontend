import "./Css/WorktimeCalculator.css";
import {getTodaysDate} from "../../utils/dateUtils.js";
import {Navbar} from "../../components/navbar/Navbar.jsx";
import {formatTotalMinsToTimeString} from "../../utils/formatTotalMinsToTimeString.js";
import {calculateDepatureTime} from "../../utils/calculateDepatureTime.js";
import {Countdown} from "./Countdown.jsx";
import {useState,} from "react";
import {useNavigate} from "react-router-dom";
import { ValueStartTime } from "./Components/ValueStartTime.jsx";
import { ValueWorkTime } from "./Components/ValueWorkTime.jsx"
import { ValuePauseTime} from "./Components/ValuePauseTime.jsx"
import { ButtonLine } from "./Components/ButtonLine.jsx";


export function WorktimeCalculator({ onAddRow }) {

    const formattetDate = getTodaysDate();
    const navigate = useNavigate();

    const [valueStartTime, setValueStartTime] = useState("");
    const [valueWorkTime, setValueWorkTime] = useState("");
    const [valuePauseTime, setValuePauseTime] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [result, setResult] = useState(null)


    const clearInput = () => {
        setValueStartTime("");
        setValueWorkTime("");
        setValuePauseTime("");
    };

    const handleSubmit = async () => {
        if(!valueStartTime || !valueWorkTime) return;
        setIsVisible(true);
        onAddRow(valueStartTime, valueWorkTime, valuePauseTime);

        const finalTime = await calculateDepatureTime(valueStartTime, valueWorkTime, valuePauseTime);
        setResult(finalTime);
    }

    return(
        <div>
            <Navbar/>
            <h1>Worktime Calculator</h1>
            <p>{formattetDate}</p>
            <div className="form-container">

                <ValueStartTime
                    valueStartTime={valueStartTime} setValueStartTime={setValueStartTime}
                    text={"Start"}
                    divClassname={"start-time"}
                />
                <ValueWorkTime
                    valueWorkTime={valueWorkTime} setValueWorkTime={setValueWorkTime}
                    text={"Worktime"}
                    divClassName={"work-time"} 
                />
                <ValuePauseTime
                    valuePauseTime={valuePauseTime} setValuePauseTime={setValuePauseTime}
                    text={"Pause"}
                    divClassName={"pause-time"}
                />
                <ButtonLine 
                    navigate={navigate}
                    valuePauseTime={valuePauseTime}
                    valueStartTime={valueStartTime}
                    valueWorkTime={valueWorkTime}
                    onAddRow={onAddRow}
                    setIsVisible={setIsVisible}
                    clearInput={clearInput}
                    handleSubmit={handleSubmit}
                />
              
                {isVisible && (
                    <div className="estimated-worktime-container">
                        {result !== null && <p>Du kannst um {result} gehen</p>}
                    </div>
                )}
            </div>
        </div>
    );
}