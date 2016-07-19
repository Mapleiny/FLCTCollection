import express = require("express");
import {StaticManager} from '../utils/staticManager'

let cssPaths:Array<String> = ['/css/main.css'];
let jsPaths:Array<String> = [''];

export let blogRouter = function(router:express.Router,staticManager:StaticManager){

	staticManager.setCommonStatic([
		'/css/bootstrap.min.css'
	],[
		'/js/jquery-3.1.0.min.js'
	]);


	router.get('/',function(req,res){
		res.render('index',{
			'title':'hello',
			'static':staticManager.createStatic(cssPaths,jsPaths)
		});
	});
};