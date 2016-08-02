import {Http} from 'angular2/http'
import 'rxjs/add/operator/toPromise';

import {IUser} from './userServer'
import {BaseServer,ResponseArrayInfo,ResponseObject,ResponseArray} from './baseServer'



export interface IBlog {
	title: String;
	subTitle?: String;
	author?:IUser;
	content: String;
	postTime?: Date;
	updateTime?: Date;
	attachments?: [String];
	readCount?: Number;
}
export class BlogServer extends BaseServer{

	constructor(public http:Http){
		super(http);

		this.baseUrl = '/api/blog';
	}

	public(content:IBlog):Promise<ResponseObject<any>>{
		let url = this.componentUrl('post');
		return this.post<ResponseObject<any>>(url,content)
	}
	list(){
		let url = this.componentUrl('posts');
		return this.get<ResponseArray<IBlog>>(url)
	}
	delete(postIds){
		let url = this.componentUrl('delete');
		if(!(postIds instanceof Array)) {
			postIds = [postIds];
		}
		return this.post<ResponseArray<any>>(url,postIds);
	}
}