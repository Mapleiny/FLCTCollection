import {Http,Response} from 'angular2/http'
import 'rxjs/add/operator/toPromise';
import {BaseServer,ResponseArrayInfo,ResponseObject,ResponseArray,StatusCode} from './baseServer'

import {FileModel} from '../models/fileModel'


let uploadFileUrl = 'http://upload.qiniu.com/';
let uploadTokenUrl = '/api/source/uploadToken';

interface ProgressHandle{
	(loaded:Number,total:Number):void;
}
interface CompletionHandle{
	(ResponseObject):void;
}

export class FileServer extends BaseServer{

	private accessToken:String;
	private progressHandle:ProgressHandle;

	constructor(
		public http:Http
		){
		super(http);
	}


	uploadFile(files:Array<File>,progress:ProgressHandle,complete:CompletionHandle):Array<FileModel>{
		let self = this;

		let fileModelsArray = [];
		this.fetchAccessToken(()=>{
			files.forEach((file,index)=>{
				let fileModel = self.convertFileToFileModel(file);
				fileModel.fileData = file;
				self.upload(fileModel);
				fileModelsArray.push(fileModel);
			});
		});

		this.progressHandle = progress;

		return fileModelsArray;
	}

	private fetchAccessToken(cb){
		this.get<ResponseObject<String>>(uploadTokenUrl).then((result:ResponseObject<String>)=>{
			if(result.code == StatusCode.success) {
				this.accessToken = result.data;
				cb();
			}else{
				console.log(result.message);
			}
		});
	}

	private upload(file:FileModel){
		let xhr = new XMLHttpRequest();
		let formData = new FormData();
		formData.append('token',this.accessToken);
		formData.append('key',file.name);
		formData.append('file',file.fileData);

		xhr.upload.onprogress = (event)=>{
			file.loaded = event.loaded;
			file.size = event.total;
			file.progress = file.loaded/file.size*100;
			this.progressHandle(event.loaded,event.total);
		};

		xhr.upload.onloadend = (event)=>{
			file.complete = true;
		}

		xhr.open('POST',uploadFileUrl);

		xhr.send(formData);
	}

	private convertFileToFileModel(file:File):FileModel{
		return new FileModel(file);
	}
}
