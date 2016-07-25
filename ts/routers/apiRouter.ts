import express = require("express");
import {blogServer} from '../models/blogServer'





export let apiRouter = function(router:express.Router){
	router.post('/api/post',function(req,res){
		blogServer.publicPost(req.body).then(function(value){
			res.send(value);
		});
	});


	router.get('/api/posts',function(req,res){
		blogServer.getPosts().then(function(result){
			res.send(result);
		});
	});
};