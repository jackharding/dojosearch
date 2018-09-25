import React, { Component } from 'react';
import styled from 'styled-components';

import { Map } from '../components/Map';
import ResultsList from '../components/ResultsList';

const data = [
    {
        id: 1,
        name: 'The MAT Academy',
        image: 'http://fillmurray.com/500/400',
        tags: ['MMA', 'BJJ', 'Muay Thai', 'Wrestling'],
        description: 'Etiam pharetra quam sit amet arcu sagittis, ac placerat felis semper. Etiam vehicula pulvinar tellus, sed rhoncus ex porttitor dignissim. Nam facilisis augue feugiat, mollis tortor a, luctus ex. Phasellus efficitur lorem sit amet quam posuere vehicula. Mauris mollis quis mauris vulputate tincidunt. Donec eleifend hendrerit justo, a blandit velit.',
        lat: 51.5768762,
        lng: -3.2935734
    },
    {
        id: 2,
        name: 'Rob Taylor Academy',
        image: 'http://fillmurray.com/500/400',
        tags: ['BJJ'],
        description: 'Phasellus efficitur lorem sit amet quam posuere vehicula. Mauris mollis quis mauris vulputate tincidunt. Donec eleifend hendrerit justo, a blandit velit.',
        lat: 51.474059,
        lng: -3.1605437
    },
]

const ContentArea = styled.main`
    display: flex;
    justify-content: space-between;

    >div {
        &:first-of-type {
            flex: 1 0 0;
        }
    }
`;

class ResultsContainer extends Component {
    render() {
        return(
            <ContentArea>
                <ResultsList results={data} />
                <Map markers={data} />
            </ContentArea>
        );
    }
}

export default ResultsContainer;