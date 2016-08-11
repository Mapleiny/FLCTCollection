import {BaseServer, StatusCode,ResponseObject,ResponseArray} from './baseServer'
import {BlogModel,IBlogModel,IBlog} from '../models/blogModel'



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

				blog.save(self.commonBDResponse(reject,function(savedBlog:IBlog){
					resolve(self.createResponse<IBlog>(savedBlog));
				}));
			}else{
				reject(self.createErrorResponse<any>(StatusCode.missparams,"miss params"));
			}
		});
	}
	updatePost(blogId:String,data:any):Promise<ResponseObject<any>>{
		let self = this;
		return new Promise(function(resolve,reject){
			if(data&&data.title&&data.content) {
				BlogModel.findOneAndUpdate({_id:blogId},data,self.commonBDResponse(reject,function(savedBlog:IBlog){
					resolve(self.createResponse<IBlog>(savedBlog));
				}));
			}else{
				reject(self.createErrorResponse<any>(StatusCode.missparams,"miss params"));
			}
		});
	}
	getPosts():Promise<ResponseArray<IBlog>>{
		let self = this;
		return new Promise(function(resolve,reject){
			BlogModel.find(self.commonBDResponse(reject,function(blogs:[IBlog]){
				resolve(self.createArrayResponse(blogs));
			}));
		});
	}
	getPost(id:String):Promise<ResponseObject<IBlog>>{
		let self = this;
		return new Promise(function(resolve,reject){
			BlogModel.findBlogById(id,self.commonBDResponse(reject,function(blogs){
				resolve(self.createResponse<IBlog>(blogs[0]));
			}));
		});
	}
	deletePosts(postIds):Promise<any>{
		let self = this;
		return new Promise(function(resolve,reject){
			BlogModel.find(self.commonBDResponse(reject,function(blogs:[IBlog]){
				resolve(self.createArrayResponse(blogs));
			}));
		});
	}
}


export let blogServer = new BlogServer();