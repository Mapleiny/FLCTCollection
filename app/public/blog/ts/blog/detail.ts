import {Component} from 'angular2/core';
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
		private blogServer:BlogServer,
		private router:Router,
		private routeParams:RouteParams,
		private titleService: Title
		){
	}

	ngOnInit(){
		let self = this;
		this.postId = this.routeParams.get('id');
		this.blogServer.getPost(this.postId).then(function(result){
			if(result.code == StatusCode.success) {
				self.titleService.setTitle(result.data.title.toString());
				self.article = result.data;
			}else{
				this.eidtContentId = null;
			}
		});
	}


}