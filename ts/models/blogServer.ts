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

let blogModel = DB.model('blog',BlogSchema);

class BlogServer extends BaseModel {
	// Blog = 
	constructor() {
		super();
	}

	publicPost(data:any):Promise<any>{
		return new Promise(function(resolve,reject){
			if(data&&data.title&&data.content) {
				let blog = new blogModel({
					title:data.title,
					content:data.content,
					postTime: data.postDate || new Date()
				});

				blog.save(function(err,blog){
					if(err) {
						reject(err);
					}
					resolve(blog);
				});

				
			}else{
				reject("miss data or data.title or data.content");
			}
		});
	}
	getPosts():Promise<any>{
		return new Promise(function(resolve,reject){
			blogModel.find(function(err,blogs){
				if(err) {
					reject(err);
				}else{
					resolve(blogs);
				}
			});
		});
	}
}


export let blogServer = new BlogServer();