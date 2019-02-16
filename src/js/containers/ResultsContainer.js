import React, { Fragment, useState, useEffect } from 'react';
import { Box, Flex } from 'grid-styled';
import styled from 'styled-components';

import { fetchDojos } from '../api/dojos';
import { Map } from '../components/Map';
import { Container } from '../components/Layout';
import { LayoutSwitch, ResultsCount, ResultsFilter, ResultsList } from '../components/Search';
import { toggleArrayItem } from '../utils/helper';

const ResultsContainer = ({ location: { location } }) => {
    const [tags, setTags] = useState([]);
    const [distance, setDistance] = useState(50);
    const [count, setCount] = useState(0);
    const [results, setResults] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        _fetchDojos();
    }, [tags, distance]);

    const _fetchDojos = async () => {
        let args = {
            distance,
            tags: tags.join(',')
        };

        setFetching(true);

        if(location) {
            args.coordinates = location.lat + ',' + location.lng;
        }

        const { count, dojos } = await fetchDojos(args);

        setCount(count);
        setResults(dojos);
        setFetching(false);
    }

    const handleFilterChange = (val, key) => {
        if(key === 'tags') {
            val = toggleArrayItem(tags, val);

            setTags(val);
        } else if(key === 'distance') {
            setDistance(val);
        }
    }

    return(
        <Fragment>
            <Container>
                <Flex 
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <TopBarLeft>
                        <ResultsCount 
                            count={count}
                            fetching={fetching}
                         />
                        <ResultsFilter 
                            tags={tags} 
                            distance={distance} 
                            onFilterChange={handleFilterChange}
                        />
                    </TopBarLeft>

                    <Box>
                        {/* <LayoutSwitch 
                            layout={layout}
                            onLayoutChange={handleLayoutChange}
                        /> */}
                    </Box>
                </Flex>
            </Container>

            <ContentArea>
                <ResultsList results={results} />
                <Map markers={results} />
            </ContentArea>
        </Fragment>
    );
}
const ContentArea = styled.main`
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 124px);
    overflow-y: auto;

    >div {
        &:first-of-type {
            flex: 1 0 0;
            padding-left: 15px;
            padding-right: 15px;

            @media screen and (min-width: 992px) {
                padding-left: 25px;
                padding-right: 25px;
            }

            @media screen and (min-width: 1040px) {
                flex: none;
                width: 664px;
            }
        }

        &:nth-of-type(2) {
            display: none;

            @media screen and (min-width: 825px) {
                display: block;
            }

            @media screen and (min-width: 1040px) {
                flex: 1 0 0;
            }
        }
    }
`;

const TopBarLeft = styled.nav`
    display: flex;
    align-items: center;

    p {
        +div {
            margin-left: 35px;
        }
    }
`;

export default ResultsContainer;