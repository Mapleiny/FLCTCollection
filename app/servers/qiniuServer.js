"use strict";
const Qiniu = require("qiniu");
Qiniu.conf.ACCESS_KEY = "pKqdGJdw6XHe5ys8HI6tgB3cPdH9UONyyyuM6p-K";
Qiniu.conf.SECRET_KEY = "BUfCgFGUuYhhyw1gUwXZo9mfT2yruzBoZyzIhWbk";
let defaultBucket = "develop-static";
let createUptoken = function (bucket, fileName) {
    var putPolicy = new Qiniu.rs.PutPolicy(bucket + ':' + fileName);
    return putPolicy.token();
};
exports.createDefaultUptoken = () => {
    let putPolicy = new Qiniu.rs.PutPolicy(defaultBucket);
    return putPolicy.token();
};
exports.uploadFile = function (params) {
    let extra = new Qiniu.io.PutExtra();
    let uptoken = createUptoken(defaultBucket, params.fileName);
    Qiniu.io.putFile(uptoken, params.fileName, params.filePath, extra, params.onret);
};
exports.listPrefix = function (onret, prefix, marker, limit, delimiter) {
    prefix = prefix || '';
    marker = marker || '';
    limit = limit || 1000;
    delimiter = delimiter || '';
    Qiniu.rsf.listPrefix(defaultBucket, prefix, marker, limit, delimiter, onret);
};
