import { useEffect, useMemo, useState } from "react";
import { Icon } from "../../components/Icon.jsx";

// Counts down the time remaining from now until the departure time (HH:MM) today.
function secondsUntil(depatureTime) {
    if (!depatureTime || !depatureTime.includes(":")) return 0;
    const [h, m] = depatureTime.split(":").map(Number);
    const now = new Date();
    const target = new Date();
    target.setHours(h, m, 0, 0);
    return Math.max(0, Math.round((target.getTime() - now.getTime()) / 1000));
}

export function Countdown({ depatureTime }) {
    const initial = useMemo(() => secondsUntil(depatureTime), [depatureTime]);
    const [time, setTime] = useState(initial);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        setTime(secondsUntil(depatureTime));
        setRunning(false);
    }, [depatureTime]);

    useEffect(() => {
        if (!running) return;
        const interval = setInterval(() => {
            setTime((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [running]);

    const format = (num) => String(num).padStart(2, "0");
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const pill =
        "flex items-center gap-sm px-lg py-sm rounded-full transition-all active:scale-95";

    return (
        <div className="flex flex-col items-center gap-md pt-md border-t border-outline-variant/50">
            <div className="text-[56px] font-bold tracking-tighter text-on-surface dark:text-inverse-on-surface tabular-nums">
                {format(hours)}:{format(minutes)}:{format(seconds)}
            </div>
            <div className="flex gap-md">
                <button
                    type="button"
                    onClick={() => setRunning(true)}
                    className={`${pill} bg-surface-container-high dark:bg-inverse-surface hover:bg-surface-container-highest text-on-surface dark:text-inverse-on-surface`}
                >
                    <Icon name="play_arrow" filled />
                    <span className="text-label-caps font-label-caps">Start</span>
                </button>
                <button
                    type="button"
                    onClick={() => setRunning(false)}
                    className={`${pill} bg-surface-container-high dark:bg-inverse-surface hover:bg-surface-container-highest text-on-surface dark:text-inverse-on-surface`}
                >
                    <Icon name="pause" />
                    <span className="text-label-caps font-label-caps">Pause</span>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setRunning(false);
                        setTime(secondsUntil(depatureTime));
                    }}
                    className={`${pill} bg-error-container text-on-error-container hover:opacity-90`}
                >
                    <Icon name="stop" filled />
                    <span className="text-label-caps font-label-caps">Stop</span>
                </button>
            </div>
        </div>
    );
}
