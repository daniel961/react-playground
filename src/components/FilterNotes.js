import Note from './Note'
const FilterNotes = function ({ notes, removeNote, searchPattern }) {

    const renderNotes = function () {
        return notes.filter(({ title, body }) => (title.includes(searchPattern) || body.includes(searchPattern)))
            .map(({ title, body }, index) =>
                <Note key={index} title={title} body={body} index={index} remove={removeNote} />
            )
    }
    return (
        <div>
            <h1>Notes:</h1>
            {
                renderNotes().length ? renderNotes() : <p>No Notes To Show</p>
            }
        </div>
    );
}

export default FilterNotes;