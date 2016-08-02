import {BaseServer, StatusCode,ResponseObject} from './baseServer'
import {BlogModel,IBlogModel} from '../models/blogModel'



class BlogServer extends BaseServer {
	constructor() {
		super();
	}
	publicPost(data:any):Promise<ResponseObject<any>>{
		let self = this;
		return new Promise(function(resolve,reject){
			if(data&&data.title&&data.content) {
				let blog = new BlogModel({
					title:data.title,
					content:data.content,
					postTime: data.postDate || new Date()
				});

				blog.save(self.commonBDResponse(reject,function(savedBlog:IBlogModel){
					resolve(self.createResponse<IBlogModel>(savedBlog));
				}));
			}else{
				reject(self.createErrorResponse<any>(StatusCode.missparams,"miss params"));
			}
		});
	}
	getPosts():Promise<any>{
		let self = this;
		return new Promise(function(resolve,reject){
			BlogModel.find(self.commonBDResponse(reject,function(blogs:[IBlogModel]){
				resolve(self.createArrayResponse(blogs));
			}));
		});
	}
	deletePosts(postIds):Promise<any>{
		let self = this;
		return new Promise(function(resolve,reject){
			BlogModel.find(self.commonBDResponse(reject,function(blogs:[IBlogModel]){
				resolve(self.createArrayResponse(blogs));
			}));
		});
	}
}


export let blogServer = new BlogServer();