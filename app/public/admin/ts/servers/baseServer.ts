import {Injectable} from 'angular2/core';
import {Http,Response,Headers,RequestOptions,URLSearchParams} from 'angular2/http'

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
	code : Number;
	message:String;
	data?:T;
}

export interface ResponseArray<T>{
	code : Number;
	message:String;
	data:ResponseArrayInfo<T>;
}


@Injectable()
export class BaseServer{
	baseUrl: String;

	constructor(public http:Http){
	}

	protected post<T>(url:string,params:Object,options?:Object):Promise<T>{
		let body:string = JSON.stringify(params);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		options = options || new RequestOptions({ headers: headers });
		return this.http
			.post(url,body,options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
	protected get<T>(url:string,params?:Object,options?:RequestOptions):Promise<T>{
		let headers = new Headers({ 'Content-Type': 'application/json' });
		options = options || new RequestOptions({ headers: headers });

		let searchParams:URLSearchParams = new URLSearchParams();
		if(params) {
			for(var key in params){
				searchParams.set(key,params[key]);
			}
		}
		options.search = searchParams;
		return this.http
			.get(url,options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	protected componentUrl(path){
		if(path instanceof Array) {
			path = path.join('/')
		}
		return this.baseUrl+'/'+path;
	}

	protected extractData(res: Response){
		let body = res.json();
		return body || { };
	}

	protected handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
