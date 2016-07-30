import {DB,M} from '../db/baseDB'


// content
let BlogSchema : M.Schema = new DB.Schema({
	title: { type: String, required: true },
	subTitle: String,
	author:DB.Schema.Types.ObjectId,
	content:String,
	postTime: Date,
	updateTime: Date,
	attachments: [DB.Schema.Types.ObjectId],
	readCount: Number
});

export interface IBlog extends M.Document{
	_id : String;
	title: String;
	subTitle: String;
	content: String;
	postTime: Date;
	updateTime: Date;
	attachments: [String];
	readCount: Number;
}


export interface IBlogModel extends M.Model<IBlog>{
	findBlogById(id,cd):void;
}
BlogSchema.statics.findBlogById = function(id,cb){
	this.find({ _id : id }, cb);
}



export let BlogModel = <IBlogModel>DB.model('blog',BlogSchema)