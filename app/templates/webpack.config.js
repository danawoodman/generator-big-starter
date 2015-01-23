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
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader?sourceMap' },

      // the url-loader uses DataUrls.
      // the file-loader emits files.
      //{ test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      //{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
