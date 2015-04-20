import React from 'react';

if(typeof window !== "undefined"){
  var GoogleMapsLoader = require('google-maps');
}


var Map = React.createClass({
  componentDidMount(){

    if(typeof window == "undefined") {
      return;
    }

    GoogleMapsLoader.load(function(google) {
      this.google = google;
      console.log(google)
      this.initializeMap();
    }.bind(this));

  },
  componentDidUpdate(prevProps, prevState){
    if(this.props.location && prevProps.location != this.props.location && this.google){
      this.initializeMap();
    }
  },
  initializeMap() {

    var _this = this;
    var map = this.map;
    var userLocation = new this.google.maps.LatLng(this.props.location.latitude, this.props.location.longitude);

    var mapOptions = {
      zoom: 14,
      disableDefaultUI: false
    };

    map = new this.google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
      position: userLocation,
      map: map,
      title: 'Your location'
    });

    var image = {
      url: 'public/img/marker_blue.png'
    };

    var threads = this.props.threads.toJSON();
    console.log(threads)
    for(var i = 0; i < threads.length; i++){

      var thread = threads[i];
      var pos = new google.maps.LatLng(thread.location.latitude,thread.location.longitude);

      if(!thread.visible) continue;

      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: image,
        title: 'Thread #'+thread.id
      });

    };

    map.setCenter(userLocation);
  },
  handleNoGeolocation(errorFlag) {
    var map = this.map;

    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: new this.google.maps.LatLng(60, 105),
      content: content
    };

    var infowindow = new this.google.maps.InfoWindow(options);
    map.setCenter(options.position);
  },
  render() {

      return (
        <div className="panel panel-default map">
          <div className="panel-heading">
            <h3 className="panel-title"><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span> Map</h3>
          </div>

          <div className="panel-body">
            <div id="map-canvas" className="map-map"/>
          </div>
        </div>
      );
  }
})

export default Map;
