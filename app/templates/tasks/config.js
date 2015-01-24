var path = require('path');
var rootDir = path.join(__dirname, '..');

var config = {
  tests: {
    testsPath: path.join(rootDir, 'test/**/*.js'),
    watchPath: [
      path.join(rootDir, 'test/**/*.js'),
      path.join(rootDir, 'src/**/*.{js,jsx}')
    ]
  },
  scripts: {
    entry: path.join(rootDir, 'src/index.jsx'),
    path: path.join(rootDir, 'src/**/*.{js,jsx}'),
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
  flo: {
    port: 8888,
  },
  dist: {
    path: path.join(rootDir, 'dist')
  }
};

module.exports = config;
