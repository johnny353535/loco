const React = require('react');


var Setup = React.createClass({
  getInitialState(){
    var username = this.props.username;

    return {
      username: username,
      usernameIsValid: this.props.usernameIsValid(username)
    }
  },
  verifyUsername(){
    var username = this.refs.usernameInput.getDOMNode().value;

    this.setState({
      username: username,
      usernameIsValid: this.props.usernameIsValid(username)
    });
  },
  setUsername(){
    var username = this.state.username;
    this.props.setUsername(username); // Save username
  },
  getLocationAccess(){

  },
  render() {

    var usernameOk = this.state.usernameIsValid;
    var locationOk = !!this.props.location;

    var showUsernamePanel = usernameOk ? 'panel-success' : 'panel-danger';
    var showLocationPanel = locationOk ? 'panel-success' : 'panel-danger';

    var usernameStatus = usernameOk ? 'glyphicon-ok' : 'glyphicon-remove';
    var locationStatus = locationOk ? 'glyphicon-ok' : 'glyphicon-remove';

    var getStartedBtn = (usernameOk && locationOk) ? <button type="button" className="btn btn-primary" onClick={this.setUsername}>Get started!</button> : null;

    return (
      <div className="setup">
        <div className={"panel username "+showUsernamePanel}>
          <div className="panel-heading">
            <span className="status"><span className={"glyphicon "+usernameStatus}></span></span>
            <h3 className="panel-title"><span className="glyphicon glyphicon-user"></span> Username required</h3>
          </div>

          <div className="panel-body">
            <span>Please enter a username. (At least 6 characters)</span>
            <input type="text" className="form-control setup-usernameInput" placeholder="Username" value={this.props.username} onChange={this.verifyUsername} ref="usernameInput" />
          </div>
        </div>
        <div className={"panel location "+showLocationPanel}>
          <div className="panel-heading">
            <span className="status"><span className={"glyphicon "+locationStatus}></span></span>
            <h3 className="panel-title"><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span> Location access required</h3>
          </div>

          <div className="panel-body">
            <span>Loco needs the permission to access your location. Please allow location access via your browser.</span>
          </div>
        </div>

        {getStartedBtn}
      </div>
    );
  }
})

export default Setup;
