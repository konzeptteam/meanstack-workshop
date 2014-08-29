var express = require('express');
var app = express();

var debug = require('debug')('workshop:server');

var serverPort = process.env.VCAP_APP_PORT || 3000;

app.get('/', function(req, res){
	res.send('Hello jambitees :)');
});

app.listen(serverPort, function() {
	debug('Server listening on port ' + serverPort);
});