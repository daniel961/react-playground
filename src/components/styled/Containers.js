import styled from "styled-components";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`;

const TitleContainer = styled.div`
    display: flex;
    font-size: 80px;
    justify-content: center;
    background-color: #373F51;
    padding: 35px;
`;

const InputsContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: wrap;
    height: 100%;
    padding-left: 145px;
`;

const AddNoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: wrap;
    width: wrap;

`;

const AddNoteFormContainer = styled.div`
    display: flex;
    padding: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: wrap;
    height: wrap;
`;

const NoteTitleContainer = styled.div`
    background-color: #373F51;
    display: flex;
    flex-direction: row;
    flex: 0 3;
    border-radius: 8px;
    padding: 0px;
    width: 100%;
    height: wrap;
    word-wrap: break-word;
    border: none;
    margin-bottom: 20px;
    `;

const NoteContainer = styled.div`
        background-color: #D8DBE2;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        width: 15vw;
        height: 30vh;
        padding: 0;
        margin: 35px;
        border: none;
        color: black;
    `;

const NotesContainer = styled.div`
   margin-top: 55px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   justify-items: center;
`;

export { NoteContainer as default, AddNoteFormContainer, AddNoteContainer, NoteTitleContainer, NotesContainer, AppContainer, TitleContainer, InputsContainer }