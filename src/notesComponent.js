import { useState, useEffect, useReducer } from 'react';
import Note from './components/Note'
import notesReducer from './reducers/noteReducers'
// Todo s:
// split to components
// style with css



const App = () => {
    const [notes, dispatch] = useReducer(notesReducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [searchPattern, setSearchPattern] = useState('');

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        if (storedNotes) {
            dispatch({ type: "POPULATE_NOTES", note: storedNotes })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const submitNote = (e) => {
        e.preventDefault();
        console.log();
        if (title) {
            dispatch({ type: "ADD_NOTE", note: { title, body } })
            setTitle('');
            setBody('')
        }
    }
    const removeNote = (index) => {
        dispatch({ type: "REMOVE_NOTE", index })
    }

    return (
        <div>
            <h1>Notes</h1>
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
            <h1>Search:</h1>
            <input placeholder="Search Note by Text" onChange={e => { setSearchPattern(e.target.value) }} />
            <h1>Selected Notes:</h1>
            {
                notes.filter(({ title, body }) => (title.includes(searchPattern) || body.includes(searchPattern)))
                    .map(({ title, body }, index) =>
                        <Note key={index} title={title} body={body} index={index} remove={removeNote} />
                    )
            }
        </div>
    );
}

export default App;