/*global require*/

require.config({
    paths: {
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',  'libs/jquery/jquery.min'],
        angular: ['//ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min',  'libs/angular/angular.min']
    },
    shim: {
        angular: {
            exports : 'angular'
        }
    }
});

define('modernizr', [], Modernizr);

requirejs(['app/webapp', 'app/maincontroller'], function (app) {
    app.init();
});

