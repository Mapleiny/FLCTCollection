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
			height: '100%',
			content_style:'p{font-size:14px;}',
			content_css:'/common/js/skins/cool/bootstrap-content.min.css',
			plugins: [
				'advlist autolink lists link image preview anchor',
				'searchreplace code fullscreen pagebreak',
				'insertdatetime media table contextmenu code textcolor'
			],
			toolbar: 'fontsizeselect | styleselect | blockquote pagebreak | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code',
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