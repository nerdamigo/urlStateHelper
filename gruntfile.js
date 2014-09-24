module.exports = function (grunt) {
	var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/**/*.js'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'demo/app/**/*.js', 'test/**/*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		watch: {
			dev: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint', 'concat', 'uglify', 'copy:demo']
			},
			test: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint', 'karma:unit']
			}
		},
		karma: {
			unit: {
				configFile: 'testing/unit/karma.unit.config.js',
				autoWatch: false,
				singleRun: true
			}
		},
		connect: {
			devserver: {
				options: {
					port: 8080,
					base: 'demo/',
					middleware: function (connect, options) {
						var middlewares = [];

						// RewriteRules support
						middlewares.push(rewriteRulesSnippet);

						if (!Array.isArray(options.base)) {
							options.base = [options.base];
						}

						var directory = options.directory || options.base[options.base.length - 1];
						options.base.forEach(function (base) {
							// Serve static files.
							middlewares.push(connect.static(base));
						});

						// Make directory browse-able.
						middlewares.push(connect.directory(directory));

						return middlewares;
					}
				}
			},
			rules: [
				{
					from: '^$|^/[^\\.]*$',
					to: '/index.html'
				}
			]
		},
		copy: {
			demo: {
				files: [
					{ expand: true, flatten: true, filter: 'isFile', cwd: 'dist/', src: ['**'], dest: 'demo/framework/' }
				]
			}
		},
		configureRewriteRules: {
			options: {
				rulesProvider: 'connect.rules'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-connect-rewrite');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('test', ['jshint', 'karma:unit', 'watch:test']);

	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'copy:demo', 'configureRewriteRules', 'connect:devserver', 'watch:dev']);

};