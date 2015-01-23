var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config');
var config = require('./config');

gulp.task('webpack', ['html'], function (callback) {
  webpack(
    webpackConfig,
    function (err, stats) {
      if (err) {
        throw new gutil.PluginError('webpack', err);
      }
      //gutil.log('[webpack]', stats.toString({
        //// output options
      //}));
      callback();
  });
});

gulp.task('webpack-dev-server', ['html'], function (callback) {
  var config = webpackConfig;
  config.watch = true;

  // Start a webpack-dev-server
  var compiler = webpack(config);

  new WebpackDevServer(compiler, {
    //hot: true,
    contentBase: config.dist.path
  })
  .listen(8080, 'localhost', function (err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }

    // Server listening
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server');

    // keep the server alive or continue?
    // callback();
  });
});
