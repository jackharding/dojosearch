import styled from 'styled-components';

const Button = styled.button`
	padding: 10px 14px 8px;
	background: ${props => props.theme.btnSubmit};
	font-size: 14px;
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