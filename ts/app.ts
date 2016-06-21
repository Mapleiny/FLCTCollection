import * as express from "express";
import {router} from './router'

let app = express();
app.use(router);
app.listen(3000);

