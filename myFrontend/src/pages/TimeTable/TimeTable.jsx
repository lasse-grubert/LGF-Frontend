import { Navbar } from "../../components/navbar/Navbar.jsx";
import {TableHeaders} from "./TableHeaders.jsx";
import {TableRows} from "./TableRows.jsx";
import {ControlPanel} from "./ControlPanel.jsx";
import "./TableStyles/NightOwl.css"

export function TimeTable({rows, deleteRow}) {

    return(
        <>
            <Navbar/>
            <div className="table-container">
                <ControlPanel/>
                <table className="time-table">
                    <thead>
                    <TableHeaders/>
                    </thead>
                    <tbody>
                    {rows.map((row) => (
                        <TableRows
                            date={row.date}
                            rowId={row.rowId}
                            arrivalTime={row.arrivalTime}
                            depatureTime={row.depatureTime}
                            workTime={row.workTime}
                            deleteRow={deleteRow}
                        ></TableRows>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}