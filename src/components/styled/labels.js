import styled from "styled-components";

const NoteTitle = styled.label`
    font-family: 'SeoulHangang CB';
    color: #C4C4C4;
    font-size: 1.5vw;
    margin: 5px;
    width: 100%;
    height: 100%;
    text-align: center;
`;

const NoteBody = styled.textarea`
    background-color: #D8DBE2;
    border: none;
    font-size: 25px;
    height: 100%;
    margin: 5px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #5F7489;
    outline: none;
`;

const AddNoteButtonLabel = styled.p`
    text-shadow: 2px 0 0 #000000, 2px 0 0 #000000, 0 2px 0 #000000, 0 2px 0 #000000, 1px 1px #000000, 2px 2px 0 #000000, 2px 2px 0 #000000, 2px 2px 0 #000000;
`;


export { NoteTitle as default, NoteBody, AddNoteButtonLabel }