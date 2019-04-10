import React, { Fragment } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import { Link as _Link } from '../Text';
import { SR } from '../Misc';

const ContactLinks = ({ tel, email, social }) => {
    return(
        <Fragment>
            { tel &&
                <Link href={`tel:${tel}`}>
                    { tel }
                </Link>
            }

            { email &&
                <Link href={`mailto:${email}`}>
                    { email }
                </Link>
            }

            { social && social.length &&
                <SocialLinks>
                    { social.map(({ type, url }) => (
                        <SocialLink 
                            href={url}
                            type={type}
                        >
                            <SR>{ type }</SR>
                            <ReactSVG 
                                path={`/images/${type}.svg`}
                                style={{
                                    height: '23px'
                                }}
                            />
                        </SocialLink>
                    )) }
                </SocialLinks>
            }
        </Fragment>
    );
}

const Link = styled(_Link)`
    display: table;
    margin-top: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.link};
`;

const SocialLinks = styled.div`
    display: flex;
    margin-top: 15px;

    a {
        +a {
            margin-left: 20px;
        }
    }
`;

const SocialLink = styled.a`
    svg {
        height: 23px;
    }

    path {
        fill: ${({ type }) => {
            switch(type) {
                case 'facebook':
                    return '#3B5998';
                case 'twitter':
                    return '#00ACED';
                default:
                    return null;
            }
        }};
    }
`;

export default ContactLinks;