'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		app: 'dev',
		dist: 'html',
		template: 'craft/templates',

		sass: {
			dist: {
				options: {
					style: 'expanded', // expanded or nested or compact or compressed
					loadPath: '<%= app %>/bower_components/foundation/scss',
					compass: true,
					quiet: true
				},
				files: {
					'<%= app %>/css/app.css': '<%= app %>/scss/app.scss',
					'<%= app %>/css/ie8.css': '<%= app %>/git_submodules/ie8-f5/ie8.css'
				}
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= app %>/js/**/*.js'
			]
		},

		clean: {
			dist: {
				src: ['<%= dist %>/*']
			},
			templates: {
				src: ['<%= template %>/*']
			},
		},
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd:'<%= app %>/',
					src: ['fonts/**', '**/*.html',  '**/*.txt', '.htaccess', 'wip/**', '!**/*.scss', '!bower_components/**', '!templates/**', '!git_submodules/**'],
					dest: '<%= dist %>/'
				}]
			},
			templates: {
				files: [{
					expand: true,
					cwd:'<%= app %>/',
					src: ['templates/**/*.html'],
					dest: 'craft'
				}]
			},
		},

		imagemin: {
			target: {
				files: [{
					expand: true,
					cwd: '<%= app %>/images/',
					src: ['**/*.{jpg,gif,svg,jpeg,png}'],
					dest: '<%= dist %>/images/'
				}]
			}
		},
		
		uglify: {
			options: {
				preserveComments: 'some',
				mangle: false
			}
		},

		useminPrepare: {
			html: ['<%= app %>/pattern-library.html'],
			options: {
				dest: '<%= dist %>'
			}
		},

		usemin: {
			html: ['<%= dist %>/**/*.html', '!<%= app %>/bower_components/**', '<%= template %>/**/*.html'],
			css: ['<%= dist %>/css/**/*.css'],
			options: {
				dirs: ['<%= dist %>', '<%= template %>']
			}
		},
		
		'string-replace': {
			dist: {
				files: [{
					expand: true,
					cwd:'<%= app %>/',
					src: ['index.php'],
					dest: '<%= dist %>/'
				}],
				options: {
					replacements: [{
						pattern: 'define(\'CRAFT_TEMPLATES_PATH',
						replacement: '// define(\'CRAFT_TEMPLATES_PATH'
					}]
				}
			}
		},

		watch: {
			grunt: {
				files: ['Gruntfile.js'],
				tasks: ['sass']
			},
			sass: {
				files: '<%= app %>/scss/**/*.scss',
				tasks: ['sass']
			},
		},

		bowerInstall: {
			target: {
				src: [
					'<%= app %>/**/*.html'
				],
				exclude: [
					'modernizr',
					'jquery-placeholder',
					'jquery.cookie',
					'foundation'
				]
			}
		}
		
	});

	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-bower-install');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-string-replace');

	grunt.registerTask('compile-sass', ['sass']);
	grunt.registerTask('bower-install', ['bowerInstall']);
	
	grunt.registerTask('default', ['compile-sass', 'bower-install', 'watch']);
	grunt.registerTask('validate-js', ['jshint']);
	grunt.registerTask('publish', ['compile-sass', 'clean', 'validate-js', 'useminPrepare', 'copy', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'usemin', 'string-replace']);

};