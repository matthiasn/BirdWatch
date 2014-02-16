module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'src/*.js'],
            options: {
                predef: ['React', 'console']
            }
        },
        plato: {
            bo: {
                files: {
                    'reports/': ['src/**/*.js']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            all: {
                src: ['src/crossfilter.js', 'src/tweets.js', 'src/utils.js', 'src/wordcount.js', 'src/wordcloud.js',
                      'src/barchart.js', 'build/react-app.js', 'src/app.js'],
                dest: 'dist/birdwatch.js'
            }
        },
        copy: {
            all: {
                files: [
                    { expand: true, cwd: 'dist/', src: ['birdwatch.js'], dest: '../public/react-js/' }
                ]
            }
        },
        watch: {
            scripts: {
                files: ['src/*.js', 'build/*.js'],
                tasks: ['bw'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-plato');
    grunt.registerTask('bw', ['jshint', 'concat', 'copy', 'plato']);
};
