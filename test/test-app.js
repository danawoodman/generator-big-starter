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
      'src/frontend/index.jsx'
    ]);
    assert.fileContent('package.json', /jsx-loader/);
  });

  it('sets up HTML', function () {
    assert.file([
      'src/frontend/index.html',
    ]);
  });

  it('setups up styles', function () {
    assert.file([
      'src/frontend/index.less'
    ]);
  });

  it('creates README', function () {
    assert.file([
      'README.md'
    ]);
    assert.fileContent('README.md', /Starter/);
  });

  it('configure fb-flo', function () {
    assert.file([
      'flo.js',
    ]);
    assert.fileContent('package.json', /fb-flo/);
  });

  it('configures test suite', function () {
    assert.file([
      'test/app-test.js'
    ]);
    assert.fileContent('package.json', /should/);
  });

  it('configures WebPack', function () {
    assert.file([
      'webpack.config.js',
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

