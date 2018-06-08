import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
	width: 100%;
	flex: 1 0 0;

	&.page--home {
		display: flex;
		align-items: center;
	}
`;

const Page = ({ children, name }) => (
	<StyledPage className={`page page--${name}`}>
		{ children }
	</StyledPage>
);

export default Page;