var gulp = require('gulp');
var config = require('./config');

gulp.task('html', ['clean'], function () {
  return gulp.src(config.html.entry)
    .pipe(gulp.dest(config.dist.path));
});
