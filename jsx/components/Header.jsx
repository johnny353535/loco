var React = require('react');

import { Link } from 'react-router';
import { ButtonLink, NavItemLink } from 'react-router-bootstrap';


let Header = React.createClass({
  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="app" className="navbar-brand">LOCO</Link>
            </div>

            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <NavItemLink to="threads"><span className="glyphicon glyphicon-list"></span> Threads</NavItemLink>
                <NavItemLink to="map"><span className="glyphicon glyphicon-map-marker"></span> Map</NavItemLink>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <NavItemLink to="/threads/new"><span className="glyphicon glyphicon-send"></span> Publish Thread</NavItemLink>
                <NavItemLink to="/setup"><span className="glyphicon glyphicon-cog"></span></NavItemLink>
              </ul>

            </div>
          </div>
        </nav>
      );
    }
});

export default Header;
