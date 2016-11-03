import * as express from "express";
import {router} from './routers/router'
import * as bodyParser from "body-parser";
import path = require("path");
import partials = require("express-partials");
import session = require("express-session");




let app = express();

// app.use(function(req,res,next){
// 	console.log(req.originalUrl);
// 	next();
// })

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.static(__dirname +'/public'));
app.use(session({
	resave:false,
  	saveUninitialized: true,
	secret: 'maple',
	cookie:{
		maxAge: 15*24*3600000
	}
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.listen(3000);