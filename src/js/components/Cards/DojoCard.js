import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Title, TagList } from '../Text';

const DojoCardWrap = styled.div`
    display: flex;
    align-items: flex-start;    

    img {
        width: 225px;
    }
`;

const DojoCardDetails = styled.div`
    flex: 1 0 0;
    padding-left: 25px;
`;

const DojoCard = ({ id, name, tags, description, image }) => (
    <DojoCardWrap>
        { image && <img src={image} alt="" /> }
        <DojoCardDetails>
            <Title h={3}>{ name }</Title>
            <TagList tags={tags} />
            <p>{ description }</p>
        </DojoCardDetails>
    </DojoCardWrap>
);

export default DojoCard;