define(['jquery'], function ($) {
    var SimpleApp = {
        add : function () {
            var value = 0;
            for(var i = 0; i < arguments.length ; i++) {
                value += arguments[i];
            }
            return value;
        },
        testGet : function () {
            $.get( "/getdata", { file: "bid.json", delay: "5000" } ).done(function( data ) {
                console.log( "Get Data Loaded: ", data );
            }).fail(function() {
                console.log( "get error" );
            }).always(function() {
                console.log( "get finished" );
            });
        },
        testPost : function () {
            $.post( "/postdata", { file: "bid.json", delay: "5000" } ).done(function( data ) {
                console.log( "Post Data Loaded: ", data );
            }).fail(function() {
                console.log( "post error" );
            }).always(function() {
                console.log( "post finished" );
            });;
        },
        testPut : function () {

        },
        testDelete : function () {

        }
    };
    return SimpleApp;
});