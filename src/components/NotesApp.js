import { useState, useEffect, useReducer } from 'react';
import NoteForm from './NoteForm'
import notesReducer from '../reducers/notes'
import FilterNotes from './FilterNotes';
import SearchNote from './SearchNote'
// Todo s:
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
    const changeTitle = function (value) {
        setTitle(value)
    }
    const changeBody = function (value) {
        setBody(value)
    }
    const changeSearchPattern = function (value) {
        setSearchPattern(value);
    }

    return (
        <div>
            <h1>NotesApp</h1>
            <NoteForm submitNote={submitNote} title={title} body={body} setTitle={changeTitle} setBody={changeBody} />
            <SearchNote changeSearchPattern={changeSearchPattern} />
            <FilterNotes notes={notes} removeNote={removeNote} searchPattern={searchPattern} />
        </div>
    );
}

export default App;