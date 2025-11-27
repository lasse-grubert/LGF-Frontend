import axios from "axios";

export async function calculateDepatureTime(startTime, workTime, pauseTime) {
    if (!startTime || !workTime) return;

    const requestData = {
        time1: startTime,
        time2: workTime,
        time3: pauseTime
    };

    const response = await axios.post("/time/calculate", requestData);
    return response.data.depatureTime;

}

