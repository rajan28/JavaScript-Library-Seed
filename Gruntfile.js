module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		concat: {
			options: {
				separator: '\n\n',
			},
			dist: {
				src: ['src/**/*.js'],
				//CHANGE: myfirstlib -> your_lib_name
				dest: 'lib/myfirstlib.js',
			},
		},
		uglify: {
			my_target: {
				options: {
					sourceMap: true
				},
				files: {
					//CHANGE: myfirstlib -> your_lib_name
					'dist/myfirstlib.js': ['lib/**/*.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify', 'karma']);
};