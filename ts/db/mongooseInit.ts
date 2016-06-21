import * as Models from '../models/allModel';
import mongoose = require('mongoose');
import {dbSetting} from './dbsetting';

console.log(Models);

mongoose.connect('mongodb://' + dbSetting.host + ':' + dbSetting.prot + '/' + dbSetting.db);
let db = mongoose.connection;
db.once('open', function() {
	for (var schemaName in Models) {
		let schema = Models[schemaName];
		schemaName = schemaName.slice(0,-6);
		mongoose.model(schemaName, schema);
	};
});