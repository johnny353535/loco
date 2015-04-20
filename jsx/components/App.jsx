import React from 'react';
import { RouteHandler } from 'react-router';
import jQuery from 'jquery';

// Only include Bootstrap & Google Maps if run in the browser
if(typeof window !== "undefined"){
  window.jQuery = jQuery;
  var Bootstrap = require('bootstrap');
  var GoogleMapsLoader = require('google-maps');
}

import Header from './Header.jsx';
import Setup from './Setup.jsx';

import ThreadStore from '../../stores/ThreadStore.js';
var threads = require('json!../../data/threads.json').threads;

var localStorage = (typeof window !="undefined") ? window.localStorage : null;
var navigator = (typeof window !="undefined") ? window.navigator : null;

// Shim geolocation and localstorage if the app is run on the server
if(typeof window == "undefined"){

  var localStorage = {
    data: {},
    setItem: function(key, value){
      this.data[key] = value;
    },
    getItem: function(key){
      return this.data[key] ? this.data[key] : false;
    }
  }



  var navigator = {};
  navigator.geolocation = {};
  navigator.geolocation.getCurrentPosition = function(callback, error){
    var dummyLocation = {"timestamp":1429100674214,"coords":{"speed":null,"heading":null,"altitudeAccuracy":null,"accuracy":150,"altitude":null,"longitude":9.999,"latitude":46.999}};
    callback(dummyLocation);
  }

} else {
  var GoogleMapsLoader = require('google-maps');
}

// App
let App = React.createClass({
  getInitialState(){
    return {
      username: localStorage.getItem("loco-username") ? localStorage.getItem("loco-username") : null,
      location: localStorage.getItem("loco-location") ? JSON.parse(localStorage.getItem("loco-location")) : null,
    }
  },
  componentWillMount(){
    this.threadStore = new ThreadStore(threads);
    console.log(this.state)
  },
  componentDidMount(){


    if(typeof window == "undefined") return;

    GoogleMapsLoader.load(function(google) {
      this.google = google;
      this.getUserLocation();
    }.bind(this));

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

      console.log(JSON.stringify(position))

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


export default App;
