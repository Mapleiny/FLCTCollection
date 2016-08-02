"use strict";
const baseServer_1 = require('./baseServer');
const userModel_1 = require('../models/userModel');
class UserServer extends baseServer_1.BaseServer {
    constructor() {
        super();
    }
    getByUserName(userName) {
        let self = this;
        return new Promise(function (resolve, reject) {
            if (userName && userName.length > 0) {
                userModel_1.UserModel.findByUsername(userName, self.commonBDResponse(reject, function (users) {
                    resolve(self.createResponse(users[0]));
                }));
            }
            else {
                reject(self.createErrorResponse(baseServer_1.StatusCode.missparams, "miss params"));
            }
        });
    }
    createUser(data) {
        let self = this;
        return new Promise(function (resolve, reject) {
            if (data.username && data.password) {
                let newUser = new userModel_1.UserModel({
                    nickname: data.nickname,
                    avatar: data.avatar,
                    username: data.username,
                    password: data.password,
                    registerData: new Date(),
                    lastLogin: new Date()
                });
                newUser.save(self.commonBDResponse(reject, function (savedUser) {
                    resolve(self.createResponse(savedUser));
                }));
            }
            else {
                reject(self.createErrorResponse(baseServer_1.StatusCode.missparams, "miss params"));
            }
        });
    }
}
exports.userServer = new UserServer();
