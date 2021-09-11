import styled from "styled-components";

const DeleteButton = styled.button`
    width: 20px;
    height: 20px;
    color: #5F7489;
    padding: 1px;
    border-radius: 3px;
    border: none;
    text-align: center;
    background-color: #C4C4C4;
    margin: 5px;
`;

const AddNoteButton = styled.button`
    width: 22vw;
    border-radius: 2px;
    background-color: #58A4B0;
    padding: 5px;
    font-size: 30px;
    border: none;
    outline: none;
    color: #FFFF;
    margin-top: 20px;
    cursor: pointer;


`;



export { DeleteButton as default, AddNoteButton }