"use strict";
const Qiniu = require("qiniu");
Qiniu.conf.ACCESS_KEY = "pKqdGJdw6XHe5ys8HI6tgB3cPdH9UONyyyuM6p-K";
Qiniu.conf.SECRET_KEY = "BUfCgFGUuYhhyw1gUwXZo9mfT2yruzBoZyzIhWbk";
let bucket = "develop-static";
let createUptoken = function (bucket, fileName) {
    var putPolicy = new Qiniu.rs.PutPolicy(bucket + ':' + fileName);
    return putPolicy.token();
};
exports.uploadFile = function (params) {
    let extra = new Qiniu.io.PutExtra();
    let uptoken = createUptoken(bucket, params.fileName);
    Qiniu.io.putFile(uptoken, params.fileName, params.filePath, extra, params.onret);
};
