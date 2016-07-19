import * as express from "express";
import {router} from './routers/router'
import * as bodyParser from "body-parser";
import path = require("path");

let app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.listen(3000);