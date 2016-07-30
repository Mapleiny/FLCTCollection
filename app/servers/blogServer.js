"use strict";
const baseServer_1 = require('./baseServer');
const blogModel_1 = require('../models/blogModel');
class BlogServer extends baseServer_1.BaseServer {
    constructor() {
        super();
    }
    publicPost(data) {
        let self = this;
        return new Promise(function (resolve, reject) {
            if (data && data.title && data.content) {
                let blog = new blogModel_1.BlogModel({
                    title: data.title,
                    content: data.content,
                    postTime: data.postDate || new Date()
                });
                blog.save(function (err, savedBlog) {
                    if (err) {
                        reject(self.createResponse(baseServer_1.StatusCode.universal, err.message));
                    }
                    else {
                        resolve(self.createResponse(baseServer_1.StatusCode.success, null, savedBlog));
                    }
                });
            }
            else {
                reject(self.createResponse(baseServer_1.StatusCode.missparams, "miss params"));
            }
        });
    }
    getPosts() {
        return new Promise(function (resolve, reject) {
            blogModel_1.BlogModel.find(function (err, blogs) {
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
