import {Component} from 'angular2/core';
import {Router, RouterLink, ROUTER_DIRECTIVES } from 'angular2/router';
@Component({
	'selector': 'navigation',
    'templateUrl': 'template/navigation.html',
    'directives': [RouterLink]
})

export class Navigation{
	constructor(private router : Router){
	}
}