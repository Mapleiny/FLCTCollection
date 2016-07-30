"use strict";
const blogServer_1 = require('../servers/blogServer');
const userServer_1 = require('../servers/userServer');
let defaultResponse = function (res) {
    return function (result) {
        res.json(result);
    };
};
exports.apiRouter = function (router) {
    // blog
    router.post('/api/blog/post', function (req, res) {
        blogServer_1.blogServer.publicPost(req.body).then(defaultResponse(res)).catch(defaultResponse(res));
    });
    router.get('/api/post/:id', function (req, res) {
    });
    router.get('/api/posts', function (req, res) {
        blogServer_1.blogServer.getPosts().then(defaultResponse(res));
    });
    // user
    router.get('/api/user/:username', function (req, res) {
        userServer_1.userServer.getByUserName(req.params.username).then(defaultResponse(res)).catch(defaultResponse(res));
    });
    router.post('/api/user/create', function (req, res) {
        userServer_1.userServer.createUser(req.body).then(defaultResponse(res)).catch(defaultResponse(res));
    });
};
