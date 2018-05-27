import React from 'react';
import styled from 'styled-components';

import { getTitleStyleFromProps } from '../utils/style';

const Heading1 = styled.h1`
	${props => getTitleStyleFromProps(props.size)}
`;
const Heading2 = styled.h2`
	${props => getTitleStyleFromProps(props.size)}
`;
const Heading3 = styled.h3`
	${props => getTitleStyleFromProps(props.size)}
`;
const Heading4 = styled.h4`
	${props => getTitleStyleFromProps(props.size)}
`;
const Heading5 = styled.h5`
	${props => getTitleStyleFromProps(props.size)}
`;

const Title = ({ text, h, size }) => {
	let Element;

	switch(h) {
		case 1:
			Element = Heading1;
			break;
		case 2:
			Element = Heading2;
			break;
		case 3:
			Element = Heading3;
			break;
		case 4:
			Element = Heading4;
			break;
		case 5:
			Element = Heading5;
			break;
		default:
			break;
	}

	return <Element size={size}>{text}</Element>
}

Title.defaultProps = {
	text: 'Yes',
	h: 1
}

export default Title;