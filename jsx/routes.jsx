var React = require('react');
import {Route, DefaultRoute, Redirect, RouteHandler} from 'react-router';

import ThreadList from './components/ThreadList.jsx';
import Thread from './components/Thread.jsx';
import NewThread from './components/NewThread.jsx';
import Map from './components/Map.jsx';
import Setup from './components/Setup.jsx';

import App from './components/App.jsx';

module.exports = (
  <Route name="app" path="/" handler={App}>
    <Redirect from="/" to="/threads" />
    <Route name="threads" path="/threads" handler={ThreadList}/>
    <Route name="newThread" path="/threads/new" handler={NewThread}/>
    <Route name="thread" path="/thread/:threadId" handler={Thread}/>
    <Route name="map" path="/map" handler={Map}/>
    <Route name="setup" path="/setup" handler={Setup}/>
  </Route>
);
