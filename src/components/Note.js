import { useContext } from "react";
import notesContext from "../context/notes-context";

const Note = function ({ title, body, index }) {
    const { dispatch } = useContext(notesContext)
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={() => {
                dispatch({ type: 'REMOVE_NOTE', index })
            }}>Delete</button>
        </div>
    )
}
export default Note;