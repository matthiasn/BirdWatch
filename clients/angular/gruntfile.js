module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: { separator: ';' },
            dist: {
                src: [
                    'src/js/app.js',
                    'build/js/app.templates.js',
                    'src/js/ui-bootstrap-custom.js',
                    'src/js/services/utils.js',
                    'src/js/services/wordcount.js',
                    'src/js/services/crossfilter.js',
                    'src/js/services/tweets.js',
                    'src/js/barchart.js',
                    'src/js/wordcloud.js',
                    'src/js/directives.js',
                    'src/js/filters.js',
                    'src/js/controllers.js'
                ],
                dest: 'build/js/<%= pkg.name %>.js' } },

        ngtemplates: { birdwatch:  { cwd: 'src', src: ['assets/templates/**/**.html'], dest: 'build/js/app.templates.js' } },
        copy:        { bw:    { files: [
            { expand: true, cwd: 'build/js',  src: ['birdwatch.js'], dest: '../../public/build/angular/'}
        ] }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.registerTask('bw', ['ngtemplates:birdwatch', 'concat', 'copy']);
    grunt.registerTask('default', ['concurrent:dev']);
};
