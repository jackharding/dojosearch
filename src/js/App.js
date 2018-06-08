import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';

import { EditDojo } from './views';

const theme = {
	brandMain: 				'#C11712',
	black: 					'#222222',
	inputColor: 			'#999999',
	inputBorder: 			'#CCCCCC',
	btnSubmit: 				'#1B5C8E',
	disabled: 				'#bbbbbb',
}

injectGlobal`
	html {
  		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: 'Catamaran', sans-serif;
		color: ${theme.black}
	}
	
	input:not([type="submit"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]),
	select,
	textarea {
		width: 100%;
		padding: 12px;
		border: 1px solid ${theme.inputBorder};
		color: ${theme.inputColor}
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
`;

class App extends Component {
    render() {
        return (
            <div className="App">
	            <ThemeProvider theme={theme}>          
	                <EditDojo />
	            </ThemeProvider>
            </div>
        );
    }
}

export default App;