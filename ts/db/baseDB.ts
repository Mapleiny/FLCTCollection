import {dbSetting} from './dbsetting';
export import M = require('mongoose');

var connectionCount = 0;
export let DB = (function() {
	M.connect('mongodb://' + dbSetting.host + ':' + dbSetting.prot + '/' + dbSetting.db)
	connectionCount++;
	console.log(connectionCount);
	return M;
})();

