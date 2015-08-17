
require.config({
    'paths': {
        'es5shim': ['//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.1.10/es5-shim.min', 'libs/es5shim/es5-shim.min'],
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',  'libs/jquery/jquery.min'],
        'jquery.bootstrap': ['//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min', 'libs/bootstrap/bootstrap.min']
    },
    'shim': {
        'jquery': {
            deps: ["es5shim"]
        },
        'jquery.bootstrap': {
            deps: ["jquery"]
        }
    }
});

define('modernizr', [], Modernizr);

requirejs(['jquery', 'modernizr', 'app/simpleapp', 'jquery.bootstrap'], function ($, Modernizr, SimpleApp) {
    'use strict';

    console.log("App starts here");

    console.log(SimpleApp.add(2,3,4,5));

    SimpleApp.testGet();
    SimpleApp.testPost();

});