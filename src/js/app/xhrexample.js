define([], function () {
    var XHRrequest = {
        makeRequest : function () {
            var xmlhttp = new XMLHttpRequest();
            var url = "http://localhost:4711/data";

            xmlhttp.onreadystatechange = function() {
                console.log("xmlhttp.status: " + xmlhttp.status);
                console.log("xmlhttp.readyState: " + xmlhttp.readyState);
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var json = JSON.parse(xmlhttp.responseText);
                    myFunction(json);
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();

            function myFunction(json) {
                console.log(json);
//                var out = "";
//                var i;
//                for(i = 0; i < arr.length; i++) {
//                    out += '<a href="' + arr[i].url + '">' +
//                        arr[i].display + '</a><br>';
//                }
//                document.getElementById("id01").innerHTML = out;
            }
        }
    };
    return XHRrequest;
});

