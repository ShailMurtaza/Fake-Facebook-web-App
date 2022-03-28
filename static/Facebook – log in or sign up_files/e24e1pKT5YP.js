if (self.CavalryLogger) { CavalryLogger.start_js(["pvgaW"]); }

__d("LoggedOutSwitchingLocaleTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndex=function(a){this.$1.index=a;return this};c.setNewLocale=function(a){this.$1.new_locale=a;return this};c.setOldLocale=function(a){this.$1.old_locale=a;return this};c.setReferrer=function(a){this.$1.referrer=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={index:!0,new_locale:!0,old_locale:!0,referrer:!0,time:!0,weight:!0};e.exports=a}),null);
__d("XIntlAccountSetLocaleAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/ajax/save_locale/",{loc:{type:"String"},href:{type:"String"},index:{type:"Int"},ref:{type:"String"},ls_ref:{type:"Enum",defaultValue:"unknown",enumType:1},should_redirect:{type:"Bool",defaultValue:!0}})}),null);
__d("IntlUtils",["invariant","AsyncRequest","Cookie","LoggedOutSwitchingLocaleTypedLogger","ReloadPage","XIntlAccountSetLocaleAsyncController","goURI"],(function(a,b,c,d,e,f,g){__p&&__p();a={setXmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({xmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},encodeSpecialCharsForXController:function(a){return a.replace(new RegExp("\xa0","g"),"&nbsp;")},decodeSpecialCharsFromXController:function(a){return a.replace(new RegExp("&nbsp;","g"),"\xa0")},setAmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({amode:a,app:!1}).setHandler(function(){b("ReloadPage").now()}).send()},setRmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({rmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},setLocale:function(a,c,d,e){e=d;e||(a!=null||g(0,19476),e=a.options[a.selectedIndex].value);d=b("XIntlAccountSetLocaleAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setData({loc:e,ref:c,should_redirect:!1}).setHandler(function(a){b("ReloadPage").now()}).send()},appendCookieLocaleHistory:function(a){__p&&__p();var c="lh",d=b("Cookie").get(c),e=[],f=5;if(d!==null&&d!==void 0&&d!=""){e=d.split(",");e.push(a);for(var d=0;d<e.length-1;d++)e[d]==e[d+1]&&e.splice(d,1);e.length>=f&&e.slice(1,f)}else e.push(a);b("Cookie").set(c,e.toString())},setCookieLocale:function(a,c,d,e,f){e===void 0&&(e="unknown"),f===void 0&&(f=null),b("Cookie").setWithoutCheckingUserConsent_DANGEROUS("locale",a),this.appendCookieLocaleHistory(a),new(b("LoggedOutSwitchingLocaleTypedLogger"))().setNewLocale(a).setOldLocale(c).setIndex(f).setReferrer(e).log(),b("goURI")(d)}};e.exports=a}),null);
__d("legacy:intl-base",["IntlUtils"],(function(a,b,c,d,e,f){a.intl_set_xmode=(c=b("IntlUtils")).setXmode;a.intl_set_amode=c.setAmode;a.intl_set_rmode=c.setRmode;a.intl_set_locale=c.setLocale}),3);
__d("LoginbarPopover",["CSS","ge","getActiveElement"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3;a={init:function(a,c,d){var e=this,f=b("ge")("email",d);setTimeout(function(){return e.show(a,d,f)},g);c.addEventListener("click",function(a){a.kill(),e.toggle(d,f)});a.style.visibility="visible"},show:function(a,c,d){b("CSS").show(c);a=b("getActiveElement")().tagName.toLowerCase();a!=="input"&&a!=="textarea"&&d.focus()},toggle:function(a,c){b("CSS").toggle(a),b("CSS").shown(a)&&c.focus()}};e.exports=a}),null);
__d("NoscriptOverride",["Cookie","goURI"],(function(a,b,c,d,e,f){a={redirectToJSPage:function(a){b("Cookie").clear("noscript"),b("goURI")(a)}};e.exports=a}),null);
__d("SketchBase",["Promise","regeneratorRuntime","Alea","Base64","md5","performanceNow","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=10,i=16,j=function(){return new(b("Promise"))(function(a){b("setTimeout")(a)})},k=function(){__p&&__p();function a(a,c,d){this.seed=a,this.rounds=c,this.rng=b("Alea")(a),this.ctx=d.getContext("2d"),this.width=d.width,this.height=d.height}var c=a.prototype;c.solveAllRoundsAsync=function(a){__p&&__p();var c,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:c=Date.now()+h,d=0;case 2:if(!(d<this.rounds)){e.next=11;break}a(d);if(!(Date.now()>c)){e.next=8;break}e.next=7;return b("regeneratorRuntime").awrap(j());case 7:c=Date.now()+h;case 8:d++;e.next=2;break;case 11:case"end":return e.stop()}},null,this)};c.solveAsync=function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.pickPrimitiveAndDraw.bind(this)));case 2:case"end":return a.stop()}},null,this)};c.solveOnePrimitiveAsync=function(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:c.next=2;return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.getDrawFunction(a)));case 2:case"end":return c.stop()}},null,this)};c.getDrawFunction=function(a){switch(a){case"text":return this.drawText.bind(this);case"bezier":return this.drawBezier.bind(this);case"circle":return this.drawCircle.bind(this);case"emoji":return this.drawEmoji.bind(this);default:return function(){return void 0}}};c.pickPrimitive=function(a){var b=["emoji","circle","bezier","text"];return b[a%b.length]};c.pickPrimitiveAndDraw=function(a){a=this.getDrawFunction(this.pickPrimitive(a));a()};c.drawText=function(){var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b=Math.floor(this.rng()*100).toString(),c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};c.drawEmoji=function(){var a=Math.floor(this.rng()*50+100);this.ctx.font=a+"px Arial";var b="\ud83d\ude03",c=Math.floor(this.rng()*this.width/2);a=this.rngRange(a*2,this.height-a);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fillText(b,c,a)};c.drawBezier=function(){this.ctx.beginPath();var a=this.rng()*this.width,b=this.rng()*this.height,c=this.rng()*this.width,d=this.rng()*this.height,e=this.rng()*this.width,f=this.rng()*this.height;this.ctx.moveTo(a,b);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,c,d);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,e,f);this.ctx.bezierCurveTo(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width,this.rng()*this.height,a,b);this.ctx.fillStyle=this.makeRadialGradient();this.applyShadow();this.ctx.fill()};c.drawCircle=function(){this.ctx.beginPath(),this.ctx.arc(this.rng()*this.width,this.rng()*this.height,this.rng()*this.width/5,0,2*Math.PI),this.ctx.fillStyle=this.makeRadialGradient(),this.applyShadow(),this.ctx.fill(),this.ctx.lineWidth=2,this.ctx.strokeStyle=this.makeRadialGradient(),this.ctx.stroke()};c.makeRadialGradient=function(){var a=this.ctx.createRadialGradient(this.rng()*this.width,this.rng()*this.height,0,this.rng()*this.width,this.rng()*this.height,this.width*2);a.addColorStop(0,this.makeColor());a.addColorStop(.5,this.makeColor());a.addColorStop(1,this.makeColor());return a};c.makeColor=function(){var a=Math.floor(this.rng()*255),b=Math.floor(this.rng()*255),c=Math.floor(this.rng()*255);return"rgb("+a+","+b+","+c+")"};c.applyShadow=function(){this.ctx.shadowColor=this.makeColor(),this.ctx.shadowBlur=this.rng()*50,this.ctx.shadowOffsetX=this.rng()*15,this.ctx.shadowOffsetY=this.rng()*15};c.rngRange=function(a,b){var c=Math.min(a,b);a=Math.max(a,b);return this.rng()*(a-c)+c};return a}(),l={createCanvasAndSolveAllPrimitives:function(a,c,d){__p&&__p();var e,f,g,h;return b("regeneratorRuntime").async(function(i){__p&&__p();while(1)switch(i.prev=i.next){case 0:e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";f={hash:"",hash_bezier:"",hash_circle:"",hash_emoji:"",hash_text:"",hash2:"",rounds:d,seed:a,seed2:c,time_taken:0};document.body&&document.body.appendChild(e);i.next=8;return b("regeneratorRuntime").awrap(l.solveAsync(e,a,d));case 8:g=i.sent;i.next=11;return b("regeneratorRuntime").awrap(l.solveAsync(e,c,d));case 11:h=i.sent;f.hash=g.hash;f.hash2=h.hash;f.time_taken=g.time_taken+h.time_taken;i.next=17;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"text"));case 17:f.hash_text=i.sent;i.next=20;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"bezier"));case 20:f.hash_bezier=i.sent;i.next=23;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"circle"));case 23:f.hash_circle=i.sent;i.next=26;return b("regeneratorRuntime").awrap(l.solvePrimitive(e,a,d,"emoji"));case 26:f.hash_emoji=i.sent;document.body&&document.body.removeChild(e);return i.abrupt("return",f);case 29:case"end":return i.stop()}},null,this)},encode:function(a){return b("Base64").encode(JSON.stringify(a))},getHash:function(a){return new(b("Promise"))(function(c){b("setTimeout")(function(){c(b("md5")(a.toDataURL()))},i)})},solveAsync:function(a,c,d){__p&&__p();var e,f,h,i,j,m;return b("regeneratorRuntime").async(function(n){__p&&__p();while(1)switch(n.prev=n.next){case 0:e=new k(c,d,a);e.ctx.clearRect(0,0,e.width,e.height);f=(g||(g=b("performanceNow")))();n.next=5;return b("regeneratorRuntime").awrap(e.solveAsync());case 5:h=(g||(g=b("performanceNow")))();i=parseInt((h-f)*1e3,10);n.next=9;return b("regeneratorRuntime").awrap(l.getHash(a));case 9:j=n.sent;m={hash:j,time_taken:i};return n.abrupt("return",m);case 12:case"end":return n.stop()}},null,this)},solvePrimitive:function(a,c,d,e){__p&&__p();var f,g;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:f=new k(c,d,a);f.ctx.clearRect(0,0,f.width,f.height);h.next=4;return b("regeneratorRuntime").awrap(f.solveOnePrimitiveAsync(e));case 4:h.next=6;return b("regeneratorRuntime").awrap(l.getHash(a));case 6:g=h.sent;return h.abrupt("return",g);case 8:case"end":return h.stop()}},null,this)}};e.exports=l}),null);
__d("XSISketchResultsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/sketch_results/",{})}),null);
__d("SketchBlue",["regeneratorRuntime","AsyncRequest","Form","SketchBase","XSISketchResultsController","emptyFunction","nullthrows"],(function(a,b,c,d,e,f){__p&&__p();var g={solveIntern:function(a,c,d,e){var f;return b("regeneratorRuntime").async(function(g){while(1)switch(g.prev=g.next){case 0:g.next=2;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(a,d,e));case 2:f=g.sent,c.textContent=f.hash;case 4:case"end":return g.stop()}},null,this)},solveAndCallAsyncController:function(a,c,d){var e,f,h;return b("regeneratorRuntime").async(function(i){while(1)switch(i.prev=i.next){case 0:i.next=2;return b("regeneratorRuntime").awrap(g.createCanvasAndSolve(a,c,d));case 2:e=i.sent,f=b("SketchBase").encode(e),h=b("XSISketchResultsController").getURIBuilder().getURI(),new(b("AsyncRequest"))().setURI(h).setMethod("POST").setData({skstamp:f}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send();case 6:case"end":return i.stop()}},null,this)},solveAndUpdateForm:function(a,c,d,e){var f,h,i,j;return b("regeneratorRuntime").async(function(k){while(1)switch(k.prev=k.next){case 0:k.next=2;return b("regeneratorRuntime").awrap(g.createCanvasAndSolve(a,c,d));case 2:f=k.sent,h=babelHelpers["extends"]({},f,{surface:e=="login_form"?"login":e=="reg"?"registration":""}),i=b("SketchBase").encode(h),j=document.getElementById(e),b("Form").createHiddenInputs({skstamp:i},j);case 7:case"end":return k.stop()}},null,this)},solveAllPrimitivesAndCallAsyncController:function(a,c,d){var e,f,g;return b("regeneratorRuntime").async(function(h){while(1)switch(h.prev=h.next){case 0:h.next=2;return b("regeneratorRuntime").awrap(b("SketchBase").createCanvasAndSolveAllPrimitives(a,c,d));case 2:e=h.sent,f=b("SketchBase").encode(e),g=b("XSISketchResultsController").getURIBuilder().getURI(),new(b("AsyncRequest"))().setURI(g).setMethod("POST").setData({skstamp:f}).setTimeoutHandler(1e4,b("emptyFunction")).setErrorHandler(b("emptyFunction")).send();case 6:case"end":return h.stop()}},null,this)},createCanvasAndSolve:function(a,c,d){__p&&__p();var e,f,g,h;return b("regeneratorRuntime").async(function(i){__p&&__p();while(1)switch(i.prev=i.next){case 0:e=document.createElement("canvas");e.width=200;e.height=200;e.style.display="none";b("nullthrows")(document.body).appendChild(e);i.next=7;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e,a,d));case 7:f=i.sent;i.next=10;return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e,c,d));case 10:g=i.sent;h={hash:f.hash,hash2:g.hash,rounds:d,seed:a,seed2:c,time_taken:f.time_taken+g.time_taken};b("nullthrows")(document.body).removeChild(e);return i.abrupt("return",h);case 14:case"end":return i.stop()}},null,this)}};e.exports=g}),null);
__d("useragentcm",["Bootloader","UACMConfig","ge"],(function(a,b,c,d,e,f){__p&&__p();function a(){__p&&__p();var a=!1,c={ffid:typeof b("UACMConfig").ffid==="undefined"?0:b("UACMConfig").ffid,ffid1:typeof b("UACMConfig").ffid1==="undefined"?0:b("UACMConfig").ffid1,ffid2:typeof b("UACMConfig").ffid2==="undefined"?0:b("UACMConfig").ffid2,ffid3:typeof b("UACMConfig").ffid3==="undefined"?0:b("UACMConfig").ffid3,ffid4:typeof b("UACMConfig").ffid4==="undefined"?0:b("UACMConfig").ffid4,ffver:typeof b("UACMConfig").ffver==="undefined"?0:b("UACMConfig").ffver};c.qp=document.location;var d=b("ge")("login_form");d&&d.action&&(c.qm=d.action);d="facebook";var e=new RegExp("(^|\\.)"+d+"\\.com$","i").test(document.location.hostname);if(!e)a=!0;else if(c.qm){e=c.qm.split("?")[0].split("#")[0];var f=65535;for(var g=0;g<e.length;g++){var h=(f>>8^e.charCodeAt(g))&255;h^=h>>4;f=(f<<8^h<<12^h<<5^h)&65535}b("UACMConfig").ffver&&b("UACMConfig").ffver!=f&&(a=!0)}if(a){var i=document.location.protocol+"//www."+d+".com/ajax/ua_callback.php";document.referrer&&(c.qr1=document.referrer);b("Bootloader").loadModules(["AsyncSignal"],function(a){new a(i,c).send()},"useragentcm")}}e.exports=a}),null);
__d("legacy:si-countermeasures",["useragentcm"],(function(a,b,c,d,e,f){a.useragentcm=b("useragentcm")}),3);
__d("WebCookieUseBannerController",["Arbiter","CSS","DeferredCookie","DOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={init:function(a,c){this.banner=a;this.closeButton=c;document.body&&b("CSS").addClass(document.body,"hasCookieBanner");b("DeferredCookie").addDefaultInteractionListener();if(c){var d=function(){document.body&&b("CSS").removeClass(document.body,"hasCookieBanner"),b("DOM").remove(a),b("Arbiter").inform("WebCookieUseBannerController/close")};c.addEventListener?c.addEventListener("click",d):c.attachEvent&&c.attachEvent("onclick",d)}}};e.exports=a}),null);