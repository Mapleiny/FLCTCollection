import {Http,Response,Headers,RequestOptions} from 'angular2/http'

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

export class BaseServer{
	constructor(public http:Http){

	}

	post<T>(url:string,data:Object,options?:Object):Promise<T>{
		let body:string = JSON.stringify(data);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		options = options || new RequestOptions({ headers: headers });
		return this.http
			.post(url,body,options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	extractData(res: Response) {
		let body = res.json();
		return body || { };
	}

	handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
