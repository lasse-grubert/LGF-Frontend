import { useState } from "react";
import { TableHeaders } from "./TableHeaders.jsx";
import { TableRows } from "./TableRows.jsx";
import { AddRowInline } from "./ControlPanel.jsx";
import { INITIAL_COLUMNS } from "./TimeTableConfig.js";
import { Icon } from "../../components/Icon.jsx";

export function TimeTable({ rows, addManualRow, deleteRow }) {
    const [adding, setAdding] = useState(false);

    const handleSave = (entry) => {
        addManualRow(entry);
        setAdding(false);
    };

    return (
        <div className="w-full max-w-container-max mx-auto px-md md:px-xl py-xl">
            {/* Heading + control */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl gap-md">
                <div>
                    <h1 className="text-headline-lg font-bold text-on-surface dark:text-inverse-on-surface mb-xs">
                        Timetable
                    </h1>
                    <p className="text-body-md text-on-surface-variant dark:text-surface-variant">
                        Manage your work logs and productivity metrics.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => setAdding(true)}
                    className="bg-primary-container text-white px-lg py-md rounded-lg font-semibold flex items-center gap-sm hover:opacity-90 transition-all active:scale-95 shadow-md"
                >
                    <Icon name="add" />
                    Add Row
                </button>
            </div>

            {/* Table card */}
            <div className="bg-surface-container-lowest dark:bg-dark-card rounded-card shadow-ambient overflow-hidden border border-outline-variant/20">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <TableHeaders />
                        </thead>
                        <tbody>
                            {adding && (
                                <AddRowInline onSave={handleSave} onCancel={() => setAdding(false)} />
                            )}

                            {rows.length === 0 && !adding ? (
                                <tr>
                                    <td
                                        colSpan={INITIAL_COLUMNS.length}
                                        className="px-lg py-xl text-center text-body-md text-on-surface-variant dark:text-surface-variant"
                                    >
                                        No entries yet. Use “Add Row” or the Worktime Calculator to get started.
                                    </td>
                                </tr>
                            ) : (
                                rows.map((row) => (
                                    <TableRows
                                        key={row.key}
                                        date={row.date}
                                        rowId={row.rowId}
                                        arrivalTime={row.arrivalTime}
                                        depatureTime={row.depatureTime}
                                        workTime={row.workTime}
                                        deleteRow={deleteRow}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="p-lg flex justify-between items-center bg-surface-container-lowest dark:bg-dark-card border-t border-outline-variant/20">
                    <span className="text-body-sm text-on-surface-variant dark:text-surface-variant">
                        Showing {rows.length} {rows.length === 1 ? "entry" : "entries"}
                    </span>
                    <div className="flex gap-sm">
                        <button
                            type="button"
                            disabled
                            className="p-sm rounded-lg border border-outline-variant hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-colors disabled:opacity-50"
                        >
                            <Icon name="chevron_left" />
                        </button>
                        <button
                            type="button"
                            className="p-sm rounded-lg border border-outline-variant hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-colors"
                        >
                            <Icon name="chevron_right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
