var path = require('path');
var rootDir = path.join(__dirname, '..');

var config = {
  tests: {
    path: path.join(rootDir, 'test/*.js')
  },
  generator: {
    path: path.join(rootDir, 'app/**')
  }
};

module.exports = config;
