var config = require('./tasks/config');

module.exports = {
  context: config.source.path,
  entry: config.scripts.entry,
  output: {
    path: config.dist.path,
    filename: config.scripts.bundleName
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
