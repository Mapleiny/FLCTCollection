"use strict";
let cssPaths = ['/css/main.css'];
let jsPaths = [''];
exports.blogRouter = function (router, staticManager) {
    staticManager.setCommonStatic([
        '/css/bootstrap.min.css'
    ], [
        '/js/jquery-3.1.0.min.js'
    ]);
    router.get('/', function (req, res) {
        res.render('index', {
            'title': 'hello',
            'static': staticManager.createStatic(cssPaths, jsPaths)
        });
    });
};
