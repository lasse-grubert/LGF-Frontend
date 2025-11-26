import { IoBookmark } from "react-icons/io5"

export function ValueWorkTime({text, divClassName, valueWorkTime, setValueWorkTime}){
    return(
        <>
        <div className="line">
                <div className={`input-group ${divClassName}`}>
                    <p>{text}</p>
                    <input className="input-field-worktime-calculator" type="time" value={valueWorkTime}  onChange={(e) => setValueWorkTime(e.target.value)}/>
                    <button className="hidden-button-worktime-calculator work-time-bookmark-btn"><IoBookmark className="bookmark-filled-icon" /></button>
                </div>
         </div> 
        </>
    )
}