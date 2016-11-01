"use strict";
const express = require("express");
// import {blogRouter} from './blogRouter'
// import {adminRouter} from './adminRouter'
// import {apiRouter} from './apiRouter'
const wordpressRouter_1 = require('./wordpressRouter');
exports.router = express.Router();
wordpressRouter_1.wordpressRouter(exports.router);
// let staticManager = new StaticManager(true);
// staticManager.addCommonStatic([
// 	'/common/css/bootstrap.min.css',
// 	'/common/css/font-awesome.min.css'
// ],[
// ]);
// admin
// adminRouter(router,staticManager);
// index
// blogRouter(router,staticManager);
// api
// apiRouter(router);
