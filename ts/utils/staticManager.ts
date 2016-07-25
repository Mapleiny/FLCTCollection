let cssTemplate = '<link rel="stylesheet" type="text/css" href="__path__" />';
let jsTemplate = '<script type="text/javascript" src="__path__"></script>';

interface staticInfo{
	css:String;
	js:String;
}

export class StaticManager{
	isDevelopeMode:boolean;
	commonStatic:{css:Array<String>,js:Array<String>}={css:[],js:[]};
	constructor(isDevelopeMode:boolean){
		this.isDevelopeMode = isDevelopeMode;
		this.resetCommonStatic();
	}
	resetCommonStatic(){
		this.commonStatic = {
			css : [],
			js : []
		}
	}
	setCommonStatic(cssPath:Array<String>,jsPath:Array<String>){
		this.commonStatic.css = cssPath;
		this.commonStatic.js = jsPath;

	}
	addCommonStatic(cssPath:Array<String>,jsPath:Array<String>){
		this.commonStatic.css = this.commonStatic.css.concat(cssPath);
		this.commonStatic.js = this.commonStatic.js.concat(jsPath);
	}
	createStatic(cssPath:Array<String>,jsPath:Array<String>):staticInfo{
		cssPath = this.commonStatic.css.concat(cssPath);
		jsPath = this.commonStatic.js.concat(jsPath);

		return {
			css:this.createStaticHTML(cssPath,cssTemplate),
			js:this.createStaticHTML(jsPath,jsTemplate)
		}
	}

	createStaticHTML(paths:Array<String>,template:String):String{
		let pathsHTML:Array<String> = [];

		paths.forEach(function(value,index,array){
			if(value.length==0)return;
			if(!/<script|<link/.test(value.toString())) {
				pathsHTML.push(template.replace('__path__',value.toString()));
			}else{
				pathsHTML.push(value.toString());
			}
		});

		return pathsHTML.join('\n');
	}
}