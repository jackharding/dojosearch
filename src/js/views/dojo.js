import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import ReactSVG from 'react-svg';

import { DojoContainer } from '../containers';
import { Container } from '../components/Layout';
import { Map } from '../components/Map';
import { ResultsFilter } from '../components/Search';

const Dojo = ({ match: { params: { slug } } }) => {
    return(
        <Fragment>
            <DojoContainer
                slug={slug}
            />
        </Fragment>
    );
}

export default withRouter(Dojo);