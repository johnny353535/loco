console.log('Server');

var express = require('express');
var app = express();
var path = require('path');

var React = require('react');
var Router = require('react-router');

import routes from './routes.jsx';


var App = require('./components/App.jsx')

app.use(function(req, res, next) {

  var router = Router.create({
    location: req.url,
    routes: routes,
    onAbort: function defaultAbortHandler(abortReason, location) {
      console.log("nooooooo!!!!", abortReason);
      router.makePath(abortReason.to, abortReason.params, abortReason.query);
      res.redirect('/threads');
    }
  })

  router.run(function(Handler, state) {
    var html = (
       <html>
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Loco server-rendered</title>
            <link rel="stylesheet" type="text/css" href="http://localhost:8000/public/css/style.css" />
          </head>
          <body>
            <Handler/>
            <script src="http://localhost:8000/public/js/client.js"></script>
          </body>
        </html>
      );

    return res.send(React.renderToStaticMarkup(html));

  })
})


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Loco server listening at http://%s:%s', host, port);

});
