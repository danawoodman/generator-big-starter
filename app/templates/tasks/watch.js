var gulp = require('gulp');
var config = require('./config');

gulp.task('watch', ['serve'], function (done) {
  gulp.watch(config.html.entry, ['html']);
  gulp.watch(config.styles.path, ['styles']);
  gulp.watch(config.scripts.path, ['webpack', 'test']);
  gulp.start('flo');
});
