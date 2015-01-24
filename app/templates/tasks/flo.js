var gulp = require('gulp');
var spawn = require('child_process').spawn;

gulp.task('flo', function() {
    var node = spawn('node', ['flo.js'], {stdio: 'inherit'});
    node.on('close', function (code) {
    if (code === 8) {
      console.log('Error detected, turning off fb-flo...');
    }
  });
});
