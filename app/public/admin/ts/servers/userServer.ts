import {Http} from 'angular2/http'
import 'rxjs/add/operator/toPromise';
import {
	BaseServer,
	ResponseArrayInfo,
	ResponseObject,
	ResponseArray,
	StatusCode} from './baseServer';

export interface IUser{
	nickname: String;
	avatar: String;
	username: String;
	registerData: Date;
	lastLogin: Date;
}
export class UserServer extends BaseServer{
	private userBaseUrl = '/api/user';

	constructor(public http:Http){
		super(http);
	}

	getUserInfo(username:String):Promise<ResponseObject<IUser>>{
		let url = this.userBaseUrl+'/username'
		return this.get<ResponseObject<IUser>>(url);
	}
	validate(username:String,password:String){
		let url = this.userBaseUrl+'/validate'
		return this.post<ResponseObject<IUser>>(url,{
			username: username,
			password: password
		});
	}
}