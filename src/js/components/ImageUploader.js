import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import { ImageSquare } from './';

// const UploadButton = styled.input`
// 	position: absolute;
// `;

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

class UploadButton extends Component {
	handleUpload = (e) => {
		console.log(e.target.value);
	}

	render() {
		return(
			<Square>
				<ImageSquare />
				<input type="file" onChange={this.handleUpload} />
			</Square>
		);
	}
}

class ImageUploader extends Component {
	state = {
		sending: false
	}

	renderExistingImages = (images) => {
		return images.map(img => (
			<Box w={[1/4, null, 1/5, 1/6]}>
				<ImageSquare img={img.src} alt={img.alt} />
			</Box>
		));
	}

	render() {
		let { images } = this.props;

		return(
			<Flex flexWrap="wrap">
				{ !!images.length && this.renderExistingImages(images) }
				<Box w={[1/4, null, 1/5, 1/6]}>
					<UploadButton />
				</Box>
			</Flex>
		);
	}
}

ImageUploader.defaultProps = {
	images: [
		{
			src: 'http://fillmurray.com/700/1500',
			alt: 'Billy boy'
		}
	]
}

export default ImageUploader;