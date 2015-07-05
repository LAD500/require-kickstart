
require.config({
    'paths': {
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',  'libs/jquery/jquery.min'],
        'jquery.bootstrap': ['//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min', 'libs/bootstrap/bootstrap.min']
    },
    'shim': {
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