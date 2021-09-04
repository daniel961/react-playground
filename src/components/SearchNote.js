const SearchNote = function ({ changeSearchPattern }) {
    return (<div>
        <h1>Search:</h1>
        <input placeholder="Search Note by Text" onChange={e => { changeSearchPattern(e.target.value) }} />
    </div>);
}

export default SearchNote;