import styled from 'styled-components';

const Button = styled.button`
	padding: 12px 17px;
	background: ${props => props.theme.btnSubmit};
	color: #fff;
	cursor: pointer;
	transition: .3s background;

	&[disabled] {
		background: ${props => props.theme.disabled};
	}

	&:hover {
		background: ${({ theme }) => theme.btnHover};
	}
`;

export default Button;