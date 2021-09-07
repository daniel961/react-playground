import { useContext } from "react";
import notesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition"


const Note = function ({ title, body, index }) {
    const { dispatch } = useContext(notesContext)
    const { x, y } = useMousePosition();
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <p>x: {x}, y:{y}</p>
            <button onClick={() => {
                dispatch({ type: 'REMOVE_NOTE', index })
            }}>Delete</button>
        </div>
    )
}
export default Note;