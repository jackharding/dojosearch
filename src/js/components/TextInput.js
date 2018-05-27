import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import camelCase from 'camelcase';

import { screenReader } from '../utils/style';

const Label = styled.label`
	${props => props.label ? null : screenReader}
`;

const TextInputContainer = styled.div``;

const TextInput = ({ value, name, label, placeholder, theme, handleChange }) => {
	const slug = camelCase(name);

	return(
		<TextInputContainer>
			<Label 
				htmlFor={slug} 
				label={label}
			>
				{name}
			</Label>

			<input 
				type="text" 
				id={slug} 
				name={slug} 
				value={value}
				placeholder={placeholder && name}
				onChange={handleChange}
			/>
		</TextInputContainer>
	);
};

TextInput.propTypes = {
	value: PropTypes.string,
	name: PropTypes.string.isRequired,
	label: PropTypes.bool,
	placeholder: PropTypes.bool,
	handleChange: PropTypes.func
}

TextInput.defaultProps = {
	value: '',
	label: false,
	placeholder: true
}

export default TextInput;