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

const UploadButton = ({ img, handleUpload }) => {
	return(
		<Square>
			{ img && <ImageSquare img={img.src} alt={img.alt} /> }
			<input type="file" onChange={handleUpload} />
		</Square>
	);
}

class ImageUploader extends Component {
	state = {
		loading: false,
		image: {}
	}

	upload = (e) => {
		console.log('in upload', e)

		if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();

            reader.onload = (event) => {
            	let image = {
            		src: event.target.result,
					alt: ''
            	};

            	this.setState({ image });

            	this.props.addUploadedImage(image);
            };

            reader.readAsDataURL(e.target.files[0]);

            // TODO: file size/format validation
        }
	}

	renderExistingImages = (images) => {
		return images.map(img => (
			<Box w={[1/4, null, 1/5, 1/6]} key={img.src}>
				<ImageSquare img={img.src} alt={img.alt} />
			</Box>
		));
	}

	render() {
		let { images } = this.props,
			{ loading, image } = this.state;

		return(
			<Flex flexWrap="wrap">
				{ !!images.length && this.renderExistingImages(images) }
				<Box w={[1/4, null, 1/5, 1/6]}>
					<UploadButton handleUpload={this.upload} img={image} />
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