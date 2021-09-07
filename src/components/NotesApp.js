import { useState, useEffect, useReducer } from 'react';
import AddNoteForm from './AddNoteForm'
import notesReducer from '../reducers/notes'
import FilterNotes from './FilterNotes';
import SearchNote from './SearchNote'
import NotesContext from '../context/notes-context'

// Todos:
// style with css

const App = () => {
    const [notes, dispatch] = useReducer(notesReducer, []);
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


    return (
        <NotesContext.Provider value={{ notes, dispatch, searchPattern, setSearchPattern }}>
            <h1>NotesApp</h1>
            <AddNoteForm />
            <SearchNote />
            <FilterNotes />
        </NotesContext.Provider>
    );
}

export default App;