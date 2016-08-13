import {Component} from 'angular2/core';
import {Router,RouterLink} from 'angular2/router'
import {Editor} from '../editor/editor'
import {StatusCode} from '../../servers/baseServer'
import {BlogServer,IBlog} from '../../servers/blogServer'


@Component({
	selector: 'article.article',
    templateUrl: 'template/article.html',
    directives: [RouterLink],
    providers:[BlogServer]
})

export class Article{
	blogList : Array<IBlog>;
	count : Number;
	page : Number

	constructor(
		private blogServer:BlogServer,
		public router:Router
	){
	}

	ngOnInit(){
		let self = this;
		this.blogServer.list().then(function(result){
			if(result.code == StatusCode.success) {
				self.blogList = result.data.list;
				self.count = result.data.count;
				self.page = result.data.page;
			}else{
				console.log(result);
			}
		}).catch(function(result){
			console.log(result);
		});
	}

	editContent(id:Number){
		this.router.navigate(['/Desktop/Editor',{id:id}]);
	}
}