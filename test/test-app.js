'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('big-starter:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      //.withPrompt({
        //appname: 'My App',
      //})
      .on('end', done);
  });

  it('configures base project files', function () {
    assert.file([
      // Dotfiles:
      '.gitignore',
      '.editorconfig',
      '.jshintrc',

      // Package files:
      'bower.json',
      'package.json',

      // Build directory
      'dist/'
    ]);
    assert.fileContent('package.json', /starter-project/);
  });

  it('sets up scripts', function () {
    assert.file([
      'src/index.jsx'
    ]);
    assert.fileContent('package.json', /jsx-loader/);
  });

  it('sets up HTML', function () {
    assert.file([
      'src/index.html',
    ]);
    //assert.fileContent('README.md', /Starter/);
  });

  it('setups up styles', function () {
    assert.file([
      'tasks/styles.js',
      'src/index.less'
    ]);
    assert.fileContent('package.json', /gulp-less/);
    assert.fileContent('package.json', /gulp-rename/);
    assert.fileContent('package.json', /gulp-sourcemaps/);
  });

  it('creates README', function () {
    assert.file([
      'README.md'
    ]);
    assert.fileContent('README.md', /Starter/);
  });

  it('configure watch task', function () {
    assert.file([
      'tasks/watch.js'
    ]);
  });

  it('configure dist task', function () {
    assert.file([
      'tasks/dist.js'
    ]);
  });

  it('configure fb-flo', function () {
    assert.file([
      'flo.js',
      'tasks/flo.js'
    ]);
    assert.fileContent('package.json', /fb-flo/);
    assert.fileContent('tasks/watch.js', /flo/);
  });

  it('configure serve task', function () {
    assert.file([
      'tasks/serve.js'
    ]);
    assert.fileContent('gulpfile.js', /'serve'/);
    assert.fileContent('package.json', /gulp-serve/);
  });

  it('configures test suite', function () {
    assert.file([
      'tasks/test.js',
      'test/app-test.js'
    ]);
    assert.fileContent('package.json', /gulp-mocha/);
    assert.fileContent('package.json', /should/);
    assert.fileContent('tasks/test.js', /tests\.testsPath/);
    assert.fileContent('tasks/test.js', /tests\.watchPath/);
    assert.fileContent('tasks/config.js', /testsPath/);
  });

  it('configures gulp', function () {
    assert.file([
      'gulpfile.js',
      'tasks/config.js',
      'tasks/html.js',
      'tasks/clean.js'
    ]);
    assert.fileContent('gulpfile.js', /'watch'/);
    assert.fileContent('package.json', /gulp/);
    assert.fileContent('package.json', /del/);
    assert.fileContent('package.json', /gulp-util/);
    assert.fileContent('package.json', /require-dir/);
  });

  it('configures WebPack', function () {
    assert.file([
      'webpack.config.js',
      'tasks/webpack.js',
    ]);
    assert.fileContent('package.json', /webpack/);
    assert.fileContent('package.json', /webpack-dev-server/);
  });

  it('configures Bower', function () {
    assert.fileContent('bower.json', /Starter/);
    assert.fileContent('bower.json', /builtbybig\/starter-project/);
    assert.fileContent('bower.json', /BIG/);
  });
});

