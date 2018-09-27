import styled from 'styled-components';

const IconButton = styled.button`
    path {
        fill: ;
    }
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

export default IconButton;