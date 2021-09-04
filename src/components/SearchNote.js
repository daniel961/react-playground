import { useContext } from "react";
import notesContext from "../context/notes-context";

const SearchNote = function () {
    const { setSearchPattern } = useContext(notesContext)

    return (
        <div>
            <h1>Search:</h1>
            <input placeholder="Search Note by Text" onChange={e => { setSearchPattern(e.target.value) }} />
        </div>);
}

export default SearchNote;