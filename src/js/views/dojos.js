import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import ReactSVG from 'react-svg';

import { ResultsContainer } from '../containers';
import { Container } from '../components/Layout';
import { Map } from '../components/Map';
import { ResultsFilter } from '../components/Search';

const Dojos = ({ location: { state: { search } } }) => {
    return(
        <Fragment>
            <ResultsContainer
                location={search}
            />
        </Fragment>
    );
}

export default withRouter(Dojos);