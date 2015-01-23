var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var config = require('./config');

gulp.task('webpack', function (callback) {
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
