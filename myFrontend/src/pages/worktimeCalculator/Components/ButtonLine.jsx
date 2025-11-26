
import {FaSave} from "react-icons/fa";

export function ButtonLine({navigate, valueStartTime, valuePauseTime, valueWorkTime, onAddRow, setIsVisible, clearInput, handleCalculate, handleSubmitAndCalculate}) {

    const handleSubmit = async () => {
        if(!valueStartTime || !valueWorkTime) return;
        setIsVisible(true);
        onAddRow(valueStartTime, valueWorkTime, valuePauseTime);
    };

    return(
        <>
            <div className="line">
                <div className="input-group buttons">
                    <button className="saved-times-btn-worktime-calculator" onClick={() => {navigate("/timestable")}}><FaSave/></button>
                    <button className="submit-btn-worktime-calculator" onClick={() => {handleSubmit();handleCalculate();}}>Submit
                    </button>
                    <button className="reset-btn-worktime-calculator" onClick={() => {
                        setIsVisible(false);
                        clearInput();
                    }}>Reset
                    </button>
                </div>
            </div>
        </>
    )
}