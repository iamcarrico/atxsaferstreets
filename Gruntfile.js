'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      options: {
        livereload: 9001
      },
      css: {
        files: ['sass/{,**/}*.scss'],
        tasks: ['sass:dev', 'jekyll:dev']
      },
      jekyll: {
      files: ['{,**/}*.md', '_posts/*', '!_site/{,**/}*.html'],
				tasks: ['jekyll:dev']
			}
    },

    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: true,
          trace: true,
          bundleExec: true,
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss', '!_*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      },
      dist: {
        options: {
          style: 'compressed',
          bundleExec: true,
          noCache: true,
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss', '!_*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }

    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'images',
          src: ['**/*.png', '**/*.jpg'],
          dest: 'img/'
        }]
      }
    },

    grunticon: {
      development: {
        files: [{
          expand: true,
          cwd: 'icons',
          src: ['*.svg'],
          dest: "grunticons",
        }],
        options: {
          previewhtml: "icons.html",
          defaultWidth: "32px",
          defaultHeight: "32px",
          cssprefix: ".",
          customselectors: {
          }
        }
      }
    },

    parallel: {
      server: {
        grunt: true,
        tasks: ['jekyll:server', 'watch'],
      }
    },

    jekyll: {
			server : {
				server : true,
				server_port : 4000,
				bundleExec: true,
				config: '_config_dev.yml',
			},
			dev: {
				bundleExec: true,
				config: '_config_dev.yml',
			},
			prod: {
  			bundleExec: true,
			}
		},
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-parallel');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('server', ['parallel:server']);

  grunt.registerTask('build', [
    'sass:dist',
    'jekyll:prod',
  ]);

  grunt.registerTask('default', ['server']);
};
