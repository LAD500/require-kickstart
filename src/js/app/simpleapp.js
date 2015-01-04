define([], function () {
    var SimpleApp = {
        add : function () {
            var value = 0;
            for(var i = 0; i < arguments.length ; i++) {
                value += arguments[i];
            }
            return value;
        }
    };
    return SimpleApp;
});