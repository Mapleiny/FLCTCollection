"use strict";
const baseModel_1 = require('./baseModel');
exports.UserSchema = new baseModel_1.DB.Schema({
    nickname: String,
    avatar: String,
    username: String,
    password: String,
    registerData: Date,
    lastLogin: Date
});
class UserModel extends baseModel_1.BaseModel {
    constructor() {
        super();
    }
}
exports.UserModel = UserModel;
