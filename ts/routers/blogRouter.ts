import express = require("express");
import {StaticManager} from '../utils/staticManager'
import {IBlog} from '../models/blogModel'

import {blogServer} from '../servers/blogServer'


let cssPaths:Array<String> = [
	'/blog/css/main.css'
];
let jsPaths:Array<String> = [
	'/common/js/es6-shim.min.js',
	'/common/js/system.js',
	'/common/js/system-polyfills.js',
	'/common/js/Rx.min.js',
	'/common/js/angular2.dev.js',
	'/common/js/angular2-polyfills.min.js',
	'/common/js/router.min.js',
	'/common/js/http.min.js',
	'/blog/js/main.js'
];

export let blogRouter = function(router:express.Router,staticManager:StaticManager){

	router.get('/',function(req,res){
		res.render('blog/index',{
			'static':staticManager.createStatic(cssPaths,jsPaths)
		});
	});
};