module.exports = (function() {
	'use strict';

	var path = require('path');
	var express = require('express');
	var app = express();

	var debug = require('debug')('coffeeshop:server');

	var Database = require('./database.js');
	var dbName = process.env.NODE_ENV === 'test' ? 'coffeeshopTest' : 'coffeeshop';
	var db = new Database(dbName);

	var cfenv = require('cfenv');
	var appEnv = cfenv.getAppEnv();
	var serverPort = appEnv.port;

	app.use('/app', express.static(path.resolve(__dirname, '../../../client/app')));

	app.get('/', function(req, res) {
		res.redirect('/app');
	});

	app.get('/coffee', function(req, res) {
		db.getCoffees(sendDatabaseResult(res));
	});

	app.get('/flavor', function(req, res) {
		db.getFlavors(sendDatabaseResult(res));
	});

	var sendDatabaseResult = function(res) {
		return function(err, result) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.json(result);
			}
		};
	};

	app.listen(serverPort, function() {
		debug('Server listening on port ' + serverPort);
	});
})();
