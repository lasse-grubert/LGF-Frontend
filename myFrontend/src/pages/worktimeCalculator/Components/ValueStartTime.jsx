const inputClass =
    "w-full px-md py-sm rounded-input border border-outline-variant bg-white dark:bg-inverse-surface text-on-surface dark:text-inverse-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";

export function ValueStartTime({ valueStartTime, setValueStartTime, text }) {
    return (
        <div className="flex flex-col gap-xs">
            <label className="text-label-caps font-label-caps text-on-surface-variant dark:text-surface-variant">
                {text}
            </label>
            <input
                className={inputClass}
                type="time"
                value={valueStartTime}
                onChange={(e) => setValueStartTime(e.target.value)}
            />
        </div>
    );
}
