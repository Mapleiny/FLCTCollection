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
class BlogModel extends baseModel_1.BaseModel {
    // Blog = 
    constructor(db) {
        super();
        this.db = db;
    }
    publicPost(data) {
        return new Promise(function (resolve, reject) {
            if (data) {
                resolve(data);
            }
            else {
                reject("data must not be null");
            }
        });
    }
    getPosts() {
    }
}
exports.blogModel = new BlogModel();
