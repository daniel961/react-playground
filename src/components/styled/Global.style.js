import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    p {
        margin: 5px;
        padding: 0;
    }
    h1 {
        margin: 0px;
        padding: 0px;
    }
    h3 {
        margin: 0;
        padding: 0;
    }
    div {
        margin: 0px;
    }
    body {
        margin: 0px;
        padding: 0px;
        background-color: #1B1B1E;
        color: #D8DBE2;
    }
    label {
        margin: 0;
        padding: 0;
        
    }
`;

export { GlobalStyles as default }