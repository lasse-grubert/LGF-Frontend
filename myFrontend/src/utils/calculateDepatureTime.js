import axios from "axios";
import {useEffect, useState} from "react";

export async function calculateDepatureTime(startTime, workTime, pauseTime) {
    if (!startTime || !workTime) return;

    const requestData = {
        time1: startTime,
        time2: workTime,
        time3: pauseTime
    };


    const response = await axios.post("/time/calculate", requestData);
    console.log(response.data.depatureTime)

    return response.data.depatureTime;

}

