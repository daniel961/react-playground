import { useContext } from "react";
import notesContext from "../context/notes-context";
import { InputFilterNotes } from './styled/Inputs.styled'


const SearchNote = function () {
    const { setSearchPattern } = useContext(notesContext)

    return (
        <div>
            <InputFilterNotes placeholder="Search Note by Text" onChange={e => { setSearchPattern(e.target.value) }} />
        </div>);
}

export default SearchNote;