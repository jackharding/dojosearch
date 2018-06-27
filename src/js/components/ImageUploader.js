import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import { screenReader } from '../utils/style';

const boxSizes = ['calc(25% - (30px / 4))', null, 1/5, 1/6];

const StyledBox = Box.extend`
	&:not(:nth-of-type(4n)) {
		margin-right: 10px;
	}

	&:nth-of-type(n+5) {
		margin-top: 10px;
	}
`;

const Square = styled.div`
	position: relative;
	height: 0;
	padding-bottom: 100%;
	background: ${props => props.theme.inputColor}

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
	const HiddenLabel = styled.span`${screenReader}`;

	return(
		<Square>		
			<label htmlFor="uploadBtn">
				<div style={{ padding: '20px' }}>
					<HiddenLabel>Add an image</HiddenLabel>
					<ReactSVG path="/svg/photo.svg" />
				</div>
			</label>
			<input type="file" onChange={handleUpload} id="uploadBtn" style={{ display: 'none' }} />
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
			<StyledBox w={boxSizes} key={img.src}>
				<Square>
					<img src={img.src} alt={img.alt} />
				</Square>
			</StyledBox>
		));
	}

	render() {
		let { images } = this.props,
			{ loading, image } = this.state;

		return(
			<Flex flexWrap="wrap">
				{ !!images.length && this.renderExistingImages(images) }
				<StyledBox w={boxSizes}>
					<UploadButton handleUpload={this.upload} img={image} />
				</StyledBox>
			</Flex>
		);
	}
}

export default ImageUploader;