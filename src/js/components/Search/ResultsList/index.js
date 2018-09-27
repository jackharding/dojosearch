import React from 'react';
import styled from 'styled-components';

import { DojoCard } from '../../Cards';

const ResultsListWrap = styled.div`
    padding: 15px;
    max-height: 100vh;
    overflow: auto;
`;

const ResultsList = ({ results }) => {
    return(
        <ResultsListWrap>
            { results.map(res => <DojoCard {...res} key={`res${res.id}`} />) }
        </ResultsListWrap>
    );
}

export default ResultsList;