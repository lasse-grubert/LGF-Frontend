import axios from 'axios';

/**
 *TODO: Fixe data recieved by saveTableData
 * **/

export async function saveTableData(arrivalTime, depatureTime, pauseTime, rowId, date, totalWorkTime) {

    console.log("arrivalTime: " + arrivalTime)
    console.log("depatureTime: " + depatureTime)
    console.log("pauseTime: " + pauseTime)
    console.log("rowId: " + rowId)
    console.log("date: " + date)
    console.log("totalWorkTime: " + totalWorkTime)


    const tableData = [{
        rowId: 2,
        arrivalTime: arrivalTime,
        depatureTime: depatureTime,
        pauseTime: pauseTime,
        totalTime: totalWorkTime,
        date: date
    }];

    const response = await axios.post("/time/table", tableData);
    console.log("Data saved")
    console.log(response.data.rowId)
}

