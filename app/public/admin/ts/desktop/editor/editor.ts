import {Component} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';
import {StatusCode} from '../../servers/baseServer'
import {BlogServer,IBlog} from '../../servers/blogServer'
import {Tips} from '../../common/tips'


@Component({
	selector: 'editor.editor',
	templateUrl: 'template/editor.html',
	providers:[BlogServer,Tips]
})

export class Editor {
	blogTitle:String = "";
	blogContent:String;
	eidtContentId:String;

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
			selector:'#editor-container .editor textarea',
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
			}).then((data)=>{
				this.tips.showSuccess('修改成功！');
			});
		}else{
			this.blogServer.public({
				title:this.blogTitle,
				content: this.blogContent
			}).then((data)=>{
				this.tips.showSuccess('发布成功！');
			});
		}
		
		
	}
}