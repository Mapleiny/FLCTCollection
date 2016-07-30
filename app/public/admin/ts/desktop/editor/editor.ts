import {Component,AfterViewInit} from 'angular2/core';
import {PostServer,PostContent} from '../../servers/postServer'

@Component({
	selector: 'editor.editor',
	templateUrl: 'template/editor.html',
	providers:[PostServer]
})

export class Editor implements AfterViewInit {
	postTitle:String;
	postContent:String;

	constructor(public postServer:PostServer) {
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
		this.postContent = tinymce.activeEditor.getContent();
		this.postServer.public({
			title:this.postTitle,
			content: this.postContent
		}).then(function(data){
			console.log(data);
		});
	}
}