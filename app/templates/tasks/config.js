var path = require('path');
var rootDir = path.join(__dirname, '..');

var config = {
  <% if (props.tests) { %>tests: {
    testsPath: path.join(rootDir, 'test/**/*.js'),
    watchPath: [
      path.join(rootDir, 'test/**/*.js'),
      path.join(rootDir, 'src/**/*.js')
    ]
  },<% } %>
  scripts: {
    path: path.join(rootDir, 'src/**/*.js')
  }
};

module.exports = config;
