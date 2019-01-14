import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { Button } from '../Buttons';
import { CheckboxGroup, Select, FormGroup } from '../Form';
import { Title } from '../Text';

import settings from '../../config/settings';
import { toggleArrayItem } from '../../utils/helper';
import { boxShadow } from '../../utils/style';

const StyledDiv = styled.div`
    position: relative;
`;

const FilterWrapper = styled.div`
    position: absolute;
    display: ${({ open }) => open ? 'block' : 'none'};
    top: calc(100% + 10px);
    max-width: 620px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.inputBorder};
    ${boxShadow()}
`;

class ResultsFilter extends Component {
    state = {
        tags: [],
        distance: 'within 10 miles',
        open: false
    }

    toggleOpen = () => {
        this.setState({ open: !this.state.open });
    }

    updateTags = (id) => {
        const tags = toggleArrayItem(this.state.tags, id);

		this.setState({ tags });
    }

    updateDistance = (distance) => {
        this.setState({ distance });
    }
    
    render() {
        let { tags, distance, open } = this.state;

        const distances = settings.distances.map(i => `within ${i} miles`);

        return(
            <StyledDiv>
                <Button onClick={this.toggleOpen}>Filters</Button>
                <FilterWrapper open={open}>
                    <Flex flexWrap="wrap">
                        <FormGroup flex={'1 0 0'}>
                            <Title h={3} size={'SM'} text="Tags" />
                            <CheckboxGroup 
                                items={settings.tags}
                                checked={tags}
                                handleChange={this.updateTags}
                            />
                        </FormGroup>
                        <FormGroup w={[1, "200px"]} pl={[null, '15px']} mt={[null, 0]}>
                            <Title h={3} size={'SM'} text="Distance" />
                            <Select 
                                items={distances}
                                selected={distance}
                                handleChange={this.updateDistance}
                            />
                        </FormGroup>
                    </Flex>
                </FilterWrapper>
            </StyledDiv>
        );
    }
}

export default ResultsFilter;