import React from 'react';
import Moment from 'moment';
import Geolib from 'geolib';
import ThreadStore from '../../stores/ThreadStore.js';

if(typeof window !== "undefined"){
  var GoogleMapsLoader = require('google-maps');
}


let Thread = React.createClass({
  getInitialState(){
    var { router } = this.context;
    var threadId = (router.getCurrentParams().threadId);
    return {thread: this.props.threads.get(threadId)};
  },
  componentDidMount(){

    if(!window) return;

    GoogleMapsLoader.load(function(google) {
      this.google = google;
      if(this.state.thread.get("visible")) this.initializeMap();
    }.bind(this));
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  initializeMap() {

    if(!this.state.thread.get("visible")) return;

    var _this = this;
    var map = this.map;

    var mapOptions = {
      zoom: 13,
      disableDefaultUI: true
    };
    map = new this.google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var location = this.state.thread.get("location");
    var pos = new this.google.maps.LatLng(location.latitude, location.longitude);

    var marker = new this.google.maps.Marker({
      position: pos,
      map: map,
      title: 'Your location'
    });

    map.setCenter(pos);

  },
  addCommentHandler(){

    var threads = this.props.threads;
    var thread = this.state.thread;

    var comment = {
      id: Math.floor(Math.random()*10000),
      text: this.refs.commentText.getDOMNode().value,
      username: this.props.username,
      location: this.props.location,
      date: Date.now()
    }

    thread.attributes.comments.add(comment);
    this.refs.commentText.getDOMNode().value = ""; // Reset input field

    threads.trigger("change");
    this.setState({
      thread: threads.get(thread.id)
    })
  },
  render() {

    var thread = this.state.thread.toJSON();
    var time = Moment(thread.date, "x").format();
    var timeDiff = Moment(thread.date, "x").fromNow();

    var distance = parseInt(Geolib.getDistance(this.props.location, thread.location)) + ' meters away';

    var comments = thread.comments.toJSON();

    var comments = comments.map(function(comment){
      var time = Moment(comment.date, "x").format();
      var timeDiff = Moment(comment.date, "x").fromNow();

      return (
        <li className="list-group-item" key={comment.id}>
          <span>{comment.text}</span>
          <h5 className="comment-info">
            <span className="label label-warning"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> {comment.username}</span>
             <span className="label label-success"><span className="glyphicon glyphicon-time" aria-hidden="true"></span> {timeDiff}</span>
          </h5>
        </li>
      )
    })

    return (
      <div className="panel panel-default view-thread">
        <div className="panel-heading">
          <h3 className="panel-title"><span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span> {thread.title}</h3>
        </div>

        <div className="panel-body">
          {thread.visible ? <div id="map-canvas" className="view-thread-map"/> : ""}
          <h5>
            <span className="label label-warning"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> {thread.user}</span>
             <span className="label label-success"><span className="glyphicon glyphicon-time" aria-hidden="true"></span> {timeDiff}</span>
             <span className="label label-info"><span className="glyphicon glyphicon-record" aria-hidden="true"></span> {distance}</span>
          </h5>

          <div className="panel panel-default thread-list">
            <div className="panel-heading">Comments</div>

            <ul className="list-group">
              {comments}
            </ul>
            <div className="panel-footer">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Comment" ref="commentText" />
                <span className="input-group-btn comment-btn-wrapper">
                  <button className="btn btn-default" type="submit" onClick={this.addCommentHandler}>Submit</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
})

export default Thread;
