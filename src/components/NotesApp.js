import { useState, useEffect, useReducer } from 'react';
import AddNoteForm from './AddNoteForm'
import notesReducer from '../reducers/notes'
import FilterNotes from './FilterNotes';
import SearchNote from './SearchNote'
import NotesContext from '../context/notes-context'
import GlobalStyles from './styled/Global.style'
import { AppContainer, TitleContainer, InputsContainer } from './styled/Containers'
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
            <GlobalStyles />
            <AppContainer>
                <TitleContainer>NotesApp</TitleContainer>
                <InputsContainer>
                    <AddNoteForm />
                    <SearchNote />
                </InputsContainer>
                <FilterNotes />
            </AppContainer>
        </NotesContext.Provider>
    );
}

export default App;