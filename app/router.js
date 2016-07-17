"use strict";
const express = require("express");
exports.router = express.Router();
// index
exports.router.get('/', function (req, res) {
    res.render('index', {
        'title': 'hello'
    });
});
// users
exports.router.get('/api/users', function (req, res) {
});
exports.router.post('/api/users/register', function (req, res) {
});
