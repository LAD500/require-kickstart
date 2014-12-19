/*global require*/

require.config({
    paths: {
        jquery: ['//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
            'libs/jquery.min']
    }
});

require(['jquery'], function ($) {
    'use strict';
    console.log($);

    alert("App starts here");
});

