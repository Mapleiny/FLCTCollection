import {Component,ApplicationRef} from 'angular2/core';
import {RouterLink, ROUTER_DIRECTIVES,Router } from 'angular2/router';
import {Title} from 'angular2/platform/browser';
import {BlogServer,IBlog} from '../servers/blogServer';
import {StatusCode} from '../servers/baseServer'
import {Aside} from '../common/aside'




@Component({
	'selector': 'section.blog-list',
    'templateUrl': '/blog/template/listView.html',
    'directives': [RouterLink,Aside],
    'providers' : [BlogServer,Title]
})

export class ListView{
	blogList : Array<IBlog>;
	count : Number;
	page : Number


	constructor(
		private applicationRef: ApplicationRef,
		private blogServer:BlogServer,
		private router:Router,
		private titleService:Title
		){
		this.titleService.setTitle('Blog');
	}

	ngOnInit(){
		this.blogServer.list().then((result)=>{
			if(result.code == StatusCode.success) {
				this.blogList = result.data.list;
				this.count = result.data.count;
				this.page = result.data.page;
				this.applicationRef.tick();
			}else{
				console.log(result);
			}
		}).catch((result)=>{
			console.log(result);
		});
	}
}