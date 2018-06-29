import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';

import routes from './config/routes';
import { Footer } from './components';
import { 
	base,
	theme,
	forms,
} from './style';

injectGlobal`
	${base}
	${forms}
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