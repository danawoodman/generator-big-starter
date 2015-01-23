var flo = require('fb-flo');
var path  = require('path');
var fs  = require('fs');
var config  = require('./tasks/config');

var server = flo(
  config.dist.path,
  {
    port: config.flo.port,
    host: 'localhost',
    verbose: false,
    glob: [
      '**/*.js',
      '**/*.css',
      '**/*.html',
    ]
  },
  function resolver(filepath, callback) {
    console.log('Reloading \'' + filepath + '\' with flo...');

    var file = path.join(config.dist.path, filepath);

    callback({
      resourceURL: filepath,
      contents: fs.readFileSync(file),
      update: function (_window, _resourceURL) {
        console.log("Resource " + _resourceURL + " has just been updated with new content");
      },
      reload: filepath.match(/\.(js|html)$/),
    });
  }
);
