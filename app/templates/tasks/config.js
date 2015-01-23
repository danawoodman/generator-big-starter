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
    entry: path.join(rootDir, 'src/index.jsx'),
    path: path.join(rootDir, 'src/**/*.js'),
    bundleName: 'bundle.js'
  },
  styles: {
    entry: path.join(rootDir, 'src/index.less'),
    path: path.join(rootDir, 'src/**/*.less'),
    bundleName: 'bundle.css'
  },
  source: {
    path: path.join(rootDir, 'src'),
  },
  html: {
    entry: path.join(rootDir, 'src/index.html'),
  },
  dist: {
    path: path.join(rootDir, 'dist')
  }
};

module.exports = config;
