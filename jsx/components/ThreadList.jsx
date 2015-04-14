import React from 'react';
import { Link } from 'react-router';
import Moment from 'moment';
import Geolib from 'geolib';
import Underscore from 'underscore';


let ThreadList = React.createClass({
  getInitialState(){
    return {
      threads: this.props.threads.toJSON(),
      sortBy: 'closest'
    };
  },
  sortThreads(order){
    this.setState({
      threads: this.props.threads.toJSON(),
      sortBy: order
    });
  },
  render() {

    var _this = this;
    var now = Date.now();

    var threads = this.state.threads;

    switch(this.state.sortBy) {
      case "closest":
        threads = Underscore.sortBy(threads, thread => Geolib.getDistance(_this.props.location, thread.location));
        break;
      case "recent":
        threads = Underscore.sortBy(threads, thread => (now - thread.date));
        break;
    }

    threads = threads.map(function(thread){

      var time = Moment(thread.date, "x").format();
      var timeDiff = Moment(thread.date, "x").fromNow();

      var locationDiff = parseInt(Geolib.getDistance(_this.props.location, thread.location));
      var badgeContent = this.state.sortBy == "closest" ? (locationDiff+' meters away') : this.state.sortBy = "recent" ? timeDiff : "";

      if(locationDiff > thread.reach) return false;

      return (
        <Link to="thread" params={{threadId: thread.id}} key={thread.id} className="list-group-item">
          <span>{thread.title}</span>
          <span className="badge">{badgeContent}</span>
          <h5>
            <span className="label label-warning"><span className="glyphicon glyphicon-user"></span> {thread.user}</span>
             <span className="label label-success" title={time}><span className="glyphicon glyphicon-time"></span> {timeDiff}</span>
             <span className="label label-info"><span className="glyphicon glyphicon-record"></span> {locationDiff} meters away</span>
          </h5>
        </Link>
      )
    }.bind(this));

    console.log(threads)

    return (
      <div className="panel panel-default thread-list">
        <div className="panel-heading">
          <div className="sortByWrapper">
            <div className="btn-group" role="group">
              <button type="button" className={"btn btn-default btn-xs "+(!!(this.state.sortBy == "closest") ? "active" : null)} onClick={function(){ _this.sortThreads("closest"); }}><span className="glyphicon glyphicon-map-marker"></span> Closest</button>
              <button type="button" className={"btn btn-default btn-xs "+(!!(this.state.sortBy == "recent") ? "active" : null)} onClick={function(){ _this.sortThreads("recent"); }}><span className="glyphicon glyphicon-time"></span> Recent</button>
            </div>
          </div>
          <h3 className="panel-title"><span className="glyphicon glyphicon-list"></span> Threads</h3>
        </div>
        <div className="list-group">
          {threads.length ? threads : <span>No nearby threads found!</span>}
        </div>
      </div>
    );
  }
})

export default ThreadList;
