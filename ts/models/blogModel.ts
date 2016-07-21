import {BaseModel, DB} from './baseModel'

export let BlogSchema = new DB.Schema({
	title: String,
	subTitle: String,
	content:String,
	postTime: Date,
	updateTime: Date,
	attachment: [DB.Schema.Types.ObjectId],
	readCount: Number,
	weather: DB.Schema.Types.ObjectId
});

class BlogModel extends BaseModel {
	constructor() {
		super();
	}

	getContentList(){
	}
}


export let blogModel = new BlogModel();