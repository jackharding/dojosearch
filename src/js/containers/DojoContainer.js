import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

import { ContactLinks } from '../components/Dojo';
import { DojoCardDetails } from '../components/Cards/DojoCard';
import { Slider } from '../components/Misc';
import { Container } from '../components/Layout';
import { Button } from '../components/Buttons';
import { Title, TagList } from '../components/Text';

const images = [
    {
        src: 'http://fillmurray.com/1600/1000',
        alt: 'No'
    },
    {
        src: 'http://fillmurray.com/1200/500',
        alt: 'No'
    },
]

const name = 'The MAT Academy';
const tags = ['Yes', 'No'];
const description = '<p>Pellentesque nisi orci, gravida eu lobortis a, ornare eu neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean a ant some words that go after these words - they also do fighting and some more fighting.<br/><br/> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>';
const DojoContainer = ({ slug }) => {
    return(
        <Fragment>
            <Slider images={images} />

            <Container>
                <Flex 
                    justifyContent="space-between"
                    alignItems="flex-start"
                    flexWrap="wrap"
                    style={{
                        padding: '75px 0'
                    }}
                >
                    <Box width={[1, 1, 0.5]}>
                        <DojoCardDetails>
                            <Title><Link to={`/dojos/${slug}`}>{ name }</Link></Title>
                            <TagList tags={tags} />
                            <div 
                                dangerouslySetInnerHTML={{ __html: description }} 
                                style={{
                                    marginTop: '15px'
                                }}
                            />
                        </DojoCardDetails>
                    </Box>
                    <Box width={[1, 1, 0.5]}>
                        <ContactBox>
                            <Title 
                                as={'h4'} 
                                upper
                            >Contact Information</Title>
                            <ContactLinks
                                tel="07999 345 007"
                                email="mail@somegym.com"
                                social={[
                                    {
                                        type: 'facebook',
                                        url: '#'
                                    },
                                    {
                                        type: 'twitter',
                                        url: '#'
                                    },
                                ]}
                            />
                        </ContactBox>
                    </Box>
                </Flex>
            </Container>
        </Fragment>
    );
}

const ContactBox = styled.div`
    margin-left: 50px;
    padding: 24px;
    border: ${({ theme }) => theme.border.main};
`;

export default DojoContainer;