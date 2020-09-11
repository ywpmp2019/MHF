var is_pc = () => {
	let user_agent_info = navigator.userAgent;
	let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
	let ispc = true;
	for (let v = 0; v < Agents.length; v++) {
         if (user_agent_info.indexOf(Agents[v]) > 0) {
         	ispc = false; 
         	break; 
		}  
	}

	return ispc;
}

var preload = () => {}

var scroll_top = () => {
	if(is_pc()) {
		$('body,html').animate({scrollTop:$(".ccdiv").offset().top},0);
	} else {
		$('body,html').animate({scrollTop:$(".ccdiv-m").offset().top},0);
	}
}

var check_support_webp = () => {
    return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}