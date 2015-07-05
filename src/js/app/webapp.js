define(['angular', 'uiBootstrap'], function (angular) {

    var app = angular.module('myApp', ['ui.bootstrap']);

    app.init = function () {
        angular.bootstrap(document, ['myApp']);
    };

    return app;
});