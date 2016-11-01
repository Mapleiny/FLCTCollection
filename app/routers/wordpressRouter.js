"use strict";
const wordpressServer_1 = require('../servers/wordpressServer');
exports.wordpressRouter = function (router) {
    router.get('/wordpress/posts', function (req, res) {
        wordpressServer_1.wordpressServer.getPosts().then(result => {
            res.json(result);
        }).catch(err => {
            res.json({
                error: 1,
                message: err
            });
        });
    });
};
