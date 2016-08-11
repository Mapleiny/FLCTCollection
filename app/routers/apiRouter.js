"use strict";
const baseServer_1 = require('../servers/baseServer');
const blogServer_1 = require('../servers/blogServer');
const userServer_1 = require('../servers/userServer');
let defaultResponse = function (res) {
    return function (result) {
        res.json(result);
    };
};
let authorize = function (req, res, next) {
    if (!req.session.user_id) {
        res.json({
            code: baseServer_1.StatusCode.unauthorized,
            message: '没有权限'
        });
    }
    else {
        next();
    }
};
exports.apiRouter = function (router) {
    // blog
    router.post('/api/blog/post', authorize, function (req, res) {
        req.body.author = req.session['user_id'];
        blogServer_1.blogServer.publicPost(req.body).then(defaultResponse(res)).catch(defaultResponse(res));
    });
    router.post('/api/blog/update/:id', function (req, res) {
        blogServer_1.blogServer.updatePost(req.params.id, req.body).then(defaultResponse(res)).catch(defaultResponse(res));
    });
    router.get('/api/blog/post/:id', function (req, res) {
        blogServer_1.blogServer.getPost(req.params.id).then(defaultResponse(res)).catch(defaultResponse(res));
    });
    router.get('/api/blog/posts', function (req, res) {
        blogServer_1.blogServer.getPosts().then(defaultResponse(res));
    });
    // user
    router.get('/api/user/:username', function (req, res) {
        userServer_1.userServer.getByUserName(req.params.username).then(defaultResponse(res)).catch(defaultResponse(res));
    });
    router.post('/api/user/create', function (req, res) {
        userServer_1.userServer.createUser(req.body).then(defaultResponse(res)).catch(defaultResponse(res));
    });
    router.post('/api/user/validate', function (req, res) {
        userServer_1.userServer.getByUserName(req.body.username).then(function (result) {
            if (result.code != baseServer_1.StatusCode.success || !result.data.authenticate(req.body.password)) {
                result.code = baseServer_1.StatusCode.accounterror;
                result.message = '账号或密码错误';
            }
            else {
                req.session['user_id'] = result.data.id;
                req.session['user'] = result.data;
            }
            res.json({
                code: result.code,
                data: result.data.exportFilter(),
                message: result.message
            });
        }).catch(defaultResponse(res));
    });
};
