var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    prompting: function() {
        var done = this.async();

        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your presentation name',

            default: this.appname
        }, function(answers) {
            this.props = answers
            this.log(answers.name);
            done();
        }.bind(this));
    },

    // TODO(pnasrat): Composition rather than copy of spectacle-boilerplate.
    writing: function() {
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'), {
                name: this.props.name,
            }
        );

        this.fs.copy(
            this.templatePath('_babelrc'),
            this.destinationPath('.babelrc')
        );

        this.fs.copy(
            this.templatePath('presentation/index.js'),
            this.destinationPath('presentation/index.js')
        );

        this.fs.copy(
        	this.templatePath('index.*'),
        	this.destinationPath('./')
        );

        this.fs.copy(
        	this.templatePath('server.js'),
        	this.destinationPath('server.js')
        );

        this.fs.copy(
        	this.templatePath('webpack.config.js'),
        	this.destinationPath('webpack.config.js')
        );

        this.fs.copy(
            this.templatePath('assets/*'),
            this.destinationPath('assets/')
        );
    },

    install: function() {
        this.installDependencies({ bower: false });
    }
});
