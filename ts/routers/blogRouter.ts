import express = require("express");
import {StaticManager} from '../utils/staticManager'
import {blogServer} from '../models/blogServer'


let cssPaths:Array<String> = ['/blog/css/main.css'];
let jsPaths:Array<String> = [''];

interface ITag{
	name:String;
	link:String;
}

interface IContentItem{
	banner?:String;
	link:String;
	title:String;
	subTitle?:String;
	content:String;
	tags?:Array<ITag>;
	postDate:Date;
}

export let blogRouter = function(router:express.Router,staticManager:StaticManager){

	let item:IContentItem = {
		link:'#',
		title:'我是一个标题',
		subTitle:'我是副标题',
		content:'我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。',
		tags:[{name:"旅行",link:'#'},{name:"飞翔",link:'#'}],
		postDate:new Date()
	};
	router.get('/',function(req,res){
		// blog list
		res.render('index',{
			'title':'Blog',
			'articles':[item],
			'static':staticManager.createStatic(cssPaths,jsPaths)
		});
	});
};