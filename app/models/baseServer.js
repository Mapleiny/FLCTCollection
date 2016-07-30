"use strict";
var baseDB_1 = require('../db/baseDB');
exports.DB = baseDB_1.DB;
class BaseServer {
    constructor() {
    }
    save() {
        this.entity.save();
    }
    get(query) { }
    delete(query) { }
    update(query, data) { }
}
exports.BaseServer = BaseServer;
