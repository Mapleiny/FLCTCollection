import * as express from "express"
import {StatusCode} from '../servers/baseServer'
import {StaticManager} from '../utils/staticManager'

let cssPaths:Array<String> = [
	'/admin/css/main.css'
];
let jsPaths:Array<String> = [
	'/common/js/es6-shim.min.js',
	'/common/js/system.js',
	'/common/js/system-polyfills.js',
	'/common/js/Rx.min.js',
	'/common/js/angular2.min.js',
	'/common/js/angular2-polyfills.min.js',
	'/common/js/router.min.js',
	'/common/js/http.min.js',
	'/common/js/tinymce.min.js',
	'/admin/js/main.js'
];


export let adminRouter = function(router:express.Router,staticManager:StaticManager){

	router.get('/admin/',function(req,res){
		res.render('admin/index',{
			'static':staticManager.createStatic(cssPaths,jsPaths)
		});
	});
};