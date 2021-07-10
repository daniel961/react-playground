import { useState, useEffect } from 'react';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [searchPattern, setSearchPattern] = useState('');

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        setNotes(storedNotes || []);
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const submitNote = (e) => {
        e.preventDefault();
        setNotes([...notes, { title, body }])
        setTitle('');
        setBody('')
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
            <input placeholder="Search Note by Title" onChange={e => { setSearchPattern(e.target.value) }} />
            <h1>Selected Notes:</h1>
            {
                notes.filter(({ title }) => title.includes(searchPattern))
                    .map(({ title, body }, index) =>
                        <div key={index}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <button onClick={() => {
                                setNotes(notes.filter((note, i) => i !== index))
                            }}>Delete</button>
                        </div>
                    )
            }
        </div>
    );
}

export default App;