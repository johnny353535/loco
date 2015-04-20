/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	console.log("Server");

	var express = __webpack_require__(2);
	var app = express();
	var path = __webpack_require__(7);

	var React = __webpack_require__(3);
	var Router = __webpack_require__(4);

	var routes = _interopRequire(__webpack_require__(5));

	var App = __webpack_require__(6);

	app.use(function (req, res, next) {

	  var router = Router.create({
	    location: req.url,
	    routes: routes,
	    onAbort: function defaultAbortHandler(abortReason, location) {
	      console.log("nooooooo!!!!", abortReason);
	      router.makePath(abortReason.to, abortReason.params, abortReason.query);
	      res.redirect("/threads");
	    }
	  });

	  router.run(function (Handler, state) {
	    var html = React.createElement("html", null, React.createElement("head", null, React.createElement("meta", { charSet: "utf-8" }), React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), React.createElement("title", null, "Loco server-rendered"), React.createElement("link", { rel: "stylesheet", type: "text/css", href: "http://localhost:8000/public/css/style.css" })), React.createElement("body", null, React.createElement(Handler, null), React.createElement("script", { src: "http://localhost:8000/public/js/client.js" })));

	    return res.send(React.renderToStaticMarkup(html));
	  });
	});

	var server = app.listen(3000, function () {

	  var host = server.address().address;
	  var port = server.address().port;

	  console.log("Loco server listening at http://%s:%s", host, port);
	});

	/* REACT HOT LOADER */ })(); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "server.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	var React = __webpack_require__(3);

	var _reactRouter = __webpack_require__(4);

	var Route = _reactRouter.Route;
	var DefaultRoute = _reactRouter.DefaultRoute;
	var Redirect = _reactRouter.Redirect;
	var RouteHandler = _reactRouter.RouteHandler;

	var ThreadList = _interopRequire(__webpack_require__(11));

	var Thread = _interopRequire(__webpack_require__(12));

	var NewThread = _interopRequire(__webpack_require__(13));

	var Map = _interopRequire(__webpack_require__(14));

	var Setup = _interopRequire(__webpack_require__(15));

	var App = _interopRequire(__webpack_require__(6));

	module.exports = React.createElement(Route, { name: "app", path: "/", handler: App }, React.createElement(Redirect, { from: "/", to: "/threads" }), React.createElement(Route, { name: "threads", path: "/threads", handler: ThreadList }), React.createElement(Route, { name: "newThread", path: "/threads/new", handler: NewThread }), React.createElement(Route, { name: "thread", path: "/thread/:threadId", handler: Thread }), React.createElement(Route, { name: "map", path: "/map", handler: Map }), React.createElement(Route, { name: "setup", path: "/setup", handler: Setup }));

	/* REACT HOT LOADER */ })(); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	var React = _interopRequire(__webpack_require__(3));

	var RouteHandler = __webpack_require__(4).RouteHandler;

	var jQuery = _interopRequire(__webpack_require__(8));

	// Only include Bootstrap & Google Maps if run in the browser
	if (typeof window !== "undefined") {
	  window.jQuery = jQuery;
	  var Bootstrap = __webpack_require__(9);
	  var GoogleMapsLoader = __webpack_require__(10);
	}

	var Header = _interopRequire(__webpack_require__(16));

	var Setup = _interopRequire(__webpack_require__(15));

	var ThreadStore = _interopRequire(__webpack_require__(17));

	var threads = __webpack_require__(18).threads;

	var localStorage = typeof window != "undefined" ? window.localStorage : null;
	var navigator = typeof window != "undefined" ? window.navigator : null;

	// Shim geolocation and localstorage if the app is run on the server
	if (typeof window == "undefined") {

	  var localStorage = {
	    data: {},
	    setItem: function setItem(key, value) {
	      this.data[key] = value;
	    },
	    getItem: function getItem(key) {
	      return this.data[key] ? this.data[key] : false;
	    }
	  };

	  var navigator = {};
	  navigator.geolocation = {};
	  navigator.geolocation.getCurrentPosition = function (callback, error) {
	    var dummyLocation = { timestamp: 1429100674214, coords: { speed: null, heading: null, altitudeAccuracy: null, accuracy: 150, altitude: null, longitude: 9.999, latitude: 46.999 } };
	    callback(dummyLocation);
	  };
	} else {
	  var GoogleMapsLoader = __webpack_require__(10);
	}

	// App
	var App = React.createClass({
	  displayName: "App",

	  getInitialState: function getInitialState() {
	    return {
	      username: localStorage.getItem("loco-username") ? localStorage.getItem("loco-username") : null,
	      location: localStorage.getItem("loco-location") ? JSON.parse(localStorage.getItem("loco-location")) : null };
	  },
	  componentWillMount: function componentWillMount() {
	    this.threadStore = new ThreadStore(threads);
	    console.log(this.state);
	  },
	  componentDidMount: function componentDidMount() {

	    if (typeof window == "undefined") {
	      return;
	    }GoogleMapsLoader.load((function (google) {
	      this.google = google;
	      this.getUserLocation();
	    }).bind(this));
	  },
	  setUsername: function setUsername(username) {
	    if (this.usernameIsValid(username)) {

	      var newState = this.state;
	      newState.username = username;
	      this.setState(newState);

	      localStorage.setItem("loco-username", username);
	    } else {
	      console.warn("Username invalid!", username);
	    }
	  },
	  usernameIsValid: function usernameIsValid(username) {
	    return username ? !!(username.length > 5) : false; //Username needs at least 6 characters
	  },
	  getUserLocation: function getUserLocation() {

	    console.log("Checking for user's location");

	    // Get the user's location
	    navigator.geolocation.getCurrentPosition((function (position) {

	      console.log(JSON.stringify(position));

	      var location = position.coords;
	      console.log("User's location", location);

	      var newState = this.state;
	      newState.location = location;
	      this.setState(newState);

	      localStorage.setItem("loco-location", JSON.stringify(location));
	    }).bind(this), function () {
	      console.warn("User's location unavailable.");
	      alert("Threre was an error retreiving your location!");

	      var newState = this.state;
	      newState.location = null;
	      this.setState(newState);

	      localStorage.setItem("loco-location", null);
	    });
	  },
	  render: function render() {

	    var props = {
	      threads: this.threadStore,
	      username: this.state.username,
	      usernameIsValid: this.usernameIsValid,
	      setUsername: this.setUsername,
	      location: this.state.location
	    };

	    var usernameOk = this.usernameIsValid(this.state.username);
	    var locationOk = !!this.state.location;

	    return React.createElement("div", { className: "nav" }, React.createElement(Header, null), !usernameOk || !locationOk ? React.createElement(Setup, props) : React.createElement(RouteHandler, props));
	  }
	});

	module.exports = App;

	/* REACT HOT LOADER */ })(); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("jquery");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("bootstrap");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("google-maps");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	var React = _interopRequire(__webpack_require__(3));

	var Link = __webpack_require__(4).Link;

	var Moment = _interopRequire(__webpack_require__(19));

	var Geolib = _interopRequire(__webpack_require__(20));

	var Underscore = _interopRequire(__webpack_require__(21));

	var ThreadList = React.createClass({
	  displayName: "ThreadList",

	  getInitialState: function getInitialState() {
	    return {
	      threads: this.props.threads.toJSON(),
	      sortBy: "closest"
	    };
	  },
	  sortThreads: function sortThreads(order) {
	    this.setState({
	      threads: this.props.threads.toJSON(),
	      sortBy: order
	    });
	  },
	  render: function render() {

	    var _this = this;
	    var now = Date.now();

	    var threads = this.state.threads;

	    switch (this.state.sortBy) {
	      case "closest":
	        threads = Underscore.sortBy(threads, function (thread) {
	          return Geolib.getDistance(_this.props.location, thread.location);
	        });
	        break;
	      case "recent":
	        threads = Underscore.sortBy(threads, function (thread) {
	          return now - thread.date;
	        });
	        break;
	    }

	    threads = threads.map((function (thread) {

	      var time = Moment(thread.date, "x").format();
	      var timeDiff = Moment(thread.date, "x").fromNow();

	      var locationDiff = parseInt(Geolib.getDistance(_this.props.location, thread.location));
	      var badgeContent = this.state.sortBy == "closest" ? locationDiff + " meters away" : this.state.sortBy == "recent" ? timeDiff : "";

	      if (locationDiff > thread.reach) return false;

	      return React.createElement(Link, { to: "thread", params: { threadId: thread.id }, key: thread.id, className: "list-group-item" }, React.createElement("span", null, thread.title), React.createElement("span", { className: "badge" }, badgeContent), React.createElement("h5", null, React.createElement("span", { className: "label label-warning" }, React.createElement("span", { className: "glyphicon glyphicon-user" }), " ", thread.user), React.createElement("span", { className: "label label-success", title: time }, React.createElement("span", { className: "glyphicon glyphicon-time" }), " ", timeDiff), React.createElement("span", { className: "label label-info" }, React.createElement("span", { className: "glyphicon glyphicon-record" }), " ", locationDiff, " meters away")));
	    }).bind(this));

	    return React.createElement("div", { className: "panel panel-default thread-list" }, React.createElement("div", { className: "panel-heading" }, React.createElement("div", { className: "sortByWrapper" }, React.createElement("div", { className: "btn-group", role: "group" }, React.createElement("button", { type: "button", className: "btn btn-default btn-xs " + (!!(_this.state.sortBy == "closest") ? "active" : null), onClick: function onClick() {
	        _this.sortThreads("closest");
	      } }, React.createElement("span", { className: "glyphicon glyphicon-map-marker" }), " Closest"), React.createElement("button", { type: "button", className: "btn btn-default btn-xs " + (!!(_this.state.sortBy == "recent") ? "active" : null), onClick: function onClick() {
	        _this.sortThreads("recent");
	      } }, React.createElement("span", { className: "glyphicon glyphicon-time" }), " Recent"))), React.createElement("h3", { className: "panel-title" }, React.createElement("span", { className: "glyphicon glyphicon-list" }), " Threads")), React.createElement("div", { className: "list-group" }, threads.length ? threads : React.createElement("span", null, "No nearby threads found!")));
	  }
	});

	module.exports = ThreadList;

	/* REACT HOT LOADER */ })(); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ThreadList.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	var React = _interopRequire(__webpack_require__(3));

	var Moment = _interopRequire(__webpack_require__(19));

	var Geolib = _interopRequire(__webpack_require__(20));

	var ThreadStore = _interopRequire(__webpack_require__(17));

	if (typeof window !== "undefined") {
	  var GoogleMapsLoader = __webpack_require__(10);
	}

	var Thread = React.createClass({
	  displayName: "Thread",

	  getInitialState: function getInitialState() {
	    var router = this.context.router;

	    var threadId = router.getCurrentParams().threadId;
	    return { thread: this.props.threads.get(threadId) };
	  },
	  componentDidMount: function componentDidMount() {

	    if (!window) {
	      return;
	    }GoogleMapsLoader.load((function (google) {
	      this.google = google;
	      if (this.state.thread.get("visible")) this.initializeMap();
	    }).bind(this));
	  },
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	  initializeMap: function initializeMap() {

	    if (!this.state.thread.get("visible")) {
	      return;
	    }var _this = this;
	    var map = this.map;

	    var mapOptions = {
	      zoom: 13,
	      disableDefaultUI: true
	    };
	    map = new this.google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	    var location = this.state.thread.get("location");
	    var pos = new this.google.maps.LatLng(location.latitude, location.longitude);

	    var marker = new this.google.maps.Marker({
	      position: pos,
	      map: map,
	      title: "Your location"
	    });

	    map.setCenter(pos);
	  },
	  addCommentHandler: function addCommentHandler() {

	    var threads = this.props.threads;
	    var thread = this.state.thread;

	    var comment = {
	      id: Math.floor(Math.random() * 10000),
	      text: this.refs.commentText.getDOMNode().value,
	      username: this.props.username,
	      location: this.props.location,
	      date: Date.now()
	    };

	    thread.attributes.comments.add(comment);
	    this.refs.commentText.getDOMNode().value = ""; // Reset input field

	    threads.trigger("change");
	    this.setState({
	      thread: threads.get(thread.id)
	    });
	  },
	  render: function render() {

	    var thread = this.state.thread.toJSON();
	    var time = Moment(thread.date, "x").format();
	    var timeDiff = Moment(thread.date, "x").fromNow();

	    var distance = parseInt(Geolib.getDistance(this.props.location, thread.location)) + " meters away";

	    var comments = thread.comments.toJSON();

	    var comments = comments.map(function (comment) {
	      var time = Moment(comment.date, "x").format();
	      var timeDiff = Moment(comment.date, "x").fromNow();

	      return React.createElement("li", { className: "list-group-item", key: comment.id }, React.createElement("span", null, comment.text), React.createElement("h5", { className: "comment-info" }, React.createElement("span", { className: "label label-warning" }, React.createElement("span", { className: "glyphicon glyphicon-user", "aria-hidden": "true" }), " ", comment.username), React.createElement("span", { className: "label label-success" }, React.createElement("span", { className: "glyphicon glyphicon-time", "aria-hidden": "true" }), " ", timeDiff)));
	    });

	    return React.createElement("div", { className: "panel panel-default view-thread" }, React.createElement("div", { className: "panel-heading" }, React.createElement("h3", { className: "panel-title" }, React.createElement("span", { className: "glyphicon glyphicon-bookmark", "aria-hidden": "true" }), " ", thread.title)), React.createElement("div", { className: "panel-body" }, thread.visible ? React.createElement("div", { id: "map-canvas", className: "view-thread-map" }) : "", React.createElement("h5", null, React.createElement("span", { className: "label label-warning" }, React.createElement("span", { className: "glyphicon glyphicon-user", "aria-hidden": "true" }), " ", thread.user), React.createElement("span", { className: "label label-success" }, React.createElement("span", { className: "glyphicon glyphicon-time", "aria-hidden": "true" }), " ", timeDiff), React.createElement("span", { className: "label label-info" }, React.createElement("span", { className: "glyphicon glyphicon-record", "aria-hidden": "true" }), " ", distance)), React.createElement("div", { className: "panel panel-default thread-list" }, React.createElement("div", { className: "panel-heading" }, "Comments"), React.createElement("ul", { className: "list-group" }, comments), React.createElement("div", { className: "panel-footer" }, React.createElement("div", { className: "input-group" }, React.createElement("input", { type: "text", className: "form-control", placeholder: "Comment", ref: "commentText" }), React.createElement("span", { className: "input-group-btn comment-btn-wrapper" }, React.createElement("button", { className: "btn btn-default", type: "submit", onClick: this.addCommentHandler }, "Submit")))))));
	  }
	});

	module.exports = Thread;

	/* REACT HOT LOADER */ })(); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Thread.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var key in props) {
	      var prop = props[key];prop.configurable = true;if (prop.value) prop.writable = true;
	    }Object.defineProperties(target, props);
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	var _get = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc && desc.writable) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};

	var _inherits = function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) subClass.__proto__ = superClass;
	};

	var _classCallCheck = function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var React = _interopRequire(__webpack_require__(3));

	var Link = __webpack_require__(4).Link;

	if (typeof window !== "undefined") {
	  var GoogleMapsLoader = __webpack_require__(10);
	}

	var NewThread = (function (_React$Component) {
	  function NewThread(props) {
	    _classCallCheck(this, NewThread);

	    _get(Object.getPrototypeOf(NewThread.prototype), "constructor", this).call(this, props);
	    this.state = {
	      title: "",
	      reach: 100,
	      showLocationPin: true,
	      id: Math.floor(Math.random() * 10000)
	    };
	  }

	  _inherits(NewThread, _React$Component);

	  _createClass(NewThread, {
	    componentDidMount: {
	      value: function componentDidMount() {

	        if (!window) {
	          return;
	        }GoogleMapsLoader.load((function (google) {
	          this.google = google;
	          if (this.props.location) this.initializeMap();
	        }).bind(this));
	      }
	    },
	    componentDidUpdate: {
	      value: function componentDidUpdate(prevProps, prevState) {
	        if (this.props.location && prevProps.location != this.props.location) {
	          this.initializeMap();
	        }
	      }
	    },
	    willTransitionFrom: {
	      value: function willTransitionFrom(transition, element) {
	        console.log("Byeee");
	        if (this.refs.title.getDOMNode().value !== "") {
	          if (!confirm("You have unsaved information, are you sure you want to leave this page?")) {
	            transition.abort();
	          }
	        }
	      }
	    },
	    initializeMap: {
	      value: function initializeMap() {

	        var _this = this;
	        var map = this.map;
	        var pos = new this.google.maps.LatLng(this.props.location.latitude, this.props.location.longitude);

	        var mapOptions = {
	          zoom: 14,
	          disableDefaultUI: true
	        };

	        map = new this.google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	        if (_this.state.showLocationPin) {
	          var marker = new this.google.maps.Marker({
	            position: pos,
	            map: map,
	            title: "Your location"
	          });
	        }

	        var reachCircle = new this.google.maps.Circle({
	          strokeColor: "#2e6da4",
	          strokeOpacity: 0.8,
	          strokeWeight: 1,
	          fillColor: "#337ab7",
	          fillOpacity: 0.3,
	          map: map,
	          center: pos,
	          radius: _this.state.reach // Standard reach is 100m
	        });

	        map.setCenter(pos);
	      }
	    },
	    titleChangeHandler: {
	      value: function titleChangeHandler(event) {

	        var newState = this.state;
	        var title = event.target.value;
	        newState.title = title;

	        this.setState(newState);
	      }
	    },
	    reachChangeHandler: {
	      value: function reachChangeHandler(event) {
	        console.log(this);

	        var newState = this.state;
	        var reach = parseInt(event.target.value);
	        newState.reach = reach;

	        this.setState(newState);

	        // Update map
	        this.initializeMap();
	      }
	    },
	    showLocationHandler: {
	      value: function showLocationHandler(event) {

	        var newState = this.state;
	        var checked = event.target.checked;
	        newState.showLocationPin = checked;

	        this.setState(newState);

	        // Update map
	        this.initializeMap();
	      }
	    },
	    submitThread: {
	      value: function submitThread() {
	        var thread = {
	          id: this.state.id,
	          date: Date.now(),
	          user: this.props.username,
	          title: this.refs.title.getDOMNode().value,
	          location: this.props.location,
	          reach: this.state.reach,
	          visible: this.state.showLocationPin
	        };

	        this.props.threads.add(thread);
	      }
	    },
	    render: {
	      value: function render() {
	        console.log(this);

	        var _this = this;
	        var reachOptions = [100, 200, 300, 400, 500];
	        var reachInputs = reachOptions.map(function (reach) {
	          return React.createElement("label", { htmlFor: "reach" + reach, key: "reach" + reach }, React.createElement("input", { id: "reach" + reach, type: "radio", name: "reach", value: reach, onClick: _this.reachChangeHandler.bind(_this), defaultChecked: _this.state.reach == reach }), React.createElement("span", null, reach));
	        });

	        return React.createElement("div", { className: "panel panel-default newThread" }, React.createElement("div", { className: "panel-heading" }, React.createElement("h3", { className: "panel-title" }, React.createElement("span", { className: "glyphicon glyphicon-send" }), " Publish Thread")), React.createElement("div", { className: "panel-body" }, React.createElement("ul", { className: "thread-options-list" }, React.createElement("li", null, React.createElement("div", { className: "input-group" }, React.createElement("span", { className: "input-group-addon", id: "sizing-addon2" }, React.createElement("span", { className: "glyphicon glyphicon-font", "aria-hidden": "true" }), " Title"), React.createElement("input", { type: "text", className: "form-control", placeholder: "Title", value: _this.state.title, onChange: _this.titleChangeHandler.bind(_this), ref: "title" }))), React.createElement("li", null, React.createElement("div", { id: "map-canvas", className: "newThread-map" })), React.createElement("li", null, React.createElement("div", { className: "input-group" }, React.createElement("span", { className: "input-group-addon", id: "sizing-addon2" }, React.createElement("span", { className: "glyphicon glyphicon-record" }), " Distance"), React.createElement("div", { className: "input-group-btn" }, React.createElement("fieldset", { className: "form-control reach-radio-wrapper" }, reachInputs)))), React.createElement("li", null, React.createElement("div", { className: "input-group" }, React.createElement("span", { className: "input-group-addon", id: "sizing-addon2" }, React.createElement("span", { className: "glyphicon glyphicon-sunglasses", "aria-hidden": "true" }), " Show location"), React.createElement("div", { className: "input-group-btn" }, React.createElement("div", { className: "form-control" }, React.createElement("input", { type: "checkbox", ref: "showLocation", onClick: this.showLocationHandler.bind(this), defaultChecked: true }))))), React.createElement("li", null, React.createElement(Link, { to: "/thread/" + this.state.id, className: "btn btn-primary" + (!_this.state.title.length ? " disabled" : " "), onClick: this.submitThread.bind(this) }, React.createElement("span", { className: "glyphicon glyphicon-send", "aria-hidden": "true" }), " Publish"), React.createElement(Link, { to: "threads", className: "btn btn-default" }, React.createElement("span", { className: "glyphicon glyphicon-remove", "aria-hidden": "true" }), " Cancel")))));
	      }
	    }
	  });

	  return NewThread;
	})(React.Component);

	module.exports = NewThread;

	/* REACT HOT LOADER */ })(); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NewThread.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	var React = _interopRequire(__webpack_require__(3));

	if (typeof window !== "undefined") {
	  var GoogleMapsLoader = __webpack_require__(10);
	}

	var Map = React.createClass({
	  displayName: "Map",

	  componentDidMount: function componentDidMount() {

	    if (typeof window == "undefined") {
	      return;
	    }

	    GoogleMapsLoader.load((function (google) {
	      this.google = google;
	      console.log(google);
	      this.initializeMap();
	    }).bind(this));
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    if (this.props.location && prevProps.location != this.props.location && this.google) {
	      this.initializeMap();
	    }
	  },
	  initializeMap: function initializeMap() {

	    var _this = this;
	    var map = this.map;
	    var userLocation = new this.google.maps.LatLng(this.props.location.latitude, this.props.location.longitude);

	    var mapOptions = {
	      zoom: 14,
	      disableDefaultUI: false
	    };

	    map = new this.google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	    var marker = new google.maps.Marker({
	      position: userLocation,
	      map: map,
	      title: "Your location"
	    });

	    var image = {
	      url: "public/img/marker_blue.png"
	    };

	    var threads = this.props.threads.toJSON();
	    console.log(threads);
	    for (var i = 0; i < threads.length; i++) {

	      var thread = threads[i];
	      var pos = new google.maps.LatLng(thread.location.latitude, thread.location.longitude);

	      if (!thread.visible) continue;

	      var marker = new google.maps.Marker({
	        position: pos,
	        map: map,
	        icon: image,
	        title: "Thread #" + thread.id
	      });
	    };

	    map.setCenter(userLocation);
	  },
	  handleNoGeolocation: function handleNoGeolocation(errorFlag) {
	    var map = this.map;

	    if (errorFlag) {
	      var content = "Error: The Geolocation service failed.";
	    } else {
	      var content = "Error: Your browser doesn't support geolocation.";
	    }

	    var options = {
	      map: map,
	      position: new this.google.maps.LatLng(60, 105),
	      content: content
	    };

	    var infowindow = new this.google.maps.InfoWindow(options);
	    map.setCenter(options.position);
	  },
	  render: function render() {

	    return React.createElement("div", { className: "panel panel-default map" }, React.createElement("div", { className: "panel-heading" }, React.createElement("h3", { className: "panel-title" }, React.createElement("span", { className: "glyphicon glyphicon-map-marker", "aria-hidden": "true" }), " Map")), React.createElement("div", { className: "panel-body" }, React.createElement("div", { id: "map-canvas", className: "map-map" })));
	  }
	});

	module.exports = Map;

	/* REACT HOT LOADER */ })(); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Map.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	var React = _interopRequire(__webpack_require__(3));

	var Setup = React.createClass({
	  displayName: "Setup",

	  getInitialState: function getInitialState() {
	    var username = this.props.username;

	    return {
	      username: username,
	      usernameIsValid: this.props.usernameIsValid(username)
	    };
	  },
	  verifyUsername: function verifyUsername() {
	    var username = this.refs.usernameInput.getDOMNode().value;

	    this.setState({
	      username: username,
	      usernameIsValid: this.props.usernameIsValid(username)
	    });
	  },
	  setUsername: function setUsername() {
	    var username = this.state.username;
	    this.props.setUsername(username); // Save username
	  },
	  getLocationAccess: function getLocationAccess() {},
	  render: function render() {

	    var usernameOk = this.state.usernameIsValid;
	    var locationOk = !!this.props.location;

	    var showUsernamePanel = usernameOk ? "panel-success" : "panel-danger";
	    var showLocationPanel = locationOk ? "panel-success" : "panel-danger";

	    var usernameStatus = usernameOk ? "glyphicon-ok" : "glyphicon-remove";
	    var locationStatus = locationOk ? "glyphicon-ok" : "glyphicon-remove";

	    var getStartedBtn = usernameOk && locationOk ? React.createElement("button", { type: "button", className: "btn btn-primary", onClick: this.setUsername }, "Get started!") : null;

	    return React.createElement("div", { className: "setup" }, React.createElement("div", { className: "panel username " + showUsernamePanel }, React.createElement("div", { className: "panel-heading" }, React.createElement("span", { className: "status" }, React.createElement("span", { className: "glyphicon " + usernameStatus })), React.createElement("h3", { className: "panel-title" }, React.createElement("span", { className: "glyphicon glyphicon-user" }), " Username required")), React.createElement("div", { className: "panel-body" }, React.createElement("span", null, "Please enter a username. (At least 6 characters)"), React.createElement("input", { type: "text", className: "form-control setup-usernameInput", placeholder: "Username", value: this.props.username, onChange: this.verifyUsername, ref: "usernameInput" }))), React.createElement("div", { className: "panel location " + showLocationPanel }, React.createElement("div", { className: "panel-heading" }, React.createElement("span", { className: "status" }, React.createElement("span", { className: "glyphicon " + locationStatus })), React.createElement("h3", { className: "panel-title" }, React.createElement("span", { className: "glyphicon glyphicon-map-marker", "aria-hidden": "true" }), " Location access required")), React.createElement("div", { className: "panel-body" }, React.createElement("span", null, "Loco needs the permission to access your location. Please allow location access via your browser."))), getStartedBtn);
	  }
	});

	module.exports = Setup;

	/* REACT HOT LOADER */ })(); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Setup.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	"use strict";

	var _interopRequire = function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	var React = _interopRequire(__webpack_require__(3));

	var _reactRouter = __webpack_require__(4);

	var Router = _interopRequire(_reactRouter);

	var Link = _reactRouter.Link;

	var _reactRouterBootstrap = __webpack_require__(22);

	var ButtonLink = _reactRouterBootstrap.ButtonLink;
	var NavItemLink = _reactRouterBootstrap.NavItemLink;

	var Header = React.createClass({
	  displayName: "Header",

	  render: function render() {
	    return React.createElement("nav", { className: "navbar navbar-default navbar-fixed-top" }, React.createElement("div", { className: "container-fluid" }, React.createElement("div", { className: "navbar-header" }, React.createElement("button", { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1" }, React.createElement("span", { className: "icon-bar" }), React.createElement("span", { className: "icon-bar" }), React.createElement("span", { className: "icon-bar" })), React.createElement(Link, { to: "app", className: "navbar-brand" }, "LOCO")), React.createElement("div", { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" }, React.createElement("ul", { className: "nav navbar-nav" }, React.createElement(NavItemLink, { to: "threads" }, React.createElement("span", { className: "glyphicon glyphicon-list" }), " Threads"), React.createElement(NavItemLink, { to: "map" }, React.createElement("span", { className: "glyphicon glyphicon-map-marker" }), " Map")), React.createElement("ul", { className: "nav navbar-nav navbar-right" }, React.createElement(NavItemLink, { to: "/threads/new" }, React.createElement("span", { className: "glyphicon glyphicon-send" }), " Publish Thread"), React.createElement(NavItemLink, { to: "/setup" }, React.createElement("span", { className: "glyphicon glyphicon-cog" }))))));
	  }
	});

	module.exports = Header;
	/*<!-- Collect the nav links, forms, and other content for toggling -->*/

	/* REACT HOT LOADER */ })(); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.jsx" + ": " + err.message); } }); } } })(); }

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _backbone = __webpack_require__(23);

	var Model = _backbone.Model;
	var Collection = _backbone.Collection;

	var jQuery = _interopRequire(__webpack_require__(8));

	// Threads

	var ThreadStore = (function (_Collection) {
	  function ThreadStore(options) {
	    _classCallCheck(this, ThreadStore);

	    this.model = Thread;
	    _get(Object.getPrototypeOf(ThreadStore.prototype), "constructor", this).call(this, options);

	    this.on("add change", function () {
	      console.log("changed");
	      this.save();
	    });

	    console.log(this);
	  }

	  _inherits(ThreadStore, _Collection);

	  _createClass(ThreadStore, {
	    save: {
	      value: function save() {
	        console.log("Saved threads", this);
	        var threads = this.toJSON();

	        // JSONify comment stores
	        for (var i = 0; i < threads.length; i++) {
	          threads[i].comments = threads[i].comments.toJSON();
	        }

	        var data = {
	          threads: threads
	        };
	        console.log(data);

	        // Save threads to server
	        jQuery.ajax({
	          type: "POST",
	          url: "http://localhost:4000/setThreads",
	          data: data,
	          success: function success() {
	            console.log("Saved threads to server");
	          }
	        });
	      }
	    },
	    nearby: {
	      value: function nearby(location) {}
	    }
	  });

	  return ThreadStore;
	})(Collection);

	var Thread = (function (_Model) {
	  function Thread(options) {
	    _classCallCheck(this, Thread);

	    options.comments = new CommentStore(options.comments ? options.comments : []); // Ensure that comments are a threadstore and not an array
	    _get(Object.getPrototypeOf(Thread.prototype), "constructor", this).call(this, options);
	  }

	  _inherits(Thread, _Model);

	  return Thread;
	})(Model);

	// Comments

	var CommentStore = (function (_Collection2) {
	  function CommentStore(options) {
	    _classCallCheck(this, CommentStore);

	    this.model = Comment;
	    _get(Object.getPrototypeOf(CommentStore.prototype), "constructor", this).call(this, options);
	  }

	  _inherits(CommentStore, _Collection2);

	  return CommentStore;
	})(Collection);

	var Comment = (function (_Model2) {
	  function Comment() {
	    _classCallCheck(this, Comment);

	    if (_Model2 != null) {
	      _Model2.apply(this, arguments);
	    }
	  }

	  _inherits(Comment, _Model2);

	  return Comment;
	})(Model);

	module.exports = ThreadStore;

	/* REACT HOT LOADER */ })(); if (false) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jonashartweg/Projekte/loco/node_modules/react-hot-loader/makeExportsHot.js"), foundReactClasses = false; if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ThreadStore.js" + ": " + err.message); } }); } } })(); }

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"threads": [
			{
				"id": "9835",
				"date": "1429473863140",
				"user": "test123",
				"title": "test12",
				"location": {
					"speed": "",
					"heading": "",
					"altitudeAccuracy": "",
					"accuracy": "150",
					"altitude": "",
					"longitude": "9.999",
					"latitude": "46.999"
				},
				"reach": "200",
				"visible": "true",
				"comments": [
					{
						"id": "8576",
						"text": "asdasd",
						"username": "test123",
						"location": {
							"speed": "",
							"heading": "",
							"altitudeAccuracy": "",
							"accuracy": "150",
							"altitude": "",
							"longitude": "9.999",
							"latitude": "46.999"
						},
						"date": "1429473865067"
					}
				]
			},
			{
				"id": "8940",
				"date": "1429549608665",
				"user": "asdasdasd",
				"title": "asdasdasd",
				"location": {
					"speed": "",
					"heading": "",
					"altitudeAccuracy": "",
					"accuracy": "150",
					"altitude": "",
					"longitude": "9.999",
					"latitude": "46.997"
				},
				"reach": "100",
				"visible": "true"
			},
			{
				"id": "2794",
				"date": "1429549639966",
				"user": "asdasdasd",
				"title": "yooyoy",
				"location": {
					"speed": "",
					"heading": "",
					"altitudeAccuracy": "",
					"accuracy": "150",
					"altitude": "",
					"longitude": "9.999",
					"latitude": "46.997"
				},
				"reach": "100",
				"visible": "true"
			}
		]
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("moment");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("geolib");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("underscore");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react-router-bootstrap");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("backbone");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    draining = true;
	    var currentQueue;
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        var i = -1;
	        while (++i < len) {
	            currentQueue[i]();
	        }
	        len = queue.length;
	    }
	    draining = false;
	}
	process.nextTick = function (fun) {
	    queue.push(fun);
	    if (!draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);