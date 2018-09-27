import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ location }) => {
    if(location.pathname === '/') return null;

    return(
        <div>header!</div>
    );
}

export default withRouter(Header);