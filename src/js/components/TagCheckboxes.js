import React, { Component, Fragment } from 'react';

class TagCheckboxes extends Component {
	state = {
		selected: []
	}

	toggle = (e) => {
		let newState,
			{ id } = e.target,
			{ selected } = this.state,
			isSelected = selected.find(item => item === id);

			console.log(isSelected, id, selected)

		if(isSelected) {
			newState = selected.filter(item => item !== id);
		} else {
			newState = [
				...selected,
				id
			];
		}

		this.setState({ selected: newState });
	}

	checkIfSelected = (e) => {
		let { id } = e.target,
			{ selected } = this.state;

		return selected.find(item => item === id);
	}

	render() {
		let { tags } = this.props;

		return(
			<div className="tag-checkboxes">
				{ tags.map((tag, index) => (
					<div key={tag + index} className="tag-checkboxes__item">
						<input type="checkbox" id={tag} onChange={this.toggle} selected={this.checkIfSelected} />
						<label htmlFor={tag}>{tag}</label>
					</div>
				)) }
			</div>
		);
	}
}

TagCheckboxes.defaultProps = {
	tags: ['Wing Chun', 'MMA', 'BJJ', 'Muay Thai', 'Wrestling', 'Boxing', 'Karate', 'Sambo', 'Tae Kwon Do', 'Kung Fu', 'Judo', 'Aikido', 'Tai Chi', 'Kickboxing', 'Medieval', 'Krav Maga']
}

export default TagCheckboxes;