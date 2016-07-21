"use strict";
let cssPaths = ['/css/main.css'];
let jsPaths = [''];
exports.blogRouter = function (router, staticManager) {
    staticManager.addCommonStatic([
        '/css/bootstrap.min.css'
    ], [
        '/js/jquery-3.1.0.min.js',
        '<script type="text/javascript" src="/js/require.js" data-main="/js/main.js"></script>'
    ]);
    let item = {
        link: '#',
        title: '我是一个标题',
        subTitle: '我是副标题',
        content: '我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。',
        tags: [{ name: "旅行", link: '#' }, { name: "飞翔", link: '#' }],
        postDate: new Date()
    };
    router.get('/', function (req, res) {
        // blog list
        res.render('index', {
            'title': 'Blog',
            'articles': [item],
            'static': staticManager.createStatic(cssPaths, jsPaths)
        });
    });
};
