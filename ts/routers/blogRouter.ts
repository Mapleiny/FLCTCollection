import express = require("express");
import {StaticManager} from '../utils/staticManager'
import {IBlog} from '../models/blogModel'

import {blogServer} from '../servers/blogServer'


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

let ConvertBlogToContentItem = function(blog:IBlog):IContentItem{
	return {
		banner:null,
		link:"/blog/"+blog.id,
		title:blog.title,
		subTitle:blog.subTitle,
		content:blog.content,
		tags:null,
		postDate:blog.postTime
	}
}

export let blogRouter = function(router:express.Router,staticManager:StaticManager){

	router.get('/',function(req,res){
		// blog list
		blogServer.getPosts().then(function(result){

			res.render('index',{
				'title':'Blog',
				'articles':result,
				'static':staticManager.createStatic(cssPaths,jsPaths)
			});
		});
	});
};