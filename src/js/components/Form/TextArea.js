import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import camelCase from 'camelcase';

import { screenReader } from '../../utils/style';

const Label = styled.label`
	${props => props.showLabel ? undefined : screenReader}
`;

const TextInputContainer = styled.div``;

const StyledTextarea = styled.textarea`
	height: 200px;
`;

const TextArea = ({ value, name, showLabel, placeholder, theme, handleChange }) => {
	const slug = camelCase(name);

	return(
		<TextInputContainer>
			<Label 
				htmlFor={slug} 
				showLabel={showLabel}
			>
				{name}
			</Label>

			<StyledTextarea 
				id={slug} 
				name={slug} 
				value={value}
				placeholder={placeholder && name}
				onChange={handleChange}
				onBlur={handleChange}
			/>
		</TextInputContainer>
	);
};

TextArea.propTypes = {
	value: PropTypes.string,
	name: PropTypes.string.isRequired,
	showLabel: PropTypes.bool,
	placeholder: PropTypes.bool,
	handleChange: PropTypes.func
}

TextArea.defaultProps = {
	value: '',
	showLabel: false,
	placeholder: true
}

export default TextArea;