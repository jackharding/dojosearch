import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

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
const description = 'Yes, these are words.';
const DojoContainer = ({ slug }) => {
    return(
        <Fragment>
            <Slider images={images} />

            <Container>
                <Flex 
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                >
                    <Box width={[1, 1, 0.5]}>
                    <DojoCardDetails>
                        <Title h={3}><Link to={`/dojos/${slug}`}>{ name }</Link></Title>
                        <TagList tags={tags} />
                        <p>{ description }</p>

                        <Button>Read more</Button>
                    </DojoCardDetails>
                    </Box>
                    <Box width={[1, 1, 0.5]}>
                        stuff
                    </Box>
                </Flex>
            </Container>
        </Fragment>
    );
}

export default DojoContainer;