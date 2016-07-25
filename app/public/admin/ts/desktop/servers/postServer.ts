import {Injectable} from 'angular2/core';
import {Http,Response,Headers,RequestOptions} from 'angular2/http'
import 'rxjs/add/operator/toPromise';
import {BaseServer,ResponseArrayInfo,ResponseObject,ResponseArray} from './baseServer'


export interface PostContent{
	title:String;
	postDate?:Date;
	content:String;
}



@Injectable()
export class PostServer extends BaseServer{

	private postUrl = '/api/post';

	public(content:PostContent):Promise<ResponseObject<any>>{
		return this.post<ResponseObject<any>>(this.postUrl,content)
	}
}