import React from 'react';
import styled from 'styled-components';

const Small = styled.small`
    color: ${({ theme }) => theme.inputColor};
    font-size: ${({ theme }) => theme.fontSize.bodySm};
`;

export default Small;