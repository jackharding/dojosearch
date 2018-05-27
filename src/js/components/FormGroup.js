import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
	>*+* {
		margin-top: 10px;
	}
`;

const FormGroup = ({ children }) => (
	<Element>{ children }</Element>
);

export default FormGroup;