import {Component} from 'angular2/core';
import {RouterLink, ROUTER_DIRECTIVES } from 'angular2/router';
@Component({
	'selector': 'page-header',
    'templateUrl': 'template/header.html',
    'directives': [RouterLink]
})

export class Header{
	constructor(){
	}
}