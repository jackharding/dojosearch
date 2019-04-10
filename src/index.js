import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { StoreProvider, createStore } from 'easy-peasy'

import withAnalytics from './js/config/analytics';
import model from './js/config/model';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(model);

ReactDOM.render(
    <StoreProvider store={store}>
        <BrowserRouter>
            <Route component={withAnalytics(App)} />
        </BrowserRouter>
    </StoreProvider>
	, document.querySelector('#root')
);
registerServiceWorker();