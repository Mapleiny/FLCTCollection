"use strict";
const blogServer_1 = require('../servers/blogServer');
let cssPaths = ['/blog/css/main.css'];
let jsPaths = [''];
let ConvertBlogToContentItem = function (blog) {
    return {
        banner: null,
        link: "/blog/" + blog.id,
        title: blog.title,
        subTitle: blog.subTitle,
        content: blog.content,
        tags: null,
        postDate: blog.postTime
    };
};
exports.blogRouter = function (router, staticManager) {
    router.get('/', function (req, res) {
        // blog list
        blogServer_1.blogServer.getPosts().then(function (result) {
            res.render('index', {
                'title': 'Blog',
                'articles': result,
                'static': staticManager.createStatic(cssPaths, jsPaths)
            });
        });
    });
};
