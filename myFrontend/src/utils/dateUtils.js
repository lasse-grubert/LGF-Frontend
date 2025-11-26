import {format} from "date-fns"

export function getTodaysDate () {

    const date = new Date();

    return format(date, "EEEE, dd.MM.yyyy");
}
