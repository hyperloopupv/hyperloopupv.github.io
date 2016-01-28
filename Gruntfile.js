fs = require('fs');

// This builds the library itself
module.exports = function (grunt) {

  // Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: [
          'package.js', // To bump versions
          'Gruntfile.js',
          'src/*.js',
          'src/*.md',
          'src/plugins/*.js',
          'src/plugins/*.md',
          'src/plugins/*/*.js',
          'src/plugins/*/*.md',
          'web/*.jade',
          'web/*'
        ],
        tasks: ['default'],
        options: { spawn: false, },
      }
    },
    
    jade: {
      compile: {
        options: {
          client: false
        },
        files: [ {
          cwd: "web",
          src: "**/*.jade",
          dest: ".",
          expand: true,
          ext: ".html"
        } ]
      }
    }
  });

  // Concatenate
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Watch
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Jade
  grunt.loadNpmTasks('grunt-contrib-jade');


  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal
  grunt.registerTask('default', ['jade']);
};
