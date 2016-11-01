import {Http,Response} from 'angular2/http'
import 'rxjs/add/operator/toPromise';
import {
	BaseServer,
	ResponseArrayInfo,
	ResponseObject,
	ResponseArray,
	StatusCode
} from './baseServer';

import {UserModel} from '../models/userModel'

export class UserServer extends BaseServer{
	private userBaseUrl = '/api/user';

	constructor(public http:Http){
		super(http);
	}

	getUserInfo(username:String):Promise<ResponseObject<UserModel>>{
		let url = this.userBaseUrl+'/username'
		return this.get<ResponseObject<UserModel>>(url);
	}
	validate(username:String,password:String){
		let url = this.userBaseUrl+'/validate'
		return this.post<ResponseObject<UserModel>>(url,{
			username: username,
			password: password
		});
	}
}