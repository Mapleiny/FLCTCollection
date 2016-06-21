import {dbSetting} from './dbsetting';
import mongoose = require('mongoose');

var connectionCount = 0;
export let DB = (function() {
	mongoose.connect('mongodb://' + dbSetting.host + ':' + dbSetting.prot + '/' + dbSetting.db)
	connectionCount++;
	console.log(connectionCount);
	return mongoose;
})();

