import Note from './Note'
import { useContext } from 'react'
import notesContext from '../context/notes-context'
import { NotesContainer } from './styled/Containers'

const FilterNotes = function () {
    const { notes, searchPattern } = useContext(notesContext)
    const renderNotes = function () {
        return notes.filter(({ title, body }) => (title.includes(searchPattern) || body.includes(searchPattern)))
            .map(({ title, body }, index) =>
                <Note key={index} title={title} body={body} index={index} remove={'removeNote'} />
            )
    }
    return (
        <div>
            <h1>Notes:</h1>
            <NotesContainer>
                {
                    renderNotes().length ? renderNotes() : <p>No Notes To Show</p>
                }
            </NotesContainer>
        </div>
    );
}

export default FilterNotes;