module.exports = function(grunt) {
    'use strict';

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
                    'src/js/libs/require/require.min.js': ['bower_components/requirejs/require.js'],
                    'src/js/libs/require-text/text.min.js': ['bower_components/requirejs-text/text.js']
                }
            }
        },
        htmlmin: {
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'tmp/js/app',
                    src: '**/*.html',
                    dest: 'tmp/js/app'
                }]
            }
        },
        copy: {
            bowerToSrc: {
                files: [
                    {
                        expand: true, cwd: 'bower_components/jquery/dist/',
                        src: 'jquery.min.js', dest: 'src/js/libs/jquery/',
                        flatten: true, filter: 'isFile'
                    },
                    {
                        expand: true, cwd: 'bower_components/angular/',
                        src: 'angular.min.js', dest: 'src/js/libs/angular/',
                        flatten: true, filter: 'isFile'
                    },
                    {
                        expand: true, cwd: 'bower_components/angular-bootstrap/',
                        src: 'ui-bootstrap-tpls.min.js', dest: 'src/js/libs/uibootstrap/',
                        flatten: true, filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap-sass-official/assets/fonts/',
                        src: '**',
                        dest: 'src/fonts'
                    }
                ]
            },
            tempToBuild: {
                files: [
                    {
                        expand: true,
                        cwd: 'tmp/',
                        src: '**',
                        dest: 'build/'
                    }
                ]
            },
            srcToTemp: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: '**',
                        dest: 'tmp/'
                    }
                ]
            }
        },
        exec: {
            compassGem: "gem install compass",
            bowerInstall: "bower install"
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
            temp: ["tmp/"],
            buildChildren: ["build/scss/", "build/css/main.css.map", "build/js/app", "build/js/main.js"]
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "tmp/js",
                    out: "build/js/main.js",
                    optimize: "uglify",
                    inlineText: true,
                    stubModules: ['text','angular'],
                    paths: {
                        "jquery": "empty:",
                        "text": "libs/require-text/text.min",
                        "angular": "empty:",
                        "uiBootstrap": "empty:"
                    },
                    name: "main",
                    uglify: {
                        no_mangle: true // this is a work around caused by uglify mangling issues needs to be addressed
                    }
                }
            }
        },
        open : {
            src : {
                path: 'http://127.0.0.1:4788',
                app: 'Google Chrome'
            },
            build : {
                path: 'http://127.0.0.1:4789',
                app: 'Google Chrome'
            },
            plato : {
                path: __dirname + '/reports/plato/index.html',
                app: 'Google Chrome'
            }
        },
        nodemon: {
            src: {
                script: 'serversrc.js'
            },
            build: {
                script: 'serverbuild.js'
            }
        },
        concurrent: {
            src: {
                tasks: ['nodemon:src', 'open:src'],
                options: {
                    logConcurrentOutput: true
                }
            },
            build: {
                tasks: ['nodemon:build', 'open:build'],
                options: {
                    logConcurrentOutput: true
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
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('setUpDev', ['exec:compassGem', 'exec:bowerInstall', 'copy:bowerToSrc', 'modernizr:dist:bust', 'uglify:requirejs']);
    grunt.registerTask('test', ['jsonlint', 'jshint', 'karma']);
    grunt.registerTask('build', ['test',
                                'clean:build',
                                'copy:srcToTemp',
                                'htmlmin',
                                'copy:tempToBuild',
                                'clean:buildChildren',
                                'requirejs:compile',
                                'compass:production',
                                'clean:temp']);
    grunt.registerTask('launchSrc', ['concurrent:src']);
    grunt.registerTask('launchBuild', ['build','concurrent:build']);
    grunt.registerTask('launchPlato', ['plato','open:plato']);
    grunt.registerTask('default', ['test']);

};