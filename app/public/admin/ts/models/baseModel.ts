export class BaseModel{
	constructor(prop:Object){
		let propMap = this.propertyMap();
		for (var key in propMap) {
			this[key] = this.preDetailProperty(key,prop[propMap[key]]);
		}
	}

	propertyMap():Object{
		return {};
	}

	preDetailProperty(key:String,value:any):any{
		if(this['propDetail'+key]) {
			return this['propDetail'+key](value);
		}else{
			return value;
		}
	}
}