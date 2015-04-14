import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler, Redirect } from 'react-router';


import Header from './components/Header.jsx';
import ThreadList from './components/ThreadList.jsx';
import Thread from './components/Thread.jsx';
import NewThread from './components/NewThread.jsx';
import Map from './components/Map.jsx';
import Setup from './components/Setup.jsx';
import Login from './components/Login.jsx';

import ThreadStore from '../stores/ThreadStore.js';

console.log('Hola!');

// App
let App = React.createClass({
  getInitialState(){
    return {
      username: localStorage.getItem("loco-username") ? localStorage.getItem("loco-username") : null,
      location: localStorage.getItem("loco-location") ? JSON.parse(localStorage.getItem("loco-location")) : null,
    }
  },
  componentWillMount(){
      var threads = JSON.parse(localStorage.getItem("loco-threads"));
      this.threadStore = new ThreadStore(threads);
  },
  componentDidMount(){
    this.getUserLocation();
  },
  setUsername(username){
    if(this.usernameIsValid(username)){

      var newState = this.state;
      newState.username = username;
      this.setState(newState);

      localStorage.setItem("loco-username", username);
    } else {
      console.warn("Username invalid!", username);
    }
  },
  usernameIsValid(username){
    return username ? !!(username.length > 5) : false; //Username needs at least 6 characters
  },
  getUserLocation(){

    console.log("Checking for user's location");

    // Get the user's location
    navigator.geolocation.getCurrentPosition(function(position){

      var location = position.coords;
      console.log("User's location", location);

      var newState = this.state;
      newState.location = location;
      this.setState(newState);

      localStorage.setItem("loco-location", JSON.stringify(location));

    }.bind(this), function(){
      console.warn('User\'s location unavailable.');
      alert("Threre was an error retreiving your location!");

      var newState = this.state;
      newState.location = null;
      this.setState(newState);

      localStorage.setItem("loco-location", null);
    });

  },
  render() {

    var props = {
      threads: this.threadStore,
      username: this.state.username,
      usernameIsValid: this.usernameIsValid,
      setUsername: this.setUsername,
      location: this.state.location
    };

    var usernameOk = this.usernameIsValid(this.state.username);
    var locationOk = !!this.state.location;

    return (
      <div className="nav">
        <Header />

        { (!usernameOk || !locationOk) ? <Setup {...props}/> : <RouteHandler {...props}/> }
      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Redirect from="/" to="/threads" />
    <Route name="login" path="/login" handler={Login}/>
    <Route name="threads" path="/threads" handler={ThreadList}/>
    <Route name="newThread" path="/threads/new" handler={NewThread}/>
    <Route name="thread" path="/thread/:threadId" handler={Thread}/>
    <Route name="map" path="/map" handler={Map}/>
    <Route name="setup" path="/setup" handler={Setup}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});
