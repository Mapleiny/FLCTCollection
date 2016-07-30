import {BaseServer, StatusCode,ResponseObject} from './baseServer'
import {UserModel,IUserModel} from '../models/userModel'


class UserServer extends BaseServer {
	constructor() {
		super();
	}

	getByUserName(userName:String):Promise<ResponseObject<any>>{
		let self = this;
		return new Promise(function(resolve,reject){
			if(userName&&userName.length>0) {
				UserModel.findByUsername(userName,function(err,user:IUserModel){
					if(err) {
						reject(self.createResponse<any>(StatusCode.universal,err.message));
					}else{
						resolve(self.createResponse<IUserModel>(StatusCode.success,null,user));
					}
				});
			}else{
				reject(self.createResponse<any>(StatusCode.missparams,"miss params"));
			}
		});
	}
	createUser(data:any){
		let self = this;
		return new Promise(function(resolve,reject){
			if(data.username&&data.password) {
				let newUser = new UserModel({
					nickname: data.nickname,
					avatar: data.avatar,
					username: data.username,
					password: data.password,
					registerData: new Date(),
					lastLogin: new Date()
				});
				newUser.save(function(err,savedUser:IUserModel){
					if(err) {
						reject(self.createResponse<any>(StatusCode.universal,err.message));
					}else{
						resolve(self.createResponse<IUserModel>(StatusCode.success,null,savedUser));
					}
				});

			}else{
				reject(self.createResponse<any>(StatusCode.missparams,"miss params"));
			}
		});
	}
}



export let userServer = new UserServer();