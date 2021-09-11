import { useContext } from "react";
import notesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition"
import DeleteButton from "./styled/Button.styled"
import NoteContainer, { NoteTitleContainer } from "./styled/Containers";
import NoteTitle, { NoteBody } from './styled/labels'

const Note = function ({ title, body, index }) {
    const { dispatch } = useContext(notesContext)
    const { x, y } = useMousePosition();
    const removeNote = () => { dispatch({ type: 'REMOVE_NOTE', index }) }
    return (
        <NoteContainer>
            <NoteTitleContainer>
                <DeleteButton onClick={removeNote}>X</DeleteButton>
                <NoteTitle>{title}</NoteTitle>
            </NoteTitleContainer>
            <NoteBody disabled={true} defaultValue={body}></NoteBody>
            <p>x: {x}, y:{y}</p>
        </NoteContainer>
    )
}
export default Note;