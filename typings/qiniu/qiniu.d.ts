declare module 'qiniu'{
	// result
	enum HTTPCode{
		SUCCESS = 200,
		PATTERN_ERROR = 400,
		TOKEN_INVALID = 401,
		LENGTH_LIMIT = 413,
		CUSTOM_SERVER_ERROR = 579,
		SERVER_ERROR = 599,
		SOURCE_EXIST = 614
	}

	interface IResultStatus{
		code:HTTPCode;
		error:String;
	}

	interface IResult{
		hash:String;
		key:String;
		persistentId?:String;
	}

	interface IResponse{
		(error:IResultStatus,result:IResult):void;
	}


	// config
	interface IConf{
		ACCESS_KEY:String;
		SECRET_KEY:String;
	}
	let conf:IConf;

	// rs
	interface IPutPolicy{
		callbackUrl:String;
		callbackBody:String;
		token():String;
	}
	interface IRs{
		PutPolicy:{
			new (scope:String, callbackUrl?, callbackBody?, returnUrl?, returnBody?, endUser?, expires?, persistentOps?, persistentNotifyUrl?):IPutPolicy
		};
	}
	let rs:IRs

	// io
	interface IPutExtra{
	}
	interface IIo{
		PutExtra:{
			new ():IPutExtra
		};
		putFile(uptoken:String,key:String,localFile:String,extra:IPutExtra,onret:IResponse);
	}


	let io:IIo;
}