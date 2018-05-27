import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const Square = styled.div`
	position: relative;
	height: 0;
	padding-bottom: 100%;

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const ImageSquare = ({ img, alt, children }) => (
	<Square>
		{ children }
		{ img && <img src={img} alt={alt} /> }
	</Square>
);

ImageSquare.defaultProps = {
	alt: ''
}

export default ImageSquare;