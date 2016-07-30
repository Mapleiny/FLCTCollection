import {Component} from 'angular2/core';
import {Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES } from 'angular2/router';

import {Header} from './header'
import {Editor} from './editor/editor'
import {Panel} from './panel/panel'

@Component({
	'selector': 'desktop.desktop',
    'templateUrl': 'template/desktop.html',
    'directives': [RouterLink,ROUTER_DIRECTIVES,Header]
})

@RouteConfig([
	{path:'/...',component:Panel, as:'Panel', useAsDefault:true},
	{path:'/editor',component:Editor, as:'Editor'},
])

export class Desktop{
	constructor(
		private router: Router
		) {
	}
}