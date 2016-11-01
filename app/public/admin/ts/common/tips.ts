export enum TipsType{
	success,
	error,
	info,
	warning
}

export class Tips{
	private bodyElement:HTMLElement;
	private containerElement:HTMLElement;
	delay = 5000;

	private animation_show = 'notiny-animation-show 0.4s forwards';
    private animation_hide = 'notiny-animation-hide 0.5s forwards';

	constructor(){
		this.bodyElement = document.body;
		this.createContainerHTML();
	}
	private createContainerHTML(){
		this.containerElement = document.getElementById('tips-container');
		if(!this.containerElement){
			this.containerElement = document.createElement('div');
			this.containerElement.id = 'tips-container';
			this.containerElement.className = 'notiny-container';
			this.bodyElement.appendChild(this.containerElement);
		}
	}
	private createTipsHTML(type:TipsType,message:String):HTMLElement{
		let divElement = document.createElement('div');
		var className:String = 'alert-';
		var icon : String; 
		switch (type) {
			case TipsType.success:
				className += 'success';
				icon = '<i class="fa fa-check"></i>';
				break;
			case TipsType.error:
				className += 'danger';
				icon = '<i class="fa fa-close"></i>';
				break;
			case TipsType.info:
				className += 'info';
				icon = '<i class="fa fa-commenting"></i>';
				break;
			case TipsType.warning:
				className += 'warning';
				icon = '<i class="fa fa-exclamation"></i>';
				break;
		}
		divElement.className = "tips-warpper";
		divElement.innerHTML = `<div class="tips-panel ${className}">${icon} <span>${message}</span></div>`;

		divElement.addEventListener('click',(event)=>{
			this.closeMessage(divElement);
		});

		return divElement;
	}
	updateContainerPosition(style){
		for (var key in style) {
			this.containerElement.style[key] = style[key];
		}
	}
	showMessage(element:HTMLElement){
		this.containerElement.insertAdjacentElement('afterBegin',element);
		setTimeout((()=>{
			this.closeMessage(element);
		}),this.delay + 500);
		setTimeout((()=>{
			element.classList.add('show');
		}),10);
		element.style.animation = this.animation_show;
	}
	closeMessage(element:HTMLElement){
		if(!element)return;
		element.style.animation = this.animation_hide;
		element.addEventListener('webkitAnimationEnd',(event)=>{
			element.classList.remove('show');
		});
		element.addEventListener('webkitTransitionEnd',(event)=>{
			element.remove();
		});
	}
	showSuccess(message:String){
		this.showMessage(this.createTipsHTML(TipsType.success,message));
	}
	showError(message:String){
		this.showMessage(this.createTipsHTML(TipsType.error,message));
	}
	showInfo(message:String){
		this.showMessage(this.createTipsHTML(TipsType.info,message));
	}
	showWarning(message:String){
		this.showMessage(this.createTipsHTML(TipsType.warning,message));
	}
	showLoading(){
	}
	closeLoading(){
	}
}