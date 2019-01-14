import { css } from 'styled-components';
import theme from './theme';

const base = css`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        display: flex;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Catamaran', sans-serif;
        color: ${theme.black};
    }

    #root {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin: 0;
        font-family: 'Catamaran', sans-serif;
    }

    p {
        margin: 0;
    }

    button {
        padding: 0;
        border: 0;
        background: none;
    }

    svg {
        display: block;
        max-width: 100%;
        height: auto;
    }

    img {
        display: block;
    }
`;

export default base;