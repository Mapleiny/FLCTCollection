import {BaseModel} from './baseModel'

export class FileModel extends BaseModel{
	name:string;
	size:number = 0;
	type:string;
	lastModifiedDate:Date;
	fileData:File;
	loaded:number = 0;
	progress:number = 0;
	complete:boolean = false;

	constructor(fileInfo:Object){
		super(fileInfo);
	}
	
	propertyMap():Object{
		return {
			name : 'name',
			size: 'size',
			type: 'type',
			lastModifiedDate: 'lastModifiedDate'
		};
	}
}