"use strict";
const dbsetting_1 = require('./dbsetting');
const mongoose = require('mongoose');
var connectionCount = 0;
exports.DB = (function () {
    mongoose.connect('mongodb://' + dbsetting_1.dbSetting.host + ':' + dbsetting_1.dbSetting.prot + '/' + dbsetting_1.dbSetting.db);
    connectionCount++;
    console.log(connectionCount);
    return mongoose;
})();
