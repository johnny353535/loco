var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./jsx/index.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js",
        sourceMapFilename: "bundle.js.map"
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

};
