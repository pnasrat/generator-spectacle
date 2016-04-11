'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-spectacle:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({name: "apresentation"})
      .on('end', done);
  });

  it('creates package.json', function () {
    assert.file([
      'package.json'
    ]);
    assert.jsonFileContent('package.json', { name: "apresentation"});
  });
});
