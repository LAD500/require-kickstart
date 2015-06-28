define(['angularAMD'], function (angularAMD) {
    var app = angular.module("kickstart", []);

    console.log("bootstrapped");
    return angularAMD.bootstrap(app);
});
