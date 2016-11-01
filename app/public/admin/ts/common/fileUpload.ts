import {Component} from 'angular2/core';

import {FileServer} from '../servers/fileServer'


enum UploadStep{
	PickFile,
	Upload
}

enum DragStatus{
	DragOver,
	DragLeave
}

@Component({
	selector: 'file-upload',
	templateUrl: 'template/fileUpload.html',
	providers:[FileServer]
})

export class FileUpload{
	allowsSelection:Boolean = true;
	allowsMultipleSelection:Boolean = false;

	isShow:Boolean = false;

	IUploadStep = UploadStep;
	uploadStep:UploadStep = UploadStep.PickFile;

	IDragStatus = DragStatus;
	dragStatus:DragStatus = DragStatus.DragLeave;

	fileIndex:number = 0;
	fileList = [];

	constructor(private fileServer:FileServer){
		this.show();
	}
	getFiles(event){
		this.dragHover(event);
		let files = event.target.files || event.dataTransfer.files;
		if (files === null || typeof files === 'undefined') {
			return;
		}
		return this.dealFiles(Array.prototype.slice.call(files,0));
	}
	dragHover(event){
		event.stopPropagation();
		event.preventDefault();
		this[event.type === "dragover" ? "onDragOver" : "onDragLeave"].call(this,event);
		return this;
	}
	onDragOver(event){
		this.dragStatus = DragStatus.DragOver;
	}
	onDragLeave(event){
		this.dragStatus = DragStatus.DragLeave;
	}
	dealFiles(files:Array<File>){
		var file, _i, _len;
		files = this.filter(files);
		return this.onSelect(files);
	}
	filter(files:Array<File>){
		return files;
	}

	onSelect(files:Array<File>){
		this.uploadStep = UploadStep.Upload;
		this.fileList = this.fileServer.uploadFile(files,()=>{
			
		},()=>{

		});
	}

	show(){
		this.isShow = true
	}
	hide(){

	}
}