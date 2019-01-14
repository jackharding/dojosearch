import React from 'react';
import styled, { css } from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

import { Container } from '../Layout';
import { Logo } from '../Misc';
import { SearchBar } from '../Search';

const Header = ({ location }) => {
    if(location.pathname === '/') return null;

    return(
        <HeaderWrap>
            <Link to={'/'}>
                <Logo width={180} />
            </Link>
            <SearchBar mini />
        </HeaderWrap>
    );
}

const HeaderWrap = styled(Container)`
    display: flex;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;

    svg {
        margin-right: 35px;
    }
`;

export default withRouter(Header);