import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.white};
    }

    body, input, textarea, button, span, h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    header, h1 {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        line-height: 130%;
    }
`