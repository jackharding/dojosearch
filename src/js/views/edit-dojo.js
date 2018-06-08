import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';

import {
	Container,
	FormGroup,
	TextInput,
	Title,
	ImageUploader,
	Button,
	TagCheckboxes,
} from '../components';

class EditDojo extends Component {
	state = {
		form: {
			name: '',
			location: '',
			images: [],
			tags: [],
			emailAddress: '',
			telephone: '',
			website: '',
			facebookUrl: '',
			twitterUrl: ''
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

		return false;
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
							<TextInput 
								name="Location"
								value={form.location}
								handleChange={this.updateForm}
							/>				
						</FormGroup>

						<FormGroup w={[1, null, 1/2]}>
							<Title h={3} size={'SM'} text="Photos" />
							<ImageUploader />
						</FormGroup>

						<FormGroup w={[1, null, 1/2]}>
							<Title h={3} size={'SM'} text="Tags" />
							<TagCheckboxes />
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
								name="Twitter URL"
								value={form.twitterUrl}
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