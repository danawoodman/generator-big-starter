var gulp = require('gulp');
var serve = require('gulp-serve');
var config = require('./config');

gulp.task('serve', ['dist'], serve(config.dist.path));
