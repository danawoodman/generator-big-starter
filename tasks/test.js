var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var config = require('./config');

function handleError(err) {
  gutil.log(err.toString());
  this.emit('end');
}

gulp.task('test', function() {
  return gulp.src(config.tests.path, { read: false })
    .pipe(mocha({
      ui: 'bdd',
      reporter: 'list'
    }))
    .on('error', handleError);
});

gulp.task('watch-test', ['test'], function() {
  gulp.watch([
    config.generator.path,
    config.tests.path
  ], ['test']);
});
