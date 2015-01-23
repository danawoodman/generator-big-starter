'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('BIG Starter') + ' generator!'
    ));

    var prompts = [
      {
        name: 'appname',
        message: 'What do you want to call this application?',
        default: 'Starter'
      },
      {
        name: 'author',
        message: 'Who is the author of the project?',
        default: 'BIG <http://builtbybig.com>'
      },
      {
        name: 'description',
        message: 'What is the project description?',
        default: 'A starter project'
      },
      {
        name: 'repo',
        message: 'What is the Github project repo?',
        default: 'builtbybig/starter-project'
      },
      {
        type: 'confirm',
        name: 'private',
        message: 'Make this project private?',
        default: true
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
      this.mkdir('dist');
    },

    projectfiles: function () {
      this.template('README.md', 'README.md');
      this.copy('editorconfig', '.editorconfig');
      this.copy('gitignore', '.gitignore');
      this.copy('jshintrc', '.jshintrc');
    },

    webpack: function () {
      this.copy('webpack.config.js', 'webpack.config.js');
      this.copy('tasks/webpack.js', 'tasks/webpack.js');
    },

    bootstrap: function () {
      // Bootstrap
      // react-bootstrap
      // font-awesome
    },

    gulp: function () {
      this.props.defaultTasks = ['watch-test'];
      this.template('gulpfile.js', 'gulpfile.js');
      this.template('tasks/config.js', 'tasks/config.js');
      this.template('tasks/html.js', 'tasks/html.js');
      this.template('tasks/clean.js', 'tasks/clean.js');
    },

    tests: function () {
      this.copy('tasks/test.js', 'tasks/test.js');
      this.copy('test/app-test.js', 'test/app-test.js');
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
