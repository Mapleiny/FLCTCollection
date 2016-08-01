export enum StatusCode{
	success = 0,
	unauthorized = 100,
	accounterror = 101, // 账号或密码错误
	missparams = 200,
	universal = 500
}

export interface ResponseArrayInfo<T>{
	page:Number;
	count:Number;
	list:[T];
}

export interface ResponseObject<T>{
	code : StatusCode;
	message:String;
	data?:T;
}

export interface ResponseArray<T>{
	code : StatusCode;
	message:String;
	data:ResponseArrayInfo<T>;
}


export class BaseServer{
	constructor(){}
	createResponse<T>(code:StatusCode,message:String,data?:T):ResponseObject<T>{
		return {
			code : code,
			message : message,
			data : data
		}
	}
}