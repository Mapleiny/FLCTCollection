"use strict";
const express = require("express");
const staticManager_1 = require('../utils/staticManager');
const blogRouter_1 = require('./blogRouter');
exports.router = express.Router();
let staticManager = new staticManager_1.StaticManager(true);
// index
blogRouter_1.blogRouter(exports.router, staticManager);
