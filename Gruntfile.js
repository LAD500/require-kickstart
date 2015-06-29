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
                        flatten: true, filter: 'isFile'
                    },
                    {
                        expand: true, cwd: 'bower_components/angular/',
                        src: 'angular.min.js', dest: 'src/js/libs/angular/',
                        flatten: true, filter: 'isFile'
                    },
                    {
                        expand: true, cwd: 'bower_components/angularAMD/',
                        src: 'angularAMD.min.js', dest: 'src/js/libs/angularAMD/',
                        flatten: true, filter: 'isFile'
                    },
                    {
                        expand: true, cwd: 'bower_components/angularAMD/',
                        src: 'ngload.min.js', dest: 'src/js/libs/angularAMD/',
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
            buildChildren: ["build/scss/", "build/css/main.css.map", "build/js/main.js"]
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "src/js",
                    out: "build/js/main.js",
                    optimize: "uglify",
                    paths: {
                        "jquery": "empty:",
                        'angular': "empty:",
                        'angularAMD': "empty:",
                        'ngload': "empty:"
                    },
                    name: "main"
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

    grunt.registerTask('setUpDev', ['exec:compassGem', 'exec:bowerInstall', 'copy:bowerToSrc', 'modernizr:dist:bust', 'uglify:requirejs']);
    grunt.registerTask('test', ['jsonlint', 'jshint', 'karma']);

    // note for angularAMD the r.js optimisation has been removed, and
    // the clean job had been altered to retaing all JS scripts to the
    grunt.registerTask('build', ['test',
                                'clean:build',
                                'copy:srcToBuild',
                                'compass:production',
                                'clean:buildChildren',
                                'requirejs:compile']);
    grunt.registerTask('launchSrc', ['concurrent:src']);
    grunt.registerTask('launchBuild', ['build','concurrent:build']);
    grunt.registerTask('launchPlato', ['plato','open:plato']);
    grunt.registerTask('default', ['test']);

};