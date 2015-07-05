/*global require*/

require.config({
    paths: {
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',  'libs/jquery/jquery.min'],
        'text': ['//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min', 'lib/require-text/text.min'],
        'angular': ['//ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min',  'libs/angular/angular.min'],
        'uiBootstrap': ['//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.0/ui-bootstrap-tpls.min', 'libs/uibootstrap/ui-bootstrap-tpls.min']
    },
    shim: {
        'angular': {
            exports : 'angular'
        },
        'uiBootstrap': {
            deps: ['angular']
        }
    }
});

define('modernizr', [], Modernizr);

requirejs(['app/webapp', 'app/maincontroller', 'app/navcollapsecontroller', 'app/firstpagedirective'], function (app) {
    app.init();
});

