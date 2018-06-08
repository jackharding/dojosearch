import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';

import { Page, Container, Logo, SearchBar } from '../components';

class Home extends Component {
	render() {
		return(
			<Page name="home">
				<Container>
					<Flex flexWrap="wrap">
						<Box w={[1, 1/2, 2/5]} mx="auto">
							<Logo width={300} style={{ display: 'block', margin: '0 auto 15px' }} />
							<SearchBar />
						</Box>
					</Flex>
				</Container>
			</Page>
		);
	}
}

export default Home;