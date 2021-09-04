import { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'

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
        <div>
            <h3>Add Note:</h3>
            <form onSubmit={submitNote}>
                <input
                    value={title}
                    placeholder="add note"
                    onChange={(e) => { setTitle(e.target.value) }} />
                <input
                    value={body}
                    placeholder="add note's body"
                    onChange={(e) => { setBody(e.target.value) }} />

                <button>Add Note</button>
            </form>
        </div>
    );
}

export default NoteForm;