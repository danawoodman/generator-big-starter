var gulp = require('gulp');
var config = require('./config');

gulp.task('watch', ['dist'], function (done) {
  gulp.watch(config.html.entry, ['html']);
  gulp.watch(config.styles.entry, ['styles']);
  gulp.watch(config.scripts.path, ['webpack']);
  gulp.start('flo');
});
