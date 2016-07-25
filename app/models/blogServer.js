"use strict";
const baseModel_1 = require('./baseModel');
exports.BlogSchema = new baseModel_1.DB.Schema({
    title: String,
    subTitle: String,
    content: String,
    postTime: Date,
    updateTime: Date,
    attachment: [baseModel_1.DB.Schema.Types.ObjectId],
    readCount: Number,
    weather: baseModel_1.DB.Schema.Types.ObjectId
});
let blogModel = baseModel_1.DB.model('blog', exports.BlogSchema);
class BlogServer extends baseModel_1.BaseModel {
    // Blog = 
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
