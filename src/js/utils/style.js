export const sizes = {
	small: '40em',
	medium: '52em',
	large: '64em',
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