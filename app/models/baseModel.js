"use strict";
var baseDB_1 = require('../db/baseDB');
exports.DB = baseDB_1.DB;
class BaseModel {
    constructor() {
    }
    save() {
    }
    get(query) { }
    delete(query) { }
    update(query, data) { }
}
exports.BaseModel = BaseModel;
