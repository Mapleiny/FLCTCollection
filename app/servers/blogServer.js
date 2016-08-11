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
                blog.save(self.commonBDResponse(reject, function (savedBlog) {
                    resolve(self.createResponse(savedBlog));
                }));
            }
            else {
                reject(self.createErrorResponse(baseServer_1.StatusCode.missparams, "miss params"));
            }
        });
    }
    updatePost(blogId, data) {
        let self = this;
        return new Promise(function (resolve, reject) {
            if (data && data.title && data.content) {
                blogModel_1.BlogModel.findOneAndUpdate({ _id: blogId }, data, self.commonBDResponse(reject, function (savedBlog) {
                    resolve(self.createResponse(savedBlog));
                }));
            }
            else {
                reject(self.createErrorResponse(baseServer_1.StatusCode.missparams, "miss params"));
            }
        });
    }
    getPosts() {
        let self = this;
        return new Promise(function (resolve, reject) {
            blogModel_1.BlogModel.find(self.commonBDResponse(reject, function (blogs) {
                resolve(self.createArrayResponse(blogs));
            }));
        });
    }
    getPost(id) {
        let self = this;
        return new Promise(function (resolve, reject) {
            blogModel_1.BlogModel.findBlogById(id, self.commonBDResponse(reject, function (blogs) {
                resolve(self.createResponse(blogs[0]));
            }));
        });
    }
    deletePosts(postIds) {
        let self = this;
        return new Promise(function (resolve, reject) {
            blogModel_1.BlogModel.find(self.commonBDResponse(reject, function (blogs) {
                resolve(self.createArrayResponse(blogs));
            }));
        });
    }
}
exports.blogServer = new BlogServer();
