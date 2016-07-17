import M = require('mongoose');

var userSchema: M.Schema = new M.Schema({
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
}

userSchema.methods.authenticate = function(password: String): boolean{
	return true;
}

export interface IUserModel extends M.Model<IUser>{
	findByUsername(name, cb): void;
}
userSchema.statics.findByUsername = function(name, cb) {
	this.find({ username: new RegExp(name, 'i') }, cb);
}


export let UserModel = <IUserModel>M.model('user', userSchema);