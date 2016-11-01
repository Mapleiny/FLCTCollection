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

	commonBDResponse(reject,callBack){
		let self = this;
		return function(error,data){
			if(error) {
				reject(self.createErrorResponse<any>(StatusCode.universal,error.message));
			}else{
				callBack(data);
			}
		}
	}

	createResponse<T>(data?:T):ResponseObject<T>{
		return {
			code : StatusCode.success,
			message : 'ok',
			data : data
		}
	}
	createArrayResponse<T>(data:[T],page?:Number,count?:Number):ResponseArray<T>{
		return {
			code : StatusCode.success,
			message : 'ok',
			data : {
				page:page||0,
				count:count||data.length,
				list:data
			}
		}
	}
	createErrorResponse<T>(code:StatusCode,message?:String):ResponseObject<T>{
		return {
			code : code,
			message : message||'error'
		}
	}
}