module.exports = function(grunt) {

    var jsFiles = ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jsonlint: {
            project: {
                src: [ 'bower.json', 'package.json' ]
            }
        },

        jshint: {
            files: jsFiles
        },
//        copy: {
//            addBowerDepToSrc: {
//                files: [
//                    {expand: true, cwd: 'bower_components/bootstrap/dist/css/', src: '**', dest: 'src/css/', flatten: true, filter: 'isFile'},
//                    {expand: true, cwd: 'bower_components/bootstrap/dist/js/', src: '**', dest: 'src/js/vendor/bootstrap/', flatten: true, filter: 'isFile'},
//                    {expand: true, cwd: 'bower_components/bootstrap/dist/fonts/', src: '**', dest: 'src/fonts/', flatten: true, filter: 'isFile'},
//                    {expand: true, cwd: 'bower_components/jquery/dist/', src: '**', dest: 'src/js/vendor/jquery/', flatten: true, filter: 'isFile'}
//                ]
//            }
//        },
        watch: {
            files: jsFiles,
            tasks: ['test']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-jsonlint');

//    grunt.registerTask('initSrc', ['copy:addBowerDepsToSrc]);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('build', ['test']);
    grunt.registerTask('default', ['jshint']);

};