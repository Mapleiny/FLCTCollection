export {DB} from '../db/baseDB'
import mongoose = require("mongoose");
export class BaseModel{
	constructor(){
	}
	save(){
	}
	get(query?){}
	delete(query){}
	update(query,data){}
}