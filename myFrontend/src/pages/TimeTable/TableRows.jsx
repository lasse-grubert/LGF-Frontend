import { Icon } from "../../components/Icon.jsx";

export function TableRows({ date, arrivalTime, workTime, depatureTime, rowId, deleteRow }) {
    return (
        <tr className="border-b border-outline-variant/30 hover:bg-surface-container/30 dark:hover:bg-inverse-surface/30 transition-colors">
            <td className="px-lg py-lg text-body-md font-medium text-on-surface dark:text-inverse-on-surface">
                {date}
            </td>
            <td className="px-lg py-lg text-on-surface-variant dark:text-surface-variant tabular-nums">
                {arrivalTime}
            </td>
            <td className="px-lg py-lg text-on-surface-variant dark:text-surface-variant tabular-nums">
                {depatureTime}
            </td>
            <td className="px-lg py-lg">
                <span className="px-md py-xs bg-secondary-container/40 text-on-secondary-fixed-variant rounded-full text-label-caps font-semibold whitespace-nowrap">
                    {workTime}
                </span>
            </td>
            <td className="px-lg py-lg text-right">
                <div className="flex justify-end gap-xs">
                    <button
                        type="button"
                        title="Edit"
                        className="p-sm rounded-lg hover:bg-surface-container-high dark:hover:bg-inverse-surface transition-colors text-on-surface-variant dark:text-surface-variant"
                    >
                        <Icon name="edit" className="text-[20px]" />
                    </button>
                    <button
                        type="button"
                        title="Delete"
                        onClick={() => deleteRow(rowId)}
                        className="p-sm rounded-lg hover:bg-error-container/30 transition-colors text-error"
                    >
                        <Icon name="delete" className="text-[20px]" />
                    </button>
                </div>
            </td>
        </tr>
    );
}
