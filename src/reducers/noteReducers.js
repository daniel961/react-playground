const notesReducer = function (notes, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...notes, action.note]
        case 'REMOVE_NOTE':
            return notes.filter((note, i) => i !== action.index)
        case 'POPULATE_NOTES':
            return action.note;
        default:
            break;
    }
}
export default notesReducer;