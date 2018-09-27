import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';

import Context, { state } from './data';
import routes from './config/routes';
import { Header, Footer } from './components/Layout';
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
					<Context.Provider data={state}>
						<Context.Consumer>
							{props => (
								<Fragment>
									<Header />
									
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
							)}
						</Context.Consumer>
					</Context.Provider>
	            </ThemeProvider>
            </Fragment>
        );
    }
}

export default App;