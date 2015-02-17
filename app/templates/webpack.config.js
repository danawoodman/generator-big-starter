var path = require('path');
var rootDir = path.join(__dirname);
var webpack = require("webpack");
module.exports = {
  context: path.join(rootDir, 'src/frontend'),
  entry: [
    'webpack-dev-server/client?http://localhost:7777',
    'webpack/hot/only-dev-server',
    path.join(rootDir, 'src/frontend/index.jsx'),
  ],
  output: {
    path: path.join(rootDir, 'dist'),
    publicPath: "/dist/",
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['jsx-loader?harmony','react-hot'] },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
