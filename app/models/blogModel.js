"use strict";
const baseModel_1 = require('./baseModel');
exports.BlogSchema = new baseModel_1.DB.Schema({
    nickname: String,
    avatar: String,
    username: String,
    password: String,
    registerData: Date,
    lastLogin: Date
});
class BlogModel extends baseModel_1.BaseModel {
    constructor() {
        super();
    }
}
exports.BlogModel = BlogModel;
