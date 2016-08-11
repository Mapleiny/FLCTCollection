import express = require("express");
import {StatusCode} from '../servers/baseServer'
import {blogServer} from '../servers/blogServer'
import {userServer} from '../servers/userServer'


let defaultResponse = function(res){
	return function(result){
		res.json(result);
	}
}

let authorize = function(req, res, next){
	if (!req.session.user_id) {
		res.json({
			code : StatusCode.unauthorized,
			message : '没有权限'
		});
	} else {
		next();
	}
};


export let apiRouter = function(router:express.Router){

	// blog
	router.post('/api/blog/post',authorize,function(req,res){
		req.body.author = req.session['user_id'];
		blogServer.publicPost(req.body).then(defaultResponse(res)).catch(defaultResponse(res));
	});
	router.post('/api/blog/update/:id',function(req,res){
		blogServer.updatePost(req.params.id,req.body).then(defaultResponse(res)).catch(defaultResponse(res));
	});
	router.get('/api/blog/post/:id',function(req,res){
		blogServer.getPost(req.params.id).then(defaultResponse(res)).catch(defaultResponse(res));
	});
	router.get('/api/blog/posts',function(req,res){
		blogServer.getPosts().then(defaultResponse(res));
	});



	// user
	router.get('/api/user/:username',function(req,res){
		userServer.getByUserName(req.params.username).then(defaultResponse(res)).catch(defaultResponse(res));
	});
	router.post('/api/user/create',function(req,res){
		userServer.createUser(req.body).then(defaultResponse(res)).catch(defaultResponse(res));
	});
	router.post('/api/user/validate',function(req,res){
		userServer.getByUserName(req.body.username).then(function(result){
			if(result.code != StatusCode.success || !result.data.authenticate(req.body.password)) {
				result.code = StatusCode.accounterror;
				result.message = '账号或密码错误';
			}else{
				req.session['user_id'] = result.data.id;
				req.session['user'] = result.data;
			}
			res.json({
				code : result.code,
				data : result.data.exportFilter(),
				message : result.message
			});
		}).catch(defaultResponse(res));
	});


};