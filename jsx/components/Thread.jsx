import React from 'react';
import ThreadStore from '../../stores/ThreadStore.js';

var GoogleMapsAPI = window.google.maps;


let Thread = React.createClass({
  getInitialState(){
    var { router } = this.context;
    var threadId = (router.getCurrentParams().threadId);
    return {thread: this.props.threads.get(threadId)};
  },
  componentDidMount(){
    this.initializeMap();
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  initializeMap() {

    var _this = this;
    var map = this.map;

    var mapOptions = {
      zoom: 13,
      disableDefaultUI: true
    };
    map = new GoogleMapsAPI.Map(document.getElementById('map-canvas'),
        mapOptions);

    var pos = {"timestamp":1428411429010,"coords":{"speed":null,"heading":null,"altitudeAccuracy":null,"accuracy":20,"altitude":null,"longitude":8,"latitude":52}};
    pos = new GoogleMapsAPI.LatLng(pos.coords.latitude, pos.coords.longitude);

    var marker = new google.maps.Marker({
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
    var comments = thread.comments.toJSON();

    var comments = comments.map(function(comment){

      return (
        <li className="list-group-item" key={comment.id}>
          <span>{comment.text}</span>
          <h5 className="comment-info">
            <span className="label label-warning"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> {comment.username}</span>
             <span className="label label-success"><span className="glyphicon glyphicon-time" aria-hidden="true"></span> {comment.date} ago</span>
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
          <p>{thread.text}</p>
          <div id="map-canvas" className="view-thread-map"/>
          <h5>
            <span className="label label-warning"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> {thread.user}</span>
             <span className="label label-success"><span className="glyphicon glyphicon-time" aria-hidden="true"></span> {thread.date} ago</span>
             <span className="label label-info"><span className="glyphicon glyphicon-record" aria-hidden="true"></span> {thread.location} away</span>
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
