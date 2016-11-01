import {Component} from 'angular2/core';
import {Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES } from 'angular2/router';

import {Navigation} from '../navigation'
import {Dashboard} from './dashboard'
import {Article} from './article'
import {Qiniu} from './qiniu'
@Component({
	'selector': 'section.admin-panel',
    'templateUrl': 'template/panel.html',
    'directives': [RouterLink,ROUTER_DIRECTIVES,Navigation]
})

@RouteConfig([
	{path:'/',component:Dashboard, as:'Dashboard', useAsDefault:true},
	{path:'/article',component:Article, as:'Article'},
	{path:'/qiniu',component:Qiniu, as:'QiniuAdmin'},
	// {path:'/',component:Overview, as:'Overview', useAsDefault:true}
])

export class Panel{
	constructor(private router: Router) {
	}
}