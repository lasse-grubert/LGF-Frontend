import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppRoutes } from "./AppRoutes.jsx";
import { calculateDepatureTime } from "./utils/calculateDepatureTime.js";
import { getTodaysDate } from "./utils/dateUtils.js";

// "08:30" + "17:15" -> "8h 45m" (returns "—" when input is incomplete)
function diffToDuration(start, end) {
    if (!start?.includes(":") || !end?.includes(":")) return "—";
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    let mins = eh * 60 + em - (sh * 60 + sm);
    if (mins < 0) mins += 24 * 60;
    return `${Math.floor(mins / 60)}h ${String(mins % 60).padStart(2, "0")}m`;
}

function App() {
    const [rows, setRows] = useState([]);

    async function addRow(valueStartTime, valueWorkTime, valuePauseTime) {
        const newId = uuidv4();
        const depatureTime = await calculateDepatureTime(
            valueStartTime,
            valueWorkTime,
            valuePauseTime
        );
        setRows((prev) => [
            ...prev,
            {
                key: newId,
                rowId: newId,
                date: getTodaysDate(),
                arrivalTime: valueStartTime,
                workTime: valueWorkTime,
                depatureTime,
            },
        ]);
    }

    // Manual entry from the timetable: worktime is derived locally from arrival/departure.
    function addManualRow({ date, arrivalTime, depatureTime }) {
        const newId = uuidv4();
        setRows((prev) => [
            ...prev,
            {
                key: newId,
                rowId: newId,
                date: date || getTodaysDate(),
                arrivalTime,
                depatureTime,
                workTime: diffToDuration(arrivalTime, depatureTime),
            },
        ]);
    }

    function deleteRow(idToDelete) {
        setRows((prev) => prev.filter((row) => row.key !== idToDelete));
    }

    return (
        <AppRoutes
            rows={rows}
            addRow={addRow}
            addManualRow={addManualRow}
            deleteRow={deleteRow}
        />
    );
}

export default App;
