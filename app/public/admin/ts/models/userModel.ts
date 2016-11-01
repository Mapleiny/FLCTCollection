import {BaseModel} from './baseModel'
interface IUser{
	nickname: String;
	avatar: String;
	username: String;
	registerData: Date;
	lastLogin: Date;
}


export class UserModel extends BaseModel implements IUser{
	nickname: String;
	avatar: String;
	username: String;
	registerData: Date;
	lastLogin: Date;

	constructor(userInfo:Object){
		super(userInfo);
	}
	
	propertyMap():Object{
		return {
			nickname : 'nickname',
			avatar: 'avatar',
			username: 'username',
			registerData: 'registerData',
			lastLogin: 'lastLogin',
		};
	}
}