import * as express from "express";
import {router} from './routers/router'
import * as bodyParser from "body-parser";
import path = require("path");
import partials = require("express-partials");
import session = require("express-session");

let app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.static('public'));
app.use(session({secret: 'maple'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.listen(3000);