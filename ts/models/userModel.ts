import {BaseModel, DB} from './baseModel'

export let UserSchema = new DB.Schema({
	nickname:String,
	avatar: String,
	username: String,
	password: String,
	registerData: Date,
	lastLogin: Date
});


interface UserProfile {
	nickname: string;
	avatar: string;
}
interface AccountInfo {
	username: string;
	password: string;
	registerData: Date;
	lastLogin: Date;
}

export class UserModel extends BaseModel{
	constructor() {
		super();
	}
}