System.config({
	'paths':{
		'main' : '/blog/js/main',
		'template' : '/blog/template'
	},
	'packages' : {
		'dist' : {
			'format' : 'amd',
			'defaultExtension' : 'js'
		}
	}
});
System.import('main')