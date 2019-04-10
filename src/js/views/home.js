import React, { Component } from 'react';
import { Flex, Box } from '@rebass/grid';

import { Page, Container } from '../components/Layout';
import { Logo } from '../components/Misc';
import { SearchBar } from '../components/Search';

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