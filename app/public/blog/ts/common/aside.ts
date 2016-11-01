import {Component} from 'angular2/core';
import {AboutMe} from './aboutMe'

@Component({
	'selector': 'section.aside-container',
    'templateUrl': '/blog/template/aside.html',
    'directives' : [AboutMe]
})

export class Aside{
	constructor(){
	}
}