import {BaseServer, StatusCode,ResponseObject} from './baseServer'
import {UserModel,IUserModel,IUser} from '../models/userModel'


class UserServer extends BaseServer {
	constructor() {
		super();
	}

	getByUserName(userName:String):Promise<ResponseObject<IUser>>{
		let self = this;
		return new Promise(function(resolve,reject){
			if(userName&&userName.length>0) {
				UserModel.findByUsername(userName,function(err,users:[IUser]){
					if(err) {
						reject(self.createResponse<IUser>(StatusCode.universal,err.message));
					}else{
						resolve(self.createResponse<IUser>(StatusCode.success,'ok',users[0]));
					}
				});
			}else{
				reject(self.createResponse<IUser>(StatusCode.missparams,"miss params"));
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
						resolve(self.createResponse<IUserModel>(StatusCode.success,'ok',savedUser));
					}
				});

			}else{
				reject(self.createResponse<any>(StatusCode.missparams,"miss params"));
			}
		});
	}
}



export let userServer = new UserServer();