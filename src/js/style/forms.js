import { css } from 'styled-components';
import theme from './theme';

const form = css`
    input:not([type="submit"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]),
    select,
    textarea {
        display: block;
        width: 100%;
        padding: 8px 12px;
        border: 1px solid ${theme.inputBorder};
        color: ${theme.inputColor}
        font-family: inherit;
    }
`;

export default form;