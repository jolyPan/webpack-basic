!function(e){function n(n){for(var i,c,s=n[0],a=n[1],d=n[2],h=0,u=[];h<s.length;h++)c=s[h],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&u.push(o[c][0]),o[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);for(l&&l(n);u.length;)u.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],i=!0,s=1;s<t.length;s++){var a=t[s];0!==o[a]&&(i=!1)}i&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var i={},o={4:0},r=[];function c(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=i,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)c.d(t,i,function(n){return e[n]}.bind(null,i));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var l=a;r.push([22,0]),t()}({0:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return o}));var i=function(){var e={};function n(e){i(),function(e,n){n=n||0;var t=0;!function i(){++t>=n?e():requestAnimationFrame(i)}()}(i,10)}function i(){var n=document.documentElement.clientWidth/e.screenWidth*100;document.querySelector("html").style.fontSize=n+"px"}function r(n){"landscape"==e.getOrient()?(e.turnBox.style.display="block",e.lock=!0):(e.turnBox.style.display="none",e.lock=!1)}function c(n){e.dir!=e.getOrient()?(e.turnBox.style.display="block",e.lock=!0,o.ios&&-1==e.scrollTop&&document.body.scrollTop>0&&(e.scrollTop=document.body.scrollTop,document.body.scrollTop=0)):(e.turnBox.style.display="none",e.lock=!1,o.ios&&-1!=e.scrollTop&&(document.body.scrollTop=e.scrollTop,e.scrollTop=-1))}return e.dir="portrait",e.lock=!1,e.screenWidth=750,e.scrollTop=-1,e.iphoneXOffsetLandscape=44,e.iphoneXOffsetPortrait=35,e.bleedScale=1,e.init=function(o){var s=function(e,n){if(n&&Object.keys(n).length>0){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t]);return n}return e}({dir:"portrait",wd:1206,ht:750,scale:"cover",lock:!0},o);console.log(s),this.dir=s.dir,this.simulation=void 0===window.orientation,this.landscapeWidth=s.wd,this.landscapeHeight=s.ht,this.landscapeScaleMode=s.scale,this.screenLock=s.lock,this.screenLock=(!this.simulation||"landscape"!=this.dir)&&this.screenLock,console.log("simulation:"+this.simulation),console.log("screenLock:"+this.screenLock),this.debug=parseInt(this.getQueryString("debug"))||0,console.log("ibase debug:"+e.debug),this.debug&&e.load("js/base/vConsole.min.js","body",(function(){this.Console=new VConsole})),"portrait"==this.dir?(i(),window.addEventListener("resize",n,!1),document.write('<aside class="turnBoxPortrait" id="turnBox"><div class="phone"><img src="'.concat(t(3),'"><i class="yes"></i><i class="no"></i></div><p>竖屏体验更佳</p></aside>')),this.turnBox=document.getElementById("turnBox"),this.screenLock&&("landscape"==this.getOrient(!0)&&requestAnimationFrame((function(){this.turnBox.style.display="block",this.lock=!0})),window.addEventListener("orientationchange",c,!1))):(document.write('<aside class="turnBoxLandscape" id="turnBox"><div class="lock"><span></span><span></span></div><div class="sign"><span>竖排方向锁定：关闭</span><span>竖排方向锁定：打开</span></div><div class="phone"><img src="'.concat(t(3),'"><i class="yes"></i><i class="no"></i></div><p>锁定竖屏体验更佳</p></aside>')),this.turnBox=document.getElementById("turnBox"),this.screenLock&&("landscape"==this.getOrient(!0)&&requestAnimationFrame((function(){this.turnBox.style.display="block",this.lock=!0})),window.addEventListener("orientationchange",r,!1)))},e.unlockScreen=function(){this.screenLock=!1,"portrait"==this.dir?window.removeEventListener("orientationchange",c,!1):this.screenLock&&window.removeEventListener("orientationchange",r,!1),this.turnBox&&(this.turnBox.style.display="none"),document.body.scrollTop=0},e.lockScreen=function(){e.screenLock=!0,"portrait"==this.dir?(this.dir!=e.getOrient(!0)&&(this.turnBox.style.display="block",this.lock=!0),window.addEventListener("orientationchange",c,!1)):this.screenLock&&("landscape"==e.getOrient(!0)&&(this.turnBox.style.display="block",this.lock=!0),window.addEventListener("orientationchange",r,!1))},e.getOrient=function(e){if(e=e||0)var n=window.innerWidth>window.innerHeight?"landscape":"portrait";else n=90==window.orientation||-90==window.orientation?"landscape":"portrait";return console.log("window orientation:"+n),n},e.load=function(e,n,t,i){var o=function(e,n){n=null==n||n;var t=e.split("."),i=t[t.length-1],o=e+(n?"?v="+Math.random():"");return{type:i,src:o}}(e,i=null==i||i);"css"==o.type?this.loadCss(o.src,n,t):"js"==o.type&&this.loadJs(o.src,n,t)},e.loadCss=function(e,n,t){n=n||"head";var i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",e),document.querySelector(n).appendChild(i),t&&(i.onload=t)},e.loadJs=function(e,n,t){n=n||"body";var i=document.createElement("script");i.setAttribute("type","text/javascript"),i.setAttribute("src",e),document.querySelector(n).appendChild(i),t&&(i.onload=t)},e.creatNode=function(e,n,t,i,o){e=e||"div",t=t||"",n=n||"",i=i||"",o=o||document.querySelector("body");var r=document.createElement(e);""!=t&&(r.className=t),""!=n&&(r.id=n),""!=i&&(r.innerHTML=i),o.appendChild(r)},e.getUrl=function(e){var n=getQueryString("hmsr");n=n||"";var t=getQueryString("utm_source");t=t||"",e&&""!=e&&(e+=(""!=n?(-1==e.indexOf("?")?"?":"&")+"hmsr="+n:"")+(""!=t?"&utm_source="+t:""),location.href=e)},e.getQueryString=function(e){if(e&&""!=e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),t=window.location.search.substr(1).match(n);return null!=t?decodeURIComponent(t[2]):null}return null},e}(),o=function(){var e=navigator.userAgent,n={};if(n.userAgent=e,n.android=!(!e.match(/(Android)\s+([\d.]+)/)&&!e.match(/Silk-Accelerated/)),n.ipad=!!e.match(/(iPad).*OS\s([\d_]+)/),n.iphone=!(n.ipad||!e.match(/(iPhone\sOS)\s([\d_]+)/)),n.ios=n.ipad||n.iphone,n.wp=!(!e.match(/Windows Phone/)&&!e.match(/IEMobile/)),n.supportsTouch=window.DocumentTouch&&document instanceof window.DocumentTouch||"ontouchstart"in window,n.weixin=!!e.match(/MicroMessenger/),n.weixin){var t=e.match(/MicroMessenger\/\d+.\d+.\d+/)[0].match(/\d+.\d+.\d+/)[0].split(".");n.weixinVer=0;for(var i=0;i<t.length;i++)n.weixinVer+=parseInt(t[i])*Math.pow(10,t.length-i-1)}return n.wxApp=!("miniprogram"!=window.__wxjs_environment&&!e.match(/miniprogram/)&&!e.match(/miniProgram/)),n.weibo=!(!e.match(/Weibo/)&&!e.match(/weibo/)),n.ali=!!e.match(/AliApp/),n.alipay=!(!n.ali||!e.match(/Alipay/)),n.taobao=!(!n.ali||!e.match(/WindVane/)),n.tianmao=!(!n.ali||!e.match(/Tmall/)),n.netease=!!e.match(/NewsApp/),n.facebook=!!e.match(/(FB)/),n.baidu=!!e.match(/Baidu/),n.safari=!(!n.ios||!e.match(/Safari/)),n.chrome=!!e.match(/Chrome/),n.firefox=!!e.match(/Firefox/),n.ie=document.documentMode,n.edge=!!e.match(/Edge/),n.pc=!(n.android||n.ios||n.wp),n.oppo=!1,n.oppoBrowser=!1,n.oppoApp=!1,n.oppoR15=!1,n.ios?(n.iphoneX=375==screen.width&&812==screen.height||375==screen.width&&window.innerHeight>=635||724==window.innerWidth&&375==window.innerHeight||375==window.innerWidth&&724==window.innerHeight||812==window.innerWidth&&343==window.innerHeight||343==window.innerWidth&&812==window.innerHeight,n.IPhoneXSMax=/iphone/gi.test(window.navigator.userAgent)&&window.devicePixelRatio&&3===window.devicePixelRatio&&414===window.screen.width&&896===window.screen.height,n.IPhoneXR=/iphone/gi.test(window.navigator.userAgent)&&window.devicePixelRatio&&2===window.devicePixelRatio&&414===window.screen.width&&896===window.screen.height,n.iphoneXFull=n.iphoneX&&window.innerHeight>667,n.iphone6Plus=414==screen.width&&736==screen.height||414==screen.width&&window.innerHeight>=622,n.iphone6=375==screen.width&&667==screen.height||375==screen.width&&window.innerHeight<=603,n.iphone5=320==screen.width&&568==screen.height||320==screen.width&&window.innerHeight>=460,n.iphone4=320==screen.width&&480==screen.height||320==screen.width&&window.innerHeight<=450):n.android&&(requestAnimationFrame((function(){n.screen159=360==screen.width&&window.innerHeight<540,n.screen189=360==screen.width&&window.innerHeight>590||393==screen.width&&window.innerHeight>660})),n.miui=!(!e.match(/MI/)&&!e.match(/Redmi/)),n.huawei=!!e.match(/HUAWEI/),n.oppo=!!e.match(/OPPO/),n.oppoBrowser=!!e.match(/OppoBrowser/),n.oppoApp=n.oppo&&!n.oppoBrowser&&!!window.JSCallJava,n.oppoR15=!!(e.match(/PAAM00/)||e.match(/PAAT00/)||e.match(/PACM00/)||e.match(/PACT00/)),n.vivo=!!e.match(/vivo/)),n}()},22:function(e,n,t){"use strict";t.r(n);t(11);var i=t(0);function o(e){i.a.getOrient();document.getElementById("screenWidth").innerHTML=screen.width,document.getElementById("screenHeight").innerHTML=screen.height,document.getElementById("innerWidth").innerHTML=document.documentElement.clientWidth,document.getElementById("innerHeight").innerHTML=document.documentElement.clientHeight,document.getElementById("devicePixelRatio").innerHTML=window.devicePixelRatio,document.getElementById("articleWidth").innerHTML=document.querySelector("article").clientWidth,document.getElementById("articleHeight").innerHTML=document.querySelector("article").clientHeight}$("article").fadeTo("slow",1),window.addEventListener("resize",o,!1),window.addEventListener("orientationchange",o,!1),o(),console.log("window history",window.history),console.log("window history",window.history),window.history.length},3:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAClBAMAAADSV9w3AAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACHRSTlMAUOwQfTLGCc+Sdr4AAAC4SURBVFjD7di9CsIwFMXxgw7tA1RwFKeMoiCOFSXmBdwDLh2dnK1guI+tBT+gDj3SpcP5r/kRws12kXlnROkAXIwrnRGMrETF0ghjm/3Q/TvfOri2aY1PoYPa5PiqsC76bYh0zuQaWoMpFxUVFRUVFRUVFRUVFRUVFRUVFRUVFf2Xrpg2w1is96LbgqUnYM3RBCBzFL3j2ZSisaE5T0c9b+Xf6vgJVOxcIwL7WyWWxnVbYOwpmXZ4AKZniADCyge5AAAAAElFTkSuQmCC"}});