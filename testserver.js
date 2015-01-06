// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    fs = require("fs"),
    bodyParser = require('body-parser');

//Create server
var app = express();
app.use(bodyParser.json());

// static files
app.use(express.static(__dirname + '/src'));

//Start server
var port = 4711;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});

app.get('/data', function(req, res){
    var filePath = req.query.file || '_default.json';
    var latency = parseInt(req.query.latency) || 0;
    setTimeout(function() {
        var content = String(fs.readFileSync(path.join( application_root, "test/data/" , filePath)));
        res.header('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.json(JSON.parse(content));
        res.status(200).end();
    } , latency);
});

// TODO: create post request
// TODO: create put request
// TODO: create delete request

// TODO: explore secure services






