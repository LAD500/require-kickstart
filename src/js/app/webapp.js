define(['angular'], function (angular) {
    var app = angular.module('myApp', []);

    app.init = function () {
        angular.bootstrap(document, ['myApp']);
    };

    return app;
});