import {Component} from 'angular2/core';
import {Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES } from 'angular2/router';
import {Login} from './login/login'
import {Desktop} from './desktop/desktop'
@Component({
    'selector': 'body',
    'templateUrl':'template/main.html',
    'directives': [RouterLink, ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/Login', component: Login, as: 'Login', useAsDefault:true },
	{ path: '/...' , component:Desktop, as: 'Desktop' }
])

export class App {
	constructor(private router: Router) {
	}
}