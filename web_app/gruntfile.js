module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: { separator: ';' },
            dist: {
                src: [
                    'src/bower_components/jquery/jquery.min.js',
                    'src/bower_components/angular/angular.min.js',
                    'src/bower_components/underscore/underscore.js',
                    'src/bower_components/d3/d3.min.js',
                    'src/bower_components/momentjs/min/moment.min.js',
                    'src/bower_components/crossfilter/crossfilter.min.js',
                    'src/bower_components/rickshaw/rickshaw.min.js',
                    'build/js/<%= pkg.name %>.min.js'
                ],
                dest: 'dist/js/<%= pkg.name %>.min.js' } },

        uglify: { dist: { files: { 'build/js/<%= pkg.name %>.min.js': [
            'src/js/vendor/d3.layout.cloud.js',
            'src/js/ui-bootstrap-custom.js',
            'src/js/app.js',
            'build/js/app.templates.js',
            'src/js/services/utils.js',
            'src/js/services/wordcount.js',
            'src/js/services/crossfilter.js',
            'src/js/services/tweets.js',
            'src/js/barchart.js',
            'src/js/wordcloud.js',
            'src/js/directives.js',
            'src/js/filters.js',
            'src/js/controllers.js' ] } } },

        ngtemplates: { birdwatch:  { cwd: 'src', src: ['templates/**.html'], dest: 'build/js/app.templates.js' } },

        watch:       { less:  { files: ['src/**/*.less'], tasks: ['less'], options: { spawn: true } } },
        targethtml:  { dist:    { files: { 'build/index.html': 'src/index.html'} } },
        less:        { dist:    { files: { "build/css/main.css": "src/less/main.less" } } },
        concurrent:  { dev:     { tasks: ['watch'], options: { logConcurrentOutput: true } } },
        cssmin:      { minify:  { expand: true,  cwd: 'build/css/', src: 'main.css', dest: 'build/css/', ext: '.min.css',
                                  options: { keepSpecialComments: 0 } } },
        compress:    { main:    { options: { mode: 'gzip' }, expand: true,
                       src:       [ 'dist/**/*.js', 'dist/**/*.css', 'dist/**/*.html', 'dist/**/*.json', 'dist/**/*.md',
                                    'dist/**/*.svg', 'dist/**/*.ttf', 'dist/**/*.otf' ], dest: '.' } },
        copy:        { main:    { files: [ { expand: true, cwd: 'dist',  src: ['index.html'], dest: '../public/'},
                                           { expand: true, cwd: 'dist/js',  src: ['birdwatch.min.js'], dest: '../public/js/'} ] }
        },
        htmlbuild:   { dist:    { src: 'build/index.html', dest: 'build/index-inline.html',
                                  options: { relative: true, styles: { bundle: 'build/css/main.min.css' } } } },
        htmlmin:     { dist:    { options: { removeComments: true, collapseWhitespace: true },
                                  files:   { 'dist/index.html': 'build/index-inline.html' } } }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.registerTask('dist', [ 'less', 'ngtemplates:birdwatch', 'uglify', 'concat', 'targethtml', 'cssmin',
        'htmlbuild', 'htmlmin', 'compress', 'copy']);
    grunt.registerTask('default', ['concurrent:dev']);
};
