define("app/simpleapp",["jquery"],function(e){var t={add:function(){var e=0;for(var t=0;t<arguments.length;t++)e+=arguments[t];return e},testGet:function(){e.get("/getdata",{file:"bid.json",delay:"5000"}).done(function(e){console.log("Get Data Loaded: ",e)}).fail(function(){console.log("get error")}).always(function(){console.log("get finished")})},testPost:function(){e.post("/postdata",{file:"bid.json",delay:"5000"}).done(function(e){console.log("Post Data Loaded: ",e)}).fail(function(){console.log("post error")}).always(function(){console.log("post finished")})},testPut:function(){},testDelete:function(){}};return t}),require.config({paths:{jquery:["//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min","libs/jquery/jquery.min"]}}),define("modernizr",[],Modernizr),requirejs(["jquery","modernizr","app/simpleapp"],function(e,t,n){console.log("App starts here"),console.log(n.add(2,3,4,5)),n.testGet(),n.testPost()}),define("main",function(){});