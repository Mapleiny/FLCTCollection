import {BaseModel} from './baseModel'



/**
 * blog
 */
export interface IBlog{
	title:string;
	author:IUser;
	date:Date;

}


export class BlogModel extends BaseModel{
}

/**
 * user
 */
export interface IUser{

}

export class UserModel extends BaseModel{

}