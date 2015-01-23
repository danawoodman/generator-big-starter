var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var rename = require('gulp-rename');
var config = require('./config');

gulp.task('styles', function () {
  return gulp.src(config.styles.entry)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(rename(config.styles.bundleName))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist.path));
});
