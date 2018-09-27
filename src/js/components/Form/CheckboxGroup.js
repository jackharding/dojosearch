import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { media } from '../../utils/style';
import { Checkbox } from './';

const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	>div {
		width: calc(50% - 7.5px);
		&:nth-of-type(n+3) {
			margin-top: 10px;
		}

		${media.small`
			width: calc((100% / 3) - 10px);

			&:nth-of-type(n+3) {
				margin-top: 0;
			}
			&:nth-of-type(n+4) {
				margin-top: 10px;
			}
		`}
	}
`;

class CheckboxGroup extends Component {
	toggle = (e) => {
		this.props.handleChange(e.target.id);
	}

	checkIfChecked = (val) => {
		let { checked } = this.props;

		return checked.find(item => item === val);
	}

	render() {
		let { items } = this.props;

		if(!items || !items.length) return null;

		return(
			<StyledDiv>
				{ items.map((item, i) => {
					let isChecked = this.checkIfChecked(item);

					return(
						<Checkbox 
							id={item} 
							label={item} 
							handleChange={this.toggle} 
							checked={isChecked} 
							key={`checkbox${i}`} 
						/>
					);
				}) }
			</StyledDiv>
		);
	}
}

export default CheckboxGroup;