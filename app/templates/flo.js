var flo = require('fb-flo');
var path  = require('path');
var fs  = require('fs');
var rootDir = path.join(__dirname);

var server = flo(
  path.join(rootDir, 'dist'),
  {
    port: 8888,
    host: 'localhost',
    verbose: false,
    glob: [
      '**/*.css',
      '**/*.html',
    ]
  },
  function resolver(filepath, callback) {
    console.log('Reloading \'' + filepath + '\' with flo...');

    var file = path.join(path.join(rootDir, 'dist'), filepath);

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
