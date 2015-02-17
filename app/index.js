'use strict';

var yeoman = require('yeoman-generator');
var slug = require('slug');
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
        default: 'Starter Project'
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

      // Set the slug
      if (props.appname) {
        this.props.appslug = slug(props.appname).toLowerCase();
      }

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

    scripts: function () {
      this.copy('src/frontend/index.jsx', 'src/frontend/index.jsx');
      this.copy('src/frontend/world.jsx', 'src/frontend/world.jsx');
    },

    html: function () {
      this.template('src/frontend/index.html', 'src/frontend/index.html');
    },

    styles: function () {
      this.copy('src/frontend/index.less', 'src/frontend/index.less');
    },

    flo: function () {
      this.copy('flo.js', 'flo.js');
    },

    webpack: function () {
      this.copy('webpack.config.js', 'webpack.config.js');
    },

    bootstrap: function () {
      // Bootstrap
      // react-bootstrap
      // font-awesome
    },

    tests: function () {
      this.copy('test/app-test.js', 'test/app-test.js');
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
