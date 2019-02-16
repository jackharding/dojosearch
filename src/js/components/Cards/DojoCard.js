import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from '../Buttons';
import { Title, TagList } from '../Text';
import settings from '../../config/settings';

const DojoCard = ({ slug, name, tags, description, photos }) => {
    let img = photos && photos.length ? photos[0] : settings.gymFallbackImg;

    return(
        <DojoCardWrap>
            <Link to={`/dojos/${slug}`}>
                <ImageWrap>
                    { img && <img src={img.src ? img.src : img} alt={img.alt ? img.alt : name} /> }
                </ImageWrap>
            </Link>
            <DojoCardDetails>
                <Title h={3}><Link to={`/dojos/${slug}`}>{ name }</Link></Title>
                <TagList tags={tags} />
                <p>{ description }</p>

                <Button>Read more</Button>
            </DojoCardDetails>
        </DojoCardWrap>
    );
}

const DojoCardWrap = styled.div`
    display: flex;
    align-items: stretch;

    img {
        width: 225px;
    }

    p {
        padding-top: 10px;
    }

    +div {
        margin-top: 15px;
    }
`;

export const DojoCardDetails = styled.div`
    position: relative;
    flex: 1 0 0;
    padding-left: 15px;
    padding-bottom: 40px;

    h3,p {
        width: 100%;
    }

    h3 {
        margin-bottom: 4px;
    }

    ${Button} {
        position: absolute;
        bottom: 0;
        left: 15px;
    }
`;

const ImageWrap = styled.div`
    position: relative;
    width: 225px;
    height: 0;
    padding-bottom: 75%;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
    }
`;

export default DojoCard;