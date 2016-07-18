import Qiniu = require("qiniu");

interface IUploadParams{
	filePath:String;
	fileName?:String;
	onret?:Qiniu.IResponse;
}

Qiniu.conf.ACCESS_KEY = "pKqdGJdw6XHe5ys8HI6tgB3cPdH9UONyyyuM6p-K";
Qiniu.conf.SECRET_KEY = "BUfCgFGUuYhhyw1gUwXZo9mfT2yruzBoZyzIhWbk";

let bucket = "develop-static";

let createUptoken = function(bucket:String,fileName:String){
	var putPolicy = new Qiniu.rs.PutPolicy(bucket+':'+fileName);
	return putPolicy.token();
};

export let uploadFile = function(params:IUploadParams){
	let extra = new Qiniu.io.PutExtra();
	let uptoken = createUptoken(bucket,params.fileName);
    Qiniu.io.putFile(uptoken, params.fileName, params.filePath, extra, params.onret);
};