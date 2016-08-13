import {Component} from 'angular2/core';
import {RouterLink, ROUTER_DIRECTIVES,Router } from 'angular2/router';
import {Title} from 'angular2/platform/browser';
import {BlogServer,IBlog} from '../servers/blogServer';
import {StatusCode} from '../servers/baseServer'

@Component({
	'selector': 'section.blog-list',
    'templateUrl': '/blog/template/listView.html',
    'directives': [RouterLink],
    'providers' : [BlogServer,Title]
})

export class ListView{
	blogList : Array<IBlog>;
	count : Number;
	page : Number


	constructor(
		private blogServer:BlogServer,
		private router:Router,
		private titleService:Title
		){
		this.titleService.setTitle('Blog');
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

	postDetail(id:Number){
		this.router.navigate(['Detail','dsadas']);
	}
}