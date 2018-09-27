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

    p {
        margin-top: 10px;
    }

    +div {
        margin-top: 15px;
    }
`;

const DojoCardDetails = styled.div`
    flex: 1 0 0;
    padding-left: 15px;
`;

const DojoCard = ({ id, name, tags, description, image }) => (
    <DojoCardWrap>
        <Link to={`/dojos/${id}`}>
            { image && <img src={image} alt="" /> }
        </Link>
        <DojoCardDetails>
            <Title h={3}><Link to={`/dojos/${id}`}>{ name }</Link></Title>
            <TagList tags={tags} />
            <p>{ description }</p>
        </DojoCardDetails>
    </DojoCardWrap>
);

export default DojoCard;