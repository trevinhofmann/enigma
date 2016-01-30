'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-stylus');

    return {
        compile: {
            files: {
                '.dist/public/bundle.css': 'src/public/css/app.styl'
            }
        }
    };

};
