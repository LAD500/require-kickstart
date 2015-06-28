/**
 * @author Nathan Richards
 */
var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: 'base/src/js',

    paths: {
        'jquery': 'libs/jquery/jquery.min',
        'angular': 'libs/angular/angular.min',
        'angularAMD': 'libs/angularAMD/angularAMD.min',
        'ngload': 'lib/angularAMD/ngload.min'
    },
    shim: {
        'angularAMD': ['angular'],
        'ngload': ['angularAMD']
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});