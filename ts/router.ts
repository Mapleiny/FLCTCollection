import express = require("express");

export let router = express.Router();


// index
router.get('/',function(req,res){
	res.render('index',{
		'title':'hello'
	});
});


// users

router.get('/api/users',function(req,res){
});

router.post('/api/users/register',function(req,res){
});