import { css } from 'styled-components';

export const sizes = {
	small: '40em',
	medium: '52em',
	large: '64em',
}

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${sizes[label]}) {
			${css(...args)}
		}
	`

	return acc
}, {});

export const hoverOverlay = (color = 'rgba(255, 255, 255, 0.3)') => {
	return`
		&:before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: ${color};
			opacity: 0;
			transition: .3s;
			cursor: pointer;
		}

		&:hover {
			&:before {
				opacity: 1;
			}
		}
	`;
}

export const screenReader = () => {
	return `
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0,0,0,0);
		border: 0;
	`;
};

export const titleSizes = {
	MD: () => {
		return `
			margin-bottom: 15px;
			font-size: 16px;
			@media screen and (min-width: ${sizes.medium}) {
				font-size: 18px;
			}
		`;
	},
	SM: () => {
		return `
			margin-bottom: 10px;
			font-size: 14px;
			text-transform: uppercase;
			@media screen and (min-width: ${sizes.medium}) {
				font-size: 16px;
			}
		`;
	},
	XS: () => {
		return `
			font-size: 10px;
		`;
	}
}

export const getTitleStyleFromProps = (size) => {
	return titleSizes[size];
}