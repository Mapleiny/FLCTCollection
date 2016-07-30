import {Http} from 'angular2/http'
import 'rxjs/add/operator/toPromise';
import {BaseServer,ResponseArrayInfo,ResponseObject,ResponseArray} from './baseServer'


export interface PostContent{
	title:String;
	postDate?:Date;
	content:String;
}
export class PostServer extends BaseServer{

	private baseUrl = '/api/blog';

	constructor(public http:Http){
		super(http);
	}

	public(content:PostContent):Promise<ResponseObject<any>>{
		let url = this.baseUrl+'/post'


		return this.post<ResponseObject<any>>(url,content)
	}
}