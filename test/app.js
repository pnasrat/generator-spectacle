'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-spectacle:app', function() {
    before(function(done) {
        helpers.run(path.join(__dirname, '../app'))
            .withPrompts({
                name: 'apresentation'
                    // authorName: 'Roy Batty'
            })
            .on('end', done);
    });

    it('creates files', function() {
        var expected = [
            '.babelrc',
            'index.html',
            'index.js',
            'server.js',
            'package.json',
            'webpack.config.js',
            'presentation/index.js'
        ]

        assert.file(expected);
    });

    it('creates package.json with correct information', function() {
        assert.jsonFileContent('package.json', { name: "apresentation" });
    });
});
