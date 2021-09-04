const NoteForm = function ({ submitNote, title, body, setTitle, setBody }) {
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