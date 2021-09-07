import { useContext, useState, useEffect } from "react";
import notesContext from "../context/notes-context";

// Example of custom hook
const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            })
        }
        const cleanMouseEventListener = () => {
            console.log('clean event listener');
            document.removeEventListener('mousemove', handleMouseMove)
        }
        console.log('Setting Up mouse move Event');
        document.addEventListener('mousemove', handleMouseMove)
        return cleanMouseEventListener;

    }, [])
    return position;
}


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