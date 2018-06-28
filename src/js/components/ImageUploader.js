import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import { screenReader } from '../utils/style';

const acceptedFileTypes = ".svg,.jpg,.jpeg,.bmp,.gif,.png, image/svg+xml,image/jpeg,image/png,image/bmp,image/gif";
const maxFileSize = 5242880; // 5MB

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

	svg {
		width: 65%;
		max-width: 75px;
	}
`;

const UploadButton = ({ handleUpload }) => {
	const HiddenLabel = styled.span`${screenReader}`;
	const StyledLabel = styled.label`
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		svg {
			margin:  0 auto;
		}
	`;

	return(
		<Square>		
			<StyledLabel htmlFor="uploadBtn">
				<HiddenLabel>Add an image</HiddenLabel>
				<ReactSVG path="/svg/photo.svg" />
			</StyledLabel>
			<input 
				type="file" 
				onChange={handleUpload} 
				id="uploadBtn" 
				accept={acceptedFileTypes}
				style={{ display: 'none' }} 
			/>
		</Square>
	);
}

class ImageUploader extends Component {
	validateThenPassToParent = (result) => {
		this.validateFileType(result)
			.then(this.validateFileSize)
			.then(this.passToParent)
			.catch(this.returnError);
	}

	validateFileType = (fileObj) => {
		return new Promise((resolve, reject) => {
			let { src } = fileObj;

			// If the mime type isn't in the allowable array, or it's empty.
			let mimeType = src.substring(src.indexOf('data') + 5, src.indexOf(';'));

			if(!acceptedFileTypes.includes(mimeType) || !mimeType) {
				return reject('Invalid file type.')
			} else {
				resolve(fileObj);
			}
		});
	}

	validateFileSize = (fileObj) => {
		return new Promise((resolve, reject) => {
			if(fileObj.size > maxFileSize) {
				return reject('Files must be 5MB or less.')
			} else {
				resolve(fileObj);
			}
		});
	}

	passToParent = (fileObj) => {
		// Delete the size property as we don't need it anymore
		delete fileObj['size'];

    	this.props.addUploadedImage(fileObj);
	}

	returnError = (err) => {
		alert(err);
	}

	upload = (e) => {
		e.persist();

		if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();

            reader.onload = (event) => {
            	let { result } = event.target,
            		{ size } = e.target.files[0];
        		
        		this.validateThenPassToParent({
        			src: result,
        			alt: '',
        			size,
        		});
            };

            reader.readAsDataURL(e.target.files[0]);

            // TODO: Backend validation
            // TODO: Alts?
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
		let { images } = this.props;

		return(
			<Flex flexWrap="wrap">
				{ !!images.length && this.renderExistingImages(images) }
				<StyledBox w={boxSizes}>
					<UploadButton handleUpload={this.upload} />
				</StyledBox>
			</Flex>
		);
	}
}

export default ImageUploader;