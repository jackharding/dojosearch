import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	padding: 12px 17px;
	background: ${props => props.theme.btnSubmit};
	color: #fff;

	&[disabled] {
		background: ${props => props.theme.disabled};
	}
`;

export default Button;