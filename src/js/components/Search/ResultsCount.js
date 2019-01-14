import React from 'react';
import styled from 'styled-components';

const ResultsCount = ({ count = 0 }) => {
    return(
        <StyledP><span>{count}</span> <span>results</span></StyledP>
    );
}

const StyledP = styled.p`
    margin: 0;

    span {
        &:first-of-type {
            font-size: 24px;
        }
    }
`;

export default ResultsCount;