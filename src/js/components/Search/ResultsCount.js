import React, { Fragment } from 'react';
import styled from 'styled-components';

const ResultsCount = ({ fetching, count = 0 }) => {
    return(
        <StyledP>
            { !fetching &&
                <Fragment>
                    <span>{count}</span> <span>results</span>
                </Fragment>
            }
        </StyledP>
    );
}

const StyledP = styled.p`
    width: 85px;
    margin: 0;

    span {
        &:first-of-type {
            font-size: 24px;
        }
    }
`;

export default ResultsCount;