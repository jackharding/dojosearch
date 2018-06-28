import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

const CheckboxContainer = styled.div`
	input[type="checkbox"] {
		display: none;

		+label {
			display: flex;
			align-items: center;
			color: ${({ theme }) => theme.inputColor};
			font-size: 14px;

			svg {
				display: block;
				width: 23px;
				height: 23px;
				margin-right: 7px;
			}

			path#check {
				display: none;
			}
		}

		&:checked {
			+label {
				path#check {
					display: block;
				}
			}
		}
	}

	// ${({ size }) => size === 'sm' && `
	// 	background: red;
	// `}
`;

const Checkbox = ({ id, label, selected, handleChange, size }) => (
	<CheckboxContainer size={size}>
		<input type="checkbox" id={id} onChange={handleChange} selected={selected} />
		<label htmlFor={id}>
			<ReactSVG path={'/svg/checkbox.svg'} />
			<span>{label}</span>
		</label>
	</CheckboxContainer>
);

Checkbox.defaultProps = {
	size: 'sm'
}

export default Checkbox;