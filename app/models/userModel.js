"use strict";
const baseDB_1 = require('../db/baseDB');
let UserSchema = new baseDB_1.DB.Schema({
    nickname: String,
    avatar: String,
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    encryptedPassword: String,
    registerData: Date,
    lastLogin: Date
});
UserSchema.methods.authenticate = function (password) {
    return password == this.password;
};
UserSchema.methods.exportFilter = function () {
    return {
        nickname: this.nickname,
        avatar: this.avatar,
        username: this.username,
        registerData: this.registerData,
        lastLogin: this.lastLogin
    };
};
UserSchema.statics.findByUsername = function (name, cb) {
    this.find({ username: new RegExp(name, 'i') }, cb);
};
exports.UserModel = baseDB_1.DB.model('user', UserSchema);
