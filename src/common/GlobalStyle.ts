import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        width: 100vw;
        height: 100vh;
        font-size: 10px;
    }
    a {
        text-decoration: none;
        font-size: 2rem;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;