import {Component,AfterViewInit} from 'angular2/core';
import {BlogServer,IBlog} from '../../servers/blogServer'

@Component({
	selector: 'editor.editor',
	templateUrl: 'template/editor.html',
	providers:[BlogServer]
})

export class Editor implements AfterViewInit {
	blogTitle:String;
	blogContent:String;

	constructor(public blogServer:BlogServer) {
	}

	ngAfterViewInit() {
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
		// console.log(tinymce.Editor.schema.getCustomElements());
	}
	post(){
		this.blogContent = tinymce.activeEditor.getContent();
		this.blogServer.public({
			title:this.blogTitle,
			content: this.blogContent
		}).then(function(data){
			console.log(data);
		});
	}
}