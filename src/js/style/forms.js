import { css } from 'styled-components';
import theme from './theme';

const form = css`
    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="search"],
    select,
    textarea {
        display: block;
        width: 100%;
        padding: 10px 12px;
        border: 1px solid ${theme.inputBorder};
        color: ${theme.inputColor}
        font-family: inherit;
    }
`;

export default form;