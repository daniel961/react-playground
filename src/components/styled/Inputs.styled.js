import styled from 'styled-components'

const Input = styled.input`
    width: 20vw;
    border-radius: 20px;
    background-color: #C4C4C4;
    padding: 10px;
    padding-left: 25px;
    font-size: 22px;
    border: none;
    outline: none;
    color: #455769;
    margin: 2px;
`;

const InputNoteBody = styled.textarea`
    width: 20vw;
    height: 20vh;
    border-radius: 10px;
    background-color: #C4C4C4;
    padding: 5px;
    padding-left: 25px;
    font-size: 18px;
    border: none;
    outline: none;
    color: #455769;
    margin: 5px;
    margin-top: 22px;
`;

const InputFilterNotes = styled.input`
    width: 13vw;
    border-radius: 20px;
    background-color: #373F51;
    color: white;
    padding: 10px;
    padding-left: 25px;
    font-size: 18px;
    border: none;
    outline: none;
    margin-top: 220px;
    ::placeholder {
        color: white;
        font-weight: 50;
    }
`;

export { Input as default, InputNoteBody, InputFilterNotes }

