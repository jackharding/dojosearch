import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const Container = styled(Box)`
	max-width: 960px;
`;

Container.defaultProps = {
	mx: 'auto',
	px: '15px'
}

export default Container;