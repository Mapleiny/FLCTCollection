import {BaseModel} from './baseModel'

interface IBlog {
	title: String;
	subTitle?: String;
	// author?:IUser;
	content: String;
	postTime?: Date;
	updateTime?: Date;
	attachments?: [String];
	readCount?: Number;
}

export class BlogModel extends BaseModel implements IBlog  {
	title: String;
	subTitle: String;
	// author?:IUser;
	content: String;
	postTime: Date;
	updateTime: Date;
	attachments: [String];
	readCount: Number;

	constructor(blogInfo:Object){
		super(blogInfo);
	}

	propertyMap():Object{
		return {
			title : 'title',
			subTitle: 'subTitle',
			content: 'content',
			postTime: 'postTime',
			updateTime: 'updateTime',
			attachments: 'attachments',
			readCount: 'readCount'
		};
	}

}