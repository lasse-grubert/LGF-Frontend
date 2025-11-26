export function ValueStartTime({valueStartTime, setValueStartTime, divClassname, text}) {
    return(
        <>
            <div className="line">
                <div className={`input-group ${divClassname}`}>
                    <p>{text}</p>
                    <input className="input-field-worktime-calculator" type="time" value={valueStartTime} onChange={(e) => setValueStartTime(e.target.value)}/>
                </div>
            </div>
        </>
    );
}