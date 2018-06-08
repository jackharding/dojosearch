import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const FormGroup = Box.extend`
	+* {
		margin-top: 20px;
	}

	>*+* {
		margin-top: 10px;
	}
`;

export default FormGroup;