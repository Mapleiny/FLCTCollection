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

				blog.save(function(err,savedBlog:IBlogModel){
					if(err) {
						reject(self.createResponse<any>(StatusCode.universal,err.message));
					}else{
						resolve(self.createResponse<IBlogModel>(StatusCode.success,null,savedBlog));
					}
				});
			}else{
				reject(self.createResponse<any>(StatusCode.missparams,"miss params"));
			}
		});
	}
	getPosts():Promise<any>{
		return new Promise(function(resolve,reject){
			BlogModel.find(function(err,blogs){
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