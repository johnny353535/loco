import React from 'react';
import { Link } from 'react-router';
import Moment from 'moment';
import Geolib from 'geolib';


let ThreadList = React.createClass({
  getInitialState(){
    return {threads: this.props.threads.toJSON()};
  },
  render() {

    var _this = this;
    var threads = this.state.threads;

    threads = threads.map(function(thread){

      var time = Moment(thread.date, "x").format();
      var timeDiff = Moment(thread.date, "x").fromNow();

      var locationDiff = Geolib.getDistance(_this.props.location, thread.location) + ' meters away';

      return (
        <Link to="thread" params={{threadId: thread.id}} key={thread.id} className="list-group-item">
          <span>{thread.title}</span>
          <span className="badge">{locationDiff}</span>
          <h5>
            <span className="label label-warning"><span className="glyphicon glyphicon-user"></span> {thread.user}</span>
             <span className="label label-success" title={time}><span className="glyphicon glyphicon-time"></span> {timeDiff}</span>
             <span className="label label-info"><span className="glyphicon glyphicon-record"></span> {locationDiff}</span>
          </h5>
        </Link>
      )
    });

    return (
      <div className="panel panel-default thread-list">
        <div className="panel-heading">
          <h3 className="panel-title"><span className="glyphicon glyphicon-list" aria-hidden="true"></span> Nearest Threads</h3>
        </div>

        {/*<!--
        <div className="panel-body">

          <span><b>Sort by:</b><span>

          <div className="btn-group" role="group" aria-label="...">
            <button type="button" className="btn btn-default">Closest</button>
            <button type="button" className="btn btn-default">Most popular</button>
          </div>

        </div>
      -->*/}

        <div className="list-group">
          {threads.length ? threads : <span>No nearby threads found!</span>}
        </div>
      </div>
    );
  }
})

export default ThreadList;
