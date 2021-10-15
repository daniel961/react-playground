import { createGlobalStyle } from "styled-components";
// use this for creating Global styles for the whole app

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        color: hsl(192,100%,9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin: 0;
    }

    h1 {
        margin: 0;
    }
`;

export default GlobalStyle;
