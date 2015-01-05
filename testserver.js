// Module dependencies.
var application_root = __dirname,
    express = require( 'express' ), //Web framework
    path = require( 'path' ), //Utilities for dealing with file paths
    fs = require("fs"),
    bodyParser = require('body-parser');

//Create server
var app = express();
app.use(bodyParser.json());

//Start server
var port = 4711;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});

// serve index page
app.get('/', function(req, res){
    res.sendFile(path.join(application_root, 'src/index.html'));
});


app.get('/data', function(req, res){
    var filePath = req.query.file || '_default.json';
    var latency = parseInt(req.query.latency) || 0;

    setTimeout(function() {
        var content = String(fs.readFileSync(path.join( application_root, "test/data/" , filePath)));
        res.set({ 'Content-Type': 'application/json' });
        res.json(JSON.parse(content));
        res.status(201).end();
    } , latency);
});






