import * as express from "express"
import {StatusCode} from '../servers/baseServer'
import {wordpressServer} from '../servers/wordpressServer'



export let wordpressRouter = function(router:express.Router){

	router.get('/wordpress/posts',function(req,res){
		wordpressServer.getPosts().then(result=>{
			res.json(result);
		}).catch(err=>{
			res.json({
				error:1,
				message:err
			})
		});
	});
};