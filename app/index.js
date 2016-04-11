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

    writing: function() {
        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'), {
                name: this.props.name,
            }
        );
    },

    install: function() {
        this.installDependencies();
    }

});
