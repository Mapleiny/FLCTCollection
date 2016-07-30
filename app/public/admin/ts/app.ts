import {Component} from 'angular2/core';
import {Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES } from 'angular2/router';
import {Login} from './login/login'
import {Desktop} from './desktop/desktop'

import {IUser} from './servers/userServer'

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
		let self = this;
		this.router.subscribe(function(value){
			self.checkLogin();
		});
	}

	ngOnChanges(){
		this.checkLogin();
	}

	checkLogin(){
		if(!this.router.isRouteActive(this.router.generate(['Login']))) {
			let userInfo:IUser = <IUser>window.localStorage.getItem('userInfo');
			if(!userInfo) {
				this.router.navigate(['/Login']);
			}
		}
	}
}