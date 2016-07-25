import {Component,AfterViewInit,ElementRef} from 'angular2/core';
// import * as wysihtml5 from 'wysihtml5'
@Component({
	'selector': 'editor.editor',
	'templateUrl': 'template/editor.html'
})

export class Editor implements AfterViewInit {
	constructor(private elementRef: ElementRef) {
	}

	ngAfterViewInit() {
		tinymce.init({
			selector:'#editor-container .editor textarea',
			height: 300,
			// plugins: [
			// 	'advlist autolink lists link image preview anchor',
			// 	'searchreplace code fullscreen',
			// 	'insertdatetime media table contextmenu code'
			// ],
			toolbar: 'bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
			// skin_url:'/admin/css',
			skin:'cool',
			statusbar: false,
			menubar: false,
			setup:function(editor){
				// editor.addButton('mybutton',{
				// 	classes:'tool-btn',
				// 	text : '',
				// 	icon : 'bold',
				// 	onclick:function(){
				// 	}
				// });
			}
		});
		// console.log(tinymce.Editor.schema.getCustomElements());
	}
}