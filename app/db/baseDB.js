"use strict";
const dbsetting_1 = require('./dbsetting');
exports.M = require('mongoose');
var connectionCount = 0;
exports.DB = (function () {
    exports.M.connect('mongodb://' + dbsetting_1.dbSetting.host + ':' + dbsetting_1.dbSetting.prot + '/' + dbsetting_1.dbSetting.db);
    connectionCount++;
    console.log(connectionCount);
    return exports.M;
})();
