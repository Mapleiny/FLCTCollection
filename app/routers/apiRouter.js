"use strict";
const blogServer_1 = require('../models/blogServer');
exports.apiRouter = function (router) {
    router.post('/api/post', function (req, res) {
        blogServer_1.blogServer.publicPost(req.body).then(function (value) {
            res.send(value);
        });
    });
    router.get('/api/posts', function (req, res) {
        blogServer_1.blogServer.getPosts().then(function (result) {
            res.send(result);
        });
    });
};
