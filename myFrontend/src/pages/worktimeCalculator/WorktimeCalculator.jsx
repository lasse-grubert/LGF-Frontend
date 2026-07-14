import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodaysDate } from "../../utils/dateUtils.js";
import { calculateDepatureTime } from "../../utils/calculateDepatureTime.js";
import { ValueStartTime } from "./Components/ValueStartTime.jsx";
import { ValueWorkTime } from "./Components/ValueWorkTime.jsx";
import { ValuePauseTime } from "./Components/ValuePauseTime.jsx";
import { ButtonLine } from "./Components/ButtonLine.jsx";
import { Countdown } from "./Countdown.jsx";

export function WorktimeCalculator({ onAddRow }) {
    const formattedDate = getTodaysDate();
    const navigate = useNavigate();

    const [valueStartTime, setValueStartTime] = useState("");
    const [valueWorkTime, setValueWorkTime] = useState("");
    const [valuePauseTime, setValuePauseTime] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [result, setResult] = useState(null);

    const clearInput = () => {
        setValueStartTime("");
        setValueWorkTime("");
        setValuePauseTime("");
        setResult(null);
    };

    const handleCalculate = async () => {
        const finalTime = await calculateDepatureTime(
            valueStartTime,
            valueWorkTime,
            valuePauseTime
        );
        setResult(finalTime);
    };

    return (
        <div className="flex-grow flex items-center justify-center p-md md:p-xl">
            <div className="max-w-md w-full">
                <div className="bg-white dark:bg-dark-card rounded-2xl shadow-ambient p-lg flex flex-col gap-lg">
                    <div>
                        <h1 className="text-headline-md font-semibold text-on-surface dark:text-inverse-on-surface">
                            Worktime Calculator
                        </h1>
                        <p className="text-body-sm text-outline dark:text-surface-variant">
                            {formattedDate}
                        </p>
                    </div>

                    <div className="flex flex-col gap-md">
                        <ValueStartTime
                            valueStartTime={valueStartTime}
                            setValueStartTime={setValueStartTime}
                            text="Start"
                        />
                        <ValueWorkTime
                            valueWorkTime={valueWorkTime}
                            setValueWorkTime={setValueWorkTime}
                            text="Worktime"
                        />
                        <ValuePauseTime
                            valuePauseTime={valuePauseTime}
                            setValuePauseTime={setValuePauseTime}
                            text="Pause"
                        />
                        <ButtonLine
                            navigate={navigate}
                            valuePauseTime={valuePauseTime}
                            valueStartTime={valueStartTime}
                            valueWorkTime={valueWorkTime}
                            onAddRow={onAddRow}
                            setIsVisible={setIsVisible}
                            clearInput={clearInput}
                            handleCalculate={handleCalculate}
                        />
                    </div>

                    {/* Result bar */}
                    {isVisible && result && (
                        <div className="bg-emerald text-white rounded-input p-md flex items-center justify-between shadow-sm">
                            <span className="text-body-md font-medium">Feierabend um</span>
                            <span className="text-headline-md font-bold tabular-nums">{result}</span>
                        </div>
                    )}

                    {/* Countdown */}
                    {isVisible && result && <Countdown depatureTime={result} />}
                </div>
            </div>
        </div>
    );
}
