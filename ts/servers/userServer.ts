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
				UserModel.findByUsername(userName,self.commonBDResponse(reject,function(users){
					resolve(self.createResponse<IUser>(users[0]));
				}));
			}else{
				reject(self.createErrorResponse<IUser>(StatusCode.missparams,"miss params"));
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
				newUser.save(self.commonBDResponse(reject,function(savedUser:IUser){
					resolve(self.createResponse<IUser>(savedUser));
				}));
			}else{
				reject(self.createErrorResponse<any>(StatusCode.missparams,"miss params"));
			}
		});
	}
}



export let userServer = new UserServer();