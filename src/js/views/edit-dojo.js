import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';

import {
	Container,
	FormGroup,
	TextInput,
	Title,
	ImageUploader
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
		console.log(e.target.value);
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: [e.target.value]
			}
		});
	}

	render() {
		let { form, sending, completed, errors } = this.state;

		return (
			<Container>
				<Title h={1} size={'MD'} text="Add a Dojo" />
				<Flex flexWrap="wrap">
					<Box w={[1, null, 1/2]}>
						<FormGroup>			
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
					</Box>

					<Box w={[1, null, 1/2]}>
						<ImageUploader />
					</Box>
				</Flex> 
			</Container>
		);
	}
}

export default EditDojo;