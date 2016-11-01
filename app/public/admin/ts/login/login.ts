import {Component} from 'angular2/core';
import {Router} from 'angular2/router';


import {StatusCode} from '../servers/baseServer'
import {UserServer} from '../servers/userServer'

@Component({
	selector: 'login.login',
    templateUrl: 'template/login.html',
    providers:[UserServer]
})

export class Login{
	constructor(
		private userServer:UserServer,
		private router : Router
	){
	}
	login(username:String,password:String){
		let self = this;
		this.userServer.validate(username,password).then(function(result){
			if(result.code == StatusCode.success) {
				window.localStorage.setItem('userInfo',JSON.stringify(result.data));
				self.loginSuccess();
			}else{
				self.loginError(result.message);
			}
		}).catch(function(result){
			self.loginError(result.message);
		});
	}
	loginSuccess(){
		this.router.navigate(['Desktop']);
	}
	loginError(error){
		console.log(error);
	}
}