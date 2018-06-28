import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';

import routes from './config/routes';
import { sizes } from './utils/style';
import { Footer } from './components';

const theme = {
	brandMain: 				'#C11712',
	black: 					'#222222',
	inputColor: 			'#999999',
	inputBorder: 			'#CCCCCC',
	btnSubmit: 				'#1B5C8E',
	disabled: 				'#bbbbbb',
	greyLight: 				'#DDDDDD',
	sizes
}

injectGlobal`
	html {
  		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		display: flex;
		min-height: 100vh;
		margin: 0;
		padding: 0;
		font-family: 'Catamaran', sans-serif;
		color: ${theme.black}
	}

	#root {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		width: 100%;
	}
	
	input:not([type="submit"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]),
	select,
	textarea {
		width: 100%;
		padding: 12px;
		border: 1px solid ${theme.inputBorder};
		color: ${theme.inputColor}
		font-family: inherit;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		margin: 0;
		font-family: 'Catamaran', sans-serif;
	}

	button {
		padding: 0;
		border: 0;
		background: none;
	}

	svg {
		display: block;
		max-width: 100%;
		height: auto;
	}
`;

class App extends Component {
    render() {
        return (
            <Fragment>
	            <ThemeProvider theme={theme}>
	            	<Fragment>
		                <Switch>
		                    {routes.map((route, index) => (
		                        <Route
		                            key={index}
		                            path={route.path}
		                            exact={route.exact}
		                            component={route.component}
		                        />
		                    ))}
		                </Switch>

		                <Footer />
	            	</Fragment>
	            </ThemeProvider>
            </Fragment>
        );
    }
}

export default App;