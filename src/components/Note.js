const Note = function ({ title, body, remove, index }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={() => {
                remove(index)
            }}>Delete</button>
        </div>
    )
}
export default Note;