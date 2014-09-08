module.exports = (function() {
	'use strict';

	var db;
	var COFFEE_COLLECTION = 'coffee';
	var FLAVOURS_COLLECTION = 'flavours';

	var debug = require('debug')('coffeeshop:database');

	var Database = function(dbName) {
		if (typeof dbName === 'string') {
			db = require('mongoskin').db('mongodb://localhost:27017/' + dbName, {native_parser: true});
		} else {
			throw new Error('Database name parameter missing');
		}
	};

	Database.prototype.getCoffees = function(callback) {
		fetchAllEntriesFromCollection(COFFEE_COLLECTION, callback);
	};

	Database.prototype.getFlavours = function(callback) {
		fetchAllEntriesFromCollection(FLAVOURS_COLLECTION, callback);
	};

	var fetchAllEntriesFromCollection(collectionName, callback) {
		db.collection(collectionName).find().toArray(function(err, result) {
		    if (err) {
				debug('Failed to retrieve values from collection ' + collectionName + ': ' + err);
			}

			callback(err, result);
		});
	}

	return Database;
})();
