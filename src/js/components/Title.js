import React from 'react';
import styled from 'styled-components';

const Heading1 = styled.h1`
	font-size: 78px;
`;

const Title = ({ text, primary, secondary, tertiary }) => (
	<Heading1>{text}</Heading1>
);

Title.defaultProps = {
	text: 'Yes'
}

export default Title;