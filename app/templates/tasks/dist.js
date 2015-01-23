var gulp = require('gulp');
var config = require('./config');

gulp.task('dist', ['clean'], function (done) {
  gulp.start('webpack');
  gulp.start('html');
  gulp.start('styles');
  done();
});
