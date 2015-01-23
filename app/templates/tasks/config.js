var path = require('path');
var rootDir = path.join(__dirname, '..');

var config = {
  tests: {
    testsPath: path.join(rootDir, 'test/**/*.js'),
    watchPath: [
      path.join(rootDir, 'test/**/*.js'),
      path.join(rootDir, 'src/**/*.js')
    ]
  },
  webpack: {
    port: 8080,
  },
  scripts: {
    path: path.join(rootDir, 'src/**/*.js'),
    entry: 'index.jsx',
    bundleName: 'bundle.js'
  },
  source: {
    path: path.join(rootDir, 'src'),
  },
  html: {
    entry: 'index.html',
  },
  dist: {
    path: path.join(rootDir, 'dist')
  }
};

module.exports = config;
