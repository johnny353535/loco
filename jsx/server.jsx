var express = require('express');
var app = express();
var path = require('path');

var React = require('react');
var Router = require('react-router');

var App = require('./components/App.jsx')

// var router = Router.create({
//   routes: routes,
//   location: "/threads",
//   onAbort: function defaultAbortHandler(abortReason, location) {
//     console.log("nooooooo!!!!", abortReason);
//     router.makePath(abortReason.to, abortReason.params, abortReason.query);
//     res.redirect('/threads');
//   }
// });

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {

  var path = "/";

  //router.run(function (Handler) {
    var appHtml = React.renderToString(<App />);

    var html = (
       <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Loco server-rendered</title>
            <link rel="stylesheet" type="text/css" href="css/style.css" />
          </head>
          <body>
            {appHtml}
            <script src="bundle.js"></script>
          </body>
        </html>
      );

    res.send(html);
  //});


});

// app.get('/threads', function (req, res) {
//   console.log('/threads')
//
//   router.run(function (Handler) {
//     var html = React.renderToString(<Handler />);
//     //var html = React.render(<Handler />, document.body);
//     res.send("<!doctype html>"+html);
//   });
// });


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Loco server listening at http://%s:%s', host, port);

});
