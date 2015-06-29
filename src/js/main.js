/*global require*/

require.config({
    paths: {
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',  'libs/jquery/jquery.min']
    }
});

define('modernizr', [], Modernizr);

requirejs(['jquery', 'modernizr', 'app/simpleapp'], function ($, Modernizr, SimpleApp) {
    'use strict';

    console.log("App starts here");

    console.log(SimpleApp.add(2,3,4,5));

    SimpleApp.testGet();
    SimpleApp.testPost();

});

