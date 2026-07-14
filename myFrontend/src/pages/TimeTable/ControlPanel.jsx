import { useState } from "react";
import { Icon } from "../../components/Icon.jsx";

const inputClass =
    "w-full bg-white dark:bg-inverse-surface border border-outline-variant rounded-input px-sm py-xs text-body-sm text-on-surface dark:text-inverse-on-surface focus:ring-2 focus:ring-primary/30 focus:outline-none";

// Inline add-row rendered inside the table body (matches the Stitch "Add Row" flow).
export function AddRowInline({ onSave, onCancel }) {
    const [date, setDate] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");
    const [depatureTime, setDepatureTime] = useState("");

    const save = () => {
        if (!arrivalTime || !depatureTime) return;
        onSave({ date, arrivalTime, depatureTime });
        setDate("");
        setArrivalTime("");
        setDepatureTime("");
    };

    return (
        <tr className="border-b border-outline-variant/30 bg-primary-container/5">
            <td className="px-lg py-md">
                <input
                    className={inputClass}
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </td>
            <td className="px-lg py-md">
                <input
                    className={inputClass}
                    type="time"
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                />
            </td>
            <td className="px-lg py-md">
                <input
                    className={inputClass}
                    type="time"
                    value={depatureTime}
                    onChange={(e) => setDepatureTime(e.target.value)}
                />
            </td>
            <td className="px-lg py-md">
                <div className="w-full bg-surface-container-low dark:bg-inverse-surface/60 border border-outline-variant/50 rounded-input px-sm py-xs text-body-sm text-on-surface-variant dark:text-surface-variant italic">
                    Auto-calculated
                </div>
            </td>
            <td className="px-lg py-md text-right">
                <div className="flex justify-end gap-sm">
                    <button
                        type="button"
                        title="Save"
                        onClick={save}
                        className="p-sm rounded-full bg-secondary-container text-on-secondary-fixed-variant hover:scale-105 transition-transform"
                    >
                        <Icon name="check" />
                    </button>
                    <button
                        type="button"
                        title="Cancel"
                        onClick={onCancel}
                        className="p-sm rounded-full bg-error-container text-on-error-container hover:scale-105 transition-transform"
                    >
                        <Icon name="close" />
                    </button>
                </div>
            </td>
        </tr>
    );
}
