import { useState } from "react";
import "./ControlPanel.css"
import { FaCheck } from "react-icons/fa";
import { ImExit } from "react-icons/im";

export function ControlPanel() {

    const [isHidden, setIsHidden] = useState(true)
    const [roundEdgesOnlyTop, setRoundEdgesOnlyTop] = useState(false)


    return(
        <>
            <div className="control-panel">

                <button className={roundEdgesOnlyTop ? "add-row-btn-2-edges-round" : "add-row-btn"} onClick={() => {
                    console.log("Add Row Clicked");
                    setIsHidden(false);
                    setRoundEdgesOnlyTop(true);
                }}>+ Add Row</button>
                <div className={isHidden ? "hidden" : roundEdgesOnlyTop ? "row-container-2-edges-round" : "row-container"}>
                    <input className="input-field-timetable-control-panel" type="text" placeholder="Date"></input>
                    <input className="input-field-timetable-control-panel" type="text" placeholder="Arrival"></input>
                    <input className="input-field-timetable-control-panel" type="text" placeholder="Depature"></input>
                    <input className="input-field-timetable-control-panel" type="text" placeholder="Total Worktime"></input>
                    <button className="save-btn"><FaCheck className="check-icon"/></button>
                    <button
                        className="exit-btn"
                        onClick={() => {
                            setIsHidden(true);
                            setRoundEdgesOnlyTop(false);
                        }}>
                        <ImExit className="exit-icon"/>
                    </button>
                </div>
            </div>
        </>
    )
}