/* jshint node:true */

(function () {
  "use strict";

  module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({


      // Metadata.
      pkg: grunt.file.readJSON("package.json"),


      app: {
        www: "./templates",
        dist: "./dist"
      },


      jshint: {
        options: {
          curly: true,
          eqeqeq: true,
          immed: true,
          indent: 2,
          latedef: true,
          newcap: true,
          noarg: true,
          sub: true,
          undef: true,
          unused: true,
          boss: true,
          eqnull: true,
          browser: true,
          globals: {
            'require': true
          }
        },
        gruntfile: {
          src: 'Gruntfile.js'
        }
      },


      "shell": {
        options: {
          stdout: true
        },
        punchServer: {
          command: "./node_modules/punch/bin/punch s"
        },
        punchGenerate: {
          command: "./node_modules/punch/bin/punch g"
        }
      },


      "gh-pages": {
        src: ["**/*"],
        options: {
          base: "dist",
          repo: "https://" + process.env.GH_TOKEN + "@github.com/constantx/constantx.github.io.git",
          silent: true,
          branch: "gh-pages",
          user: {
            name: "Truong Nguyen",
            email: "constantx@gmail.com"
          }
        }
      },

      "watch": {
        gruntfile: {
          files: "<%= jshint.gruntfile.src %>",
          tasks: ["jshint:gruntfile"]
        }
      },

      "concurrent": {
        dev: {
          tasks: ["watch", "shell:punchServer"],
          options: {
            logConcurrentOutput: true
          }
        }
      }
    });


    // These plugins provide necessary tasks.
    require("matchdep").filterAll(["grunt-*"]).forEach(grunt.loadNpmTasks);


    // Default task.
    grunt.registerTask("default", [
      "jshint",
      "concurrent:dev"
    ]);


    // build task
    grunt.registerTask("build", [
      "jshint",
      "shell:punchGenerate",
    ]);


    // publish to gh-pages
    grunt.registerTask("travis", "build and push to gh-pages", [
      "build",
      "gh-pages"
    ]);
  };

}());
