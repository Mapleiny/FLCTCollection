import express = require("express");
import {StaticManager} from '../utils/staticManager'
import {blogRouter} from './blogRouter'


export let router = express.Router();

let staticManager = new StaticManager(true);

// index
blogRouter(router,staticManager);