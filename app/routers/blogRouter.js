"use strict";
let cssPaths = [
    '/blog/css/main.css'
];
let jsPaths = [
    '/common/js/es6-shim.min.js',
    '/common/js/system.js',
    '/common/js/system-polyfills.js',
    '/common/js/Rx.min.js',
    '/common/js/angular2.dev.js',
    '/common/js/angular2-polyfills.min.js',
    '/common/js/router.min.js',
    '/common/js/http.min.js',
    '/blog/js/main.js'
];
exports.blogRouter = function (router, staticManager) {
    router.get('/', function (req, res) {
        res.render('blog/index', {
            'static': staticManager.createStatic(cssPaths, jsPaths)
        });
    });
};
