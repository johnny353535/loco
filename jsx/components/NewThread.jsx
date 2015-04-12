import React from 'react';
import { Link } from 'react-router';

var GoogleMapsAPI = window.google.maps;

var NewThread = React.createClass({
  getInitialState(){
    return {
      title: "",
      reach: 100,
      showLocationPin: true,
      id: Math.floor(Math.random()*10000)
    }
  },
  componentDidMount(){
    if(this.props.location){
      this.initializeMap();
    }
  },
  componentDidUpdate(prevProps, prevState){
    if(this.props.location && prevProps.location != this.props.location){
      this.initializeMap();
    }
  },
  initializeMap() {

    var _this = this;
    var map = this.map;
    var pos = new google.maps.LatLng(this.props.location.latitude,this.props.location.longitude);

    var mapOptions = {
      zoom: 14,
      disableDefaultUI: true
    };

    map = new GoogleMapsAPI.Map(document.getElementById('map-canvas'), mapOptions);

    if(_this.state.showLocationPin){
      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Your location'
      });
    }

    var reachCircle = new google.maps.Circle({
      strokeColor: '#2e6da4',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#337ab7',
      fillOpacity: 0.3,
      map: map,
      center: pos,
      radius: _this.state.reach // Standard reach is 100m
    });

    map.setCenter(pos);

  },
  titleChangeHandler(event){

    var newState = this.state;
    var title = event.target.value;
    newState.title = title;

    this.setState(newState);
  },
  reachChangeHandler(event){

    var newState = this.state;
    var reach = parseInt(event.target.value);
    newState.reach = reach;

    this.setState(newState);

    // Update map
    this.initializeMap();

    // Update map
    this.initializeMap();
  },
  showLocationHandler(event){

    var newState = this.state;
    var checked = event.target.checked;;
    newState.showLocationPin = checked;

    this.setState(newState);

    // Update map
    this.initializeMap();
  },
  submitThread(){
    var thread =
      {
        id: this.state.id,
        date: Date.now(),
        user: this.props.username,
        title: this.refs.title.getDOMNode().value,
        location: this.props.location,
        reach: this.state.reach,
        visible: this.state.showLocationPin
      }

    this.props.threads.add(thread);
  },
  render() {

    var _this = this;
    var reachOptions = [100,200,300,400,500];
    var reachInputs = reachOptions.map(function(reach){
      return (<label htmlFor={'reach'+reach} key={'reach'+reach}>
                <input id={'reach'+reach} type='radio' name='reach' value={reach} onClick={_this.reachChangeHandler} defaultChecked={(_this.state.reach == reach)}/>
                <span>{reach}</span>
              </label>);
    });

    return (
      <div className="panel panel-default newThread">
        <div className="panel-heading">
          <h3 className="panel-title"><span className="glyphicon glyphicon-send"></span> Publish Thread</h3>
        </div>

        <div className="panel-body">

          <ul className="thread-options-list">

            <li>
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2"><span className="glyphicon glyphicon-font" aria-hidden="true"></span> Title</span>
                <input type="text" className="form-control" placeholder="Title" value={_this.state.title} onChange={_this.titleChangeHandler} ref="title"/>
              </div>
            </li>
            <li>
              <div id="map-canvas" className="newThread-map"/>
            </li>
            <li>
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2"><span className="glyphicon glyphicon-record" aria-hidden="true"></span> Distance</span>
                <div className="input-group-btn">
                  <fieldset className="form-control reach-radio-wrapper">
                    {reachInputs}
                  </fieldset>
                </div>
              </div>
            </li>
            <li>
              <div className="input-group">
                <span className="input-group-addon" id="sizing-addon2"><span className="glyphicon glyphicon-sunglasses" aria-hidden="true"></span> Show location</span>
                <div className="input-group-btn">
                  <div className="form-control">
                    <input type="checkbox" ref="showLocation" onClick={this.showLocationHandler} defaultChecked/>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to={"/thread/"+this.state.id} className={"btn btn-primary"+(!_this.state.title.length ? " disabled" : " ")} onClick={this.submitThread}><span className="glyphicon glyphicon-send" aria-hidden="true"></span> Publish</Link>
              <Link to="threads" className="btn btn-default"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancel</Link>
            </li>
          </ul>

        </div>
      </div>
    );
  }
})

export default NewThread;
