"use strict";
const express = require("express");
const router_1 = require('./routers/router');
const bodyParser = require("body-parser");
const partials = require("express-partials");
const session = require("express-session");
let app = express();
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.static('public'));
app.use(session({ secret: 'maple' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router_1.router);
app.listen(3000);
