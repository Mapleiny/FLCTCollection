import {Component} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';
import {StatusCode} from '../../servers/baseServer'
import {BlogModel} from '../../models/blogModel'
import {BlogServer} from '../../servers/blogServer'
import {Tips} from '../../common/tips'
import {FileUpload} from '../../common/fileUpload'


@Component({
	selector: 'section.editor',
	templateUrl: 'template/editor.html',
	directives:[FileUpload],
	providers:[BlogServer,Tips]
})

export class Editor {
	blogTitle:String = "";
	blogContent:String;
	eidtContentId:String;
	showUploadFile:Boolean;

	constructor(
		private blogServer:BlogServer,
		private router:Router,
		private routeParams:RouteParams,
		private tips:Tips
		) {
		this.tips.updateContainerPosition({
			top : '55px',
			right : '20px'
		});

		
	}

	ngOnInit(){
		this.eidtContentId = this.routeParams.get('id');
	}

	ngAfterViewInit() {
		let self = this;
		tinymce.init({
			selector:'#editor-container .editor-area textarea',
			height: '100%',
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
		if(!!this.eidtContentId) {
			this.blogServer.getPost(this.eidtContentId).then(function(result){
				if(result.code == StatusCode.success) {
					self.blogTitle = result.data.title;
					tinymce.activeEditor.setContent(result.data.content);
				}else{
					this.eidtContentId = null;
				}
			});
		}else{
			this.eidtContentId = null;
		}
			
	}
	post(){
		this.blogContent = tinymce.activeEditor.getContent();
		let blogModel = new BlogModel({
			title:this.blogTitle,
			content: this.blogContent
		});
		if(this.eidtContentId) {
			this.blogServer
			.update(this.eidtContentId,blogModel)
			.then((result)=>{
				if(result.code == StatusCode.success) {
					this.tips.showSuccess('修改成功！');
				}else{
					this.tips.showError(result.message);
				}
			});
		}else{
			this.blogServer
			.public(blogModel)
			.then((result)=>{
				if(result.code == StatusCode.success) {
					this.tips.showSuccess('发布成功！');
				}else{
					this.tips.showError(result.message);
				}
			});
		}
	}
}