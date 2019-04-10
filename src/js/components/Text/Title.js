import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	${({ theme, size }) => {
		switch(size) {
			case 'MD':
				return `
					margin-bottom: 15px;
					font-size: 16px;
					@media screen and (min-width: 52em) {
						font-size: 18px;
					}
				`;
			case 'SM':
				return `
					margin-bottom: 10px;
					font-size: 14px;
					text-transform: uppercase;
					@media screen and (min-width: 52em) {
						font-size: 16px;
					}
				`;
			case 'XS':
				return `
					font-size: 10px;
				`;
			default:
				return null;
		}
	}}

	text-transform: ${({ upper }) => upper ? 'uppercase' : 'none'};

	a {
		color: ${({ theme }) => theme.black};
		text-decoration: none;
	}
`;

Title.defaultProps = {
	
}

export default Title;