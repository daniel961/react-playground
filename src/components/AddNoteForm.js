import { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'
import { AddNoteContainer, AddNoteFormContainer } from './styled/Containers'
import Input, { InputNoteBody } from './styled/Inputs.styled'
import { AddNoteButton } from './styled/Button.styled'
import { AddNoteButtonLabel } from './styled/labels'

const NoteForm = function () {
    const { dispatch } = useContext(NotesContext)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const submitNote = (e) => {
        e.preventDefault();
        if (title) {
            dispatch({ type: 'ADD_NOTE', note: { title, body } })
            setTitle('');
            setBody('')
        }
    }

    return (
        <AddNoteContainer>
            <h1>enjoy your notes 🤞</h1>
            <AddNoteFormContainer>
                <Input
                    value={title}
                    placeholder="add note"
                    onChange={(e) => { setTitle(e.target.value) }} />
                <InputNoteBody
                    value={body}
                    placeholder="add note's body"
                    onChange={(e) => { setBody(e.target.value) }} />

                <AddNoteButton onClick={submitNote}>
                    <AddNoteButtonLabel>Add Note</AddNoteButtonLabel>
                </AddNoteButton>
            </AddNoteFormContainer>
        </AddNoteContainer>
    );
}

export default NoteForm;