require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({6:[function(require,module,exports) {
var global = (1,eval)("this");
var e=(0,eval)("this"),t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-(\w+)\b/i,a=0,n=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function(e){switch(n.util.type(e)){case"Object":var t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=n.util.clone(e[a]));return t;case"Array":return e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){var i=(r=r||n.languages)[e];if(2==arguments.length){for(var s in a=arguments[1])a.hasOwnProperty(s)&&(i[s]=a[s]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var s in a)a.hasOwnProperty(s)&&(l[s]=a[s]);l[o]=i[o]}return n.languages.DFS(n.languages,function(t,a){a===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,t,a,r){for(var i in r=r||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r);for(var i,s=r.elements||e.querySelectorAll(r.selector),l=0;i=s[l++];)n.highlightElement(i,!0===t,r.callback)},highlightElement:function(a,r,i){for(var s,l,o=a;o&&!e.test(o.className);)o=o.parentNode;o&&(s=(o.className.match(e)||[,""])[1].toLowerCase(),l=n.languages[s]),a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,a.parentNode&&(o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s));var u={element:a,language:s,grammar:l,code:a.textContent};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(n.hooks.run("before-highlight",u),u.element.textContent=u.code,n.hooks.run("after-highlight",u)),void n.hooks.run("complete",u);if(n.hooks.run("before-highlight",u),r&&t.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(a),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,a){var i=n.tokenize(e,t);return r.stringify(n.util.encode(i),a)},matchGrammar:function(e,t,a,r,i,s,l){var o=n.Token;for(var u in a)if(a.hasOwnProperty(u)&&a[u]){if(u==l)return;var g=a[u];g="Array"===n.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var p=g[c],d=p.inside,h=!!p.lookbehind,f=!!p.greedy,m=0,y=p.alias;if(f&&!p.pattern.global){var b=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,b+"g")}p=p.pattern||p;for(var v=r,k=i;v<t.length;k+=t[v].length,++v){var w=t[v];if(t.length>e.length)return;if(!(w instanceof o)){p.lastIndex=0;var x=1;if(!(C=p.exec(w))&&f&&v!=t.length-1){if(p.lastIndex=k,!(C=p.exec(e)))break;for(var F=C.index+(h?C[1].length:0),S=C.index+C[0].length,A=v,j=k,P=t.length;A<P&&(j<S||!t[A].type&&!t[A-1].greedy);++A)F>=(j+=t[A].length)&&(++v,k=j);if(t[v]instanceof o||t[A-1].greedy)continue;x=A-v,w=e.slice(k,j),C.index-=k}if(C){h&&(m=C[1].length);S=(F=C.index+m)+(C=C[0].slice(m)).length;var C,N=w.slice(0,F),O=w.slice(S),E=[v,x];N&&(++v,k+=N.length,E.push(N));var $=new o(u,d?n.tokenize(C,d):C,y,C,f);if(E.push($),O&&E.push(O),Array.prototype.splice.apply(t,E),1!=x&&n.matchGrammar(e,t,a,v,k,!0,u),s)break}else if(s)break}}}}},tokenize:function(e,t,a){var r=[e],i=t.rest;if(i){for(var s in i)t[s]=i[s];delete t.rest}return n.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},r=n.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(r.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(a){return r.stringify(a,t,e)}).join("");var i={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var s="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}n.hooks.run("wrap",i);var l=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(l?" "+l:"")+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(n.disableWorkerMessageHandler||t.addEventListener("message",function(e){var a=JSON.parse(e.data),r=a.language,i=a.code,s=a.immediateClose;t.postMessage(n.highlight(i,n.languages[r],r)),s&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),t.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=a),void 0!==e&&(e.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.util.clone(a.languages.css),a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"}}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,r=t.getAttribute("data-src"),i=t,s=/\blang(?:uage)?-(?!\*)(\w+)\b/i;i&&!s.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(s)||[,""])[1]),!n){var l=(r.match(/\.(\w+)$/)||[,""])[1];n=e[l]||l}var o=document.createElement("code");o.className="language-"+n,t.textContent="",o.textContent="Loading…",t.appendChild(o);var u=new XMLHttpRequest;u.open("GET",r,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(o.textContent=u.responseText,a.highlightElement(o)):u.status>=400?o.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:o.textContent="✖ Error: File does not exist or is empty")},u.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight));
},{}],3:[function(require,module,exports) {

},{}],1:[function(require,module,exports) {
"use strict";require("./css/main.css"),require("./css/prism.css");const n=require("prismjs");let t=!1;const o=(o,e,r,i)=>{let d=0;const p=document.querySelector("#code"),s=document.querySelector("#styleTag");setTimeout(function a(){d+=1,t||(d<=e.length?(s.innerHTML=o+e.substring(0,d),p.innerHTML=n.highlight(o+e.substring(0,d),n.languages.css),p.scrollTop=p.scrollHeight,setTimeout(a,r)):i&&i())},r)};var e="/*\n    加个动画看看笨熊形成的过程\n*/\n* {\n  transition: all 1s;\n}\n\n.head {\n    position: relative;\n    width: 160px;\n    height: 160px;\n    border: 1px solid #000;\n    background: #000;\n    border-radius: 50%;\n  }\n\n  .head::before {\n    content: '';\n    position: absolute;\n    width: 18px;\n    height: 18px;\n    border: 5px solid #000;\n    border-radius: 50%;\n    top: 4%;\n  }\n\n  .head::after {\n    content: '';\n    position: absolute;\n    width: 18px;\n    height: 18px;\n    border: 5px solid #000;\n    border-radius: 50%;\n    top: 4%;\n    right: 0;\n  }\n\n  .eye {\n    position: absolute;\n    width: 28px;\n    height: 28px;\n    background: #fff;\n    border: 1px solid #000;\n    border-radius: 50%;\n  }\n\n  .eye.left {\n    right: 92px;\n    top: 29%;\n  }\n\n  .eye.left::after {\n    content: \"\";\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    border-top: 3px solid #fff;\n    border-radius: 15px 15px 0 0;\n    top: -80%;\n    left: 8px;\n  }\n\n  .eye.left .a {\n    position: absolute;\n    width: 9px;\n    height: 9px;\n    border: 3px solid #000;\n    border-top-left-radius: 9px;\n    border-right: none;\n    border-bottom: none;\n    background: transparent;\n    z-index: 2;\n    transform: rotate(90deg);\n    top: 8px;\n    left: 9px;\n  }\n\n  .eye.left .a::before {\n    content: '';\n    position: absolute;\n    width: 9px;\n    border: 3px solid #000;\n    border-right: none;\n    border-bottom: none;\n    background: transparent;\n    z-index: 2;\n    transform: rotate(90deg);\n    top: 4px;\n    left: -2px;\n  }\n\n  .eye.right {\n    right: 14px;\n    top: 28%;\n  }\n\n  .eye.right::before {\n    content: \"\";\n    position: absolute;\n    width: 4px;\n    height: 8px;\n    border-radius: 40%;\n    top: 14%;\n    right: 10px;\n    background: #000;\n  }\n\n  .eye.right::after {\n    content: \"\";\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    border-top: 3px solid #fff;\n    border-radius: 15px 15px 0 0;\n    top: -65%;\n  }\n\n  .face::after {\n    content: '';\n    position: absolute;\n    width: 35px;\n    height: 35px;\n    background: #D44327;\n    border-radius: 50%;\n    top: 45%;\n    left: 12px;\n  }\n\n  .face::before {\n    content: '';\n    position: absolute;\n    width: 28px;\n    height: 32px;\n    background: #D44327;\n    border-radius: 50%;\n    top: 45%;\n    right: -11px;\n    transform: rotate(-18deg);\n    z-index: 2;\n  }\n\n  .mouse {\n    position: relative;\n    border: 1px solid #000;\n    height: 60px;\n    width: 80px;\n    border-radius: 50%;\n    top: 45%;\n    left: 58px;\n    background: #fff;\n  }\n  .nose {\n    position: absolute;\n    width: 18px;\n    height: 18px;\n    top: 78px;\n    left: 100px;\n    background: #000;\n    z-index: 1;\n    border-radius: 40% 100% 40% 70%;\n    transform: rotate(-45deg);\n  }\n  .mouse::before {\n    position: absolute;\n    content: '';\n    height: 20px;\n    width: 55px;\n    border: 3px solid black;\n    background: transparent;\n    border-bottom-left-radius: 50px 25px;\n    border-top: none;\n    border-right: none;\n    z-index: 1;\n    top: 24px;\n    left: 7px;\n    transform: rotate(-3deg)\n  }\n\n  .mouse .b {\n    position: absolute;\n    content: '';\n    width: 12px;\n    height: 16px;\n    background: #C34F3F;\n    border: 3px solid #000;\n    border-radius: 8px;\n    transform: rotate(40deg);\n    top: 30px;\n    left: -4px;\n    border-top: none;\n  }\n\n  .mouse .b::after {\n    content: '';\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    border: 2px solid #000;\n    border-top-left-radius: 40px;\n    border-right: none;\n    border-bottom: none;\n    transform: scaleX(-1) rotate(330deg)\n  }\n\n  .body {\n    position: relative;\n    height: 200px;\n    width: 160px;\n    background: #000;\n    border: 1px solid #000;\n    transform: rotate(18deg);\n    border-top-right-radius: 40px 40px;\n    left: -30px;\n    top: -30px;\n  }\n\n  .body .hand.left {\n    position: absolute;\n    width: 55px;\n    height: 170px;\n    background: #000;\n    top: -45%;\n    left: -28%;\n    border-top: 2px solid #fff;\n    border-right: 2px solid #fff;\n    transform: rotate(-18deg);\n    border-top-left-radius: 40px 70px;\n    border-top-right-radius: 17px 20px;\n    border-bottom-left-radius: 30px 60px;\n  }\n\n  .body .hand.left::before {\n    position: absolute;\n    width: 50px;\n    height: 100px;\n    background: #000;\n    content: '';\n    border-radius: 50%;\n    top: 60%;\n    left: 52%;\n  }\n\n  .d::after {\n    content: '';\n    position: absolute;\n    border: 1px solid #000;\n    width: 100px;\n    height: 100px;\n    background: #000;\n    border-radius: 50%;\n    transform: rotate(18deg);\n    z-index: -1;\n    right: -8px;\n    top: 28%;\n  }\n\n  .d::before {\n    content: '';\n    position: absolute;\n    border: 1px solid #000;\n    width: 100px;\n    height: 100px;\n    background: #000;\n    transform: rotate(26deg);\n    z-index: -1;\n    right: 6px;\n    top: 40%;\n  }\n\n  .hand.right::before {\n    content: '';\n    position: absolute;\n    width: 20px;\n    height: 200px;\n    background: #000;\n    right: -20px;\n    top: -30px;\n    transform: rotate(-18deg);\n    border-bottom-right-radius: 20px 40px;\n    border-bottom-left-radius: 20px 40px;\n  }\n";o("",e,0,()=>{});const r=document.querySelector("button"),i=document.querySelector("#styleTag"),d=document.querySelector("#code");r.addEventListener("click",()=>{t=!0,i.innerHTML=e,d.innerHTML=n.highlight(e,n.languages.css)});
},{"prismjs":6,"./css/main.css":3,"./css/prism.css":3}]},{},[1])