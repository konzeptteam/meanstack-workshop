module.exports(function() {
	'use strict';

	var express = require('express');
	var app = express();

	var debug = require('debug')('coffeeshop:server');

	var Database = require('./database.js');
	var dbName = process.env.NODE_ENV === 'test' ? 'coffeeshopTest' : 'coffeeshop';
	var db = new Database(dbName);

	var serverPort = process.env.VCAP_APP_PORT || 3000;

	app.get('/', function(req, res) {
		res.send('Hello jambitees :)');
	});

	app.get('/coffee', function(req, res) {
		db.getCoffees(sendDatabaseResult);
	});

	app.get('/flavour', function(req, res) {
		db.getFlavours(sendDatabaseResult);
	});

	var sendDatabaseResult = function(err, result) {
		if (err) {
			res.send(500, err);
		} else {
			res.json(result);
		}
	};

	app.listen(serverPort, function() {
		debug('Server listening on port ' + serverPort);
	});
})();
