import { Icon } from "../../../components/Icon.jsx";

const inputClass =
    "flex-grow px-md py-sm rounded-input border border-outline-variant bg-white dark:bg-inverse-surface text-on-surface dark:text-inverse-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";

export function ValueWorkTime({ text, valueWorkTime, setValueWorkTime }) {
    return (
        <div className="flex flex-col gap-xs">
            <label className="text-label-caps font-label-caps text-on-surface-variant dark:text-surface-variant">
                {text}
            </label>
            <div className="flex gap-sm">
                <input
                    className={inputClass}
                    type="time"
                    value={valueWorkTime}
                    onChange={(e) => setValueWorkTime(e.target.value)}
                />
                <button
                    type="button"
                    title="Save preset"
                    className="px-md rounded-input border border-outline-variant text-outline hover:text-primary hover:border-primary transition-colors active:scale-95"
                >
                    <Icon name="bookmark" />
                </button>
            </div>
        </div>
    );
}
