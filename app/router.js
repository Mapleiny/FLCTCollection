"use strict";
const express = require("express");
exports.router = express.Router();
// index
exports.router.get('/', function (req, res) {
    res.render('index', {
        'title': 'hello',
        'static' : ''
    });
});