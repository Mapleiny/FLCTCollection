"use strict";
let cssPaths = [
    '/admin/css/main.css'
];
let jsPaths = [
    '/common/js/es6-shim.min.js',
    '/common/js/system.js',
    '/common/js/system-polyfills.js',
    '/common/js/Rx.min.js',
    '/common/js/angular2.min.js',
    '/common/js/angular2-polyfills.min.js',
    '/common/js/router.js',
    '/common/js/tinymce.min.js',
    '/admin/js/main.js'
];
exports.adminRouter = function (router, staticManager) {
    router.get('/admin/', function (req, res) {
        // blog list
        res.render('admin/index', {
            'static': staticManager.createStatic(cssPaths, jsPaths)
        });
    });
};
