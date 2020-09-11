var ck_num = 0;
var vg_r_data = $(".vg-r-data");
let img_data_arr = LZString.decompressFromBase64(img_data).split(',');
let total_page = img_data_arr.length;
var asset_domain = vg_r_data.data("chapter-domain");
var asset_key = vg_r_data.data("chapter-key");
var img_pre = "/uploads/";

var chapter_num = vg_r_data.data("chapter_num");
var chapter_type = vg_r_data.data("chapter-type");

$(function() { 
	
	vg_pagination(page, total_page);


	$(".show-pic").attr("src", cdnImage(img_pre+img_data_arr[parseInt(page) - 1], asset_domain, asset_key));

	preload();
	

	$(".relation-cc img").lazyload({
    	effect : "fadeIn"
    });
	
	if(page > 1) {
		scroll_top();
	}
	
	var sort = $(".sort");
	var type = 0;
	sort.click(function() {
		var sort_div = $(this).parent().parent().parent().find(".num_div");
		if(type == 0) {
			sortNum(sort_div, "desc");
			type = 1;
		} else {
			sortNum(sort_div, "asc");
			type = 0;
		}
	});
	
	$(document).keydown(function(event){
		if(event.which == 37) vg_pjax($(".pre").data("p"), 2);
		if(event.which == 39) vg_pjax($(".next").data("p"), 2);
	});
});

function cdnImage(path, asset_domain, asset_key) {
	time_exp = Math.round(new Date() / 1000);
	ks_md5_path = path+asset_key+time_exp;
	ks_md5 = $.md5(ks_md5_path);
	return asset_domain + path + '?_KS=' + ks_md5 + '&_KE=' + time_exp;
}

var preload = () =>{
	var img_list = [];
	var cur_page = parseInt(page)
	for(let ida in img_data_arr) {
		if(ida == cur_page || ida == cur_page + 1) {
			img_list.push(cdnImage(img_pre+img_data_arr[ida], asset_domain, asset_key));
		}
	}
	if (img_list.length > 0) {
		$.preload(img_list);
	}
}

var vg_pagination = (page, total) => {
	let pre_page = parseInt(page) - 1;
	let next_page = parseInt(page) + 1;
	let pre_status = !pre_page ? 'disabled' : '';

	if(pre_page <= 1) {
		pre_page = 1;
	}
	// if(next_page >= total) {
	// 	next_page = total + 1;
	// }
	
	let pagination = `
		<nav aria-label="Page navigation">
		<div class="form-inline">
		<a href="javascript:goNumPage('pre');" class="btn btn-primary mb-1 mr-1" title="上集">上集</a>
		<a data-p="${pre_page}" href="javascript:;" onclick="vg_pjax($(this));" class="btn btn-primary mb-1 ppre pre ${pre_status}" title="上一页">上页</a>
		<div class="mx-1 mb-1">
		<label for="page-selector" class="sr-only">翻页</label>
		<select class="form-control vg-page-selector" id="page-selector" onchange="vg_pjax($(this), 1);">
	`;
	for(var i = 1; i <= total; i++) {
		let i_state = i == page ? 'selected' : '';
		pagination += `<option value="${i}" ${i_state}>第${i}页</option>`;
	}
	pagination += `
		</select>
		</div>
		<a data-p="${next_page}" href="javascript:;" onclick="vg_pjax($(this));" class="btn btn-primary mb-1 pnext next" title="下一页">下页</a>
		<a href="javascript:goNumPage('next');" class="btn btn-primary mb-1 ml-1" title="下集">下集</a>
		</div>
		</nav>
	`
	$(".pagination").html(pagination);
}

function goNumPage(type) {
	let ctype;
	if(type == 'pre') {
		ctype = 2;
	} else if(type == 'next') {
		ctype = 1;
	}
	$.ajax({
		type:"get",
		url:"/chapter_num?chapter_id="+chapter_num+"&ctype="+ctype+"&type="+chapter_type,
		dataType:"json",
		success:function(json) {
			if(json.code != '0000') {
				alert("没有了");
			} else {
				let url = json.url;
				window.location.replace(url);
			}
		}
	});
}

var vg_pjax = (obj, type = 0, container = ".pjax-container") => {
	let result_container = container;
	let p;
	
	scroll_top();
	if(type == 1) {
		p = parseInt(obj.val());
	} else if(type == 2) {
		p = obj;
	} else {
		p = parseInt(obj.data('p'));
	}
	
	var img = new Image();
	$(".loading").show();
	var index = p - 1;
	var img_preload_url = img_data_arr[index] ? cdnImage(img_pre+img_data_arr[index], asset_domain, asset_key) : '';

	if(p <= 0) {
		goNumPage('pre');
		return;
	} else if(p > total_page) {
		alert('本章已完，前往下一章！');
		goNumPage('next');
		return;
	}
	let push_url = cur_url
	push_url = push_url.replace(".html", "_"+p+".html");

	window.location.href = push_url;
}