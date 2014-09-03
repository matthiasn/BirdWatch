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
                    'reports/': ['src/*.js']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            all: {
                src: ['src/crossfilter.js', 'src/tweets.js', 'src/utils.js', 'src/wordcount.js', 'src/wordcloud.js',
                      'build/tweetlist.js', 'build/pagination.js', 'build/barchart.js', 'src/app.js'],
                dest: 'dist/birdwatch.js'
            }
        },
        copy: {
            all: {
                files: [
                    { expand: true, cwd: 'dist/', src: ['birdwatch.js'], dest: '../../public/build/react-js/' },
                    { expand: true, cwd: 'build/', src: ['barchart.js'], dest: '../../public/cljs-js/' },
                    { expand: true, cwd: 'src/', src: ['wordcloud.js'], dest: '../../public/cljs-js/' },
                    { expand: true, cwd: 'src/bower_components/react/', src: ['react.min.js'], dest: '../../public/react-js/vendor/' },
                    { expand: true, cwd: 'src/bower_components/react/', src: ['react.js'], dest: '../../public/react-js/vendor/' },
                    { expand: true, cwd: 'src/bower_components/regression-js/src', src: ['regression.js'], dest: '../../public/react-js/vendor/' }
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
