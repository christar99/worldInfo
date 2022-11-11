import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        width: 100vw;
        height: 100vh;
        font-size: 10px;
        word-break: keep-all;
        word-wrap: break-word;
        text-rendering: optimizeLegibility;
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.textColor};
        box-shadow: ${props => props.theme.boxShadow};
    }

    input {
        border: ${props => props.theme.border};
        background-color: ${props => props.theme.bgColor};
    }

    a {
        text-decoration: none;
        font-size: 2rem;

        :visited {
            text-decoration: none;
            color: ${props => props.theme.textColor};
        }
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;