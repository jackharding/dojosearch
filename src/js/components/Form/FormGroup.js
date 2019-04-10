import React from 'react';
import styled from 'styled-components';
import { Box } from '@rebass/grid';

import { addPaddingToCols } from '../../utils/style';

const FormGroup = styled(Box)`
	+* {
		margin-top: 25px;
	}

	>*+* {
		margin-top: 10px;
	}
`;

export default FormGroup;