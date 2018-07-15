import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const Container = Box.extend`
	width: 100%;
	max-width: 960px;
	padding: ${({ page }) => page ? '20px 15px 50px' : ' 0 15px'};
`;

Container.defaultProps = {
	mx: 'auto',
	px: '15px',
	pt: '20px',
	pb: '50px'
}

Container.propTypes = {
	page: PropTypes.bool
}

export default Container;