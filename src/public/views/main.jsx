'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import App from './components/app.jsx';
import Index from './pages/index.jsx'
import Dashboard from './pages/dashboard.jsx';
import Service from './pages/service.jsx';

window.reactHistory = createHistory();

ReactDOM.render((
    <Router history={window.reactHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Index} />
            <Route path='index' component={Index} />
            <Router path='dashboard' component={Dashboard} />
            <Router path='service/:title' component={Service} />
        </Route>
    </Router>
), document.getElementById('react-app'));
