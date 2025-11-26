
export function formatTotalMinsToTimeString(totalMinutes) {
    const hours = Math.floor(totalMinutes/ 60);
    const minutes = totalMinutes % 60;
    const format = (num) => String(num).padStart(2, "0");
    return `${format(hours)}:${format(minutes)}`;
}