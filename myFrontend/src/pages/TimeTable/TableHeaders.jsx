import { INITIAL_COLUMNS } from "./TimeTableConfig.js";

export function TableHeaders() {
    return (
        <tr className="bg-surface-container-low/60 dark:bg-inverse-surface/40">
            {INITIAL_COLUMNS.map((column) => (
                <th
                    key={column.key}
                    className={`px-lg py-md text-label-caps font-label-caps text-on-surface-variant dark:text-surface-variant uppercase tracking-wider ${
                        column.align === "right" ? "text-right" : "text-left"
                    }`}
                >
                    {column.title}
                </th>
            ))}
        </tr>
    );
}
