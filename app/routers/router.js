"use strict";
const express = require("express");
const staticManager_1 = require('../utils/staticManager');
const blogRouter_1 = require('./blogRouter');
const adminRouter_1 = require('./adminRouter');
exports.router = express.Router();
let staticManager = new staticManager_1.StaticManager(true);
staticManager.addCommonStatic([
    '/common/css/bootstrap.min.css',
    '/common/css/font-awesome.min.css'
], []);
// admin
adminRouter_1.adminRouter(exports.router, staticManager);
// index
blogRouter_1.blogRouter(exports.router, staticManager);
