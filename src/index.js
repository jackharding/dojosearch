import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import withAnalytics from './js/config/analytics';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

// import './css/index.css';

ReactDOM.render(
	<BrowserRouter>
        <Route component={withAnalytics(App)} />
    </BrowserRouter>
	, document.querySelector('#root')
);
registerServiceWorker();