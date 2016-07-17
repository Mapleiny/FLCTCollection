import * as express from "express";
import {router} from './router'
import * as bodyParser from "body-parser";
import path = require("path");



let app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.listen(3000);