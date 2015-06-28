/*global require*/

require.config({
    paths: {
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',  'libs/jquery/jquery.min'],
        'angular': ['//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min', 'libs/angular/angular.min'],
        'angularAMD': ['//cdn.jsdelivr.net/angular.amd/0.2/angularAMD.min', 'libs/angularAMD/angularAMD.min'],
        'ngload': 'lib/angularAMD/ngload.min'
    },
    shim: {
        'angularAMD': ['angular'],
        'ngload': ['angularAMD']
    },
    deps: ['app/bootstrap']
});

define('modernizr', [], Modernizr);



