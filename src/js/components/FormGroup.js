import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

import { addPaddingToCols } from '../utils/style';

const FormGroup = Box.extend`
	+* {
		margin-top: 25px;
	}

	>*+* {
		margin-top: 10px;
	}
`;

export default FormGroup;