module.exports = (function() {
	'use strict';

	var db;
	var COFFEE_COLLECTION = 'coffee';
	var FLAVOURS_COLLECTION = 'flavors';

	var debug = require('debug')('coffeeshop:database');

	var cfenv = require('cfenv');
	var appEnv = cfenv.getAppEnv();
	var mongoService = appEnv.getService(/mongodb/);

	var Database = function(dbName) {
		var mongoUrl;

		if (typeof dbName === 'string') {
			mongoUrl = mongoService ? mongoService.credentials.url : 'mongodb://localhost:27017/' + dbName;
			debug('using MongoDB at ' + mongoUrl);
			db = require('mongoskin').db(mongoUrl, {native_parser: true});
		} else {
			throw new Error('Database name parameter missing');
		}
	};

	Database.prototype.getCoffees = function(callback) {
		fetchAllEntriesFromCollection(COFFEE_COLLECTION, callback);
	};

	Database.prototype.getFlavors = function(callback) {
		fetchAllEntriesFromCollection(FLAVOURS_COLLECTION, callback);
	};

	var fetchAllEntriesFromCollection = function(collectionName, callback) {
		db.collection(collectionName).find().toArray(function(err, result) {
			if (err) {
				debug('Failed to retrieve values from collection ' + collectionName + ': ' + err);
			}

			callback(err, result);
		});
	};

	return Database;
})();
