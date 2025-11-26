import { FaCircleMinus } from "react-icons/fa6"

export function ValuePauseTime({divClassName, text, valuePauseTime, setValuePauseTime}) {
    return(
        <>
            <div className="line">
                            <div className={`input-group ${divClassName}`}>
                                <p>{text}</p>
                                <input className="input-field-worktime-calculator" type="time" value={valuePauseTime}  onChange={(e) => setValuePauseTime(e.target.value)}/>
                                <button className="hidden-button-worktime-calculator pause-time-minus-btn"><FaCircleMinus className="circle-minus-icon"
                                onClick={
                                    () => {
                                        setValuePauseTime("00:00");
                                    }
                                } /></button>
                            </div>
                     </div> 
        </>
    )
}