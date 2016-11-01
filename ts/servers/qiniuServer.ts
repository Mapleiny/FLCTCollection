import Qiniu = require("qiniu");

interface IUploadParams{
	filePath:String;
	fileName?:String;
	onret?:Qiniu.IResponse;
}

Qiniu.conf.ACCESS_KEY = "pKqdGJdw6XHe5ys8HI6tgB3cPdH9UONyyyuM6p-K";
Qiniu.conf.SECRET_KEY = "BUfCgFGUuYhhyw1gUwXZo9mfT2yruzBoZyzIhWbk";

let defaultBucket = "develop-static";

let createUptoken = function(bucket:String,fileName:String){
	var putPolicy = new Qiniu.rs.PutPolicy(bucket+':'+fileName);
	return putPolicy.token();
};

export let createDefaultUptoken = ()=>{
	let putPolicy = new Qiniu.rs.PutPolicy(defaultBucket);
	return putPolicy.token();
}

export let uploadFile = function(params:IUploadParams){
	let extra = new Qiniu.io.PutExtra();
	let uptoken = createUptoken(defaultBucket,params.fileName);
    Qiniu.io.putFile(uptoken, params.fileName, params.filePath, extra, params.onret);
};


export let listPrefix = function(onret:Qiniu.IRsfResponse , prefix?:String, marker?:String, limit?:Number, delimiter?:String){
	prefix = prefix || '';
	marker = marker || '';
	limit = limit || 1000;
	delimiter = delimiter || '';
	Qiniu.rsf.listPrefix(defaultBucket,prefix,marker,limit,delimiter,onret);
}