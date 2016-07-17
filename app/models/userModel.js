"use strict";
const M = require('mongoose');
var userSchema = new M.Schema({
    nickname: String,
    avatar: String,
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    encryptedPassword: String,
    registerData: Date,
    lastLogin: Date
});
userSchema.methods.authenticate = function (password) {
    return true;
};
userSchema.statics.findByUsername = function (name, cb) {
    this.find({ username: new RegExp(name, 'i') }, cb);
};
exports.UserModel = M.model('user', userSchema);
