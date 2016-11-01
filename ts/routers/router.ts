import express = require("express");
import {StaticManager} from '../utils/staticManager'
// import {blogRouter} from './blogRouter'
// import {adminRouter} from './adminRouter'
// import {apiRouter} from './apiRouter'
import {wordpressRouter} from './wordpressRouter'


export let router = express.Router();

wordpressRouter(router);

// let staticManager = new StaticManager(true);

// staticManager.addCommonStatic([
// 	'/common/css/bootstrap.min.css',
// 	'/common/css/font-awesome.min.css'
// ],[
// ]);

// admin
// adminRouter(router,staticManager);

// index
// blogRouter(router,staticManager);


// api
// apiRouter(router);

