import {DB,M} from '../db/baseDB'

let UserSchema: M.Schema = new DB.Schema({
	nickname: String,
	avatar: String,
	username: { type: String, unique: true, required: true },
	password: { type: String, unique: true, required: true },
	encryptedPassword: String,
	registerData: Date,
	lastLogin: Date
});

export interface IUser extends M.Document{
	_id:String;
	nickname: String;
	avatar: String;
	username: String;
	password: String;
	encryptedPassword: String;
	registerData: Date;
	lastLogin: Date;

	authenticate(password: String): boolean;
	exportFilter():Object;
}

UserSchema.methods.authenticate = function(password: String): boolean{
	return password == this.password;
}

UserSchema.methods.exportFilter = function():Object{
	return {
		nickname: this.nickname,
		avatar: this.avatar,
		username: this.username,
		registerData: this.registerData,
		lastLogin: this.lastLogin
	}
}

export interface IUserModel extends M.Model<IUser>{
	findByUsername(name, cb): void;
}
UserSchema.statics.findByUsername = function(name, cb) {
	this.find({ username: new RegExp(name, 'i') }, cb);
}


export let UserModel = <IUserModel>DB.model('user', UserSchema);


