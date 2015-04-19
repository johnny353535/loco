var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports = [
  {
    name: "client",
    entry: [
      "./jsx/client.jsx"
    ],
    output: {
        path: __dirname,
        filename: "public/js/client.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    historyApiFallback: true,
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
  },
  {
    name: "server",
    entry: [
      "./jsx/server.jsx"
    ],
    output: {
        path: __dirname,
        filename: "server.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    historyApiFallback: true,
    plugins: [
      new webpack.NoErrorsPlugin()
    ],
    externals: nodeModules
  }


];
