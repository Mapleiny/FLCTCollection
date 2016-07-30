"use strict";
const baseDB_1 = require('../db/baseDB');
// content
let BlogSchema = new baseDB_1.DB.Schema({
    title: { type: String, required: true },
    subTitle: String,
    author: baseDB_1.DB.Schema.Types.ObjectId,
    content: String,
    postTime: Date,
    updateTime: Date,
    attachments: [baseDB_1.DB.Schema.Types.ObjectId],
    readCount: Number
});
BlogSchema.statics.findBlogById = function (id, cb) {
    this.find({ _id: id }, cb);
};
exports.BlogModel = baseDB_1.DB.model('blog', BlogSchema);
