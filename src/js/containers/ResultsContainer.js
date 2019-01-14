import React, { Component, Fragment } from 'react';
import { Box, Flex } from 'grid-styled';
import styled from 'styled-components';

import { fetchDojos } from '../api/dojos';
import { Map } from '../components/Map';
import { Container } from '../components/Layout';
import { LayoutSwitch, ResultsCount, ResultsFilter, ResultsList } from '../components/Search';

class ResultsContainer extends Component {
    state = {
        count: 0,
        results: [],
        tags: [],
        layout: 'rows',
        fetching: true,
    }
    
    componentDidMount() {
        this.fetchDojos();
    }

    fetchDojos = async () => {
        let { location: { location } } = this.props;

        let args = {
            distance: 50
        };

        if(location) {
            args.coordinates = location.lat + ',' + location.lng;
        }

        const { count, dojos } = await fetchDojos(args);

        this.setState({
            count,
            results: dojos,
            fetching: false,
        })
    }

    render() {
        let { results, count, tags, layout, fetching } = this.state;

        console.log(results, fetching)
        if(fetching) return null;

        return(
            <Fragment>
                <Container>
                    <Flex 
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <TopBarLeft>
                            <ResultsCount count={count} />
                            <ResultsFilter 
                                active={tags} 
                                onFilterChange={this.handleFilterChange}
                            />
                        </TopBarLeft>

                        <Box>
                            <LayoutSwitch 
                                layout={layout}
                                onLayoutChange={this.handleLayoutChange}
                            />
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
}

const ContentArea = styled.main`
    display: flex;
    justify-content: space-between;

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