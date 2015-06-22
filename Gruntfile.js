module.exports = function(grunt) {

    var jsFiles = ['Gruntfile.js', 'testserver.js', 'src/**/*.js', 'test/**/*.js'];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        plato: {
            src: {
                options : {
                    exclude: /\.min\.js$/
                },
                files: {
                    'reports/plato': ['src/**/*.js'],
                }
            }
        },

        jsonlint: {
            project: {
                src: [ 'bower.json', 'package.json' ]
            }
        },

        jshint: {
            files: jsFiles
        },
        karma: {
            unit: {
                options: {
                    configFile: 'karma.conf.js',
                    runnerPort: 9999
                }
            }
        },
        modernizr: {
            dist: {
                "devFile" : "bower_components/modernizr/modernizr.js",
                "outputFile" : "src/js/libs/modernizr/modernizr.min.js",
                "extra" : {
                    "shiv" : true,
                    "printshiv" : false,
                    "load" : true,
                    "mq" : false,
                    "cssclasses" : true
                },
                "extensibility" : {
                    "addtest" : false,
                    "prefixed" : false,
                    "teststyles" : false,
                    "testprops" : false,
                    "testallprops" : false,
                    "hasevents" : false,
                    "prefixes" : false,
                    "domprefixes" : false,
                    "cssclassprefix": ""
                },
                "uglify" : true,
                "tests" : [],
                "parseFiles" : true,
                "files" : {
                    "src": ['src/**/*.*']
                },
                "matchCommunityTests" : false,
                "customTests" : []
            }

        },
        uglify: {
            requirejs: {
                files: {
                    'src/js/libs/require/require.min.js': ['bower_components/requirejs/require.js']
                }
            }
        },
        copy: {
            bowerToSrc: {
                files: [
                    {
                        expand: true, cwd: 'bower_components/jquery/dist/',
                        src: 'jquery.min.js', dest: 'src/js/libs/jquery/',
                        flatten: true, filter: 'isFile'}
                ]
            },
            srcToBuild: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '**',
                        dest: 'build/'
                    }
                ]
            }
        },
        exec: {
            compassGem: "gem install compass",
            bowerInstall: "Front-End Web Developer"
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'src/scss',
                    cssDir: 'src/css',
                    sourcemap: true,
                    outputStyle: 'nested',
                    force: true
                }
            },
            production: {
                options: {
                    sassDir: 'build/scss',
                    cssDir: 'build/css',
                    sourcemap: false,
                    outputStyle: 'compressed',
                    force: true
                }
            }
        },
        clean: {
            build: ["build/"],
            buildChildren: ["build/scss/", "build/css/main.css.map", "build/js/app", "build/js/main.js"]
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "src/js",
                    out: "build/js/main.js",
                    optimize: "uglify",
                    paths: {
                        "jquery": "empty:"
                    },
                    name: "main"
                }
            }
        },
        watch: {
            files: jsFiles,
            tasks: ['test']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-plato');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('setUpDev', ['exec:compassGem', 'copy:bowerToSrc', 'modernizr:dist:bust', 'uglify:requirejs']);
    grunt.registerTask('test', ['jsonlint', 'jshint', 'karma']);
    grunt.registerTask('build', ['test',
                                'clean:build',
                                'copy:srcToBuild',
                                'compass:production',
                                'clean:buildChildren',
                                'requirejs:compile']);
    grunt.registerTask('default', ['test']);

};