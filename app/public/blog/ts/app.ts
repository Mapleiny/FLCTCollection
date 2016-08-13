import {Component} from 'angular2/core';
import {Blog} from './blog/blog'
import {Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    'selector': 'body',
    'templateUrl':'/blog/template/main.html',
    'directives': [RouterLink, ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/...', component: Blog, as: 'Blog', useAsDefault:true },
])

export class App {
	constructor(private router: Router) {
	}
}