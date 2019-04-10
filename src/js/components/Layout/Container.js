import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	padding: 0 15px;
	margin: 0 auto;

	@media screen and (min-width: 992px) {
		padding-left: 25px;
		padding-right: 25px;
	}
`;

export default Container;