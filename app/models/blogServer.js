"use strict";
const baseServer_1 = require('./baseServer');
exports.BlogSchema = new baseServer_1.DB.Schema({
    title: String,
    subTitle: String,
    content: String,
    postTime: Date,
    updateTime: Date,
    attachment: [baseServer_1.DB.Schema.Types.ObjectId],
    readCount: Number,
    weather: baseServer_1.DB.Schema.Types.ObjectId
});
let blogModel = baseServer_1.DB.model('blog', exports.BlogSchema);
class BlogServer extends baseServer_1.BaseServer {
    constructor() {
        super();
    }
    publicPost(data) {
        return new Promise(function (resolve, reject) {
            if (data && data.title && data.content) {
                let blog = new blogModel({
                    title: data.title,
                    content: data.content,
                    postTime: data.postDate || new Date()
                });
                blog.save(function (err, blog) {
                    if (err) {
                        reject(err);
                    }
                    resolve(blog);
                });
            }
            else {
                reject("miss data or data.title or data.content");
            }
        });
    }
    getPosts() {
        return new Promise(function (resolve, reject) {
            blogModel.find(function (err, blogs) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(blogs);
                }
            });
        });
    }
}
exports.blogServer = new BlogServer();
