import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import ReactSVG from 'react-svg';

import { Container, ResultsFilter } from '../components';

const TopBar = () => {

    const ResultCount = ({ count = 26 }) => {

        const StyledP = styled.p`
            margin: 0;

            span {
                &:first-of-type {
                    font-size: 24px;
                }
            }
        `;

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

class Dojos extends Component {
    render() {
        return(
            <Fragment>
                <TopBar />
            </Fragment>
        );
    }
}

export default Dojos;