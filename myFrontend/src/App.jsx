import { v4 as uuidv4 } from "uuid";
import { useState } from 'react'

import './App.css'
import {calculateDepatureTime} from "./api/calculateDepatureTime.js";
import {AppRoutes} from "./AppRoutes.jsx";
import {getTodaysDate} from "./utils/dateUtils.js";

function App() {
    const [rows, setRows] = useState([])

    async function addRow(valueStartTime, valueWorkTime, valuePauseTime) {
        const newId = uuidv4();
        const depatureTime = await calculateDepatureTime(valueStartTime, valueWorkTime, valuePauseTime);
        setRows([...rows, {key: newId, date: getTodaysDate(), arrivalTime: valueStartTime, workTime: valueWorkTime, depatureTime: depatureTime, pauseTime: valuePauseTime, rowId: newId }])



    }

    function deleteRow(idToDelete) {
        setRows((prevRows) => prevRows.filter(row => row.key !== idToDelete))
        console.log("deleted")
        console.log(rows)
    }

    return (
        <AppRoutes rows={rows} addRow={addRow} deleteRow={deleteRow}/>
    )
}
export default App;
