import axios from 'axios';

export async function saveTableData(arrivalTime, depatureTime, pauseTime, rowId, date, totalWorkTime) {

    const tableData = {
        rowId: rowId,
        arrivalTime: arrivalTime,
        depatureTime: depatureTime,
        pauseTime: pauseTime,
        totalTime: totalWorkTime,
        date: date
    };

    for(const key in tableData) console.log(typeof key)

    const response = await axios.post("/time/table", tableData);
    console.log("Data saved")
    console.log(response.data.rowId)
}

