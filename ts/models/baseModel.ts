export {DB} from '../db/baseDB'
import mongoose = require("mongoose");
export class BaseModel{
	entity;
	constructor(){}
	save(){
		this.entity.save();
	}
	get(query?){}
	delete(query){}
	update(query,data){}
}