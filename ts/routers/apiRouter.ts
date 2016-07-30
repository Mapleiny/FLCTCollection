import express = require("express");
import {blogServer} from '../servers/blogServer'
import {userServer} from '../servers/userServer'


let defaultResponse = function(res){
	return function(result){
		res.json(result);
	}
}


export let apiRouter = function(router:express.Router){

	// blog
	router.post('/api/blog/post',function(req,res){
		blogServer.publicPost(req.body).then(defaultResponse(res)).catch(defaultResponse(res));
	});
	router.get('/api/post/:id',function(req,res){

	});
	router.get('/api/posts',function(req,res){
		blogServer.getPosts().then(defaultResponse(res));
	});



	// user
	router.get('/api/user/:username',function(req,res){
		userServer.getByUserName(req.params.username).then(defaultResponse(res)).catch(defaultResponse(res));
	});
	router.post('/api/user/create',function(req,res){
		userServer.createUser(req.body).then(defaultResponse(res)).catch(defaultResponse(res));
	});

};