import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { media } from '../utils/style';
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

	checkIfSelected = (e) => {
		let { id } = e.target,
			{ selected } = this.props;

		return selected.find(item => item === id);
	}

	render() {
		let { tags } = this.props;

		return(
			<StyledDiv>
				{ tags.map((tag, i) => (
					<Checkbox 
						id={tag} 
						label={tag} 
						handleChange={this.toggle} 
						selected={this.checkIfSelected} 
						key={`checkbox${i}`} 
					/>
				)) }
			</StyledDiv>
		);
	}
}

CheckboxGroup.defaultProps = {
	tags: ['Wing Chun', 'MMA', 'BJJ', 'Muay Thai', 'Wrestling', 'Boxing', 'Karate', 'Sambo', 'Tae Kwon Do', 'Kung Fu', 'Judo', 'Aikido', 'Tai Chi', 'Kickboxing', 'Medieval', 'Krav Maga']
}

export default CheckboxGroup;