import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import { ImageSquare } from './';
import iconPicture from '../svg/iconPicture.svg';

const UploadButton = styled.button`
	position: absolute;
`;

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
					<UploadButton>
					<img src={iconPicture} alt=""/>
						<div dangerouslySetInnerHTML={{ __html: iconPicture }}></div>
						Upload shit
					</UploadButton>
				</Box>
			</Flex>
		);
	}
}

ImageUploader.defaultProps = {
	images: []
}

export default ImageUploader;