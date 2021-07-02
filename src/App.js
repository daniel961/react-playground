import { useState } from 'react';

function App() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');

    const submitNote = (e) => {
        e.preventDefault();
        setNotes([...notes, { title }])
        setTitle('')
    }

    return (
        <div>
            <h1>Notes</h1>
            <h3>Add Note:</h3>
            <form onSubmit={submitNote}>
                <input value={title} placeholder="add note" onChange={(e) => { setTitle(e.target.value) }}></input>
                <button>Add Note</button>
            </form>

            {notes.map(({ title }, index) =>
                <div key={index}>
                    {title}
                    <button onClick={() => {
                        // const newNotes = [...notes];
                        // newNotes.splice(index, 1)
                        // console.log(newNotes);
                        // setNotes(newNotes);
                        // or do:
                        setNotes(notes.filter((note, i) => {
                            return !(i === index)
                        }))
                    }}>delete</button></div>)}
        </div>
    );
}

export default App;