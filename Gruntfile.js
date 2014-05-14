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
          sourcemap: false,
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
          cssprefix: ".i-",
          customselectors: {
            'facebook-primary': ['.facebook'],
            'email-primary': ['.email'],
            'twitter-primary': ['.twitter'],
            'donate-primary': ['.donate'],
            'facebook-hover': ['.facebook:hover'],
            'email-hover': ['.email:hover'],
            'twitter-hover': ['.twitter:hover'],
            'donate-hover': ['.donate:hover'],
          },
          colors: {
            primary: '#061359',
            hover: '#FF8500',
          }
        }
      }
    },

    parallel: {
      server: {
        grunt: true,
        tasks: ['jekyll:server', 'open'],
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

    open: {
      dev : {
        path: 'http://localhost:4000/',
      },
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      dev: {
        options: {
          map: true,
        },
        src: 'css/*.css'
      },
      dist: {
        options: {
          map: false,
        },
        src: 'css/*.css'
      },
    },

    clean: {
      dist: ["_site", "css", ".sass-cache"]
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-parallel');
  //grunt.loadNpmTasks('grunt-svgmin');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('serve', ['open', 'jekyll:server']);
  grunt.registerTask('site', ['jekyll:dev']);
  grunt.registerTask('css', ['sass:dev', 'autoprefixer:dev']);

  grunt.registerTask('build', [
    'clean:dist',
    'sass:dist',
    'autoprefixer:dist',
    'jekyll:prod',
  ]);

  grunt.registerTask('default', ['serve']);
};
