import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

export function TableRows({date, arrivalTime, workTime, depatureTime, rowId, deleteRow, pauseTime}) {

    return(
        <>
            <tr data-row-id={rowId} key={rowId}>
                <td data-label="Datum / Tag">{date}</td>
                <td data-label="Ankunftszeit">{arrivalTime}</td>
                <td data-label="Abgangszeit">{depatureTime}</td>
                <td data-label="Arbeitszeit">{workTime}</td>
                <td data-label="Pause">{pauseTime}</td>
                <td data-label="Aktion" className="action-buttons">
                    <button className="edit-btn"><FaEdit></FaEdit></button>
                    <button className="delete-btn"><AiFillDelete onClick={() => deleteRow(rowId)}></AiFillDelete></button>
                </td>
            </tr>
        </>
    )
}