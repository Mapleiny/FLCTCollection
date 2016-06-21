"use strict";
const Models = require('../models/allModel');
const mongoose = require('mongoose');
const dbsetting_1 = require('./dbsetting');
console.log(Models);
mongoose.connect('mongodb://' + dbsetting_1.dbSetting.host + ':' + dbsetting_1.dbSetting.prot + '/' + dbsetting_1.dbSetting.db);
let db = mongoose.connection;
db.once('open', function () {
    for (var schemaName in Models) {
        let schema = Models[schemaName];
        schemaName = schemaName.slice(0, -6);
        mongoose.model(schemaName, schema);
    }
    ;
});
