import React from 'react';
import styled from 'styled-components';

import { DojoCard } from '../../Cards';

const ResultsListWrap = styled.div`
    padding: 15px;
    overflow: auto;
`;

const ResultsList = ({ results }) => {
    return(
        <ResultsListWrap>
            { results.map(res => <DojoCard {...res} key={res.slug+2} />) }
            { results.map(res => <DojoCard {...res} key={res.slug+2} />) }
        </ResultsListWrap>
    );
}

export default ResultsList;