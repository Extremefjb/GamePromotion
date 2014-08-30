/* SiteMaster - v0.0.1 - Copyright (c) 2014 Admaster.inc - At: 2014-01-16 12:38:39 */
(function(){var a=function(a){var b,c,d=a,f=Array.prototype,g=Object.prototype,h=f.forEach,j=f.some,k=f.indexOf,l=f.map,m=Array.isArray,n=g.toString,o=g.hasOwnProperty,p={},q=encodeURIComponent,r=decodeURIComponent,s=4096,t=9,u=document.createElement("a"),v=function(a,b){return(a+"").replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\"+(b||"")+"-]","g"),"\\$&")};b=function(a,b){var c=Math.random().toString().replace("0.",""),e=s-b.length,f=a.join("&"),g=Math.ceil(f.length/e);g>t||d.times(g,function(a){var d=["|",c,"|",g,"|",a+1].join(""),h=f.substr(a*e,e),i=new Image(1,1);i.src=b+[d,q(h)].join("=")})},d.allowLinker=!1,d.identity=function(a){return a},d.isEmpty=function(a){if(null==a)return!0;if(d.isArray(a)||d.isString(a))return 0===a.length;for(var b in a)if(d.has(a,b))return!1;return!0},d.isElement=function(a){return!(!a||1!==a.nodeType)},d.isArray=m||function(a){return"[object Array]"===n.call(a)},d.isObject=function(a){return a===Object(a)},d.isArguments=function(a){return"[object Arguments]"===n.call(a)},d.isArguments(arguments)||(d.isArguments=function(a){return!(!a||!d.has(a,"callee"))}),d.isFunction=function(a){return"[object Function]"===n.call(a)},d.isString=function(a){return"[object String]"===n.call(a)},d.isNumber=function(a){return"[object Number]"===n.call(a)},d.isFinite=function(a){return d.isNumber(a)&&isFinite(a)},d.isNaN=function(a){return a!==a},d.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"===n.call(a)},d.isDate=function(a){return"[object Date]"===n.call(a)},d.isRegExp=function(a){return"[object RegExp]"===n.call(a)},d.isNull=function(a){return null===a},d.isUndefined=function(a){return void 0===a},d.has=function(a,b){return o.call(a,b)};var w=d.each=function(a,b,c){if(null!=a)if(h&&a.forEach===h)a.forEach(b,c);else if(a.length===+a.length){for(var e=0,f=a.length;f>e;e++)if(b.call(c,a[e],e,a)===p)return}else for(var g in a)if(d.has(a,g)&&b.call(c,a[g],g,a)===p)return};d.times=function(a,b,c){for(var d=0;a>d;d++)b.call(c,d)},d.map=d.collect=function(a,b,c){var d=[];return null==a?d:l&&a.map===l?a.map(b,c):(w(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),d)};var x=d.some=d.any=function(a,b,c){var e=!1;return b=b||d.identity,null==a?e:j&&a.some===j?a.some(b,c):(w(a,function(a,d,f){return e||(e=b.call(c,a,d,f))?p:void 0}),!!e)};d.include=d.contains=function(a,b){var c=!1;return null==a?c:k&&a.indexOf===k?-1!==a.indexOf(b):c=x(a,function(a){return a===b})},d.throttle=function(a,b){var c,e,f,g,h,i,j=d.debounce(function(){h=g=!1},b);return function(){c=this,e=arguments;var d=function(){f=null,h&&a.apply(c,e),j()};return f||(f=setTimeout(d,b)),g?h=!0:(g=!0,i=a.apply(c,e)),j(),i}},d.debounce=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}},d.memoize=function(a,b){var c={};return b||(b=d.identity),function(){var e=b.apply(this,arguments);return d.has(c,e)?c[e]:c[e]=a.apply(this,arguments)}},d.hash=function(a){return d.substr(d.md5(a),12)},d.docWidth=function(){var a=document,b=a.body,c=a.documentElement;return c.clientWidth||b.clientWidth},d.pageWidth=function(){var a,b=document,c=b.body,d=b.documentElement,e=c.children,f=0,g=d.clientWidth||c.clientWidth,h=function(a){var b,c=0;for(b=0;b<a.length;b+=1)f=a[b].offsetWidth,f>600&&(g-10>f||f>g)&&f>c&&(c=f);return c},j=function(a){var b,c,d,e=-1;for(c=0;c<a.length;c+=1)d=a[c].offsetHeight,d>e&&(b=a[c],e=d);return b},k=h(e);if(!k)for(i=0;3>i&&(a=j(e),!(a&&(e=a.children,k=h(e))));i+=1);return k||c.offsetWidth},d.substr=function(a,b){return d.isString(a)?a.substring(0,b):""},d.time=function(){return Math.round((new Date).valueOf()/1e3)},d.getHostByUrl=d.memoize(function(a){var b=u;return b.href=a,b.hostname||b.host}),d.isSameOrig=function(a,b,c){if(!a)return!1;var e,f=d.getHostByUrl(a);return f===b?!0:c?(e=new RegExp("(^|\\.)"+v(c)+"$"),e.test(f)&&e.test(b)):!1};var y=d.parseUrl=d.memoize(function(a){if(!d.isString(a))return"";var b=new RegExp("#.*$").exec(a),c=d.isArray(b)?b[0]:"",e=a.replace(c,"").split("?"),f=e.shift(),g=e.join("?")||"",h=g?d.map(g.split("&"),function(a){return a.split("=")}):[];return{uri:f,params:h,hash:c,qs:g}});d.urlContain=function(a,b){var c=y(a);return d.any(c.params,function(a){return d.any(b,function(b){return a[0]==b})})},d.urlIgnoreIndex=function(a,b){var c=d.parseUrl(a),e="";return c&&c.uri?(x(b,function(a){var b=new RegExp("/"+v(a)+"$");return c.uri=c.uri.replace(b,"/"),b.test(c.uri)}),e=c.qs?[c.uri,c.qs].join("?"):c.uri,e+c.hash):e},d.urlFilter=function(a,b){if(!d.isString(a))return"";var c=y(a),e="",f=[];return d.each(c.params,function(a){d.any(b,function(b){var c=new RegExp("^"+b+"$","i");return c.test(a[0])})||f.push(a.join("="))}),e=f.length?[c.uri,f.join("&")].join("?"):c.uri,c.hash&&(e+=c.hash),e},d.urlFind=function(a,b){if(!d.isString(a))return[];var c=y(a),e=[];return d.each(b,function(a){d.each(c.params,function(b){var c=new RegExp("^"+a+"$","i");c.test(b[0])&&e.push(b.join("="))})}),e.join("&")},d.each(["Width","Height"],function(a){d["doc"+a]=function(){var b=document,c=b.documentElement,d="scroll"+a,e="offset"+a,f="client"+a;return Math.max(b.body[d],c[d],b.body[e],c[e],c[f])}}),d.intval=function(a){return parseInt(a,10)||0},d.floatval=function(a,b){var c=Math.pow(10,b||0);return a=parseFloat(a)||0,Math.round(a*c)/c},d.scrollTop=function(){try{return d.intval(window.pageYOffset||document.documentElement.scrollTop)}catch(a){return 0}},d.scrollLeft=function(){try{return d.intval(window.pageXOffset||document.documentElement.scrollLeft)}catch(a){return 0}},d.viewHeight=function(){try{return document.documentElement.clientHeight||document.body.clientHeight}catch(a){return 0}},d.viewWidth=function(){try{return document.documentElement.clientWidth||document.body.clientWidth}catch(a){return 0}},c=function(){return["_",Math.round(1e6*Math.random())].join("=")},d.request=function(a,f){if(f){var g,h=new Image(1,1),i=f[1]||null,j=f[0]||null,k=a+i+"?",l=s-k.length,m="",n=[];i&&j&&(d.each(j,function(a,b){d.isArray(a)?d.each(a,function(a){n.push([b,q(a)].join("="))}):n.push([b,q(a)].join("="))}),m=n.join("&"),m.length>l?b(n,k):(h.src=k+m+"&"+c(),g=function(){h=new Image(1,1),h.src=k+m+"&"+c()+"&retry=yes"},e.addEvent(h,"error",g)))}},d.isSameDay=function(a,b){return Math.floor(a/86400)===Math.floor(b/86400)},d.getCopyText=function(){var a="";try{a=window.getSelection?window.getSelection():document.getSelection?document.getSelection():document.selection.createRange().text,a&&""!==a||document.activeElement.selectionStart&&(a=document.activeElement.value.substring(document.activeElement.selectionStart,document.activeElement.selectionEnd))}catch(b){}return a+""},d.flashVersion=function(){var a,b="",c=navigator;if(c.plugins&&c.plugins.length){for(a=0;a<c.plugins.length;a++)if(-1!=c.plugins[a].name.indexOf("Shockwave Flash")){b=c.plugins[a].description.split("Shockwave Flash ")[1];break}}else if(window.ActiveXObject)for(a=10;a>=2;a--)try{var d=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a);if(d){b=a+".0";break}}catch(e){}return b},d.getSmtz=function(a,b,c,e){var f,g,h,i,j="cp,md,pl,ct,kw".split(","),k={},l={};return a=a||"",d.isString(a)&&d.isString(b)?(querys=d.urlFind(b,["smt_\\w+"]),d.each(querys.split("&"),function(a){var b=a.split("=");k[b[0]]=b[1]}),d.isUndefined(k.smt_b)?x(["md","pl","cp"],function(a){return d.isUndefined(k["smt_"+a])})?(f=d.getKeyword(a,c),f!==!1?{smt_cp:"(organic)",smt_md:f[0],smt_pl:"organic",smt_kw:f[1]}:(g=d.getSocialUid(a,e),g!==!1?{smt_cp:"(social)",smt_md:g[0],smt_pl:"social",smt_kw:g[1]}:(h=d.getHostByUrl(a),i=d.getHostByUrl(b),a?{smt_cp:"(referral)",smt_md:h,smt_pl:"referral",smt_ct:d.getPathByUrl(a)}:{smt_cp:"(direct)",smt_md:"(direct)",smt_pl:"(none)"}))):(l={},w(j,function(a){var b="smt_"+a,c=k[b];d.isUndefined(c)||(l[b]=c)}),l):{smt_b:k.smt_b}):""},d.getPathByUrl=d.memoize(function(a){var b=y(a),c=b.uri.split("#")[0];return"/"+c.split("/").slice(3).join("/")}),d.getSocialUid=function(a,b){var c,e,f,g,h=d.getHostByUrl(a);return d.has(b,h)?(c=y(a),e=c.uri.split("#")[0].split("&")[0],g=e.split("/"),f="www.renren.com"===h?parseInt(g[4],10)||parseInt(g[3],10):"weibo.com"!==h&&"www.weibo.com"!==h||"u"!==g[3]?"s.weibo.com"===h?g.slice(3,5).join("/"):g[3]:parseInt(g[4],10),[h,f]):!1},d.getKeyword=function(a,b){var c,e,f=d.getHostByUrl(a);return d.has(b,f)?(c=y(a),d.any(c.params,function(a){return d.include(b[f],a[0])?(e=a[1],!0):void 0})?[f,e]:!1):!1},d.hash2str=function(a,b){var c=[];return d.each(b,function(b){d.isUndefined(a[b])||c.push([b,a[b]].join("="))}),c.join("&")},d.str2hash=function(a){var b={};return d.each(a.split("&"),function(a){var c=a.split("=");b[c[0]]=c[1]}),b},d.handle_arguments=function(a,b){return d.map(b,function(b,c){var e=a[c];if(!d.isString(e)&&!d.isNumber(e)&&!d.isUndefined(e))throw new Error("param error");if("required"===b[0]&&(d.isUndefined(e)||0===e.toString().length))throw new Error("param error");if("string"===b[1])e=e.toString().replace(/\,/g,"%2C");else if("float"===b[1])e=d.floatval(e,b[2]);else if("int"===b[1]&&(e=d.intval(e),b[2]&&b[2]>e||b[3]&&b[3]<e))throw new Error("param error");return e}).join(",")},d.getLinkerVar=d.memoize(function(a){var b,c={},e="_smta,_smtz,_smtr,_smtb".split(",");return b=d.parseUrl(a),b.hash&&d.each(b.hash.substr(1).split("&"),function(a){b.params.push(a.split("="))}),d.each(b.params,function(a){d.include(e,a[0])&&(c[a[0]]=r(a[1]))}),(d.isUndefined(c._smta)||d.isUndefined(c._smtz))&&(delete c._smta,delete c._smtz),c});var z=function(a,b,c,e){var f=null,g="_smt"+a;if(d.allowLinker){if(f=d.getLinkerVar(b),f[g])return c.setCookie(g,f[g],62208e3,e),f[g];d.allowLinker=!1}return c.getCookie(g)};return d.getSmtrByLink=function(a,b){var c;return d.allowLinker&&(c=d.getLinkerVar(a),d.isString(c._smtr))?c._smtr:b},d.getSmtbByLink=function(a){var b=d.getLinkerVar(a);return b._smtb||""},d.getSmtaByLink=function(a,b,c){return z("a",a,b,c)},d.getSmtzByLink=function(a,b,c){return z("z",a,b,c)},d.findParentA=function(a){return a?a.tagName?"a"!==a.tagName.toLowerCase()?d.findParentA(a.parentNode):a:!1:!1},d.decodeSmtb=function(a){var b,c,d,e,f,g,h=[],i=[];for(a=a.split("").reverse(),23===a.length&&a.push(0),e=0;e<a.length;e+=2)h=[],h.push(a[e+1]),h.push(a[e]),f=h.join(""),g=parseInt(f,16),e/2+1>g&&(g+=256),g-=e/2+1,i.push(g);return b=(i[0]<<24)+(i[1]<<16)+(i[2]<<8)+i[3],c=(i[4]<<24)+(i[5]<<16)+(i[6]<<8)+i[7],d=(i[8]<<24)+(i[9]<<16)+(i[10]<<8)+i[11],[b,c,d]},d.encodeSmtb=function(a,b,c,e){var f=[],g=1,h="";try{if(d.each([a,b,c],function(a){d.each([24,16,8,0],function(b){var c=(a>>b&255)+g;c=c>=256?c-256:c,c=(c<<4&240)+(c>>4),c=c.toString(16),1===c.length&&(c="0"+c),f.push(c),g+=1})}),h=f.join("").split("").reverse().join("").replace(/^0+/,"").toUpperCase(),!e)return h;e(null,h)}catch(i){e&&e(i)}},d.localPath=void 0,d.qsParse=function(a){var b=a.split("&"),c={};return d.each(b,function(a){var b=a.split("="),e=b[0];if(2===b.length){var f="";try{f=decodeURIComponent(b[1])}catch(g){f=""}var h=c[e];h?(d.isString(h)&&(c[e]=[h]),c[e].push(f)):c[e]=f}}),c},d.qsStringify=function(a){var b="";for(var c in a){var e=a[c];if(d.isArray(e))d.each(e,function(a){b+=c+"="+encodeURIComponent(a)+"&"});else if(d.isNumber(e)){var f=e+"";b+=c+"="+encodeURIComponent(f)+"&"}else{var f=e+"";b+=c+"="+encodeURIComponent(f)+"&"}}return b?b.slice(0,-1):""},d.setCustomVar=function(a,b,c,e,f,g){if(d.isNumber(b)&&d.isString(c)&&d.isNumber(e)&&""!==c&&!(b>5)){e>3&&(e=2);var h="v"+b,i="s"+b,j=d.getCookie("_smtv"),k=d.qsParse(j)||{};k.hasOwnProperty(h)&&1!==e?(delete k[h],delete k[i],d.setCookie("_smtv",d.qsStringify(k),62208e5,f,g)):1===e&&(k[h]=c,k[i]=e,d.setCookie("_smtv",d.qsStringify(k),62208e6,f,g)),a[h]=c,a[i]=e}},d},b=function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}a.md5=t},c=function(a){var b=1,c=document.body,d=c.offsetTop!==b,e=function(a){return null!=a&&a==a.window},f=function(a){return a===Object(a)},g=function(a){return e(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1},h=function(a){var b=a.offsetTop,c=a.offsetLeft,e=a.style;return d&&(b+=parseFloat(e.marginTop)||0,c+=parseFloat(e.marginLeft)||0),{top:b,left:c}},i=function(a){var b,c,d,e,i,j,k,l,m,n,o,p,q=f(a)?a:document.getElementById(a);return(b=q&&q.ownerDocument)?(e=b.body)===q?h(q):(d=b.documentElement,(p=d.compareDocumentPosition?function(a,b){return!!(16&a.compareDocumentPosition(b))}:d.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):!1)}:function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1})(d,q)?(c=q.getBoundingClientRect(),i=g(b),j=d.clientTop||e.clientTop||0,k=d.clientLeft||e.clientLeft||0,l=i.pageYOffset||d.scrollTop,m=i.pageXOffset||d.scrollLeft,n=c.top+l-j,o=c.left+m-k,{top:n,left:o}):{top:0,left:0}):null};a.offset=i},d=function(a){function b(a){var b,c={},d=a.split(/ *; */);if(""==d[0])return c;for(var e=0;e<d.length;++e){b=d[e].split("=");try{c[f(b[0])]=f(b[1])}catch(g){c[b[0]]=b[1]}}return c}function c(){return navigator.cookieEnabled}function d(a,b,c,d,f){var g=e(a)+"="+e(b);(null==b||""===b)&&(c=-1),c&&(c=new Date(+new Date+c)),f&&(g+="; path="+f),d&&(g+="; domain="+d),c&&(g+="; expires="+c.toUTCString()),document.cookie=g}var e=encodeURIComponent,f=decodeURIComponent;return a.cookieEnable=function(){var a=c()?4:0,b=2,d=0;return a+b+d},a.getCookie=function(a){return b(document.cookie)[a]||""},a.setCookie=function(a,b,c,e,f){"localhost"===e&&(e=null),f||(f="/"),""!==b&&null!==b&&e&&(d(a,"",null,"",f),d(a,"",null,"","/")),d(a,b,c,e,f)},a},e={addEvent:function(a,b,c){var d="addEventListener",e="attachEvent",f="on"+b;a[d]?a[d](b,c,!1):a[e]?a[e](f,c):a[f]=c},removeEvent:function(a,b,c){var d="removeEventListener",e="detachEvent",f="on"+b;a[d]?a[d](b,c,!1):a[e]?a[e](f,c):a[f]=null},getEvent:function(a){return a||window.event},getTarget:function(a){return a&&(a.target||a.srcElement||null)}},f=function(a){var b,c,d={},e=60,f=86400,g=navigator,h=window,i=document,j=(i.documentElement,{}),k=a.time(),l="/",m=[],n=30*e,o=85,p=10,q="smt_\\w+,utm_\\w+".split(","),r=("smt_\\w+".split(","),!1),s={"www.google.com":["q"],"www.google.com.hk":["q"],"www.yahoo.cn":["q"],"www.bing.com":["q"],"www.baidu.com":["wd","word"],"m.baidu.com":["word"],"www.sogou.com":["query"],"www.youdao.com":["q"],"www.soso.com":["w"],"so.360.cn":["q"],"www.so.com":["q"],"www.google.com.tw":["q"]},t={},u=[["required","string"],["required","string"],["required","float",2],["optional","float",2],["optional","float",2],["required","string"],["required","string"]],v=[["required","string"],["required","string"],["required","string"],["required","float",2],["required","int",1]],w={"qzone.qq.com":"","user.qzone.qq.com":"","weibo.com":"","weibo.cn":"","e.weibo.com":"","t.qq.com":"","e.t.qq.com":"","renren.com":"","page.renren.com":"","www.weibo.com":"","m.weibo.cn":"","huati.weibo.com":"","s.weibo.com":""},x={},y=function(){var b=a.getCookie("_smtv"),c=a.qsParse(b)||{};return c},z="smt_md,smt_pl,smt_kw,smt_ct,smt_cp,smt_b".split(","),A=function(){a.setCookie("_smtp",j.pid,720*f*1e3,c,l)},B=function(b){var c=a.getCookie("_smtp"),d=a.getCookie("_smtt"),e=a.time();return b===c&&+d+p>e},C=function(a,b,c){return Math.round(c-(b-a)/2)},D=function(){var b=a.intval(Math.random()*k);return b=1e8>b?1e8+b:b,[k.toString(16),b.toString(16)].join(".")},E=function(b){var c=(b||"").split("."),d=parseInt(c[0]||0,16),e=parseInt(c[1]||0,16);return a.isUndefined(d)||d>k||k-720*f>d?!1:a.isUndefined(e)||1e8>e||e>k?!1:!0},F=function(){return k},G=function(b){j.smtz=a.hash2str(b,z),a.setCookie("_smtz",j.smtz,720*f*1e3,c,l)},H=function(b,e,f){var g,h=a.getSmtzByLink(j.url,a,c),i={};return j.smtz=h,b&&e&&!f?a.isSameDay(b,a.time())?a.intval(e)>=k&&a.isSameOrig(j.rl,j.ht,c)?(j.smtz=h,!0):(g=a.getSmtz(j.rl,"yes"===d.referrerSmtEnabled?j.rl:j.url,s,w,c),a.intval(e)<k?("(direct)"===g.smt_cp?j.smtz=h:G(g),!1):"(direct)"===g.smt_cp||"(referral)"===g.smt_cp?!0:(i=a.str2hash(h),a.any(z,function(a){return g[a]!==i[a]?!0:void 0})?(G(g),!1):!0)):(j.smtz=h,!1):(g=a.getSmtz(j.rl,"yes"===d.referrerSmtEnabled?j.rl:j.url,s,w,c),G(g),!1)},I=function(){var d=J(),e=d[0]||"0.0",g=a.intval(d[1])||0,h=a.intval(d[2])||0,i=a.intval(d[3])||1,m=a.intval(d[4])||0,o=0,p=a.intval(d[6])||0,q=!1;return newVisit=!1,E(e)||(o=1,e=D()),q=H(g,h,o),!o&&q?i+=1:(i=1,p=g||k,g=F(),m+=1,newVisit=!0),h=k+n,a.setCookie("_smta",[e,g,h,i,m,o,p].join(","),720*f*1e3,c,l),j.id=[b,e,g.toString(16),j.pid,i.toString(16)].join("."),j.vf=+(p==g),j.vi=m,j.vl=p.toString(16),newVisit},J=function(){var b=a.getSmtaByLink(j.url,a,c);return(a.isString(b)&&b||"").split(",")},K=function(){j.url=i.location.href,j.pid=a.hash(a.urlFilter(a.urlIgnoreIndex(j.url,m),q)),j.tl=i.title,j.cs=i.charset||i.characterSet,j.ht=i.location.host,j.rl=a.getSmtrByLink(j.url,i.referrer),j.rp=a.hash(a.urlFilter(j.rl,q)),j.ci=a.cookieEnable(),j.fv=a.flashVersion(),j.sr=[h.screen.width,h.screen.height].join("x"),j.sc=screen.colorDepth,j.tz=(new Date).getTimezoneOffset()/-60;try{j.je=a.isFunction(g.javaEnabled)&&g.javaEnabled()?1:0}catch(b){j.je=0}j.sp=a.scrollTop(),j.vh=a.viewHeight();var c=0;window.performance&&void 0!==window.performance.timing&&(c=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.fetchStart),j.pt=c};d.pageview=function(b,c){var d="id,url,tl,cs,vf,vi,rl,ci,fv,sr,sc,tz,je,vh,rp,vl,smtz,pt".split(","),e="",f={};K(),a.isString(b)&&b&&"/"===b.charAt(0)&&(j.url=a.urlIgnoreIndex([i.location.protocol,"//",j.ht,b].join(""),m),j.pid=e=a.hash(a.urlFilter(j.url,q))),a.isString(c)&&(j.tl=c),k=a.time(),I(),a.each(d,function(a){"id"===a&&e?(idArray=j.id.split("."),idArray[4]=e,f.id=idArray.join(".")):f[a]=j[a]}),f.sp=a.scrollTop(),f.rf=B(j.pid)?1:0,A();var g=y();for(var h in g)x[h]=g[h];return f.vars=a.qsStringify(x),r=!0,[f,"p"]},d.vpageview=function(){return d.pageview.apply(this,arguments)},d.clickEvent=function(b,c){var d={};return d.id=j.id,d.pw=a.pageWidth(),d.x=C(d.pw,a.docWidth(),b),d.y=c,[d,"k"]},d.pageClose=function(){var b={};return b.id=j.id,b.sp=a.scrollTop(),b.vh=a.viewHeight(),[b,"x"]},d.copyEvent=function(b){var c={};return c.id=j.id,c.cv=a.substr(b,o),c.cs=j.cs,[c,"c"]},d.inputEvent=function(b,c,d){var e={};return e.id=j.id,e.pw=a.pageWidth(),e.x=C(e.pw,a.docWidth(),b),e.y=c,e.iv=a.substr(d,o),e.cs=j.cs,[e,"i"]},d.pageScroll=function(){var b={};return b.id=j.id,b.sp=a.scrollTop(),b.vh=a.viewHeight(),[b,"s"]},d.heartEvent=function(b,c,d){var e={};return e.id=j.id,e.pw=a.pageWidth(),e.x=C(e.pw,a.docWidth(),c),e.y=d+a.scrollTop(),e.hn=b,[e,"h"]},d.mouseEvent=function(b,c){var d={};return d.id=j.id,d.pw=a.pageWidth(),d.x=C(d.pw,a.docWidth(),b),d.y=c,[d,"m"]},d.custom=function(b,c,d,e,f){var g={};return g.id=j.id,g.cat=a.substr(b,o),g.act=a.substr(c,o),g.lbl=a.substr(d,o),g.val=a.intval(e),g.brf=f?1:0,g.cat.length*g.act.length!==0?[g,"t"]:void 0},d._setAccount=function(a){b=a},d._setDomainName=function(a){d.domain=c=a},d._setCookiePath=function(a){d.cookiePath=l=a},d._setClickTimeOut=function(b){d.clickTimeout=a.intval(b)},d._setDirectoryIndex=function(){m=a.map(arguments,function(a){return a})},d._addOrganic=function(b){s[b]||(s[b]=a.map(Array.prototype.slice.call(arguments,1),function(a){return a}))},d.__saveCurPid=function(){r&&A()},d.addTrans=function(){try{var b=a.handle_arguments(arguments,u);t.order=b,t.items=[]}catch(c){}},d.addItem=function(){try{var b=a.handle_arguments(arguments,v);t.items.push(b)}catch(c){}},d.trackTrans=function(){return t.order&&t.items.length>0?(t.id=j.id,[t,"e"]):void 0},d._setAllowLinker=function(b){a.allowLinker=!!b};var L=d._getLinkerUrl=function(b,d,e){var f,g,h,k,l,m="referrer"===d?"referrer":"cookie",n=[],o=j.url||i.location.href,p=j.rl||i.referrer,q=a.parseUrl(b),r=encodeURIComponent;return"referrer"===m?(h=a.getSmtrByLink(o,p),n.push("_smtr="+r(h)),g=a.getSmtbByLink(o),g&&n.push("&_smtb="+r(g))):(f=a.getSmtaByLink(o,a,c),k=a.getSmtzByLink(o,a,c),f&&k&&(f&&n.push("_smta="+r(f)),k&&n.push("_smtz="+r(k)))),l=q.uri,q.qs&&(l+="?"+q.qs),e?l+=(q.hash?q.hash+"&":"#")+n.join("&"):(q.qs?l+="&":n.length&&(l+="?"),l+=n.join("&")+q.hash),l};return d._link=function(b,c,d,e){var f=L(b,d,e);a.isUndefined(c)||a.isUndefined(c.href)?location.href=f:c.href=f},d.heatmapEnabled="yes",d._setHeatmapEnabled=function(a){d.heatmapEnabled="yes"===a?"yes":"no"},d.referrerSmtEnabled="no",d._setReferrerSmtEnabled=function(a){d.referrerSmtEnabled="yes"===a?"yes":"no"},d._decodeSmt_b=function(b,e){var f="yes"===d.referrerSmtEnabled?j.rl:j.url,g=a.getSmtz(j.rl,f,s,w,c).smt_b,h=a.getSmtzByLink(j.url,a,c),i=function(){var b={};return a.each(h.split("&"),function(a){var c=a.split("=");try{b[c[0]]=decodeURIComponent(c[1]||"")}catch(d){b[c[0]]=c[1]}}),b}(),k=e&&b||g||i.smt_b,e=e||b;return k?(e(null,a.decodeSmtb(k)),void 0):e(Error("Smtb not found"))},d._encodeSmt_b=a.encodeSmtb,d._setLocalPath=function(b){a.isString(b)&&("/"!==b[b.length-1]&&(b+="/"),a.localPath=b)},d._setCustomVar=function(b,d,e){a.setCustomVar(x,b,d,e,c,l)},d},g=function(){var g=a({}),h=!1,i=!1,j=60,k=30*j,l=2e3,m=function(){return/^https:/.test(document.location.protocol)?"https://smt.admaster.com.cn/":"http://smt.admaster.com.cn/"}(),n=90,o=30,p=g.time(),q=p,r=q,s=0,t=null,u=0,v=0,w=null,x=!1,y=(document.getElementsByTagName("input"),document.getElementsByTagName("textarea"),"pageview,vpageview,custom,eCommerce,clickEvent,copyEvent,pageClose,addTrans,addItem,trackTrans,_setClickTimeOut,_link,_getLinkerUrl,_setAccount,_setDirectoryIndex,_setDomainName,_setCookiePath,_addOrganic,_setCustomVar".split(",")),z=function(a){var b,c,d;if(b=a.shift(),g.isFunction(w[b])){if("_setAccount"===b)i=!0;else if(i===!1)return;if("pageview"===b)h=!0;else if("_"!==b.substr(0,1)&&h===!1)return;if(d=g.time(),"pageview"!==b&&d-k>p&&(p=d,c=w.pageview(),g.request(m,c),g.localPath&&g.request(g.localPath,c)),"heartEvent"!==b&&B(),c=w[b].apply(w,a),g.isArray(c))r=d,g.setCookie("_smtt",r,864e4,w.domain,w.cookiePath),g.request(m,c),g.localPath&&g.request(g.localPath,c);else if(g.isString(c))return c}},A=function(){t=setInterval(function(){var a;if(x){if(s>o)return clearInterval(t),void 0;a=g.time(),a-r>n&&p>=a-k&&z(["heartEvent",s+=1,u,v])}},3e3)},B=function(){s=0,x=!0,r=g.time()};for(b(g),c(g),d(g),w=f(g),_smq.push=function(a){if(g.isFunction(a))a.call(this);else if(g.isArray(a)&&(g.include(y,a[0])||"_"===a[0].substr(0,1)))return z(a)};_smq.length;)_smq.push(_smq.shift());e.addEvent(document,"click",g.throttle(function(a){if("yes"===w.heatmapEnabled)try{var b=e.getEvent(a),c=e.getTarget(b),d=null;w.clickTimeout&&(d=g.findParentA(c),d&&!d.target&&d.href&&(g.isFunction(b.preventDefault)&&b.preventDefault(),b.returnValue=!1,setTimeout(function(){location.href=d.href},w.clickTimeout))),z(["clickEvent",b.clientX+g.scrollLeft(),b.clientY+g.scrollTop()])}catch(a){}},l)),e.addEvent(window,"unload",function(){var a=g.time();p>a-k&&z(["pageClose"])}),e.addEvent(window,"keypress",g.throttle(function(){B()},500)),e.addEvent(window,"scroll",g.debounce(function(){if("yes"===w.heatmapEnabled){var a=g.time();z(["pageScroll"]),q=a}},1e3)),e.addEvent(document,"mousemove",g.debounce(function(a){try{if(x){var b=e.getEvent(a);u=b.clientX,v=b.clientY,B()}}catch(a){}},200)),e.addEvent(window,"focus",function(){w.__saveCurPid(),x=!0,r=g.time()}),e.addEvent(window,"blur",function(){x=!1,r=g.time()}),A()},h=setInterval(function(){if(document.body){clearInterval(h);try{g()}catch(a){}}},30)}).call(this);