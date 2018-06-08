import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const Container = Box.extend`
	width: 100%;
	max-width: 960px;
`;

Container.defaultProps = {
	mx: 'auto',
	px: '15px'
}

export default Container;