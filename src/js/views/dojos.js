import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import ReactSVG from 'react-svg';

import { ResultsContainer } from '../containers';
import { Container } from '../components/Layout';
import { Map } from '../components/Map';
import { ResultsFilter } from '../components/Search';

const StyledP = styled.p`
    margin: 0;

    span {
        &:first-of-type {
            font-size: 24px;
        }
    }
`;

const ResultCount = ({ count = 26 }) => {
    return(
        <StyledP><span>{count}</span> <span>results</span></StyledP>
    );
}

const LayoutSwitch = ({ handleLayoutChange }) => {
    return(
        <Fragment>
            <button>
                {/* // IconButton */}
                <ReactSVG path="/svg/icon-block-layout.svg" />
            </button>
        </Fragment>
    );
}

const TopBar = () => {
    return(
        <Container>
            <Flex 
                justifyContent="space-between"
                alignItems="center"
            >
                <Box w={[1, '220px']}>
                    <Flex justifyContent="space-between">
                        <ResultCount />
                        <ResultsFilter />
                    </Flex>
                </Box>

                <Box>
                    <LayoutSwitch />
                </Box>
            </Flex>
        </Container>
    );
}

const Dojos = ({ location: { state: { search } } }) => {
    return(
        <Fragment>
            <TopBar />
            <ResultsContainer
                location={search}
            />
        </Fragment>
    );
}

export default withRouter(Dojos);