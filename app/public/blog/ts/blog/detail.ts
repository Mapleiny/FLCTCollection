import {Component,ApplicationRef} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {RouterLink, RouteParams, Router} from 'angular2/router';
import {BlogServer,IBlog,StatusCode} from '../servers/blogServer';

@Component({
	'selector': 'section.blog-detail',
    'templateUrl': '/blog/template/detail.html',
    'directives': [RouterLink],
    'providers' : [BlogServer,Title]
})

export class Detail{
	postId:String;
	article:IBlog = {
		title : '',
		content : ''
	};
	constructor(
		private applicationRef: ApplicationRef,
		private blogServer:BlogServer,
		private router:Router,
		private routeParams:RouteParams,
		private titleService: Title
		){
	}

	ngOnInit(){
		this.postId = this.routeParams.get('id');
		this.blogServer.getPost(this.postId).then((result)=>{
			if(result.code == StatusCode.success) {
				this.titleService.setTitle(result.data.title.toString());
				this.article = result.data;
				this.applicationRef.tick();
			}else{
				this.postId = null;
			}
		});
	}


}