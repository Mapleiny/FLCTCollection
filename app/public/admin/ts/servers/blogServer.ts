import {Http,Response} from 'angular2/http'
import 'rxjs/add/operator/toPromise';
import {UserModel} from '../models/userModel'
import {BlogModel} from '../models/blogModel'

import {BaseServer,ResponseArrayInfo,ResponseObject,ResponseArray} from './baseServer'

export class BlogServer extends BaseServer{

	constructor(public http:Http){
		super(http);

		this.baseUrl = '/api/blog';
	}

	public(content:BlogModel):Promise<ResponseObject<any>>{
		let url = this.componentUrl('post');
		return this.post<ResponseObject<BlogModel>>(url,content)
	}
	list():Promise<ResponseArray<BlogModel>>{
		let url = this.componentUrl('posts');
		return this.get<ResponseArray<BlogModel>>(url).catch((result:ResponseArray<BlogModel>)=>{
			return 1;
		}).then((result)=>{
			return result;
		});
	}
	getPost(postId:String){
		let url = this.componentUrl(['post',postId]);
		return this.get<ResponseObject<BlogModel>>(url);
	}
	update(id:String,content:BlogModel){
		let url = this.componentUrl(['update',id]);
		return this.post<ResponseObject<BlogModel>>(url,content).catch((result)=>{
			return result;
		}).then((result)=>{
			return result;
		});
	}
	delete(postIds){
		let url = this.componentUrl('delete');
		if(!(postIds instanceof Array)) {
			postIds = [postIds];
		}
		return this.post<ResponseArray<any>>(url,postIds);
	}
}