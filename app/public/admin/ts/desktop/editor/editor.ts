import {Component,AfterViewInit} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';
import {StatusCode} from '../../servers/baseServer'
import {BlogServer,IBlog} from '../../servers/blogServer'

@Component({
	selector: 'editor.editor',
	templateUrl: 'template/editor.html',
	providers:[BlogServer]
})

export class Editor implements AfterViewInit {
	blogTitle:String = "";
	blogContent:String;
	eidtContentId:String;

	constructor(
		private blogServer:BlogServer,
		private router:Router,
		private routeParams:RouteParams
		) {
	}

	ngOnInit(){
		this.eidtContentId = this.routeParams.get('id');
	}

	ngAfterViewInit() {
		let self = this;
		tinymce.init({
			selector:'#editor-container .editor textarea',
			height: 300,
			plugins: [
				'advlist autolink lists link image preview anchor',
				'searchreplace code fullscreen',
				'insertdatetime media table contextmenu code textcolor'
			],
			toolbar: 'bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
			// skin_url:'/admin/css',
			skin:'cool',
			statusbar: false,
			menubar: false
		});
		this.blogServer.getPost(this.eidtContentId).then(function(result){
			if(result.code == StatusCode.success) {
				self.blogTitle = result.data.title;
				tinymce.activeEditor.setContent(result.data.content);
			}else{
				this.eidtContentId = null;
			}
		});
	}
	post(){
		this.blogContent = tinymce.activeEditor.getContent();
		if(this.eidtContentId) {
			this.blogServer.update(this.eidtContentId,{
				title:this.blogTitle,
				content: this.blogContent
			}).then(function(data){
				console.log(data);
			});
		}else{
			this.blogServer.public({
				title:this.blogTitle,
				content: this.blogContent
			}).then(function(data){
				console.log(data);
			});
		}
		
		
	}
}