import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import axios from 'axios';

// import {
// 	Container,
// 	FormGroup,
// 	TextInput,
// 	TextArea,
// 	ImageUploader,
// 	Button,
// 	CheckboxGroup,
// 	SearchBar,
// } from '../components';
// import { Title } from '../components/Text';
// import { toggleArrayItem } from '../utils/helper';

// class EditDojo extends Component {
// 	state = {
// 		form: {
// 			name: '',
// 			location: {},
// 			description: '',
// 			images: [],
// 			tags: [],
// 			emailAddress: '',
// 			telephone: '',
// 			website: '',
// 			facebookUrl: '',
// 			twitterHandle: '',
// 			instagramUsername: '',
// 		},
// 		sending: false,
// 		completed: false,
// 		errors: [],
// 		hasBeenPopulated: false
// 	}

// 	static getDerivedStateFromProps(props, state) {
// 		let { form } = props;

// 		if(state.hasBeenPopulated || !form) return null;

// 		return {
// 			...state,
// 			form,
// 			hasBeenPopulated: true
// 		}
// 	}

// 	updateForm = (e) => {
// 		this.setState({
// 			form: {
// 				...this.state.form,
// 				[e.target.name]: [e.target.value]
// 			}
// 		});
// 	}

// 	submitForm = (e) => {
// 		e.preventDefault();

// 		this.setState({
// 			sending: true
// 		});

// 		axios.post('http://localhost:25000/api/dojos/add', this.state.form);

// 		return false;
// 	}

// 	addImage = (img) => {
// 		this.setState({
// 			form: {
// 				...this.state.form,
// 				images: [...this.state.form.images, img]
// 			}
// 		});
// 	}

// 	updateTags = (id) => {
//         const tags = toggleArrayItem(this.state.form.tags, id);

// 		this.setState({ tags });
//     }

// 	render() {
// 		let { form, sending, completed, errors } = this.state;

// 		return (
// 			<Container page={true}>
// 				<form onSubmit={this.submitForm}>
// 					<Title h={1} size={'MD'} text="Add a Dojo" />
// 					<Flex flexWrap="wrap">
// 						<FormGroup w={[1, null, 1/2]}>
// 							<Flex flexWrap="wrap">
// 								<FormGroup w={1}>
// 									<TextInput 
// 										name="Name"
// 										value={form.name}
// 										handleChange={this.updateForm}
// 									/>
// 									<SearchBar />
// 									<TextArea 
// 										name="Description"
// 										value={form.description}
// 										handleChange={this.updateForm}
// 									/>
// 								</FormGroup>
// 								<FormGroup w={1}>
// 									<Title h={3} size={'SM'} text="Tags" />
// 									<CheckboxGroup selected={form.tags} handleChange={this.updateTags} />
// 								</FormGroup>
// 							</Flex>
// 						</FormGroup>

// 						<FormGroup w={[1, null, 1/2]}>
// 							<Flex flexWrap="wrap">
// 								<FormGroup w={1}>
// 									<Title h={3} size={'SM'} text="Photos" />
// 									<ImageUploader
// 										addUploadedImage={this.addImage}
// 										images={form.images}
// 									/>
// 								</FormGroup>
// 								<FormGroup w={1}>
// 									<Title h={3} size={'SM'} text="Contact information" />
// 									<TextInput 
// 										name="Email address"
// 										value={form.emailAddress}
// 										handleChange={this.updateForm}
// 									/>
// 									<TextInput 
// 										name="Telephone"
// 										value={form.telephone}
// 										handleChange={this.updateForm}
// 									/>
// 									<TextInput 
// 										name="Website"
// 										value={form.website}
// 										handleChange={this.updateForm}
// 									/>
// 									<TextInput 
// 										name="Facebook URL"
// 										value={form.facebookUrl}
// 										handleChange={this.updateForm}
// 									/>
// 									<TextInput 
// 										name="Twitter Handle"
// 										value={form.twitterHandle}
// 										handleChange={this.updateForm}
// 									/>
// 									<TextInput 
// 										name="Instagram Username"
// 										value={form.instagramUsername}
// 										handleChange={this.updateForm}
// 									/>
// 								</FormGroup>
// 							</Flex>
// 						</FormGroup>

// 						<FormGroup w={[1, null, null]}>
// 							<Button>Submit</Button>
// 						</FormGroup>
// 					</Flex>
// 				</form>
// 			</Container>
// 		);
// 	}
// }

const EditDojo = () => <div>asd</div>

export default EditDojo;