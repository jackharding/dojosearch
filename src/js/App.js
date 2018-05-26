import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';

import { Home } from './views';

const theme = {
	brandMain: 				'#C11712',
	black: 					'#222222',
	inputColor: 			'#999999',
	inputBorder: 			'#CCCCCC',
}

injectGlobal`
	input:not([type="submit"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]),
	select,
	textarea {
		padding: 12px;
		border: 1px solid ${theme.inputBorder};
		color: ${theme.inputColor}
	}
`;

class App extends Component {
    render() {
        return (
            <div className="App" style={{ width: '480px', minHeight: '100vh', margin: '0 auto', padding: '15px', borderRight: '1px solid #aaa', borderLeft: '1px solid #aaa' }}>
	            <ThemeProvider theme={theme}>          
	                <Home />
	            </ThemeProvider>
            </div>
        );
    }
}

export default App;