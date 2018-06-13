import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import axios from 'axios';

import {
	Container,
	FormGroup,
	TextInput,
	TextArea,
	Title,
	ImageUploader,
	Button,
	TagCheckboxes,
	SearchBar,
} from '../components';

class EditDojo extends Component {
	state = {
		form: {
			name: '',
			location: {},
			description: '',
			images: [],
			tags: [],
			emailAddress: '',
			telephone: '',
			website: '',
			facebookUrl: '',
			twitterHandle: '',
			instagramUsername: '',
		},
		sending: false,
		completed: false,
		errors: [],
	}

	updateForm = (e) => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: [e.target.value]
			}
		});
	}

	submitForm = (e) => {
		e.preventDefault();

		this.setState({
			sending: true
		});

		axios.post('http://localhost:25000/api/dojos/add', this.state.form);

		return false;
	}

	addImage = (img) => {
		this.setState({
			images: [...this.state.form.images, img]
		});
	}

	updateTags = (id) => {
		let newState,
			{ tags } = this.state.form,
			isSelected = tags.find(item => item === id);

		if(isSelected) {
			newState = tags.filter(item => item !== id);
		} else {
			newState = [
				...tags,
				id
			];
		}

		this.setState({
			form: {
				...this.state.form,
				tags: newState
			}
		});
	}

	render() {
		let { form, sending, completed, errors } = this.state;

		return (
			<Container>
				<form onSubmit={this.submitForm}>
					<Title h={1} size={'MD'} text="Add a Dojo" />
					<Flex flexWrap="wrap">
						<FormGroup w={[1, null, 1/2]}>
							<TextInput 
								name="Name"
								value={form.name}
								handleChange={this.updateForm}
							/>
							<SearchBar />
							<TextArea 
								name="Description"
								value={form.description}
								handleChange={this.updateForm}
							/>
						</FormGroup>

						<FormGroup w={[1, null, 1/2]}>
							<Title h={3} size={'SM'} text="Photos" />
							<ImageUploader
								addUploadedImage={this.addImage}
								images={form.images}
							/>
						</FormGroup>

						<FormGroup w={[1, null, 1/2]}>
							<Title h={3} size={'SM'} text="Tags" />
							<TagCheckboxes selected={form.tags} handleChange={this.updateTags} />
						</FormGroup>

						<FormGroup w={[1, null, 1/2]}>
							<Title h={3} size={'SM'} text="Contact information" />
							<TextInput 
								name="Email address"
								value={form.emailAddress}
								handleChange={this.updateForm}
							/>
							<TextInput 
								name="Telephone"
								value={form.telephone}
								handleChange={this.updateForm}
							/>
							<TextInput 
								name="Website"
								value={form.website}
								handleChange={this.updateForm}
							/>
							<TextInput 
								name="Facebook URL"
								value={form.facebookUrl}
								handleChange={this.updateForm}
							/>
							<TextInput 
								name="Twitter Handle"
								value={form.twitterHandle}
								handleChange={this.updateForm}
							/>
							<TextInput 
								name="Instagram Username"
								value={form.instagramUsername}
								handleChange={this.updateForm}
							/>
						</FormGroup>

						<FormGroup w={[1, null, null]}>
							<Button>Submit</Button>
						</FormGroup>
					</Flex>
				</form>
			</Container>
		);
	}
}

export default EditDojo;