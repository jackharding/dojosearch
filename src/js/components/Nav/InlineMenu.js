import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { media } from '../../utils/style';

const StyledNav = styled.nav`
	text-align: center;

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	a {
		text-decoration: none;
		font-weight: 700;
	}

	${media.small`
		text-align: left;

		li {
			display: inline-block;
			+li {
				margin-left: 32px;
			}
		}
	`};
`;

const InlineMenu = ({ items }) => (
	<StyledNav>
		<ul>
			{ items.map((item, i) => (
				<li key={item.path+i}>
					<Link to={item.path}>{ item.name }</Link>
				</li>
			)) }
		</ul>
	</StyledNav>
);

export default InlineMenu;