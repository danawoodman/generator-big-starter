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

    // TODO:
    // - WebPack?
    // - Server?
    // - Bootstrap?
    // - FontAwesome?
    // - Test suite
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
      },
      {
        type: 'confirm',
        name: 'tests',
        message: 'Test suite?',
        default: true
      },
      // TODO: Don't show this option if the test suite is chosen as it is redundant.
      {
        type: 'confirm',
        name: 'gulp',
        message: 'Do you want to use Gulp?',
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
    },

    projectfiles: function () {
      this.template('README.md', 'README.md');
      this.copy('editorconfig', '.editorconfig');
      this.copy('gitignore', '.gitignore');
      this.copy('jshintrc', '.jshintrc');

      // Configure test suite.
      if (this.props.tests) {
        this.props.defaultTask = 'watch-test';
        this.copy('tasks/test.js', 'tasks/test.js');
        this.copy('test/app-test.js', 'test/app-test.js');
      }

      // Use gulp either if it is chosen or if a
      // test suite will be setup.
      if (this.props.gulp || this.props.tests) {
        // If no tasks are setup, create a simple
        // hello world task as an example.
        if (!this.props.defaultTask) {
          this.props.defaultTask = 'hello';
          this.copy('tasks/hello.js', 'tasks/hello.js');
        }

        this.template('gulpfile.js', 'gulpfile.js');
        this.template('tasks/config.js', 'tasks/config.js');
      }
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
