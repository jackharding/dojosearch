import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import styled from 'styled-components';

import { screenReader } from '../utils/style';

const Label = styled.label`
	${props => props.label ? null : screenReader}
`;

const TextInput = ({ value, name, label, placeholder, theme, handleChange }) => {
	const slug = slugify(name);

	return(
		<Fragment>
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
				onChange={handleChange}
			/>
		</Fragment>
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
	label: true,
	placeholder: false
}

export default TextInput;