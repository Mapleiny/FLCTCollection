System.config({
	'paths':{
		'main' : '/admin/js/main',
		'template' : '/admin/template'
		// 'wysihtml5' : '/common/js/wysihtml5-0.3.0.min.js'
	},
	'packages' : {
		'dist' : {
			'format' : 'amd',
			'defaultExtension' : 'js'
		}
	}
});
System.import('main')