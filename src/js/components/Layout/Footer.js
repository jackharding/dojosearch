import React from 'react';
import { withRouter } from 'react-router-dom';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';

import { media } from '../../utils/style';
import { Container } from './';
import { InlineMenu } from '../Nav';

const menuItems = [
	{
		name: 'Terms & Conditions',
		path: '/terms-conditions',
	},
	{
		name: 'About',
		path: '/about',
	},
	{
		name: 'Contact',
		path: '/contact',
	},
];

const StyledFooter = styled.footer`
	width: 100%;
	min-height: 75px;
	margin-top: auto;
	padding: 30px 0;
	text-align: center;
	background: ${props => props.theme.black}
	color: #fff;

	a {
		color: #fff;
	}

	${media.small`
		text-align: left;
		nav {
			text-align: right;
		}
	`};
`;

const StyledBox = styled(Box)`
	&:first-of-type {
		order: 2;
	}
	&:last-of-type {
		order: 1;
		margin-bottom: 10px;
	}

	${media.small`
		&:first-of-type {
			order: 1;
		}
		&:last-of-type {
			order: 2;
			margin-bottom: 0;
		}
	`};
`;

const Footer = ({ location }) => {
	if(location.pathname === '/search') return null;

	return(
		<StyledFooter>
			<Container>
				<Flex flexWrap="wrap">
					<StyledBox w={[1, 1/2, null]}>
						<div>&copy; Dojosearch { new Date().getFullYear() }</div>
					</StyledBox>
					<StyledBox w={[1, 1/2, null]}>
						<InlineMenu items={menuItems} />
					</StyledBox>
				</Flex>
			</Container>
		</StyledFooter>
	);
}

export default withRouter(Footer);