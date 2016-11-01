import {Component} from 'angular2/core';
import {Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES } from 'angular2/router';

import {Navigation} from '../common/navigation'
import {ListView} from './listView'
import {Detail} from './detail'

@Component({
	'selector': 'blog.blog',
    'templateUrl': '/blog/template/blog.html',
    'directives': [RouterLink,ROUTER_DIRECTIVES,Navigation]
})

@RouteConfig([
	{ path: '/', component: ListView, as: 'Posts', useAsDefault:true },
	{ path: '/post/:id', component: Detail, as: 'Detail' }
])

export class Blog{
	constructor(){
	}
}