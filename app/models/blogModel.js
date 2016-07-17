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
    constructor() {
        super();
    }
}
exports.BlogModel = BlogModel;
