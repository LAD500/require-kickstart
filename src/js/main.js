/*global require*/

require.config({
    paths: {
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',  'libs/jquery/jquery.min']
    }
});

define('modernizr', [], Modernizr);

require(['jquery', 'modernizr', 'app/simpleapp'], function ($, Modernizr, SimpleApp) {
    'use strict';

    console.log("App starts here");

    console.log(SimpleApp.add(2,3,4,5));
});

