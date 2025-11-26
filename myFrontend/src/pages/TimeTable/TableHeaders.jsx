import {INITIAL_COLUMNS} from "./TimeTableConfig.js"

export function TableHeaders() {
    return(
        <>
            <tr>
                {INITIAL_COLUMNS.map((column) => (
                    <th
                        key={column.key}
                        className={column.className}
                    >{column.title}
                    </th>
                ))}
            </tr>
        </>
    )
}