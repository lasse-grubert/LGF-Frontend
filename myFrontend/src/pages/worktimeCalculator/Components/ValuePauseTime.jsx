import { Icon } from "../../../components/Icon.jsx";

const inputClass =
    "flex-grow px-md py-sm rounded-input border border-outline-variant bg-white dark:bg-inverse-surface text-on-surface dark:text-inverse-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";

export function ValuePauseTime({ text, valuePauseTime, setValuePauseTime }) {
    return (
        <div className="flex flex-col gap-xs">
            <label className="text-label-caps font-label-caps text-on-surface-variant dark:text-surface-variant">
                {text}
            </label>
            <div className="flex gap-sm">
                <input
                    className={inputClass}
                    type="time"
                    value={valuePauseTime}
                    onChange={(e) => setValuePauseTime(e.target.value)}
                />
                <button
                    type="button"
                    title="Clear pause"
                    onClick={() => setValuePauseTime("00:00")}
                    className="px-md rounded-input border border-outline-variant text-outline hover:text-error hover:border-error transition-colors active:scale-95"
                >
                    <Icon name="close" />
                </button>
            </div>
        </div>
    );
}
