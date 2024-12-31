
execute(['://steamcommunity.com/.*?/.*?/inventory/*','://steamcommunity.com/market*','://steamcommunity.com/tradeoffer*'], function() {
(function () {
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*! jQuery UI - v1.12.1 - 2016-09-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(m.inline?m.dpDiv.parent()[0]:m.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var h=0,l=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},h=e.split(".")[0];e=e.split(".")[1];var l=h+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[h]=t[h]||{},n=t[h][e],o=t[h][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:h,widgetName:e,widgetFullName:l}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=l.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=l.call(arguments,1),r=this;return o?this.length||"instance"!==n?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):r=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+o.eventNamespace,c=h[2];c?n.on(l,c,r):i.on(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,h=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):h.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=h.test(i[1])?i[1]:"center",t=l.exec(i[0]),e=l.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,h=t(this),l=h.outerWidth(),c=h.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=l+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),I=e(k.my,h.outerWidth(),h.outerHeight());"right"===n.my[0]?D.left-=l:"center"===n.my[0]&&(D.left-=l/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=I[0],D.top+=I[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:l,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+I[0],u[1]+I[1]],my:n.my,at:n.at,within:b,elem:h})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-l,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:h,left:D.left,top:D.top,width:l,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};l>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),h.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-r-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-r-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}});var c="ui-effects-",u="ui-effects-style",d="ui-effects-animated",p=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(p),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&&(a[s]=o));return a}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(p.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){n[e]&&a[e+"Class"](n[e])})},o(),l=l.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}function s(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(d)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,e){for(var i=0,s=e.length;s>i;i++)null!==e[i]&&t.data(c+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;n>s;s++)null!==e[s]&&(i=t.data(c+e[s]),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(u,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(u)||"",t.removeData(u)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(e){var i,s=e.css("position"),n=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(s)&&(s="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(c+"placeholder",i)),e.css({position:s,left:n.left,top:n.top}),i},removePlaceholder:function(t){var e=c+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(d),t.effects.cleanUp(r),"hide"===s.mode&&r.hide(),a()}function a(){t.isFunction(h)&&h.call(r[0]),t.isFunction(e)&&e()}var r=t(this);s.mode=c.shift(),t.uiBackCompat===!1||o?"none"===s.mode?(r[l](),a()):n.call(r[0],s,i):(r.is(":hidden")?"hide"===l:"show"===l)?(r[l](),a()):n.call(r[0],s,a)}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],o=n.mode,a=s.queue,r=a||"fx",h=s.complete,l=s.mode,c=[],u=function(e){var i=t(this),s=t.effects.mode(i,l)||o;i.data(d,!0),c.push(s),o&&("show"===s||s===o&&"hide"===s)&&i.show(),o&&"none"===s||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!n?l?this[l](s.duration,h):this.each(function(){h&&h.call(this)}):a===!1?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n)
}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();var f=t.effects;t.effects.define("blind","hide",function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),o=e.direction||"up",a=n.cssClip(),r={clip:t.extend({},a)},h=t.effects.createPlaceholder(n);r.clip[s[o][0]]=r.clip[s[o][1]],"show"===e.mode&&(n.cssClip(r.clip),h&&h.css(t.effects.clipToBox(r)),r.clip=a),h&&h.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var s,n,o,a=t(this),r=e.mode,h="hide"===r,l="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,p=2*d+(l||h?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,v=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),u||(u=a["top"===m?"outerHeight":"outerWidth"]()/3),l&&(n={opacity:1},n[m]=o,a.css("opacity",0).css(m,_?2*-u:2*u).animate(n,f,g)),h&&(u/=Math.pow(2,d-1)),n={},n[m]=o;d>v;v++)s={},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g).animate(n,f,g),u=h?2*u:u/2;h&&(s={opacity:0},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)}),t.effects.define("clip","hide",function(e,i){var s,n={},o=t(this),a=e.direction||"vertical",r="both"===a,h=r||"horizontal"===a,l=r||"vertical"===a;s=o.cssClip(),n.clip={top:l?(s.bottom-s.top)/2:s.top,right:h?(s.right-s.left)/2:s.right,bottom:l?(s.bottom-s.top)/2:s.bottom,left:h?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(n.clip),n.clip=s),o.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var s,n=t(this),o=e.mode,a="show"===o,r=e.direction||"left",h="up"===r||"down"===r?"top":"left",l="up"===r||"left"===r?"-=":"+=",c="+="===l?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0)/2,u[h]=l+s,a&&(n.css(u),u[h]=c+s,u.opacity=1),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*v,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*_,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*_,top:-o*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:_,height:v,left:r+(g?l*_:0),top:h+(g?c*v:0),opacity:g?0:1}).animate({left:r+(g?0:l*_),top:h+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing,s)}),t.effects.define("fade","toggle",function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=e.size||15,h=/([0-9]+)%/.exec(r),l=!!e.horizFirst,c=l?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],_=s.queue().length;h&&(r=parseInt(h[1],10)/100*m[a?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,o&&(s.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),s.queue(function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()}).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4)}),t.effects.define("highlight","show",function(e,i){var s=t(this),n={backgroundColor:s.css("backgroundColor")};"hide"===e.mode&&(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var s,n,o,a=t(this),r=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],l=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),g=a.position(),m=t.effects.scaledDimensions(a),_=e.from||m,v=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===c&&(o=_,_=v,v=o),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},("box"===d||"both"===d)&&(n.from.y!==n.to.y&&(_=t.effects.setTransition(a,h,n.from.y,_),v=t.effects.setTransition(a,h,n.to.y,v)),n.from.x!==n.to.x&&(_=t.effects.setTransition(a,l,n.from.x,_),v=t.effects.setTransition(a,l,n.to.x,v))),("content"===d||"both"===d)&&n.from.y!==n.to.y&&(_=t.effects.setTransition(a,r,n.from.y,_),v=t.effects.setTransition(a,r,n.to.y,v)),p&&(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),a.css(_),("content"===d||"both"===d)&&(h=h.concat(["marginTop","marginBottom"]).concat(r),l=l.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var i=t(this),s=t.effects.scaledDimensions(i),o={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},a={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&&(o=t.effects.setTransition(i,h,n.from.y,o),a=t.effects.setTransition(i,h,n.to.y,a)),n.from.x!==n.to.x&&(o=t.effects.setTransition(i,l,n.from.x,o),a=t.effects.setTransition(i,l,n.to.x,a)),u&&t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(){u&&t.effects.restoreStyle(i)})})),a.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===v.opacity&&a.css("opacity",_.opacity),u||(a.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(a)),i()}})}),t.effects.define("scale",function(e,i){var s=t(this),n=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==n?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)}),t.effects.define("puff","hide",function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i)}),t.effects.define("pulsate","show",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=o||a,h=2*(e.times||5)+(r?1:0),l=e.duration/h,c=0,u=1,d=s.queue().length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),c=1);h>u;u++)s.animate({opacity:c},l,e.easing),c=1-c;s.animate({opacity:c},l,e.easing),s.queue(i),t.effects.unshift(s,d,h+1)}),t.effects.define("shake",function(e,i){var s=1,n=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,h=2*r+1,l=Math.round(e.duration/h),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,n.animate(d,l,e.easing);r>s;s++)n.animate(p,l,e.easing).animate(f,l,e.easing);n.animate(p,l,e.easing).animate(d,l/2,e.easing).queue(i),t.effects.unshift(n,g,h+1)}),t.effects.define("slide","show",function(e,i){var s,n,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u=e.distance||o["top"===l?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),s=o.cssClip(),n=o.position()[l],d[l]=(c?-1:1)*u+n,d.clip=o.cssClip(),d.clip[a[h][1]]=d.clip[a[h][0]],"show"===r&&(o.cssClip(d.clip),o.css(l,d[l]),d.clip=s,d[l]=n),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});var f;t.uiBackCompat!==!1&&(f=t.effects.define("transfer",function(e,i){t(this).transfer(e,i)})),t.ui.focusable=function(i,s){var n,o,a,r,h,l=i.nodeName.toLowerCase();return"area"===l?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(l)?(r=!i.disabled,r&&(h=t(i).closest("fieldset")[0],h&&(r=!h.disabled))):r="a"===l?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],h=r&&n.collapsible,l=h?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:h?t():a,newPanel:l};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=h?!1:this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,o,a=this,r=0,h=t.css("box-sizing"),l=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=l&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,h=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=h.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=h.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;
this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var g=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(s,n){var o,a={};return n?"controlgroupLabel"===s?(o=e.element.find(n),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(o.get()),void 0):(t.fn[s]&&(a=e["_"+s+"Options"]?e["_"+s+"Options"]("middle"):{classes:{}},e.element.find(n).each(function(){var n=t(this),o=n[s]("instance"),r=t.widget.extend({},a);if("button"!==s||!n.parent(".ui-spinner").length){o||(o=n[s]()[s]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),n[s](r);var h=n[s]("widget");t.data(h[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(h[0])}})),void 0):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={};return t.each(e,function(n){var o=i.options.classes[n]||"";o=t.trim(o.replace(g,"")),s[n]=(o+" "+e[n]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var o=i["_"+n.widgetName+"Options"](1===e.length?"only":s);o.classes=i._resolveClassesValues(o.classes,n),n.element[n.widgetName](o)}else i._updateCornerClass(e[s](),s)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,o="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var m;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var r,h,l,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+c,l/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),m===n&&(m=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,r,h,l=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):l?"all"===i?t.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),a(l.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,r)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,o,r,h,l,c;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(e,[e,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),h={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),h=t.datepicker._checkOffset(s,h,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),s.inline||(l=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[l]?s.dpDiv.show(l,t.datepicker._get(s,"showOptions"),c):s.dpDiv[l||"show"](l?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))
}},_updateDatepicker:function(e){this.maxRows=4,m=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(h).match(o);if(!a)throw"Missing number at position "+h;return h+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],h+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+h},x=function(){if(i.charAt(h)!==e.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>h&&(a=i.substr(h),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,I,T,P,M,S,H,z,O,A,N,W,E,F,L,R=new Date,B=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),$=this._get(t,"stepMonths"),X=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-U[0]*U[1]+1,J.getDate())),e=Q&&Q>e?Q:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-$,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+$,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:B,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",T="",X){if(T+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:T+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case U[1]-1:T+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:T+=" ui-datepicker-group-middle",I=""}T+="'>"}for(T+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===k?Y?o:s:"")+(/all|right/.test(I)&&0===k?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,Q,J,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",P=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,P+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(T+=P+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),H=(this._getFirstDayOfMonth(te,Z)-c+7)%7,z=Math.ceil((H+S)/7),O=X?this.maxRows>z?this.maxRows:z:z,this.maxRows=O,A=this._daylightSavingAdjust(new Date(te,Z,1-H)),N=0;O>N;N++){for(T+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(A)+"</td>":"",w=0;7>w;w++)E=m?m.apply(t.input?t.input[0]:null,[A]):[!0,""],F=A.getMonth()!==Z,L=F&&!v||!E[0]||Q&&Q>A||J&&A>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(A.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===A.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+E[1]+(A.getTime()===G.getTime()?" "+this._currentClass:"")+(A.getTime()===B.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!E[2]?"":" title='"+E[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+A.getMonth()+"' data-year='"+A.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+A.getDate()+"</span>":"<a class='ui-state-default"+(A.getTime()===B.getTime()?" ui-state-highlight":"")+(A.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+A.getDate()+"</a>")+"</td>",A.setDate(A.getDate()+1),A=this._daylightSavingAdjust(A);T+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),T+="</tbody></table>"+(X?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=T}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new s,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var _=!1;t(document).on("mouseup",function(){_=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!_){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),_=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,_=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),h=t.pageX,l=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(h=this.originalPageX),"x"===a.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,h,l,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)h=s.snapElements[d].left-s.margins.left,l=h+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,h-g>_||m>l+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(h-_),r=g>=Math.abs(l-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(h-m),r=g>=Math.abs(l-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,h=this._change[o];return this._updatePrevProperties(),h?(i=h.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,h=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,h=this.originalPosition.top+this.originalSize.height,l=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&l&&(t.left=r-e.minWidth),s&&l&&(t.left=r-e.maxWidth),a&&c&&(t.top=h-e.minHeight),n&&c&&(t.top=h-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,h=t(this).resizable("instance"),l=h.options,c=h.element,u=l.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(h.containerElement=t(d),/document/.test(u)||u===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=h._num(e.css("padding"+s))}),h.containerOffset=e.offset(),h.containerPosition=e.position(),h.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,o=h.containerSize.width,a=h._hasScroll(d,"left")?d.scrollWidth:o,r=h._hasScroll(d)?d.scrollHeight:n,h.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?h.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-h.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-h.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,c=h[1]||1,u=Math.round((n.width-o.width)/l)*l,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=h,_&&(p+=l),v&&(f+=c),g&&(p-=l),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-l)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-l>0?(i.size.width=p,i.position.left=a.left-u):(p=l-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog
},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus")}),e.preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,o={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,delete s.icons,"boolean"==typeof s.text&&delete s.text,t("<button></button>",s).button(o).appendTo(e.uiButtonSet).on("click",function(){n.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),h=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,i){var s,n,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=o.is(":data(ui-draggable)"),s&&!i&&o.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=o.is(":data(ui-resizable)"),n&&!i&&o.resizable("destroy"),n&&"string"==typeof i&&o.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&v(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var v=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,h=a+e.helperProportions.height,l=i.offset.left,c=i.offset.top,u=l+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return o>=l&&u>=r&&a>=c&&d>=h;case"intersect":return o+e.helperProportions.width/2>l&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>h-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,l,i.proportions().width);case"touch":return(a>=c&&d>=a||h>=c&&d>=h||c>a&&h>d)&&(o>=l&&u>=o||r>=l&&u>=r||l>o&&r>u);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&v(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=v(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n}),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),void 0)},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1,c={};i&&i.element!==s.element[0]&&(c.left=i.left+s.elementPos.left,c.right=i.right+s.elementPos.left,c.top=i.top+s.elementPos.top,c.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?l=!(c.left>r||o>c.right||c.top>h||a>c.bottom):"fit"===n.tolerance&&(l=c.left>o&&r>c.right&&c.top>a&&h>c.bottom),l?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,s=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(s).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var s=this,n="";t.each(i,function(i,o){var a;o.optgroup!==n&&(a=t("<li>",{text:o.optgroup}),s._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),n=o.optgroup),s._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var s=t("<li>"),n=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.append(n).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return t===!1?(this.button.css("width",""),void 0):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t),void 0)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,s=[];e.each(function(e,n){s.push(i._parseOption(t(n),e))}),this.items=s},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,o,a,r,h,l,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[a],l=!1,e[u]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(e[u]-h)&&(n=Math.abs(e[u]-h),o=this.items[s],this.direction=l?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;
this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);null!=n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,s,n;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i)),void 0):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(s=this.buttons.first().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this._addClass(s,null,e.up),n=this.buttons.last().find(".ui-icon"),this._removeClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this._super(t,e),void 0)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(r(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.uiBackCompat!==!1&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,s;i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return e.hash.length>1&&i===s}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e),void 0)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,s){var n,o,a,r=t(s).uniqueId().attr("id"),h=t(s).closest("li"),l=h.attr("aria-controls");e._isLocal(s)?(n=s.hash,a=n.substring(1),o=e.element.find(e._sanitizeSelector(n))):(a=h.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+a,o=e.element.find(n),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,s,n;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),e===!0||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find(".ui-tabs-anchor"),a=this._getPanelForTab(n),r={tab:n,panel:a},h=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,n){setTimeout(function(){a.html(t),s._trigger("load",i,r),h(n,e)},1)}).fail(function(t,e){setTimeout(function(){h(t,e)},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.uiBackCompat!==!1&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs,t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var s=this;this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e.element)})},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s.element[0],e.close(n,!0)}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var e=t(this);return e.is("[title]")?e.data("ui-tooltip-title",e.attr("title")).removeAttr("title"):void 0}))},_enable:function(){this.disabledTitles.each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))}),this.disabledTitles=t([])},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._registerCloseHandlers(e,s),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s||s.nodeType||s.jquery?this._open(e,t,s):(i=s.call(t[0],function(i){n._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=o),this._open(e,t,i))})}),i&&this._open(e,t,i),void 0)},_open:function(e,i,s){function n(t){l.of=t,a.is(":hidden")||a.position(l)}var o,a,r,h,l=t.extend({},this.options.position);if(s){if(o=this._find(i))return o.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),o=this._tooltip(i),a=o.tooltip,this._addDescribedBy(i,a.attr("id")),a.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),h=t("<div>").html(a.find(".ui-tooltip-content").html()),h.removeAttr("name").find("[name]").removeAttr("name"),h.removeAttr("id").find("[id]").removeAttr("id"),h.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:n}),n(e)):a.position(t.extend({of:i},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(r=this.delayedShow=setInterval(function(){a.is(":visible")&&(n(l.of),clearInterval(r))},t.fx.interval)),this._trigger("open",e,{tooltip:a})}},_registerCloseHandlers:function(e,i){var s={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var s=t.Event(e);s.currentTarget=i[0],this.close(s,!0)}}};i[0]!==this.element[0]&&(s.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(s.mouseleave="close"),e&&"focusin"!==e.type||(s.focusout="close"),this._on(!0,i,s)},close:function(e){var i,s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);return o?(i=o.tooltip,o.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),o.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),o.closing=!0,this._trigger("close",e,{tooltip:i}),o.hiding||(o.closing=!1)),void 0):(n.removeData("ui-tooltip-open"),void 0)},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),s=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(s,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur"),o=s.element;n.target=n.currentTarget=o[0],e.close(n,!0),t("#"+i).remove(),o.data("ui-tooltip-title")&&(o.attr("title")||o.attr("title",o.data("ui-tooltip-title")),o.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}}),t.uiBackCompat!==!1&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip});
(function($) {
	$.Observe = {};
}(jQuery));

(function($, ns) {
	var get = function(origin, target) {
		if(!target) {
			target = origin;
			origin = window.document;
		}

		var result = [];

		$(target).each(function() {
			var selector = [];
			var prev = $(this);

			for(var current = prev.parent(); current.length && !prev.is(origin); current = current.parent()) {
				var tag = prev.get(0).tagName.toLowerCase();

				selector.push(tag + ':eq(' + current.children(tag).index(prev) + ')');

				prev = current;
			}

			if(!current.length && !prev.is(origin)) {
				return;
			}

			result.push('> ' + selector.reverse().join(' > '));
		});

		return result.join(', ');
	};

	var capture = function(origin, target) {
		if(!target) {
			target = origin;
			origin = window.document;
		}

		var result = [];

		$(target).each(function() {
			var textIndex = -1;
			var realTarget = this;

			if(this instanceof Text) {
				realTarget = this.parentNode;
				var children = realTarget.childNodes;

				for(var i = 0; i < children.length; i++) {
					if(children[i] === this) {
						textIndex = i;
						break;
					}
				}
			}

			var path = get(origin, realTarget);
			var same = $(origin).is(realTarget);

			result.push(function(origin) {
				var target = same ? origin : $(origin).find(path);
				return textIndex === -1 ? target : target.contents()[textIndex];
			});
		});

		return function(origin) {
			origin = origin || window.document;

			return result.reduce(function(acc, fn) {
				return acc.add(fn(origin));
			}, $([]));
		};
	};

	ns.path = {
		get: get,
		capture: capture
	};
}(jQuery, jQuery.Observe));

(function($, ns) {
	var Branch = function(root) {
		this.original = $(root);
		this.root = this.original.clone(false, true);
	};

	Branch.prototype.find = function(selector) {
		var path = ns.path.capture(this.original, selector);
		return path(this.root);
	};

	ns.Branch = Branch;
}(jQuery, jQuery.Observe));

(function($, ns) {
	var toObject = function(array, fn) {
		var result = {};

		array.forEach(function(name) {
			var pair = fn(name);

			if(pair) {
				result[pair[0]] = pair[1];
			}
		});

		return result;
	};

	var OBSERVER_OPTIONS = toObject([
		'childList',
		'attributes',
		'characterData',
		'subtree',
		'attributeOldValue',
		'characterDataOldValue',
		'attributeFilter'
	], function(name) {
		return [name.toLowerCase(), name];
	});
	var ALL = toObject(Object.keys(OBSERVER_OPTIONS), function(name) {
		if(name !== 'attributefilter') {
			return [OBSERVER_OPTIONS[name], true];
		}
	});
	var EXTENDED_OPTIONS = toObject([
		'added',
		'removed'
	], function(name) {
		return [name.toLowerCase(), name];
	});

	var EMPTY = $([]);

	var parseOptions = function(options) {
		if(typeof options === 'object') {
			return options;
		}

		options = options.split(/\s+/);

		var result = {};

		options.forEach(function(opt) {
			opt = opt.toLowerCase();

			if(!OBSERVER_OPTIONS[opt] && !EXTENDED_OPTIONS[opt]) {
				throw new Error('Unknown option ' + opt);
			}

			result[OBSERVER_OPTIONS[opt] || EXTENDED_OPTIONS[opt]] = true;
		});

		return result;
	};

	var objectToString = function(obj) {
		return '[' + Object.keys(obj).sort().reduce(function(acc, key) {
			var valueStr = (obj[key] && typeof obj[key] === 'object') ? objectToString(obj[key]) : obj[key];

			return acc + '[' + JSON.stringify(key) + ':' + valueStr + ']';
		}, '') + ']';
	};

	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

	var Pattern = function(target, options, selector, handler) {
		this._originalOptions = $.extend({}, options);
		options = $.extend({}, options);

		this.attributeFilter = options.attributeFilter;

		delete options.attributeFilter;

		if(selector) {
			options.subtree = true;
		}
		if(options.childList) {
			options.added = true;
			options.removed = true;
		}
		if(options.added || options.removed) {
			options.childList = true;
		}

		this.target = $(target);
		this.options = options;
		this.selector = selector;
		this.handler = handler;
	};
	Pattern.prototype.is = function(options, selector, handler) {
		return objectToString(this._originalOptions) === objectToString(options) &&
			this.selector === selector &&
			this.handler === handler;
	};
	Pattern.prototype.match = function(record) {
		var self = this;
		var options = this.options;
		var type = record.type;

		if(!this.options[type]) {
			return EMPTY;
		}

		if(this.selector) {
			switch(type) {
			case 'attributes':
				if(!this._matchAttributeFilter(record)) {
					break;
				}
			case 'characterData':
				return this._matchAttributesAndCharacterData(record);
			case 'childList':
				if(record.addedNodes && record.addedNodes.length && options.added) {
					var result = this._matchAddedNodes(record);

					if(result.length) {
						return result;
					}
				}
				if(record.removedNodes && record.removedNodes.length && options.removed) {
					return this._matchRemovedNodes(record);
				}
			}
		} else {
			var recordTarget = record.target instanceof Text ?
				$(record.target).parent() : $(record.target);

			if(!options.subtree && recordTarget.get(0) !== this.target.get(0)) {
				return EMPTY;
			}

			switch(type) {
			case 'attributes':
				if(!this._matchAttributeFilter(record)) {
					break;
				}
			case 'characterData':
				return this.target;
			case 'childList':
				if((record.addedNodes && record.addedNodes.length && options.added) ||
					(record.removedNodes && record.removedNodes.length && options.removed)) {

					return this.target;
				}
			}
		}

		return EMPTY;
	};
	Pattern.prototype._matchAttributesAndCharacterData = function(record) {
		return this._matchSelector(this.target, [record.target]);
	};
	Pattern.prototype._matchAddedNodes = function(record) {
		return this._matchSelector(this.target, record.addedNodes);
	};
	Pattern.prototype._matchRemovedNodes = function(record) {
		var branch = new ns.Branch(this.target);
		var nodes = Array.prototype.slice.call(record.removedNodes).map(function(node) {
			return node.cloneNode(true);
		});

		if(record.previousSibling) {
			branch.find(record.previousSibling).after(nodes);
		} else if(record.nextSibling) {
			branch.find(record.nextSibling).before(nodes);
		} else {
			branch.find(record.target).empty().append(nodes);
		}

		return this._matchSelector(branch.root, nodes).length ? $(record.target) : EMPTY;
	};
	Pattern.prototype._matchSelector = function(origin, element) {
		var match = origin.find(this.selector);
		element = Array.prototype.slice.call(element);

		match = match.filter(function() {
			var self = this;

			return element.some(function(node) {
				if(node instanceof Text) return node.parentNode === self;
				else return node === self || $(node).has(self).length;
			});
		});

		return match;
	};
	Pattern.prototype._matchAttributeFilter = function(record) {
		if(this.attributeFilter && this.attributeFilter.length) {
			return this.attributeFilter.indexOf(record.attributeName) >= 0;
		}

		return true;
	};

	var Observer = function(target) {
		this.patterns = [];

		this._target = target;
		this._observer = null;
	};
	Observer.prototype.observe = function(options, selector, handler) {
		var self = this;

		if(!this._observer) {
			this._observer = new MutationObserver(function(records) {
				records.forEach(function(record) {
					self.patterns.forEach(function(pattern) {
						var match = pattern.match(record);

						if(match.length) {
							match.each(function() {
								pattern.handler.call(this, record);
							});
						}
					});
				});
			});
		} else {
			this._observer.disconnect();
		}

		this.patterns.push(new Pattern(this._target, options, selector, handler));
		this._observer.observe(this._target, this._collapseOptions());
	};
	Observer.prototype.disconnect = function(options, selector, handler) {
		var self = this;

		if(this._observer) {
			this.patterns.filter(function(pattern) {
				return pattern.is(options, selector, handler);
			}).forEach(function(pattern) {
				var index = self.patterns.indexOf(pattern);

				self.patterns.splice(index, 1);
			});

			if(!this.patterns.length) {
				this._observer.disconnect();
			}
		}
	};
	Observer.prototype.disconnectAll = function() {
		if(this._observer) {
			this.patterns = [];
			this._observer.disconnect();
		}
	};
	Observer.prototype.pause = function() {
		if(this._observer) {
			this._observer.disconnect();
		}
	};
	Observer.prototype.resume = function() {
		if(this._observer) {
			this._observer.observe(this._target, this._collapseOptions());
		}
	};
	Observer.prototype._collapseOptions = function() {
		var result = {};

		this.patterns.forEach(function(pattern) {
			var restrictiveFilter = result.attributes && result.attributeFilter;

			if((restrictiveFilter || !result.attributes) && pattern.attributeFilter) {
				var attributeFilter = (result.attributeFilter || []).concat(pattern.attributeFilter);
				var existing = {};
				var unique = [];

				attributeFilter.forEach(function(attr) {
					if(!existing[attr]) {
						unique.push(attr);
						existing[attr] = 1;
					}
				});

				result.attributeFilter = unique;
			} else if(restrictiveFilter && pattern.options.attributes && !pattern.attributeFilter) {
				delete result.attributeFilter;
			}

			$.extend(result, pattern.options);
		});

		Object.keys(EXTENDED_OPTIONS).forEach(function(name) {
			delete result[EXTENDED_OPTIONS[name]];
		});

		return result;
	};

	var DOMEventObserver = function(target) {
		this.patterns = [];

		this._paused = false;
		this._target = target;
		this._events = {};
		this._handler = this._handler.bind(this);
	};
	DOMEventObserver.prototype.NS = '.jQueryObserve';
	DOMEventObserver.prototype.observe = function(options, selector, handler) {
		var pattern = new Pattern(this._target, options, selector, handler);
		var target = $(this._target);

		if(pattern.options.childList) {
			this._addEvent('DOMNodeInserted');
			this._addEvent('DOMNodeRemoved');
		}
		if(pattern.options.attributes) {
			this._addEvent('DOMAttrModified');
		}
		if(pattern.options.characterData) {
			this._addEvent('DOMCharacerDataModified');
		}

		this.patterns.push(pattern);
	};
	DOMEventObserver.prototype.disconnect = function(options, selector, handler) {
		var target = $(this._target);
		var self = this;

		this.patterns.filter(function(pattern) {
			return pattern.is(options, selector, handler);
		}).forEach(function(pattern) {
			var index = self.patterns.indexOf(pattern);

			self.patterns.splice(index, 1);
		});

		var eventsInUse = this.patterns.reduce(function(acc, pattern) {
			if(pattern.options.childList) {
				acc.DOMNodeInserted = true;
				acc.DOMNodeRemoved = true;
			}
			if(pattern.options.attributes) {
				acc.DOMAttrModified = true;
			}
			if(pattern.options.characterData) {
				acc.DOMCharacerDataModified = true;
			}

			return acc;
		}, {});

		Object.keys(this._events).forEach(function(type) {
			if(eventsInUse[type]) {
				return;
			}

			delete self._events[type];

			target.off(type + self.NS, self._handler);
		});
	};
	DOMEventObserver.prototype.disconnectAll = function() {
		var target = $(this._target);

		for(var name in this._events) {
			target.off(name + this.NS, this._handler);
		}

		this._events = {};
		this.patterns = [];
	};
	DOMEventObserver.prototype.pause = function() {
		this._paused = true;
	};
	DOMEventObserver.prototype.resume = function() {
		this._paused = false;
	};
	DOMEventObserver.prototype._handler = function(e) {
		if(this._paused) {
			return;
		}

		var record = {
			type: null,
			target: null,
			addedNodes: null,
			removedNodes: null,
			previousSibling: null,
			nextSibling: null,
			attributeName: null,
			attributeNamespace: null,
			oldValue: null
		};

		switch(e.type) {
		case 'DOMAttrModified':
			record.type = 'attributes';
			record.target = e.target;
			record.attributeName = e.attrName;
			record.oldValue = e.prevValue;

			break;
		case 'DOMCharacerDataModified':
			record.type = 'characterData';
			record.target = $(e.target).parent().get(0);
			record.attributeName = e.attrName;
			record.oldValue = e.prevValue;

			break;
		case 'DOMNodeInserted':
			record.type = 'childList';
			record.target = e.relatedNode;
			record.addedNodes = [e.target];
			record.removedNodes = [];

			break;
		case 'DOMNodeRemoved':
			record.type = 'childList';
			record.target = e.relatedNode;
			record.addedNodes = [];
			record.removedNodes = [e.target];

			break;
		}

		for(var i = 0; i < this.patterns.length; i++) {
			var pattern = this.patterns[i];
			var match = pattern.match(record);

			if(match.length) {
				match.each(function() {
					pattern.handler.call(this, record);
				});
			}
		}
	};
	DOMEventObserver.prototype._addEvent = function(type) {
		if(!this._events[type]) {
			$(this._target).on(type + this.NS, this._handler);
			this._events[type] = true;
		}
	};

	ns.Pattern = Pattern;
	ns.MutationObserver = Observer;
	ns.DOMEventObserver = DOMEventObserver;

	$.fn.observe = function(options, selector, handler) {
		if(!selector) {
			handler = options;
			options = ALL;
		} else if(!handler) {
			handler = selector;
			selector = null;
		}

		return this.each(function() {
			var self = $(this);
			var observer = self.data('observer');

			if(!observer) {
				if(MutationObserver) {
					observer = new Observer(this);
				} else {
					observer = new DOMEventObserver(this);
				}

				self.data('observer', observer);
			}

			options = parseOptions(options);

			observer.observe(options, selector, handler);
		});
	};
	$.fn.disconnect = function(options, selector, handler) {
		if(!options) {
			// No arguments
		}
		else if(!selector) {
			handler = options;
			options = ALL;
		} else if(!handler) {
			handler = selector;
			selector = null;
		}

		return this.each(function() {
			var self = $(this);
			var observer = self.data('observer');

			if(!observer) {
				return;
			}

			if(!options) {
				observer.disconnectAll();
				self.removeData('observer');

				return;
			}

			options = parseOptions(options);

			observer.disconnect(options, selector, handler);
		});
	};
}(jQuery, jQuery.Observe));

/*
 * pagination.js 2.1.2
 * A jQuery plugin to provide simple yet fully customisable pagination
 * https://github.com/superRaytin/paginationjs

 * Homepage: http://pagination.js.org
 *
 * Copyright 2014-2100, superRaytin
 * Released under the MIT license.
*/
!function(a,b){function c(a){throw new Error("Pagination: "+a)}function d(a){a.dataSource||c('"dataSource" is required.'),"string"==typeof a.dataSource?void 0===a.totalNumberLocator?void 0===a.totalNumber?c('"totalNumber" is required.'):b.isNumeric(a.totalNumber)||c('"totalNumber" is incorrect. (Number)'):b.isFunction(a.totalNumberLocator)||c('"totalNumberLocator" should be a Function.'):i.isObject(a.dataSource)&&(void 0===a.locator?c('"dataSource" is an Object, please specify "locator".'):"string"==typeof a.locator||b.isFunction(a.locator)||c(a.locator+" is incorrect. (String | Function)")),void 0===a.formatResult||b.isFunction(a.formatResult)||c('"formatResult" should be a Function.')}function e(a){var c=["go","previous","next","disable","enable","refresh","show","hide","destroy"];b.each(c,function(b,c){a.off(h+c)}),a.data("pagination",{}),b(".paginationjs",a).remove()}function f(a,b){return("object"==(b=typeof a)?null==a&&"null"||Object.prototype.toString.call(a).slice(8,-1):b).toLowerCase()}void 0===b&&c("Pagination requires jQuery.");var g="pagination",h="__pagination-";b.fn.pagination&&(g="pagination2"),b.fn[g]=function(f){if(void 0===f)return this;var j=b(this),k=b.extend({},b.fn[g].defaults,f),l={initialize:function(){var a=this;if(j.data("pagination")||j.data("pagination",{}),!1!==a.callHook("beforeInit")){j.data("pagination").initialized&&b(".paginationjs",j).remove(),a.disabled=!!k.disabled;var c=a.model={pageRange:k.pageRange,pageSize:k.pageSize};a.parseDataSource(k.dataSource,function(b){if(a.isAsync=i.isString(b),i.isArray(b)&&(c.totalNumber=k.totalNumber=b.length),a.isDynamicTotalNumber=a.isAsync&&k.totalNumberLocator,!(k.hideWhenLessThanOnePage&&a.getTotalPage()<=1)){var d=a.render(!0);k.className&&d.addClass(k.className),c.el=d,j["bottom"===k.position?"append":"prepend"](d),a.observer(),j.data("pagination").initialized=!0,a.callHook("afterInit",d)}})}},render:function(a){var c=this,d=c.model,e=d.el||b('<div class="paginationjs"></div>'),f=!0!==a;c.callHook("beforeRender",f);var g=d.pageNumber||k.pageNumber,h=k.pageRange,i=c.getTotalPage(),j=g-h,l=g+h;return l>i&&(l=i,j=i-2*h,j=j<1?1:j),j<=1&&(j=1,l=Math.min(2*h+1,i)),e.html(c.generateHTML({currentPage:g,pageRange:h,rangeStart:j,rangeEnd:l})),c.callHook("afterRender",f),e},generateHTML:function(a){var c,d,e=this,f=a.currentPage,g=e.getTotalPage(),h=a.rangeStart,i=a.rangeEnd,j=e.getTotalNumber(),l=k.showPrevious,m=k.showNext,n=k.showPageNumbers,o=k.showNavigator,p=k.showGoInput,q=k.showGoButton,r=k.pageLink,s=k.prevText,t=k.nextText,u=k.ellipsisText,v=k.goButtonText,w=k.classPrefix,x=k.activeClassName,y=k.disableClassName,z=k.ulClassName,A="",B='<input type="text" class="J-paginationjs-go-pagenumber">',C='<input type="button" class="J-paginationjs-go-button" value="'+v+'">',D=b.isFunction(k.formatNavigator)?k.formatNavigator(f,g,j):k.formatNavigator,E=b.isFunction(k.formatGoInput)?k.formatGoInput(B,f,g,j):k.formatGoInput,F=b.isFunction(k.formatGoButton)?k.formatGoButton(C,f,g,j):k.formatGoButton,G=b.isFunction(k.autoHidePrevious)?k.autoHidePrevious():k.autoHidePrevious,H=b.isFunction(k.autoHideNext)?k.autoHideNext():k.autoHideNext,I=b.isFunction(k.header)?k.header(f,g,j):k.header,J=b.isFunction(k.footer)?k.footer(f,g,j):k.footer;if(I&&(c=e.replaceVariables(I,{currentPage:f,totalPage:g,totalNumber:j}),A+=c),l||n||m){if(A+='<div class="paginationjs-pages">',A+=z?'<ul class="'+z+'">':"<ul>",l&&(f<=1?G||(A+='<li class="'+w+"-prev "+y+'"><a>'+s+"</a></li>"):A+='<li class="'+w+'-prev J-paginationjs-previous" data-num="'+(f-1)+'" title="Previous page"><a href="'+r+'">'+s+"</a></li>"),n){if(h<=3)for(d=1;d<h;d++)A+=d==f?'<li class="'+w+"-page J-paginationjs-page "+x+'" data-num="'+d+'"><a>'+d+"</a></li>":'<li class="'+w+'-page J-paginationjs-page" data-num="'+d+'"><a href="'+r+'">'+d+"</a></li>";else k.showFirstOnEllipsisShow&&(A+='<li class="'+w+"-page "+w+'-first J-paginationjs-page" data-num="1"><a href="'+r+'">1</a></li>'),A+='<li class="'+w+"-ellipsis "+y+'"><a>'+u+"</a></li>";for(d=h;d<=i;d++)A+=d==f?'<li class="'+w+"-page J-paginationjs-page "+x+'" data-num="'+d+'"><a>'+d+"</a></li>":'<li class="'+w+'-page J-paginationjs-page" data-num="'+d+'"><a href="'+r+'">'+d+"</a></li>";if(i>=g-2)for(d=i+1;d<=g;d++)A+='<li class="'+w+'-page J-paginationjs-page" data-num="'+d+'"><a href="'+r+'">'+d+"</a></li>";else A+='<li class="'+w+"-ellipsis "+y+'"><a>'+u+"</a></li>",k.showLastOnEllipsisShow&&(A+='<li class="'+w+"-page "+w+'-last J-paginationjs-page" data-num="'+g+'"><a href="'+r+'">'+g+"</a></li>")}m&&(f>=g?H||(A+='<li class="'+w+"-next "+y+'"><a>'+t+"</a></li>"):A+='<li class="'+w+'-next J-paginationjs-next" data-num="'+(f+1)+'" title="Next page"><a href="'+r+'">'+t+"</a></li>"),A+="</ul></div>"}return o&&D&&(c=e.replaceVariables(D,{currentPage:f,totalPage:g,totalNumber:j}),A+='<div class="'+w+'-nav J-paginationjs-nav">'+c+"</div>"),p&&E&&(c=e.replaceVariables(E,{currentPage:f,totalPage:g,totalNumber:j,input:B}),A+='<div class="'+w+'-go-input">'+c+"</div>"),q&&F&&(c=e.replaceVariables(F,{currentPage:f,totalPage:g,totalNumber:j,button:C}),A+='<div class="'+w+'-go-button">'+c+"</div>"),J&&(c=e.replaceVariables(J,{currentPage:f,totalPage:g,totalNumber:j}),A+=c),A},findTotalNumberFromRemoteResponse:function(a){this.model.totalNumber=k.totalNumberLocator(a)},go:function(a,c){function d(a){if(!1===e.callHook("beforePaging",g))return!1;if(f.direction=void 0===f.pageNumber?0:g>f.pageNumber?1:-1,f.pageNumber=g,e.render(),e.disabled&&e.isAsync&&e.enable(),j.data("pagination").model=f,k.formatResult){var d=b.extend(!0,[],a);i.isArray(a=k.formatResult(d))||(a=d)}j.data("pagination").currentPageData=a,e.doCallback(a,c),e.callHook("afterPaging",g),1==g&&e.callHook("afterIsFirstPage"),g==e.getTotalPage()&&e.callHook("afterIsLastPage")}var e=this,f=e.model;if(!e.disabled){var g=a;if((g=parseInt(g))&&!(g<1)){var h=k.pageSize,l=e.getTotalNumber(),m=e.getTotalPage();if(!(l>0&&g>m)){if(!e.isAsync)return void d(e.getDataFragment(g));var n={},o=k.alias||{};n[o.pageSize?o.pageSize:"pageSize"]=h,n[o.pageNumber?o.pageNumber:"pageNumber"]=g;var p={type:"get",cache:!1,data:{},contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"json",async:!0};b.extend(!0,p,k.ajax),b.extend(p.data,n),p.url=k.dataSource,p.success=function(a){e.isDynamicTotalNumber?e.findTotalNumberFromRemoteResponse(a):e.model.totalNumber=k.totalNumber,d(e.filterDataByLocator(a))},p.error=function(a,b,c){k.formatAjaxError&&k.formatAjaxError(a,b,c),e.enable()},e.disable(),b.ajax(p)}}}},doCallback:function(a,c){var d=this,e=d.model;b.isFunction(c)?c(a,e):b.isFunction(k.callback)&&k.callback(a,e)},destroy:function(){!1!==this.callHook("beforeDestroy")&&(this.model.el.remove(),j.off(),b("#paginationjs-style").remove(),this.callHook("afterDestroy"))},previous:function(a){this.go(this.model.pageNumber-1,a)},next:function(a){this.go(this.model.pageNumber+1,a)},disable:function(){var a=this,b=a.isAsync?"async":"sync";!1!==a.callHook("beforeDisable",b)&&(a.disabled=!0,a.model.disabled=!0,a.callHook("afterDisable",b))},enable:function(){var a=this,b=a.isAsync?"async":"sync";!1!==a.callHook("beforeEnable",b)&&(a.disabled=!1,a.model.disabled=!1,a.callHook("afterEnable",b))},refresh:function(a){this.go(this.model.pageNumber,a)},show:function(){var a=this;a.model.el.is(":visible")||a.model.el.show()},hide:function(){var a=this;a.model.el.is(":visible")&&a.model.el.hide()},replaceVariables:function(a,b){var c;for(var d in b){var e=b[d],f=new RegExp("<%=\\s*"+d+"\\s*%>","img");c=(c||a).replace(f,e)}return c},getDataFragment:function(a){var b=k.pageSize,c=k.dataSource,d=this.getTotalNumber(),e=b*(a-1)+1,f=Math.min(a*b,d);return c.slice(e-1,f)},getTotalNumber:function(){return this.model.totalNumber||k.totalNumber||0},getTotalPage:function(){return Math.ceil(this.getTotalNumber()/k.pageSize)},getLocator:function(a){var d;return"string"==typeof a?d=a:b.isFunction(a)?d=a():c('"locator" is incorrect. (String | Function)'),d},filterDataByLocator:function(a){var d,e=this.getLocator(k.locator);if(i.isObject(a)){try{b.each(e.split("."),function(b,c){d=(d||a)[c]})}catch(a){}d?i.isArray(d)||c("dataSource."+e+" must be an Array."):c("dataSource."+e+" is undefined.")}return d||a},parseDataSource:function(a,d){var e=this;i.isObject(a)?d(k.dataSource=e.filterDataByLocator(a)):i.isArray(a)?d(k.dataSource=a):b.isFunction(a)?k.dataSource(function(a){i.isArray(a)||c('The parameter of "done" Function should be an Array.'),e.parseDataSource.call(e,a,d)}):"string"==typeof a?(/^https?|file:/.test(a)&&(k.ajaxDataType="jsonp"),d(a)):c('Unexpected type of "dataSource".')},callHook:function(c){var d,e=j.data("pagination"),f=Array.prototype.slice.apply(arguments);return f.shift(),k[c]&&b.isFunction(k[c])&&!1===k[c].apply(a,f)&&(d=!1),e.hooks&&e.hooks[c]&&b.each(e.hooks[c],function(b,c){!1===c.apply(a,f)&&(d=!1)}),!1!==d},observer:function(){var a=this,d=a.model.el;j.on(h+"go",function(d,e,f){(e=parseInt(b.trim(e)))&&(b.isNumeric(e)||c('"pageNumber" is incorrect. (Number)'),a.go(e,f))}),d.delegate(".J-paginationjs-page","click",function(c){var d=b(c.currentTarget),e=b.trim(d.attr("data-num"));if(e&&!d.hasClass(k.disableClassName)&&!d.hasClass(k.activeClassName))return!1!==a.callHook("beforePageOnClick",c,e)&&(a.go(e),a.callHook("afterPageOnClick",c,e),!!k.pageLink&&void 0)}),d.delegate(".J-paginationjs-previous","click",function(c){var d=b(c.currentTarget),e=b.trim(d.attr("data-num"));if(e&&!d.hasClass(k.disableClassName))return!1!==a.callHook("beforePreviousOnClick",c,e)&&(a.go(e),a.callHook("afterPreviousOnClick",c,e),!!k.pageLink&&void 0)}),d.delegate(".J-paginationjs-next","click",function(c){var d=b(c.currentTarget),e=b.trim(d.attr("data-num"));if(e&&!d.hasClass(k.disableClassName))return!1!==a.callHook("beforeNextOnClick",c,e)&&(a.go(e),a.callHook("afterNextOnClick",c,e),!!k.pageLink&&void 0)}),d.delegate(".J-paginationjs-go-button","click",function(c){var e=b(".J-paginationjs-go-pagenumber",d).val();if(!1===a.callHook("beforeGoButtonOnClick",c,e))return!1;j.trigger(h+"go",e),a.callHook("afterGoButtonOnClick",c,e)}),d.delegate(".J-paginationjs-go-pagenumber","keyup",function(c){if(13===c.which){var e=b(c.currentTarget).val();if(!1===a.callHook("beforeGoInputOnEnter",c,e))return!1;j.trigger(h+"go",e),b(".J-paginationjs-go-pagenumber",d).focus(),a.callHook("afterGoInputOnEnter",c,e)}}),j.on(h+"previous",function(b,c){a.previous(c)}),j.on(h+"next",function(b,c){a.next(c)}),j.on(h+"disable",function(){a.disable()}),j.on(h+"enable",function(){a.enable()}),j.on(h+"refresh",function(b,c){a.refresh(c)}),j.on(h+"show",function(){a.show()}),j.on(h+"hide",function(){a.hide()}),j.on(h+"destroy",function(){a.destroy()});var e=Math.max(a.getTotalPage(),1),f=k.pageNumber;a.isDynamicTotalNumber&&(f=1),k.triggerPagingOnInit&&j.trigger(h+"go",Math.min(f,e))}};if(j.data("pagination")&&!0===j.data("pagination").initialized){if(b.isNumeric(f))return j.trigger.call(this,h+"go",f,arguments[1]),this;if("string"==typeof f){var m=Array.prototype.slice.apply(arguments);switch(m[0]=h+m[0],f){case"previous":case"next":case"go":case"disable":case"enable":case"refresh":case"show":case"hide":case"destroy":j.trigger.apply(this,m);break;case"getSelectedPageNum":return j.data("pagination").model?j.data("pagination").model.pageNumber:j.data("pagination").attributes.pageNumber;case"getTotalPage":return Math.ceil(j.data("pagination").model.totalNumber/j.data("pagination").model.pageSize);case"getSelectedPageData":return j.data("pagination").currentPageData;case"isDisabled":return!0===j.data("pagination").model.disabled;default:c("Unknown action: "+f)}return this}e(j)}else i.isObject(f)||c("Illegal options");return d(k),l.initialize(),this},b.fn[g].defaults={totalNumber:0,pageNumber:1,pageSize:10,pageRange:2,showPrevious:!0,showNext:!0,showPageNumbers:!0,showNavigator:!1,showGoInput:!1,showGoButton:!1,pageLink:"",prevText:"&laquo;",nextText:"&raquo;",ellipsisText:"...",goButtonText:"Go",classPrefix:"paginationjs",activeClassName:"active",disableClassName:"disabled",inlineStyle:!0,formatNavigator:"<%= currentPage %> / <%= totalPage %>",formatGoInput:"<%= input %>",formatGoButton:"<%= button %>",position:"bottom",autoHidePrevious:!1,autoHideNext:!1,triggerPagingOnInit:!0,hideWhenLessThanOnePage:!1,showFirstOnEllipsisShow:!0,showLastOnEllipsisShow:!0,callback:function(){}},b.fn.addHook=function(a,d){arguments.length<2&&c("Missing argument."),b.isFunction(d)||c("callback must be a function.");var e=b(this),f=e.data("pagination");f||(e.data("pagination",{}),f=e.data("pagination")),!f.hooks&&(f.hooks={}),f.hooks[a]=f.hooks[a]||[],f.hooks[a].push(d)},b[g]=function(a,d){arguments.length<2&&c("Requires two parameters.");var e;if(e="string"!=typeof a&&a instanceof jQuery?a:b(a),e.length)return e.pagination(d),e};var i={};b.each(["Object","Array","String"],function(a,b){i["is"+b]=function(a){return f(a)===b.toLowerCase()}}),"function"==typeof define&&define.amd&&define(function(){return b})}(this,window.jQuery);
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.async=n.async||{})}(this,function(n){"use strict";function t(n,t){t|=0;for(var e=Math.max(n.length-t,0),r=Array(e),u=0;u<e;u++)r[u]=n[t+u];return r}function e(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function r(n){setTimeout(n,0)}function u(n){return function(e){var r=t(arguments,1);n(function(){e.apply(null,r)})}}function i(n){return ct(function(t,r){var u;try{u=n.apply(this,t)}catch(n){return r(n)}e(u)&&"function"==typeof u.then?u.then(function(n){o(r,null,n)},function(n){o(r,n.message?n:new Error(n))}):r(null,u)})}function o(n,t,e){try{n(t,e)}catch(n){lt(c,n)}}function c(n){throw n}function f(n){return st&&"AsyncFunction"===n[Symbol.toStringTag]}function a(n){return f(n)?i(n):n}function l(n){return function(e){var r=t(arguments,1),u=ct(function(t,r){var u=this;return n(e,function(n,e){a(n).apply(u,t.concat(e))},r)});return r.length?u.apply(this,r):u}}function s(n){var t=mt.call(n,bt),e=n[bt];try{n[bt]=void 0;var r=!0}catch(n){}var u=gt.call(n);return r&&(t?n[bt]=e:delete n[bt]),u}function p(n){return St.call(n)}function h(n){return null==n?void 0===n?Lt:kt:Ot&&Ot in Object(n)?s(n):p(n)}function y(n){if(!e(n))return!1;var t=h(n);return t==xt||t==Et||t==wt||t==At}function v(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=Tt}function d(n){return null!=n&&v(n.length)&&!y(n)}function m(){}function g(n){return function(){if(null!==n){var t=n;n=null,t.apply(this,arguments)}}}function b(n,t){for(var e=-1,r=Array(n);++e<n;)r[e]=t(e);return r}function j(n){return null!=n&&"object"==typeof n}function S(n){return j(n)&&h(n)==_t}function k(){return!1}function L(n,t){return t=null==t?Nt:t,!!t&&("number"==typeof n||Qt.test(n))&&n>-1&&n%1==0&&n<t}function O(n){return j(n)&&v(n.length)&&!!me[h(n)]}function w(n){return function(t){return n(t)}}function x(n,t){var e=Vt(n),r=!e&&Pt(n),u=!e&&!r&&Wt(n),i=!e&&!r&&!u&&Oe(n),o=e||r||u||i,c=o?b(n.length,String):[],f=c.length;for(var a in n)!t&&!xe.call(n,a)||o&&("length"==a||u&&("offset"==a||"parent"==a)||i&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||L(a,f))||c.push(a);return c}function E(n){var t=n&&n.constructor,e="function"==typeof t&&t.prototype||Ee;return n===e}function A(n,t){return function(e){return n(t(e))}}function T(n){if(!E(n))return Ae(n);var t=[];for(var e in Object(n))Be.call(n,e)&&"constructor"!=e&&t.push(e);return t}function B(n){return d(n)?x(n):T(n)}function F(n){var t=-1,e=n.length;return function(){return++t<e?{value:n[t],key:t}:null}}function I(n){var t=-1;return function(){var e=n.next();return e.done?null:(t++,{value:e.value,key:t})}}function _(n){var t=B(n),e=-1,r=t.length;return function(){var u=t[++e];return e<r?{value:n[u],key:u}:null}}function M(n){if(d(n))return F(n);var t=It(n);return t?I(t):_(n)}function U(n){return function(){if(null===n)throw new Error("Callback was already called.");var t=n;n=null,t.apply(this,arguments)}}function z(n){return function(t,e,r){function u(n,t){if(f-=1,n)c=!0,r(n);else{if(t===Bt||c&&f<=0)return c=!0,r(null);i()}}function i(){for(;f<n&&!c;){var t=o();if(null===t)return c=!0,void(f<=0&&r(null));f+=1,e(t.value,t.key,U(u))}}if(r=g(r||m),n<=0||!t)return r(null);var o=M(t),c=!1,f=0;i()}}function P(n,t,e,r){z(t)(n,a(e),r)}function V(n,t){return function(e,r,u){return n(e,t,r,u)}}function q(n,t,e){function r(n,t){n?e(n):++i!==o&&t!==Bt||e(null)}e=g(e||m);var u=0,i=0,o=n.length;for(0===o&&e(null);u<o;u++)t(n[u],u,U(r))}function D(n){return function(t,e,r){return n(Ie,t,a(e),r)}}function R(n,t,e,r){r=r||m,t=t||[];var u=[],i=0,o=a(e);n(t,function(n,t,e){var r=i++;o(n,function(n,t){u[r]=t,e(n)})},function(n){r(n,u)})}function C(n){return function(t,e,r,u){return n(z(e),t,a(r),u)}}function $(n,t){for(var e=-1,r=null==n?0:n.length;++e<r&&t(n[e],e,n)!==!1;);return n}function W(n){return function(t,e,r){for(var u=-1,i=Object(t),o=r(t),c=o.length;c--;){var f=o[n?c:++u];if(e(i[f],f,i)===!1)break}return t}}function N(n,t){return n&&Ve(n,t,B)}function Q(n,t,e,r){for(var u=n.length,i=e+(r?1:-1);r?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function G(n){return n!==n}function H(n,t,e){for(var r=e-1,u=n.length;++r<u;)if(n[r]===t)return r;return-1}function J(n,t,e){return t===t?H(n,t,e):Q(n,G,e)}function K(n,t){for(var e=-1,r=null==n?0:n.length,u=Array(r);++e<r;)u[e]=t(n[e],e,n);return u}function X(n){return"symbol"==typeof n||j(n)&&h(n)==De}function Y(n){if("string"==typeof n)return n;if(Vt(n))return K(n,Y)+"";if(X(n))return $e?$e.call(n):"";var t=n+"";return"0"==t&&1/n==-Re?"-0":t}function Z(n,t,e){var r=-1,u=n.length;t<0&&(t=-t>u?0:u+t),e=e>u?u:e,e<0&&(e+=u),u=t>e?0:e-t>>>0,t>>>=0;for(var i=Array(u);++r<u;)i[r]=n[r+t];return i}function nn(n,t,e){var r=n.length;return e=void 0===e?r:e,!t&&e>=r?n:Z(n,t,e)}function tn(n,t){for(var e=n.length;e--&&J(t,n[e],0)>-1;);return e}function en(n,t){for(var e=-1,r=n.length;++e<r&&J(t,n[e],0)>-1;);return e}function rn(n){return n.split("")}function un(n){return Xe.test(n)}function on(n){return n.match(mr)||[]}function cn(n){return un(n)?on(n):rn(n)}function fn(n){return null==n?"":Y(n)}function an(n,t,e){if(n=fn(n),n&&(e||void 0===t))return n.replace(gr,"");if(!n||!(t=Y(t)))return n;var r=cn(n),u=cn(t),i=en(r,u),o=tn(r,u)+1;return nn(r,i,o).join("")}function ln(n){return n=n.toString().replace(kr,""),n=n.match(br)[2].replace(" ",""),n=n?n.split(jr):[],n=n.map(function(n){return an(n.replace(Sr,""))})}function sn(n,t){var e={};N(n,function(n,t){function r(t,e){var r=K(u,function(n){return t[n]});r.push(e),a(n).apply(null,r)}var u,i=f(n),o=!i&&1===n.length||i&&0===n.length;if(Vt(n))u=n.slice(0,-1),n=n[n.length-1],e[t]=u.concat(u.length>0?r:n);else if(o)e[t]=n;else{if(u=ln(n),0===n.length&&!i&&0===u.length)throw new Error("autoInject task functions require explicit parameters.");i||u.pop(),e[t]=u.concat(r)}}),qe(e,t)}function pn(){this.head=this.tail=null,this.length=0}function hn(n,t){n.length=1,n.head=n.tail=t}function yn(n,t,e){function r(n,t,e){if(null!=e&&"function"!=typeof e)throw new Error("task callback must be a function");if(s.started=!0,Vt(n)||(n=[n]),0===n.length&&s.idle())return lt(function(){s.drain()});for(var r=0,u=n.length;r<u;r++){var i={data:n[r],callback:e||m};t?s._tasks.unshift(i):s._tasks.push(i)}f||(f=!0,lt(function(){f=!1,s.process()}))}function u(n){return function(t){o-=1;for(var e=0,r=n.length;e<r;e++){var u=n[e],i=J(c,u,0);0===i?c.shift():i>0&&c.splice(i,1),u.callback.apply(u,arguments),null!=t&&s.error(t,u.data)}o<=s.concurrency-s.buffer&&s.unsaturated(),s.idle()&&s.drain(),s.process()}}if(null==t)t=1;else if(0===t)throw new Error("Concurrency must not be zero");var i=a(n),o=0,c=[],f=!1,l=!1,s={_tasks:new pn,concurrency:t,payload:e,saturated:m,unsaturated:m,buffer:t/4,empty:m,drain:m,error:m,started:!1,paused:!1,push:function(n,t){r(n,!1,t)},kill:function(){s.drain=m,s._tasks.empty()},unshift:function(n,t){r(n,!0,t)},remove:function(n){s._tasks.remove(n)},process:function(){if(!l){for(l=!0;!s.paused&&o<s.concurrency&&s._tasks.length;){var n=[],t=[],e=s._tasks.length;s.payload&&(e=Math.min(e,s.payload));for(var r=0;r<e;r++){var f=s._tasks.shift();n.push(f),c.push(f),t.push(f.data)}o+=1,0===s._tasks.length&&s.empty(),o===s.concurrency&&s.saturated();var a=U(u(n));i(t,a)}l=!1}},length:function(){return s._tasks.length},running:function(){return o},workersList:function(){return c},idle:function(){return s._tasks.length+o===0},pause:function(){s.paused=!0},resume:function(){s.paused!==!1&&(s.paused=!1,lt(s.process))}};return s}function vn(n,t){return yn(n,1,t)}function dn(n,t,e,r){r=g(r||m);var u=a(e);Or(n,function(n,e,r){u(t,n,function(n,e){t=e,r(n)})},function(n){r(n,t)})}function mn(){var n=K(arguments,a);return function(){var e=t(arguments),r=this,u=e[e.length-1];"function"==typeof u?e.pop():u=m,dn(n,e,function(n,e,u){e.apply(r,n.concat(function(n){var e=t(arguments,1);u(n,e)}))},function(n,t){u.apply(r,[n].concat(t))})}}function gn(n){return n}function bn(n,t){return function(e,r,u,i){i=i||m;var o,c=!1;e(r,function(e,r,i){u(e,function(r,u){r?i(r):n(u)&&!o?(c=!0,o=t(!0,e),i(null,Bt)):i()})},function(n){n?i(n):i(null,c?o:t(!1))})}}function jn(n,t){return t}function Sn(n){return function(e){var r=t(arguments,1);r.push(function(e){var r=t(arguments,1);"object"==typeof console&&(e?console.error&&console.error(e):console[n]&&$(r,function(t){console[n](t)}))}),a(e).apply(null,r)}}function kn(n,e,r){function u(n){if(n)return r(n);var e=t(arguments,1);e.push(i),c.apply(this,e)}function i(n,t){return n?r(n):t?void o(u):r(null)}r=U(r||m);var o=a(n),c=a(e);i(null,!0)}function Ln(n,e,r){r=U(r||m);var u=a(n),i=function(n){if(n)return r(n);var o=t(arguments,1);return e.apply(this,o)?u(i):void r.apply(null,[null].concat(o))};u(i)}function On(n,t,e){Ln(n,function(){return!t.apply(this,arguments)},e)}function wn(n,t,e){function r(n){return n?e(n):void o(u)}function u(n,t){return n?e(n):t?void i(r):e(null)}e=U(e||m);var i=a(t),o=a(n);o(u)}function xn(n){return function(t,e,r){return n(t,r)}}function En(n,t,e){Ie(n,xn(a(t)),e)}function An(n,t,e,r){z(t)(n,xn(a(e)),r)}function Tn(n){return f(n)?n:ct(function(t,e){var r=!0;t.push(function(){var n=arguments;r?lt(function(){e.apply(null,n)}):e.apply(null,n)}),n.apply(this,t),r=!1})}function Bn(n){return!n}function Fn(n){return function(t){return null==t?void 0:t[n]}}function In(n,t,e,r){var u=new Array(t.length);n(t,function(n,t,r){e(n,function(n,e){u[t]=!!e,r(n)})},function(n){if(n)return r(n);for(var e=[],i=0;i<t.length;i++)u[i]&&e.push(t[i]);r(null,e)})}function _n(n,t,e,r){var u=[];n(t,function(n,t,r){e(n,function(e,i){e?r(e):(i&&u.push({index:t,value:n}),r())})},function(n){n?r(n):r(null,K(u.sort(function(n,t){return n.index-t.index}),Fn("value")))})}function Mn(n,t,e,r){var u=d(t)?In:_n;u(n,t,a(e),r||m)}function Un(n,t){function e(n){return n?r(n):void u(e)}var r=U(t||m),u=a(Tn(n));e()}function zn(n,t,e,r){r=g(r||m);var u={},i=a(e);P(n,t,function(n,t,e){i(n,t,function(n,r){return n?e(n):(u[t]=r,void e())})},function(n){r(n,u)})}function Pn(n,t){return t in n}function Vn(n,e){var r=Object.create(null),u=Object.create(null);e=e||gn;var i=a(n),o=ct(function(n,o){var c=e.apply(null,n);Pn(r,c)?lt(function(){o.apply(null,r[c])}):Pn(u,c)?u[c].push(o):(u[c]=[o],i.apply(null,n.concat(function(){var n=t(arguments);r[c]=n;var e=u[c];delete u[c];for(var i=0,o=e.length;i<o;i++)e[i].apply(null,n)})))});return o.memo=r,o.unmemoized=n,o}function qn(n,e,r){r=r||m;var u=d(e)?[]:{};n(e,function(n,e,r){a(n)(function(n,i){arguments.length>2&&(i=t(arguments,1)),u[e]=i,r(n)})},function(n){r(n,u)})}function Dn(n,t){qn(Ie,n,t)}function Rn(n,t,e){qn(z(t),n,e)}function Cn(n,t){if(t=g(t||m),!Vt(n))return t(new TypeError("First argument to race must be an array of functions"));if(!n.length)return t();for(var e=0,r=n.length;e<r;e++)a(n[e])(t)}function $n(n,e,r,u){var i=t(n).reverse();dn(i,e,r,u)}function Wn(n){var e=a(n);return ct(function(n,r){return n.push(function(n,e){if(n)r(null,{error:n});else{var u;u=arguments.length<=2?e:t(arguments,1),r(null,{value:u})}}),e.apply(this,n)})}function Nn(n){var t;return Vt(n)?t=K(n,Wn):(t={},N(n,function(n,e){t[e]=Wn.call(this,n)})),t}function Qn(n,t,e,r){Mn(n,t,function(n,t){e(n,function(n,e){t(n,!e)})},r)}function Gn(n){return function(){return n}}function Hn(n,t,e){function r(n,t){if("object"==typeof t)n.times=+t.times||i,n.intervalFunc="function"==typeof t.interval?t.interval:Gn(+t.interval||o),n.errorFilter=t.errorFilter;else{if("number"!=typeof t&&"string"!=typeof t)throw new Error("Invalid arguments for async.retry");n.times=+t||i}}function u(){f(function(n){n&&l++<c.times&&("function"!=typeof c.errorFilter||c.errorFilter(n))?setTimeout(u,c.intervalFunc(l)):e.apply(null,arguments)})}var i=5,o=0,c={times:i,intervalFunc:Gn(o)};if(arguments.length<3&&"function"==typeof n?(e=t||m,t=n):(r(c,n),e=e||m),"function"!=typeof t)throw new Error("Invalid arguments for async.retry");var f=a(t),l=1;u()}function Jn(n,t){qn(Or,n,t)}function Kn(n,t,e){function r(n,t){var e=n.criteria,r=t.criteria;return e<r?-1:e>r?1:0}var u=a(t);_e(n,function(n,t){u(n,function(e,r){return e?t(e):void t(null,{value:n,criteria:r})})},function(n,t){return n?e(n):void e(null,K(t.sort(r),Fn("value")))})}function Xn(n,t,e){var r=a(n);return ct(function(u,i){function o(){var t=n.name||"anonymous",r=new Error('Callback function "'+t+'" timed out.');r.code="ETIMEDOUT",e&&(r.info=e),f=!0,i(r)}var c,f=!1;u.push(function(){f||(i.apply(null,arguments),clearTimeout(c))}),c=setTimeout(o,t),r.apply(null,u)})}function Yn(n,t,e,r){for(var u=-1,i=iu(uu((t-n)/(e||1)),0),o=Array(i);i--;)o[r?i:++u]=n,n+=e;return o}function Zn(n,t,e,r){var u=a(e);Ue(Yn(0,n,1),t,u,r)}function nt(n,t,e,r){arguments.length<=3&&(r=e,e=t,t=Vt(n)?[]:{}),r=g(r||m);var u=a(e);Ie(n,function(n,e,r){u(t,n,e,r)},function(n){r(n,t)})}function tt(n,e){var r,u=null;e=e||m,Ur(n,function(n,e){a(n)(function(n,i){r=arguments.length>2?t(arguments,1):i,u=n,e(!n)})},function(){e(u,r)})}function et(n){return function(){return(n.unmemoized||n).apply(null,arguments)}}function rt(n,e,r){r=U(r||m);var u=a(e);if(!n())return r(null);var i=function(e){if(e)return r(e);if(n())return u(i);var o=t(arguments,1);r.apply(null,[null].concat(o))};u(i)}function ut(n,t,e){rt(function(){return!n.apply(this,arguments)},t,e)}var it,ot=function(n){var e=t(arguments,1);return function(){var r=t(arguments);return n.apply(null,e.concat(r))}},ct=function(n){return function(){var e=t(arguments),r=e.pop();n.call(this,e,r)}},ft="function"==typeof setImmediate&&setImmediate,at="object"==typeof process&&"function"==typeof process.nextTick;it=ft?setImmediate:at?process.nextTick:r;var lt=u(it),st="function"==typeof Symbol,pt="object"==typeof global&&global&&global.Object===Object&&global,ht="object"==typeof self&&self&&self.Object===Object&&self,yt=pt||ht||Function("return this")(),vt=yt.Symbol,dt=Object.prototype,mt=dt.hasOwnProperty,gt=dt.toString,bt=vt?vt.toStringTag:void 0,jt=Object.prototype,St=jt.toString,kt="[object Null]",Lt="[object Undefined]",Ot=vt?vt.toStringTag:void 0,wt="[object AsyncFunction]",xt="[object Function]",Et="[object GeneratorFunction]",At="[object Proxy]",Tt=9007199254740991,Bt={},Ft="function"==typeof Symbol&&Symbol.iterator,It=function(n){return Ft&&n[Ft]&&n[Ft]()},_t="[object Arguments]",Mt=Object.prototype,Ut=Mt.hasOwnProperty,zt=Mt.propertyIsEnumerable,Pt=S(function(){return arguments}())?S:function(n){return j(n)&&Ut.call(n,"callee")&&!zt.call(n,"callee")},Vt=Array.isArray,qt="object"==typeof n&&n&&!n.nodeType&&n,Dt=qt&&"object"==typeof module&&module&&!module.nodeType&&module,Rt=Dt&&Dt.exports===qt,Ct=Rt?yt.Buffer:void 0,$t=Ct?Ct.isBuffer:void 0,Wt=$t||k,Nt=9007199254740991,Qt=/^(?:0|[1-9]\d*)$/,Gt="[object Arguments]",Ht="[object Array]",Jt="[object Boolean]",Kt="[object Date]",Xt="[object Error]",Yt="[object Function]",Zt="[object Map]",ne="[object Number]",te="[object Object]",ee="[object RegExp]",re="[object Set]",ue="[object String]",ie="[object WeakMap]",oe="[object ArrayBuffer]",ce="[object DataView]",fe="[object Float32Array]",ae="[object Float64Array]",le="[object Int8Array]",se="[object Int16Array]",pe="[object Int32Array]",he="[object Uint8Array]",ye="[object Uint8ClampedArray]",ve="[object Uint16Array]",de="[object Uint32Array]",me={};me[fe]=me[ae]=me[le]=me[se]=me[pe]=me[he]=me[ye]=me[ve]=me[de]=!0,me[Gt]=me[Ht]=me[oe]=me[Jt]=me[ce]=me[Kt]=me[Xt]=me[Yt]=me[Zt]=me[ne]=me[te]=me[ee]=me[re]=me[ue]=me[ie]=!1;var ge="object"==typeof n&&n&&!n.nodeType&&n,be=ge&&"object"==typeof module&&module&&!module.nodeType&&module,je=be&&be.exports===ge,Se=je&&pt.process,ke=function(){try{return Se&&Se.binding&&Se.binding("util")}catch(n){}}(),Le=ke&&ke.isTypedArray,Oe=Le?w(Le):O,we=Object.prototype,xe=we.hasOwnProperty,Ee=Object.prototype,Ae=A(Object.keys,Object),Te=Object.prototype,Be=Te.hasOwnProperty,Fe=V(P,1/0),Ie=function(n,t,e){var r=d(n)?q:Fe;r(n,a(t),e)},_e=D(R),Me=l(_e),Ue=C(R),ze=V(Ue,1),Pe=l(ze),Ve=W(),qe=function(n,e,r){function u(n,t){j.push(function(){f(n,t)})}function i(){if(0===j.length&&0===v)return r(null,y);for(;j.length&&v<e;){var n=j.shift();n()}}function o(n,t){var e=b[n];e||(e=b[n]=[]),e.push(t)}function c(n){var t=b[n]||[];$(t,function(n){n()}),i()}function f(n,e){if(!d){var u=U(function(e,u){if(v--,arguments.length>2&&(u=t(arguments,1)),e){var i={};N(y,function(n,t){i[t]=n}),i[n]=u,d=!0,b=Object.create(null),r(e,i)}else y[n]=u,c(n)});v++;var i=a(e[e.length-1]);e.length>1?i(y,u):i(u)}}function l(){for(var n,t=0;S.length;)n=S.pop(),t++,$(s(n),function(n){0===--k[n]&&S.push(n)});if(t!==h)throw new Error("async.auto cannot execute tasks due to a recursive dependency")}function s(t){var e=[];return N(n,function(n,r){Vt(n)&&J(n,t,0)>=0&&e.push(r)}),e}"function"==typeof e&&(r=e,e=null),r=g(r||m);var p=B(n),h=p.length;if(!h)return r(null);e||(e=h);var y={},v=0,d=!1,b=Object.create(null),j=[],S=[],k={};N(n,function(t,e){if(!Vt(t))return u(e,[t]),void S.push(e);var r=t.slice(0,t.length-1),i=r.length;return 0===i?(u(e,t),void S.push(e)):(k[e]=i,void $(r,function(c){if(!n[c])throw new Error("async.auto task `"+e+"` has a non-existent dependency `"+c+"` in "+r.join(", "));o(c,function(){i--,0===i&&u(e,t)})}))}),l(),i()},De="[object Symbol]",Re=1/0,Ce=vt?vt.prototype:void 0,$e=Ce?Ce.toString:void 0,We="\\ud800-\\udfff",Ne="\\u0300-\\u036f",Qe="\\ufe20-\\ufe2f",Ge="\\u20d0-\\u20ff",He=Ne+Qe+Ge,Je="\\ufe0e\\ufe0f",Ke="\\u200d",Xe=RegExp("["+Ke+We+He+Je+"]"),Ye="\\ud800-\\udfff",Ze="\\u0300-\\u036f",nr="\\ufe20-\\ufe2f",tr="\\u20d0-\\u20ff",er=Ze+nr+tr,rr="\\ufe0e\\ufe0f",ur="["+Ye+"]",ir="["+er+"]",or="\\ud83c[\\udffb-\\udfff]",cr="(?:"+ir+"|"+or+")",fr="[^"+Ye+"]",ar="(?:\\ud83c[\\udde6-\\uddff]){2}",lr="[\\ud800-\\udbff][\\udc00-\\udfff]",sr="\\u200d",pr=cr+"?",hr="["+rr+"]?",yr="(?:"+sr+"(?:"+[fr,ar,lr].join("|")+")"+hr+pr+")*",vr=hr+pr+yr,dr="(?:"+[fr+ir+"?",ir,ar,lr,ur].join("|")+")",mr=RegExp(or+"(?="+or+")|"+dr+vr,"g"),gr=/^\s+|\s+$/g,br=/^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m,jr=/,/,Sr=/(=.+)?(\s*)$/,kr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;pn.prototype.removeLink=function(n){return n.prev?n.prev.next=n.next:this.head=n.next,n.next?n.next.prev=n.prev:this.tail=n.prev,n.prev=n.next=null,this.length-=1,n},pn.prototype.empty=function(){for(;this.head;)this.shift();return this},pn.prototype.insertAfter=function(n,t){t.prev=n,t.next=n.next,n.next?n.next.prev=t:this.tail=t,n.next=t,this.length+=1},pn.prototype.insertBefore=function(n,t){t.prev=n.prev,t.next=n,n.prev?n.prev.next=t:this.head=t,n.prev=t,this.length+=1},pn.prototype.unshift=function(n){this.head?this.insertBefore(this.head,n):hn(this,n)},pn.prototype.push=function(n){this.tail?this.insertAfter(this.tail,n):hn(this,n)},pn.prototype.shift=function(){return this.head&&this.removeLink(this.head)},pn.prototype.pop=function(){return this.tail&&this.removeLink(this.tail)},pn.prototype.toArray=function(){for(var n=Array(this.length),t=this.head,e=0;e<this.length;e++)n[e]=t.data,t=t.next;return n},pn.prototype.remove=function(n){for(var t=this.head;t;){var e=t.next;n(t)&&this.removeLink(t),t=e}return this};var Lr,Or=V(P,1),wr=function(){return mn.apply(null,t(arguments).reverse())},xr=Array.prototype.concat,Er=function(n,e,r,u){u=u||m;var i=a(r);Ue(n,e,function(n,e){i(n,function(n){return n?e(n):e(null,t(arguments,1))})},function(n,t){for(var e=[],r=0;r<t.length;r++)t[r]&&(e=xr.apply(e,t[r]));return u(n,e)})},Ar=V(Er,1/0),Tr=V(Er,1),Br=function(){var n=t(arguments),e=[null].concat(n);return function(){var n=arguments[arguments.length-1];return n.apply(this,e)}},Fr=D(bn(gn,jn)),Ir=C(bn(gn,jn)),_r=V(Ir,1),Mr=Sn("dir"),Ur=V(An,1),zr=D(bn(Bn,Bn)),Pr=C(bn(Bn,Bn)),Vr=V(Pr,1),qr=D(Mn),Dr=C(Mn),Rr=V(Dr,1),Cr=function(n,t,e,r){r=r||m;var u=a(e);Ue(n,t,function(n,t){u(n,function(e,r){return e?t(e):t(null,{key:r,val:n})})},function(n,t){for(var e={},u=Object.prototype.hasOwnProperty,i=0;i<t.length;i++)if(t[i]){var o=t[i].key,c=t[i].val;u.call(e,o)?e[o].push(c):e[o]=[c]}return r(n,e)})},$r=V(Cr,1/0),Wr=V(Cr,1),Nr=Sn("log"),Qr=V(zn,1/0),Gr=V(zn,1);Lr=at?process.nextTick:ft?setImmediate:r;var Hr=u(Lr),Jr=function(n,t){var e=a(n);return yn(function(n,t){e(n[0],t)},t,1)},Kr=function(n,t){var e=Jr(n,t);return e.push=function(n,t,r){if(null==r&&(r=m),"function"!=typeof r)throw new Error("task callback must be a function");if(e.started=!0,Vt(n)||(n=[n]),0===n.length)return lt(function(){e.drain()});t=t||0;for(var u=e._tasks.head;u&&t>=u.priority;)u=u.next;for(var i=0,o=n.length;i<o;i++){var c={data:n[i],priority:t,callback:r};u?e._tasks.insertBefore(u,c):e._tasks.push(c)}lt(e.process)},delete e.unshift,e},Xr=D(Qn),Yr=C(Qn),Zr=V(Yr,1),nu=function(n,t){t||(t=n,n=null);var e=a(t);return ct(function(t,r){function u(n){e.apply(null,t.concat(n))}n?Hn(n,u,r):Hn(u,r)})},tu=D(bn(Boolean,gn)),eu=C(bn(Boolean,gn)),ru=V(eu,1),uu=Math.ceil,iu=Math.max,ou=V(Zn,1/0),cu=V(Zn,1),fu=function(n,e){function r(t){var e=a(n[i++]);t.push(U(u)),e.apply(null,t)}function u(u){return u||i===n.length?e.apply(null,arguments):void r(t(arguments,1))}if(e=g(e||m),!Vt(n))return e(new Error("First argument to waterfall must be an array of functions"));if(!n.length)return e();var i=0;r([])},au={apply:ot,applyEach:Me,applyEachSeries:Pe,asyncify:i,auto:qe,autoInject:sn,cargo:vn,compose:wr,concat:Ar,concatLimit:Er,concatSeries:Tr,constant:Br,detect:Fr,detectLimit:Ir,detectSeries:_r,dir:Mr,doDuring:kn,doUntil:On,doWhilst:Ln,during:wn,each:En,eachLimit:An,eachOf:Ie,eachOfLimit:P,eachOfSeries:Or,eachSeries:Ur,ensureAsync:Tn,every:zr,everyLimit:Pr,everySeries:Vr,filter:qr,filterLimit:Dr,filterSeries:Rr,forever:Un,groupBy:$r,groupByLimit:Cr,groupBySeries:Wr,log:Nr,map:_e,mapLimit:Ue,mapSeries:ze,mapValues:Qr,mapValuesLimit:zn,mapValuesSeries:Gr,memoize:Vn,nextTick:Hr,parallel:Dn,parallelLimit:Rn,priorityQueue:Kr,queue:Jr,race:Cn,reduce:dn,reduceRight:$n,reflect:Wn,reflectAll:Nn,reject:Xr,rejectLimit:Yr,rejectSeries:Zr,retry:Hn,retryable:nu,seq:mn,series:Jn,setImmediate:lt,some:tu,someLimit:eu,someSeries:ru,sortBy:Kn,timeout:Xn,times:ou,timesLimit:Zn,timesSeries:cu,transform:nt,tryEach:tt,unmemoize:et,until:ut,waterfall:fu,whilst:rt,all:zr,allLimit:Pr,allSeries:Vr,any:tu,anyLimit:eu,anySeries:ru,find:Fr,findLimit:Ir,findSeries:_r,forEach:En,forEachSeries:Ur,forEachLimit:An,forEachOf:Ie,forEachOfSeries:Or,forEachOfLimit:P,inject:dn,foldl:dn,foldr:$n,select:qr,selectLimit:Dr,selectSeries:Rr,wrapSync:i};n.default=au,n.apply=ot,n.applyEach=Me,n.applyEachSeries=Pe,n.asyncify=i,n.auto=qe,n.autoInject=sn,n.cargo=vn,n.compose=wr,n.concat=Ar,n.concatLimit=Er,n.concatSeries=Tr,n.constant=Br,n.detect=Fr,n.detectLimit=Ir,n.detectSeries=_r,n.dir=Mr,n.doDuring=kn,n.doUntil=On,n.doWhilst=Ln,n.during=wn,n.each=En,n.eachLimit=An,n.eachOf=Ie,n.eachOfLimit=P,n.eachOfSeries=Or,n.eachSeries=Ur,n.ensureAsync=Tn,n.every=zr,n.everyLimit=Pr,n.everySeries=Vr,n.filter=qr,n.filterLimit=Dr,n.filterSeries=Rr,n.forever=Un,n.groupBy=$r,n.groupByLimit=Cr,n.groupBySeries=Wr,n.log=Nr,n.map=_e,n.mapLimit=Ue,n.mapSeries=ze,n.mapValues=Qr,n.mapValuesLimit=zn,n.mapValuesSeries=Gr,n.memoize=Vn,n.nextTick=Hr,n.parallel=Dn,n.parallelLimit=Rn,n.priorityQueue=Kr,n.queue=Jr,n.race=Cn,n.reduce=dn,n.reduceRight=$n,n.reflect=Wn,n.reflectAll=Nn,n.reject=Xr,n.rejectLimit=Yr,n.rejectSeries=Zr,n.retry=Hn,n.retryable=nu,n.seq=mn,n.series=Jn,n.setImmediate=lt,n.some=tu,n.someLimit=eu,n.someSeries=ru,n.sortBy=Kn,n.timeout=Xn,n.times=ou,n.timesLimit=Zn,n.timesSeries=cu,n.transform=nt,n.tryEach=tt,n.unmemoize=et,n.until=ut,n.waterfall=fu,n.whilst=rt,n.all=zr,n.allLimit=Pr,n.allSeries=Vr,n.any=tu,n.anyLimit=eu,n.anySeries=ru,n.find=Fr,n.findLimit=Ir,n.findSeries=_r,n.forEach=En,n.forEachSeries=Ur,n.forEachLimit=An,n.forEachOf=Ie,n.forEachOfSeries=Or,n.forEachOfLimit=P,n.inject=dn,n.foldl=dn,n.foldr=$n,n.select=qr,n.selectLimit=Dr,n.selectSeries=Rr,n.wrapSync=i,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=async.min.map
/*!
    localForage -- Offline Storage, Improved
    Version 1.7.1
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.localforage=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||void 0===a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(b){return p.reject(a,b)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;if(a&&("object"==typeof a||"function"==typeof a)&&"function"==typeof b)return function(){b.apply(a,arguments)}}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(a){c.status="error",c.value=a}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a(1),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=e,e.prototype.catch=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){g(c,this.state===r?a:b,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},e.resolve=k,e.reject=l,e.all=m,e.race=n},{1:1}],3:[function(a,b,c){(function(b){"use strict";"function"!=typeof b.Promise&&(b.Promise=a(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(a){return}}function f(){try{if(!ua)return!1;var a="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),b="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!a||b)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(a){return!1}}function g(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(f){if("TypeError"!==f.name)throw f;for(var c="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,d=new c,e=0;e<a.length;e+=1)d.append(a[e]);return d.getBlob(b.type)}}function h(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}function i(a,b,c){"function"==typeof b&&a.then(b),"function"==typeof c&&a.catch(c)}function j(a){return"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a)),a}function k(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function l(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;e<b;e++)d[e]=a.charCodeAt(e);return c}function m(a){return new va(function(b){var c=a.transaction(wa,Ba),d=g([""]);c.objectStore(wa).put(d,"key"),c.onabort=function(a){a.preventDefault(),a.stopPropagation(),b(!1)},c.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);b(c||!a||parseInt(a[1],10)>=43)}}).catch(function(){return!1})}function n(a){return"boolean"==typeof xa?va.resolve(xa):m(a).then(function(a){return xa=a})}function o(a){var b=ya[a.name],c={};c.promise=new va(function(a,b){c.resolve=a,c.reject=b}),b.deferredOperations.push(c),b.dbReady?b.dbReady=b.dbReady.then(function(){return c.promise}):b.dbReady=c.promise}function p(a){var b=ya[a.name],c=b.deferredOperations.pop();if(c)return c.resolve(),c.promise}function q(a,b){var c=ya[a.name],d=c.deferredOperations.pop();if(d)return d.reject(b),d.promise}function r(a,b){return new va(function(c,d){if(ya[a.name]=ya[a.name]||B(),a.db){if(!b)return c(a.db);o(a),a.db.close()}var e=[a.name];b&&e.push(a.version);var f=ua.open.apply(ua,e);b&&(f.onupgradeneeded=function(b){var c=f.result;try{c.createObjectStore(a.storeName),b.oldVersion<=1&&c.createObjectStore(wa)}catch(c){if("ConstraintError"!==c.name)throw c;console.warn('The database "'+a.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+a.storeName+'" already exists.')}}),f.onerror=function(a){a.preventDefault(),d(f.error)},f.onsuccess=function(){c(f.result),p(a)}})}function s(a){return r(a,!1)}function t(a){return r(a,!0)}function u(a,b){if(!a.db)return!0;var c=!a.db.objectStoreNames.contains(a.storeName),d=a.version<a.db.version,e=a.version>a.db.version;if(d&&(a.version!==b&&console.warn('The database "'+a.name+"\" can't be downgraded from version "+a.db.version+" to version "+a.version+"."),a.version=a.db.version),e||c){if(c){var f=a.db.version+1;f>a.version&&(a.version=f)}return!0}return!1}function v(a){return new va(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||"");b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function w(a){return g([l(atob(a.data))],{type:a.type})}function x(a){return a&&a.__local_forage_encoded_blob}function y(a){var b=this,c=b._initReady().then(function(){var a=ya[b._dbInfo.name];if(a&&a.dbReady)return a.dbReady});return i(c,a,a),c}function z(a){o(a);for(var b=ya[a.name],c=b.forages,d=0;d<c.length;d++){var e=c[d];e._dbInfo.db&&(e._dbInfo.db.close(),e._dbInfo.db=null)}return a.db=null,s(a).then(function(b){return a.db=b,u(a)?t(a):b}).then(function(d){a.db=b.db=d;for(var e=0;e<c.length;e++)c[e]._dbInfo.db=d}).catch(function(b){throw q(a,b),b})}function A(a,b,c,d){void 0===d&&(d=1);try{var e=a.db.transaction(a.storeName,b);c(null,e)}catch(e){if(d>0&&(!a.db||"InvalidStateError"===e.name||"NotFoundError"===e.name))return va.resolve().then(function(){if(!a.db||"NotFoundError"===e.name&&!a.db.objectStoreNames.contains(a.storeName)&&a.version<=a.db.version)return a.db&&(a.version=a.db.version+1),t(a)}).then(function(){return z(a).then(function(){A(a,b,c,d-1)})}).catch(c);c(e)}}function B(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function C(a){function b(){return va.resolve()}var c=this,d={db:null};if(a)for(var e in a)d[e]=a[e];var f=ya[d.name];f||(f=B(),ya[d.name]=f),f.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=y);for(var g=[],h=0;h<f.forages.length;h++){var i=f.forages[h];i!==c&&g.push(i._initReady().catch(b))}var j=f.forages.slice(0);return va.all(g).then(function(){return d.db=f.db,s(d)}).then(function(a){return d.db=a,u(d,c._defaultConfig.version)?t(d):a}).then(function(a){d.db=f.db=a,c._dbInfo=d;for(var b=0;b<j.length;b++){var e=j[b];e!==c&&(e._dbInfo.db=d.db,e._dbInfo.version=d.version)}})}function D(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.get(a);h.onsuccess=function(){var a=h.result;void 0===a&&(a=null),x(a)&&(a=w(a)),b(a)},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function E(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.openCursor(),i=1;h.onsuccess=function(){var c=h.result;if(c){var d=c.value;x(d)&&(d=w(d));var e=a(d,c.key,i++);void 0!==e?b(e):c.continue()}else b()},h.onerror=function(){d(h.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function F(a,b,c){var d=this;a=j(a);var e=new va(function(c,e){var f;d.ready().then(function(){return f=d._dbInfo,"[object Blob]"===za.call(b)?n(f.db).then(function(a){return a?b:v(b)}):b}).then(function(b){A(d._dbInfo,Ba,function(f,g){if(f)return e(f);try{var h=g.objectStore(d._dbInfo.storeName);null===b&&(b=void 0);var i=h.put(b,a);g.oncomplete=function(){void 0===b&&(b=null),c(b)},g.onabort=g.onerror=function(){var a=i.error?i.error:i.transaction.error;e(a)}}catch(a){e(a)}})}).catch(e)});return h(e,c),e}function G(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Ba,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.delete(a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function H(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Ba,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function I(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.count();g.onsuccess=function(){a(g.result)},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function J(a,b){var c=this,d=new va(function(b,d){if(a<0)return void b(null);c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=!1,i=g.openCursor();i.onsuccess=function(){var c=i.result;if(!c)return void b(null);0===a?b(c.key):h?b(c.key):(h=!0,c.advance(a))},i.onerror=function(){d(i.error)}}catch(a){d(a)}})}).catch(d)});return h(d,b),d}function K(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.openCursor(),h=[];g.onsuccess=function(){var b=g.result;if(!b)return void a(h);h.push(b.key),b.continue()},g.onerror=function(){c(g.error)}}catch(a){c(a)}})}).catch(c)});return h(c,a),c}function L(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;if(a.name){var f=a.name===c.name&&e._dbInfo.db,g=f?va.resolve(e._dbInfo.db):s(a).then(function(b){var c=ya[a.name],d=c.forages;c.db=b;for(var e=0;e<d.length;e++)d[e]._dbInfo.db=b;return b});d=a.storeName?g.then(function(b){if(b.objectStoreNames.contains(a.storeName)){var c=b.version+1;o(a);var d=ya[a.name],e=d.forages;b.close();for(var f=0;f<e.length;f++){var g=e[f];g._dbInfo.db=null,g._dbInfo.version=c}return new va(function(b,d){var e=ua.open(a.name,c);e.onerror=function(a){e.result.close(),d(a)},e.onupgradeneeded=function(){e.result.deleteObjectStore(a.storeName)},e.onsuccess=function(){var a=e.result;a.close(),b(a)}}).then(function(a){d.db=a;for(var b=0;b<e.length;b++){var c=e[b];c._dbInfo.db=a,p(c._dbInfo)}}).catch(function(b){throw(q(a,b)||va.resolve()).catch(function(){}),b})}}):g.then(function(b){o(a);var c=ya[a.name],d=c.forages;b.close();for(var e=0;e<d.length;e++){d[e]._dbInfo.db=null}return new va(function(b,c){var d=ua.deleteDatabase(a.name);d.onerror=d.onblocked=function(a){var b=d.result;b&&b.close(),c(a)},d.onsuccess=function(){var a=d.result;a&&a.close(),b(a)}}).then(function(a){c.db=a;for(var b=0;b<d.length;b++)p(d[b]._dbInfo)}).catch(function(b){throw(q(a,b)||va.resolve()).catch(function(){}),b})})}else d=va.reject("Invalid arguments");return h(d,b),d}function M(){return"function"==typeof openDatabase}function N(a){var b,c,d,e,f,g=.75*a.length,h=a.length,i=0;"="===a[a.length-1]&&(g--,"="===a[a.length-2]&&g--);var j=new ArrayBuffer(g),k=new Uint8Array(j);for(b=0;b<h;b+=4)c=Da.indexOf(a[b]),d=Da.indexOf(a[b+1]),e=Da.indexOf(a[b+2]),f=Da.indexOf(a[b+3]),k[i++]=c<<2|d>>4,k[i++]=(15&d)<<4|e>>2,k[i++]=(3&e)<<6|63&f;return j}function O(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=Da[c[b]>>2],d+=Da[(3&c[b])<<4|c[b+1]>>4],d+=Da[(15&c[b+1])<<2|c[b+2]>>6],d+=Da[63&c[b+2]];return c.length%3==2?d=d.substring(0,d.length-1)+"=":c.length%3==1&&(d=d.substring(0,d.length-2)+"=="),d}function P(a,b){var c="";if(a&&(c=Ua.call(a)),a&&("[object ArrayBuffer]"===c||a.buffer&&"[object ArrayBuffer]"===Ua.call(a.buffer))){var d,e=Ga;a instanceof ArrayBuffer?(d=a,e+=Ia):(d=a.buffer,"[object Int8Array]"===c?e+=Ka:"[object Uint8Array]"===c?e+=La:"[object Uint8ClampedArray]"===c?e+=Ma:"[object Int16Array]"===c?e+=Na:"[object Uint16Array]"===c?e+=Pa:"[object Int32Array]"===c?e+=Oa:"[object Uint32Array]"===c?e+=Qa:"[object Float32Array]"===c?e+=Ra:"[object Float64Array]"===c?e+=Sa:b(new Error("Failed to get type for BinaryArray"))),b(e+O(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var c=Ea+a.type+"~"+O(this.result);b(Ga+Ja+c)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(c){console.error("Couldn't convert value into a JSON string: ",a),b(null,c)}}function Q(a){if(a.substring(0,Ha)!==Ga)return JSON.parse(a);var b,c=a.substring(Ta),d=a.substring(Ha,Ta);if(d===Ja&&Fa.test(c)){var e=c.match(Fa);b=e[1],c=c.substring(e[0].length)}var f=N(c);switch(d){case Ia:return f;case Ja:return g([f],{type:b});case Ka:return new Int8Array(f);case La:return new Uint8Array(f);case Ma:return new Uint8ClampedArray(f);case Na:return new Int16Array(f);case Pa:return new Uint16Array(f);case Oa:return new Int32Array(f);case Qa:return new Uint32Array(f);case Ra:return new Float32Array(f);case Sa:return new Float64Array(f);default:throw new Error("Unkown type: "+d)}}function R(a,b,c,d){a.executeSql("CREATE TABLE IF NOT EXISTS "+b.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],c,d)}function S(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];var e=new va(function(a,d){try{c.db=openDatabase(c.name,String(c.version),c.description,c.size)}catch(a){return d(a)}c.db.transaction(function(e){R(e,c,function(){b._dbInfo=c,a()},function(a,b){d(b)})},d)});return c.serializer=Va,e}function T(a,b,c,d,e,f){a.executeSql(c,d,e,function(a,g){g.code===g.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[name],function(a,h){h.rows.length?f(a,g):R(a,b,function(){a.executeSql(c,d,e,f)},f)},f):f(a,g)},f)}function U(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=e.serializer.deserialize(d)),b(d)},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function V(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName,[],function(c,d){for(var f=d.rows,g=f.length,h=0;h<g;h++){var i=f.item(h),j=i.value;if(j&&(j=e.serializer.deserialize(j)),void 0!==(j=a(j,i.key,h+1)))return void b(j)}b()},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function W(a,b,c,d){var e=this;a=j(a);var f=new va(function(f,g){e.ready().then(function(){void 0===b&&(b=null);var h=b,i=e._dbInfo;i.serializer.serialize(b,function(b,j){j?g(j):i.db.transaction(function(c){T(c,i,"INSERT OR REPLACE INTO "+i.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){f(h)},function(a,b){g(b)})},function(b){if(b.code===b.QUOTA_ERR){if(d>0)return void f(W.apply(e,[a,h,c,d-1]));g(b)}})})}).catch(g)});return h(f,c),f}function X(a,b,c){return W.apply(this,[a,b,c,1])}function Y(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function Z(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function $(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function _(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})}).catch(d)});return h(d,b),d}function aa(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})}).catch(c)});return h(c,a),c}function ba(a){return new va(function(b,c){a.transaction(function(d){d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(c,d){for(var e=[],f=0;f<d.rows.length;f++)e.push(d.rows.item(f).name);b({db:a,storeNames:e})},function(a,b){c(b)})},function(a){c(a)})})}function ca(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;return d=a.name?new va(function(b){var d;d=a.name===c.name?e._dbInfo.db:openDatabase(a.name,"","",0),b(a.storeName?{db:d,storeNames:[a.storeName]}:ba(d))}).then(function(a){return new va(function(b,c){a.db.transaction(function(d){function e(a){return new va(function(b,c){d.executeSql("DROP TABLE IF EXISTS "+a,[],function(){b()},function(a,b){c(b)})})}for(var f=[],g=0,h=a.storeNames.length;g<h;g++)f.push(e(a.storeNames[g]));va.all(f).then(function(){b()}).catch(function(a){c(a)})},function(a){c(a)})})}):va.reject("Invalid arguments"),h(d,b),d}function da(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(a){return!1}}function ea(a,b){var c=a.name+"/";return a.storeName!==b.storeName&&(c+=a.storeName+"/"),c}function fa(){var a="_localforage_support_test";try{return localStorage.setItem(a,!0),localStorage.removeItem(a),!1}catch(a){return!0}}function ga(){return!fa()||localStorage.length>0}function ha(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return c.keyPrefix=ea(a,b._defaultConfig),ga()?(b._dbInfo=c,c.serializer=Va,va.resolve()):va.reject()}function ia(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=localStorage.length-1;c>=0;c--){var d=localStorage.key(c);0===d.indexOf(a)&&localStorage.removeItem(d)}});return h(c,a),c}function ja(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo,d=localStorage.getItem(b.keyPrefix+a);return d&&(d=b.serializer.deserialize(d)),d});return h(d,b),d}function ka(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo,d=b.keyPrefix,e=d.length,f=localStorage.length,g=1,h=0;h<f;h++){var i=localStorage.key(h);if(0===i.indexOf(d)){var j=localStorage.getItem(i);if(j&&(j=b.serializer.deserialize(j)),void 0!==(j=a(j,i.substring(e),g++)))return j}}});return h(d,b),d}function la(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=localStorage.key(a)}catch(a){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return h(d,b),d}function ma(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=localStorage.length,d=[],e=0;e<c;e++){var f=localStorage.key(e);0===f.indexOf(a.keyPrefix)&&d.push(f.substring(a.keyPrefix.length))}return d});return h(c,a),c}function na(a){var b=this,c=b.keys().then(function(a){return a.length});return h(c,a),c}function oa(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo;localStorage.removeItem(b.keyPrefix+a)});return h(d,b),d}function pa(a,b,c){var d=this;a=j(a);var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new va(function(e,f){var g=d._dbInfo;g.serializer.serialize(b,function(b,d){if(d)f(d);else try{localStorage.setItem(g.keyPrefix+a,b),e(c)}catch(a){"QuotaExceededError"!==a.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==a.name||f(a),f(a)}})})});return h(e,c),e}function qa(a,b){if(b=k.apply(this,arguments),a="function"!=typeof a&&a||{},!a.name){var c=this.config();a.name=a.name||c.name,a.storeName=a.storeName||c.storeName}var d,e=this;return d=a.name?new va(function(b){b(a.storeName?ea(a,e._defaultConfig):a.name+"/")}).then(function(a){for(var b=localStorage.length-1;b>=0;b--){var c=localStorage.key(b);0===c.indexOf(a)&&localStorage.removeItem(c)}}):va.reject("Invalid arguments"),h(d,b),d}function ra(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function sa(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&($a(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}var ta="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ua=e();"undefined"==typeof Promise&&a(3);var va=Promise,wa="local-forage-detect-blob-support",xa=void 0,ya={},za=Object.prototype.toString,Aa="readonly",Ba="readwrite",Ca={_driver:"asyncStorage",_initStorage:C,_support:f(),iterate:E,getItem:D,setItem:F,removeItem:G,clear:H,length:I,key:J,keys:K,dropInstance:L},Da="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ea="~~local_forage_type~",Fa=/^~~local_forage_type~([^~]+)~/,Ga="__lfsc__:",Ha=Ga.length,Ia="arbf",Ja="blob",Ka="si08",La="ui08",Ma="uic8",Na="si16",Oa="si32",Pa="ur16",Qa="ui32",Ra="fl32",Sa="fl64",Ta=Ha+Ia.length,Ua=Object.prototype.toString,Va={serialize:P,deserialize:Q,stringToBuffer:N,bufferToString:O},Wa={_driver:"webSQLStorage",_initStorage:S,_support:M(),iterate:V,getItem:U,setItem:X,removeItem:Y,clear:Z,length:$,key:_,keys:aa,dropInstance:ca},Xa={_driver:"localStorageWrapper",_initStorage:ha,_support:da(),iterate:ka,getItem:ja,setItem:pa,removeItem:oa,clear:ia,length:na,key:la,keys:ma,dropInstance:qa},Ya=function(a,b){return a===b||"number"==typeof a&&"number"==typeof b&&isNaN(a)&&isNaN(b)},Za=function(a,b){for(var c=a.length,d=0;d<c;){if(Ya(a[d],b))return!0;d++}return!1},$a=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},_a={},ab={},bb={INDEXEDDB:Ca,WEBSQL:Wa,LOCALSTORAGE:Xa},cb=[bb.INDEXEDDB._driver,bb.WEBSQL._driver,bb.LOCALSTORAGE._driver],db=["dropInstance"],eb=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(db),fb={description:"",driver:cb.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},gb=function(){function a(b){d(this,a);for(var c in bb)if(bb.hasOwnProperty(c)){var e=bb[c],f=e._driver;this[c]=f,_a[f]||this.defineDriver(e)}this._defaultConfig=sa({},fb),this._config=sa({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return a.prototype.config=function(a){if("object"===(void 0===a?"undefined":ta(a))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a){if("storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),"version"===b&&"number"!=typeof a[b])return new Error("Database version must be a number.");this._config[b]=a[b]}return!("driver"in a&&a.driver)||this.setDriver(this._config.driver)}return"string"==typeof a?this._config[a]:this._config},a.prototype.defineDriver=function(a,b,c){var d=new va(function(b,c){try{var d=a._driver,e=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!a._driver)return void c(e);for(var f=eb.concat("_initStorage"),g=0,i=f.length;g<i;g++){var j=f[g];if((!Za(db,j)||a[j])&&"function"!=typeof a[j])return void c(e)}(function(){for(var b=function(a){return function(){var b=new Error("Method "+a+" is not implemented by the current driver"),c=va.reject(b);return h(c,arguments[arguments.length-1]),c}},c=0,d=db.length;c<d;c++){var e=db[c];a[e]||(a[e]=b(e))}})();var k=function(c){_a[d]&&console.info("Redefining LocalForage driver: "+d),_a[d]=a,ab[d]=c,b()};"_support"in a?a._support&&"function"==typeof a._support?a._support().then(k,c):k(!!a._support):k(!0)}catch(a){c(a)}});return i(d,b,c),d},a.prototype.driver=function(){return this._driver||null},a.prototype.getDriver=function(a,b,c){var d=_a[a]?va.resolve(_a[a]):va.reject(new Error("Driver not found."));return i(d,b,c),d},a.prototype.getSerializer=function(a){var b=va.resolve(Va);return i(b,a),b},a.prototype.ready=function(a){var b=this,c=b._driverSet.then(function(){return null===b._ready&&(b._ready=b._initDriver()),b._ready});return i(c,a,a),c},a.prototype.setDriver=function(a,b,c){function d(){g._config.driver=g.driver()}function e(a){return g._extend(a),d(),g._ready=g._initStorage(g._config),g._ready}function f(a){return function(){function b(){for(;c<a.length;){var f=a[c];return c++,g._dbInfo=null,g._ready=null,g.getDriver(f).then(e).catch(b)}d();var h=new Error("No available storage method found.");return g._driverSet=va.reject(h),g._driverSet}var c=0;return b()}}var g=this;$a(a)||(a=[a]);var h=this._getSupportedDrivers(a),j=null!==this._driverSet?this._driverSet.catch(function(){return va.resolve()}):va.resolve();return this._driverSet=j.then(function(){var a=h[0];return g._dbInfo=null,g._ready=null,g.getDriver(a).then(function(a){g._driver=a._driver,d(),g._wrapLibraryMethodsWithReady(),g._initDriver=f(h)})}).catch(function(){d();var a=new Error("No available storage method found.");return g._driverSet=va.reject(a),g._driverSet}),i(this._driverSet,b,c),this._driverSet},a.prototype.supports=function(a){return!!ab[a]},a.prototype._extend=function(a){sa(this,a)},a.prototype._getSupportedDrivers=function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];this.supports(e)&&b.push(e)}return b},a.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,b=eb.length;a<b;a++)ra(this,eb[a])},a.prototype.createInstance=function(b){return new a(b)},a}(),hb=new gb;b.exports=hb},{3:3}]},{},[4])(4)});
var luxon=function(e){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),u(e.prototype.constructor=e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t,n){return(c=function(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),1}catch(e){return}}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);r=new(Function.bind.apply(e,r));return n&&u(r,n.prototype),r}).apply(null,arguments)}function t(e){var n="function"==typeof Map?new Map:void 0;return function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return c(e,arguments,a(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),u(t,e)}(e)}function l(e,t){if(null==e)return{};for(var n,r={},i=Object.keys(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||(r[n]=e[n]);return r}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(t(Error)),d=function(t){function e(e){return t.call(this,"Invalid DateTime: "+e.toMessage())||this}return i(e,t),e}(n),h=function(t){function e(e){return t.call(this,"Invalid Interval: "+e.toMessage())||this}return i(e,t),e}(n),y=function(t){function e(e){return t.call(this,"Invalid Duration: "+e.toMessage())||this}return i(e,t),e}(n),T=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(n),v=function(t){function e(e){return t.call(this,"Invalid unit "+e)||this}return i(e,t),e}(n),p=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(n),m=function(e){function t(){return e.call(this,"Zone is an abstract class")||this}return i(t,e),t}(n),g="numeric",w="short",S="long",b={year:g,month:g,day:g},O={year:g,month:w,day:g},M={year:g,month:w,day:g,weekday:w},N={year:g,month:S,day:g},D={year:g,month:S,day:g,weekday:S},E={hour:g,minute:g},V={hour:g,minute:g,second:g},I={hour:g,minute:g,second:g,timeZoneName:w},x={hour:g,minute:g,second:g,timeZoneName:S},C={hour:g,minute:g,hourCycle:"h23"},F={hour:g,minute:g,second:g,hourCycle:"h23"},Z={hour:g,minute:g,second:g,hourCycle:"h23",timeZoneName:w},L={hour:g,minute:g,second:g,hourCycle:"h23",timeZoneName:S},A={year:g,month:g,day:g,hour:g,minute:g},z={year:g,month:g,day:g,hour:g,minute:g,second:g},j={year:g,month:w,day:g,hour:g,minute:g},q={year:g,month:w,day:g,hour:g,minute:g,second:g},_={year:g,month:w,day:g,weekday:w,hour:g,minute:g},U={year:g,month:S,day:g,hour:g,minute:g,timeZoneName:w},R={year:g,month:S,day:g,hour:g,minute:g,second:g,timeZoneName:w},H={year:g,month:S,day:g,weekday:S,hour:g,minute:g,timeZoneName:S},P={year:g,month:S,day:g,weekday:S,hour:g,minute:g,second:g,timeZoneName:S};function W(e){return void 0===e}function J(e){return"number"==typeof e}function Y(e){return"number"==typeof e&&e%1==0}function G(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function $(e,n,r){if(0!==e.length)return e.reduce(function(e,t){t=[n(t),t];return e&&r(e[0],t[0])===e[0]?e:t},null)[1]}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Q(e,t,n){return Y(e)&&t<=e&&e<=n}function K(e,t){void 0===t&&(t=2);t=e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0");return t}function X(e){if(!W(e)&&null!==e&&""!==e)return parseInt(e,10)}function ee(e){if(!W(e)&&null!==e&&""!==e)return parseFloat(e)}function te(e){if(!W(e)&&null!==e&&""!==e){e=1e3*parseFloat("0."+e);return Math.floor(e)}}function ne(e,t,n){void 0===n&&(n=!1);t=Math.pow(10,t);return(n?Math.trunc:Math.round)(e*t)/t}function re(e){return e%4==0&&(e%100!=0||e%400==0)}function ie(e){return re(e)?366:365}function oe(e,t){var n,r=(n=t-1)-(r=12)*Math.floor(n/r)+1;return 2==r?re(e+(t-r)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function ae(e){var t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&0<=e.year&&(t=new Date(t)).setUTCFullYear(t.getUTCFullYear()-1900),+t}function ue(e){var t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,e=e-1,e=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7;return 4==t||3==e?53:52}function se(e){return 99<e?e:60<e?1900+e:2e3+e}function ce(e,t,n,r){void 0===r&&(r=null);var i=new Date(e),e={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(e.timeZone=r);e=s({timeZoneName:t},e),i=new Intl.DateTimeFormat(n,e).formatToParts(i).find(function(e){return"timezonename"===e.type.toLowerCase()});return i?i.value:null}function le(e,t){e=parseInt(e,10);Number.isNaN(e)&&(e=0);t=parseInt(t,10)||0;return 60*e+(e<0||Object.is(e,-0)?-t:t)}function fe(e){var t=Number(e);if("boolean"==typeof e||""===e||Number.isNaN(t))throw new p("Invalid unit value "+e);return t}function de(e,t){var n,r,i={};for(n in e)!B(e,n)||null!=(r=e[n])&&(i[t(n)]=fe(r));return i}function he(e,t){var n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=0<=e?"+":"-";switch(t){case"short":return i+K(n,2)+":"+K(r,2);case"narrow":return i+n+(0<r?":"+r:"");case"techie":return i+K(n,2)+K(r,2);default:throw new RangeError("Value format "+t+" is out of range for property format")}}function me(e){return n=e,["hour","minute","second","millisecond"].reduce(function(e,t){return e[t]=n[t],e},{});var n}var ye=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/,ve=["January","February","March","April","May","June","July","August","September","October","November","December"],pe=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ge=["J","F","M","A","M","J","J","A","S","O","N","D"];function we(e){switch(e){case"narrow":return[].concat(ge);case"short":return[].concat(pe);case"long":return[].concat(ve);case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var ke=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Te=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Se=["M","T","W","T","F","S","S"];function be(e){switch(e){case"narrow":return[].concat(Se);case"short":return[].concat(Te);case"long":return[].concat(ke);case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var Oe=["AM","PM"],Me=["Before Christ","Anno Domini"],Ne=["BC","AD"],De=["B","A"];function Ee(e){switch(e){case"narrow":return[].concat(De);case"short":return[].concat(Ne);case"long":return[].concat(Me);default:return null}}function Ve(e,t){for(var n="",r=k(e);!(i=r()).done;){var i=i.value;i.literal?n+=i.val:n+=t(i.val)}return n}var Ie={D:b,DD:O,DDD:N,DDDD:D,t:E,tt:V,ttt:I,tttt:x,T:C,TT:F,TTT:Z,TTTT:L,f:A,ff:j,fff:U,ffff:H,F:z,FF:q,FFF:R,FFFF:P},xe=function(){function d(e,t){this.opts=t,this.loc=e,this.systemLoc=null}d.create=function(e,t){return new d(e,t=void 0===t?{}:t)},d.parseFormat=function(e){for(var t=null,n="",r=!1,i=[],o=0;o<e.length;o++){var a=e.charAt(o);"'"===a?(0<n.length&&i.push({literal:r,val:n}),t=null,n="",r=!r):r||a===t?n+=a:(0<n.length&&i.push({literal:!1,val:n}),t=n=a)}return 0<n.length&&i.push({literal:r,val:n}),i},d.macroTokenToFormatOpts=function(e){return Ie[e]};var e=d.prototype;return e.formatWithSystemDefault=function(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,s({},this.opts,t)).format()},e.formatDateTime=function(e,t){return this.loc.dtFormatter(e,s({},this.opts,t=void 0===t?{}:t)).format()},e.formatDateTimeParts=function(e,t){return this.loc.dtFormatter(e,s({},this.opts,t=void 0===t?{}:t)).formatToParts()},e.resolvedOptions=function(e,t){return this.loc.dtFormatter(e,s({},this.opts,t=void 0===t?{}:t)).resolvedOptions()},e.num=function(e,t){if(void 0===t&&(t=0),this.opts.forceSimple)return K(e,t);var n=s({},this.opts);return 0<t&&(n.padTo=t),this.loc.numberFormatter(n).format(e)},e.formatDateTimeFromString=function(r,e){var n=this,i="en"===this.loc.listingMode(),t=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,o=function(e,t){return n.loc.extract(r,e,t)},a=function(e){return r.isOffsetFixed&&0===r.offset&&e.allowZ?"Z":r.isValid?r.zone.formatOffset(r.ts,e.format):""},u=function(){return i?Oe[r.hour<12?0:1]:o({hour:"numeric",hourCycle:"h12"},"dayperiod")},s=function(e,t){return i?(n=r,we(e)[n.month-1]):o(t?{month:e}:{month:e,day:"numeric"},"month");var n},c=function(e,t){return i?(n=r,be(e)[n.weekday-1]):o(t?{weekday:e}:{weekday:e,month:"long",day:"numeric"},"weekday");var n},l=function(e){var t=d.macroTokenToFormatOpts(e);return t?n.formatWithSystemDefault(r,t):e},f=function(e){return i?(t=r,Ee(e)[t.year<0?0:1]):o({era:e},"era");var t};return Ve(d.parseFormat(e),function(e){switch(e){case"S":return n.num(r.millisecond);case"u":case"SSS":return n.num(r.millisecond,3);case"s":return n.num(r.second);case"ss":return n.num(r.second,2);case"uu":return n.num(Math.floor(r.millisecond/10),2);case"uuu":return n.num(Math.floor(r.millisecond/100));case"m":return n.num(r.minute);case"mm":return n.num(r.minute,2);case"h":return n.num(r.hour%12==0?12:r.hour%12);case"hh":return n.num(r.hour%12==0?12:r.hour%12,2);case"H":return n.num(r.hour);case"HH":return n.num(r.hour,2);case"Z":return a({format:"narrow",allowZ:n.opts.allowZ});case"ZZ":return a({format:"short",allowZ:n.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:n.opts.allowZ});case"ZZZZ":return r.zone.offsetName(r.ts,{format:"short",locale:n.loc.locale});case"ZZZZZ":return r.zone.offsetName(r.ts,{format:"long",locale:n.loc.locale});case"z":return r.zoneName;case"a":return u();case"d":return t?o({day:"numeric"},"day"):n.num(r.day);case"dd":return t?o({day:"2-digit"},"day"):n.num(r.day,2);case"c":return n.num(r.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return n.num(r.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return t?o({month:"numeric",day:"numeric"},"month"):n.num(r.month);case"LL":return t?o({month:"2-digit",day:"numeric"},"month"):n.num(r.month,2);case"LLL":return s("short",!0);case"LLLL":return s("long",!0);case"LLLLL":return s("narrow",!0);case"M":return t?o({month:"numeric"},"month"):n.num(r.month);case"MM":return t?o({month:"2-digit"},"month"):n.num(r.month,2);case"MMM":return s("short",!1);case"MMMM":return s("long",!1);case"MMMMM":return s("narrow",!1);case"y":return t?o({year:"numeric"},"year"):n.num(r.year);case"yy":return t?o({year:"2-digit"},"year"):n.num(r.year.toString().slice(-2),2);case"yyyy":return t?o({year:"numeric"},"year"):n.num(r.year,4);case"yyyyyy":return t?o({year:"numeric"},"year"):n.num(r.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return n.num(r.weekYear.toString().slice(-2),2);case"kkkk":return n.num(r.weekYear,4);case"W":return n.num(r.weekNumber);case"WW":return n.num(r.weekNumber,2);case"o":return n.num(r.ordinal);case"ooo":return n.num(r.ordinal,3);case"q":return n.num(r.quarter);case"qq":return n.num(r.quarter,2);case"X":return n.num(Math.floor(r.ts/1e3));case"x":return n.num(r.ts);default:return l(e)}})},e.formatDurationFromString=function(e,t){var n,r=this,i=function(e){switch(e[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=d.parseFormat(t),t=o.reduce(function(e,t){var n=t.literal,t=t.val;return n?e:e.concat(t)},[]),t=e.shiftTo.apply(e,t.map(i).filter(function(e){return e}));return Ve(o,(n=t,function(e){var t=i(e);return t?r.num(n.get(t),e.length):e}))},d}(),Ce=function(){function e(e,t){this.reason=e,this.explanation=t}return e.prototype.toMessage=function(){return this.explanation?this.reason+": "+this.explanation:this.reason},e}(),Fe=function(){function e(){}var t=e.prototype;return t.offsetName=function(e,t){throw new m},t.formatOffset=function(e,t){throw new m},t.offset=function(e){throw new m},t.equals=function(e){throw new m},o(e,[{key:"type",get:function(){throw new m}},{key:"name",get:function(){throw new m}},{key:"ianaName",get:function(){return this.name}},{key:"isUniversal",get:function(){throw new m}},{key:"isValid",get:function(){throw new m}}]),e}(),Ze=null,Le=function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.offsetName=function(e,t){return ce(e,t.format,t.locale)},n.formatOffset=function(e,t){return he(this.offset(e),t)},n.offset=function(e){return-new Date(e).getTimezoneOffset()},n.equals=function(e){return"system"===e.type},o(t,[{key:"type",get:function(){return"system"}},{key:"name",get:function(){return(new Intl.DateTimeFormat).resolvedOptions().timeZone}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!0}}],[{key:"instance",get:function(){return Ze=null===Ze?new t:Ze}}]),t}(Fe),Ae={};var ze={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};var je={},qe=function(n){function r(e){var t=n.call(this)||this;return t.zoneName=e,t.valid=r.isValidZone(e),t}i(r,n),r.create=function(e){return je[e]||(je[e]=new r(e)),je[e]},r.resetCache=function(){je={},Ae={}},r.isValidSpecifier=function(e){return this.isValidZone(e)},r.isValidZone=function(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}};var e=r.prototype;return e.offsetName=function(e,t){return ce(e,t.format,t.locale,this.name)},e.formatOffset=function(e,t){return he(this.offset(e),t)},e.offset=function(e){var t=new Date(e);if(isNaN(t))return NaN;var n=(o=this.name,Ae[o]||(Ae[o]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:o,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Ae[o]),r=n.formatToParts?function(e,t){for(var n=e.formatToParts(t),r=[],i=0;i<n.length;i++){var o=n[i],a=o.type,u=o.value,o=ze[a];"era"===a?r[o]=u:W(o)||(r[o]=parseInt(u,10))}return r}(n,t):(a=t,u=(s=n).format(a).replace(/\u200E/g,""),a=(s=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(u))[1],u=s[2],[s[3],a,u,s[4],s[5],s[6],s[7]]),i=r[0],e=r[1],o=r[2],n=r[3],a=r[4],u=r[5],s=r[6],r=+t,t=r%1e3;return(ae({year:i="BC"===n?1-Math.abs(i):i,month:e,day:o,hour:24===a?0:a,minute:u,second:s,millisecond:0})-(r-=0<=t?t:1e3+t))/6e4},e.equals=function(e){return"iana"===e.type&&e.name===this.name},o(r,[{key:"type",get:function(){return"iana"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return this.valid}}]),r}(Fe),_e=null,Ue=function(n){function t(e){var t=n.call(this)||this;return t.fixed=e,t}i(t,n),t.instance=function(e){return 0===e?t.utcInstance:new t(e)},t.parseSpecifier=function(e){if(e){e=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(e)return new t(le(e[1],e[2]))}return null};var e=t.prototype;return e.offsetName=function(){return this.name},e.formatOffset=function(e,t){return he(this.fixed,t)},e.offset=function(){return this.fixed},e.equals=function(e){return"fixed"===e.type&&e.fixed===this.fixed},o(t,[{key:"type",get:function(){return"fixed"}},{key:"name",get:function(){return 0===this.fixed?"UTC":"UTC"+he(this.fixed,"narrow")}},{key:"ianaName",get:function(){return 0===this.fixed?"Etc/UTC":"Etc/GMT"+he(-this.fixed,"narrow")}},{key:"isUniversal",get:function(){return!0}},{key:"isValid",get:function(){return!0}}],[{key:"utcInstance",get:function(){return _e=null===_e?new t(0):_e}}]),t}(Fe),Re=function(n){function e(e){var t=n.call(this)||this;return t.zoneName=e,t}i(e,n);var t=e.prototype;return t.offsetName=function(){return null},t.formatOffset=function(){return""},t.offset=function(){return NaN},t.equals=function(){return!1},o(e,[{key:"type",get:function(){return"invalid"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!1}}]),e}(Fe);function He(e,t){if(W(e)||null===e)return t;if(e instanceof Fe)return e;if("string"!=typeof e)return J(e)?Ue.instance(e):"object"==typeof e&&e.offset&&"number"==typeof e.offset?e:new Re(e);var n=e.toLowerCase();return"local"===n||"system"===n?t:"utc"===n||"gmt"===n?Ue.utcInstance:Ue.parseSpecifier(n)||qe.create(e)}var Pe,We=function(){return Date.now()},Je="system",Ye=null,Ge=null,$e=null,Be=function(){function e(){}return e.resetCaches=function(){ct.resetCache(),qe.resetCache()},o(e,null,[{key:"now",get:function(){return We},set:function(e){We=e}},{key:"defaultZone",get:function(){return He(Je,Le.instance)},set:function(e){Je=e}},{key:"defaultLocale",get:function(){return Ye},set:function(e){Ye=e}},{key:"defaultNumberingSystem",get:function(){return Ge},set:function(e){Ge=e}},{key:"defaultOutputCalendar",get:function(){return $e},set:function(e){$e=e}},{key:"throwOnInvalid",get:function(){return Pe},set:function(e){Pe=e}}]),e}(),Qe=["base"],Ke=["padTo","floor"],Xe={};var et={};function tt(e,t){void 0===t&&(t={});var n=JSON.stringify([e,t]),r=et[n];return r||(r=new Intl.DateTimeFormat(e,t),et[n]=r),r}var nt={};var rt={};var it=null;function ot(e,t,n,r,i){n=e.listingMode(n);return"error"===n?null:("en"===n?r:i)(t)}var at=function(){function e(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1,n.padTo,n.floor;var r=l(n,Ke);(!t||0<Object.keys(r).length)&&(r=s({useGrouping:!1},n),0<n.padTo&&(r.minimumIntegerDigits=n.padTo),this.inf=function(e,t){void 0===t&&(t={});var n=JSON.stringify([e,t]),r=nt[n];return r||(r=new Intl.NumberFormat(e,t),nt[n]=r),r}(e,r))}return e.prototype.format=function(e){if(this.inf){var t=this.floor?Math.floor(e):e;return this.inf.format(t)}return K(this.floor?Math.floor(e):ne(e,3),this.padTo)},e}(),ut=function(){function e(e,t,n){var r,i;this.opts=n,e.zone.isUniversal?(i=0<=(i=e.offset/60*-1)?"Etc/GMT+"+i:"Etc/GMT"+i,0!==e.offset&&qe.create(i).valid?(r=i,this.dt=e):(r="UTC",n.timeZoneName?this.dt=e:this.dt=0===e.offset?e:tr.fromMillis(e.ts+60*e.offset*1e3))):"system"===e.zone.type?this.dt=e:r=(this.dt=e).zone.name;e=s({},this.opts);r&&(e.timeZone=r),this.dtf=tt(t,e)}var t=e.prototype;return t.format=function(){return this.dtf.format(this.dt.toJSDate())},t.formatToParts=function(){return this.dtf.formatToParts(this.dt.toJSDate())},t.resolvedOptions=function(){return this.dtf.resolvedOptions()},e}(),st=function(){function e(e,t,n){this.opts=s({style:"long"},n),!t&&G()&&(this.rtf=function(e,t){(r=t=void 0===t?{}:t).base;var n=l(r,Qe),r=JSON.stringify([e,n]);return(n=rt[r])||(n=new Intl.RelativeTimeFormat(e,t),rt[r]=n),n}(e,n))}var t=e.prototype;return t.format=function(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,n,r){void 0===n&&(n="always"),void 0===r&&(r=!1);var i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===n&&o){var a="days"===e;switch(t){case 1:return a?"tomorrow":"next "+i[e][0];case-1:return a?"yesterday":"last "+i[e][0];case 0:return a?"today":"this "+i[e][0]}}var u=Object.is(t,-0)||t<0,o=1===(n=Math.abs(t)),t=i[e],o=r?!o&&t[2]||t[1]:o?i[e][0]:e;return u?n+" "+o+" ago":"in "+n+" "+o}(t,e,this.opts.numeric,"long"!==this.opts.style)},t.formatToParts=function(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]},e}(),ct=function(){function i(e,t,n,r){var i=function(e){var t=e.indexOf("-u-");if(-1===t)return[e];t=e.substring(0,t);try{n=tt(e).resolvedOptions()}catch(e){n=tt(t).resolvedOptions()}var n=n;return[t,n.numberingSystem,n.calendar]}(e),o=i[0],e=i[1],i=i[2];this.locale=o,this.numberingSystem=t||e||null,this.outputCalendar=n||i||null,this.intl=(e=this.locale,n=this.numberingSystem,((i=this.outputCalendar)||n)&&(e+="-u",i&&(e+="-ca-"+i),n&&(e+="-nu-"+n)),e),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}i.fromOpts=function(e){return i.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)},i.create=function(e,t,n,r){void 0===r&&(r=!1);e=e||Be.defaultLocale;return new i(e||(r?"en-US":it=it||(new Intl.DateTimeFormat).resolvedOptions().locale),t||Be.defaultNumberingSystem,n||Be.defaultOutputCalendar,e)},i.resetCache=function(){it=null,et={},nt={},rt={}},i.fromObject=function(e){var t=void 0===e?{}:e,n=t.locale,e=t.numberingSystem,t=t.outputCalendar;return i.create(n,e,t)};var e=i.prototype;return e.listingMode=function(){var e=this.isEnglish(),t=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar);return e&&t?"en":"intl"},e.clone=function(e){return e&&0!==Object.getOwnPropertyNames(e).length?i.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1):this},e.redefaultToEN=function(e){return this.clone(s({},e=void 0===e?{}:e,{defaultToEN:!0}))},e.redefaultToSystem=function(e){return this.clone(s({},e=void 0===e?{}:e,{defaultToEN:!1}))},e.months=function(n,r,e){var i=this;return void 0===r&&(r=!1),ot(this,n,e=void 0===e?!0:e,we,function(){var t=r?{month:n,day:"numeric"}:{month:n},e=r?"format":"standalone";return i.monthsCache[e][n]||(i.monthsCache[e][n]=function(e){for(var t=[],n=1;n<=12;n++){var r=tr.utc(2016,n,1);t.push(e(r))}return t}(function(e){return i.extract(e,t,"month")})),i.monthsCache[e][n]})},e.weekdays=function(n,r,e){var i=this;return void 0===r&&(r=!1),ot(this,n,e=void 0===e?!0:e,be,function(){var t=r?{weekday:n,year:"numeric",month:"long",day:"numeric"}:{weekday:n},e=r?"format":"standalone";return i.weekdaysCache[e][n]||(i.weekdaysCache[e][n]=function(e){for(var t=[],n=1;n<=7;n++){var r=tr.utc(2016,11,13+n);t.push(e(r))}return t}(function(e){return i.extract(e,t,"weekday")})),i.weekdaysCache[e][n]})},e.meridiems=function(e){var n=this;return ot(this,void 0,e=void 0===e?!0:e,function(){return Oe},function(){var t;return n.meridiemCache||(t={hour:"numeric",hourCycle:"h12"},n.meridiemCache=[tr.utc(2016,11,13,9),tr.utc(2016,11,13,19)].map(function(e){return n.extract(e,t,"dayperiod")})),n.meridiemCache})},e.eras=function(e,t){var n=this;return ot(this,e,t=void 0===t?!0:t,Ee,function(){var t={era:e};return n.eraCache[e]||(n.eraCache[e]=[tr.utc(-40,1,1),tr.utc(2017,1,1)].map(function(e){return n.extract(e,t,"era")})),n.eraCache[e]})},e.extract=function(e,t,n){t=this.dtFormatter(e,t).formatToParts().find(function(e){return e.type.toLowerCase()===n});return t?t.value:null},e.numberFormatter=function(e){return new at(this.intl,(e=void 0===e?{}:e).forceSimple||this.fastNumbers,e)},e.dtFormatter=function(e,t){return new ut(e,this.intl,t=void 0===t?{}:t)},e.relFormatter=function(e){return void 0===e&&(e={}),new st(this.intl,this.isEnglish(),e)},e.listFormatter=function(e){return function(e,t){void 0===t&&(t={});var n=JSON.stringify([e,t]),r=Xe[n];return r||(r=new Intl.ListFormat(e,t),Xe[n]=r),r}(this.intl,e=void 0===e?{}:e)},e.isEnglish=function(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")},e.equals=function(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar},o(i,[{key:"fastNumbers",get:function(){var e;return null==this.fastNumbersCached&&(this.fastNumbersCached=(!(e=this).numberingSystem||"latn"===e.numberingSystem)&&("latn"===e.numberingSystem||!e.locale||e.locale.startsWith("en")||"latn"===new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}}]),i}();function lt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.reduce(function(e,t){return e+t.source},"");return RegExp("^"+r+"$")}function ft(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(o){return t.reduce(function(e,t){var n=e[0],r=e[1],i=e[2],e=t(o,i),t=e[0],i=e[1],e=e[2];return[s({},n,t),i||r,e]},[{},null,1]).slice(0,2)}}function dt(e){if(null==e)return[null,null];for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i],u=a[0],a=a[1],u=u.exec(e);if(u)return a(u)}return[null,null]}function ht(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(e,t){for(var n={},r=0;r<i.length;r++)n[i[r]]=X(e[t+r]);return[n,null,t+r]}}var mt=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,yt=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,n=RegExp(yt.source+("(?:"+mt.source+"?(?:\\[("+ye.source+")\\])?)?")),w=RegExp("(?:T"+n.source+")?"),g=ht("weekYear","weekNumber","weekDay"),S=ht("year","ordinal"),mt=RegExp(yt.source+" ?(?:"+mt.source+"|("+ye.source+"))?"),ye=RegExp("(?: "+mt.source+")?");function vt(e,t,n){t=e[t];return W(t)?n:X(t)}function pt(e,t){return[{hours:vt(e,t,0),minutes:vt(e,t+1,0),seconds:vt(e,t+2,0),milliseconds:te(e[t+3])},null,t+4]}function gt(e,t){var n=!e[t]&&!e[t+1],e=le(e[t+1],e[t+2]);return[{},n?null:Ue.instance(e),t+3]}function wt(e,t){return[{},e[t]?qe.create(e[t]):null,t+1]}var kt=RegExp("^T?"+yt.source+"$"),Tt=/^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;function St(e){function t(e,t){return void 0===t&&(t=!1),void 0!==e&&(t||e&&l)?-e:e}var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],u=e[5],s=e[6],c=e[7],e=e[8],l="-"===n[0],n=c&&"-"===c[0];return[{years:t(ee(r)),months:t(ee(i)),weeks:t(ee(o)),days:t(ee(a)),hours:t(ee(u)),minutes:t(ee(s)),seconds:t(ee(c),"-0"===c),milliseconds:t(te(e),n)}]}var bt={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Ot(e,t,n,r,i,o,a){o={year:2===t.length?se(X(t)):X(t),month:pe.indexOf(n)+1,day:X(r),hour:X(i),minute:X(o)};return a&&(o.second=X(a)),e&&(o.weekday=3<e.length?ke.indexOf(e)+1:Te.indexOf(e)+1),o}var Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Nt(e){var t=e[1],n=e[2],r=e[3],i=e[4],o=e[5],a=e[6],u=e[7],s=e[8],c=e[9],l=e[10],e=e[11],u=Ot(t,i,r,n,o,a,u),e=s?bt[s]:c?0:le(l,e);return[u,new Ue(e)]}var Dt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Et=/^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Vt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function It(e){var t=e[1],n=e[2],r=e[3];return[Ot(t,e[4],r,n,e[5],e[6],e[7]),Ue.utcInstance]}function xt(e){var t=e[1],n=e[2],r=e[3],i=e[4],o=e[5],a=e[6];return[Ot(t,e[7],n,r,i,o,a),Ue.utcInstance]}var Ct=lt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,w),Ft=lt(/(\d{4})-?W(\d\d)(?:-?(\d))?/,w),Zt=lt(/(\d{4})-?(\d{3})/,w),Lt=lt(n),At=ft(function(e,t){return[{year:vt(e,t),month:vt(e,t+1,1),day:vt(e,t+2,1)},null,t+3]},pt,gt,wt),zt=ft(g,pt,gt,wt),jt=ft(S,pt,gt,wt),qt=ft(pt,gt,wt);var _t=ft(pt);var Ut=lt(/(\d{4})-(\d\d)-(\d\d)/,ye),Rt=lt(mt),Ht=ft(pt,gt,wt);var S={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},Pt=s({years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6}},S),ye=365.2425,mt=30.436875,Wt=s({years:{quarters:4,months:12,weeks:ye/7,days:ye,hours:24*ye,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:ye/28,days:ye/4,hours:24*ye/4,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:mt/7,days:mt,hours:24*mt,minutes:43829.1,seconds:2629746,milliseconds:2629746e3}},S),Jt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Yt=Jt.slice(0).reverse();function Gt(e,t,n){e={values:(n=void 0===n?!1:n)?t.values:s({},e.values,t.values||{}),loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy};return new Bt(e)}function $t(e,t,n,r,i){var o=e[i][n],a=t[n]/o,a=!(Math.sign(a)===Math.sign(r[i]))&&0!==r[i]&&Math.abs(a)<=1?(e=a)<0?Math.floor(e):Math.ceil(e):Math.trunc(a);r[i]+=a,t[n]-=a*o}var Bt=function(){function m(e){var t="longterm"===e.conversionAccuracy||!1;this.values=e.values,this.loc=e.loc||ct.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=t?Wt:Pt,this.isLuxonDuration=!0}m.fromMillis=function(e,t){return m.fromObject({milliseconds:e},t)},m.fromObject=function(e,t){if(void 0===t&&(t={}),null==e||"object"!=typeof e)throw new p("Duration.fromObject: argument expected to be an object, got "+(null===e?"null":typeof e));return new m({values:de(e,m.normalizeUnit),loc:ct.fromObject(t),conversionAccuracy:t.conversionAccuracy})},m.fromDurationLike=function(e){if(J(e))return m.fromMillis(e);if(m.isDuration(e))return e;if("object"==typeof e)return m.fromObject(e);throw new p("Unknown duration argument "+e+" of type "+typeof e)},m.fromISO=function(e,t){var n=dt(e,[Tt,St])[0];return n?m.fromObject(n,t):m.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},m.fromISOTime=function(e,t){var n=dt(e,[kt,_t])[0];return n?m.fromObject(n,t):m.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},m.invalid=function(e,t){if(void 0===t&&(t=null),!e)throw new p("need to specify a reason the Duration is invalid");t=e instanceof Ce?e:new Ce(e,t);if(Be.throwOnInvalid)throw new y(t);return new m({invalid:t})},m.normalizeUnit=function(e){var t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!t)throw new v(e);return t},m.isDuration=function(e){return e&&e.isLuxonDuration||!1};var e=m.prototype;return e.toFormat=function(e,t){t=s({},t=void 0===t?{}:t,{floor:!1!==t.round&&!1!==t.floor});return this.isValid?xe.create(this.loc,t).formatDurationFromString(this,e):"Invalid Duration"},e.toHuman=function(n){var r=this;void 0===n&&(n={});var e=Jt.map(function(e){var t=r.values[e];return W(t)?null:r.loc.numberFormatter(s({style:"unit",unitDisplay:"long"},n,{unit:e.slice(0,-1)})).format(t)}).filter(function(e){return e});return this.loc.listFormatter(s({type:"conjunction",style:n.listStyle||"narrow"},n)).format(e)},e.toObject=function(){return this.isValid?s({},this.values):{}},e.toISO=function(){if(!this.isValid)return null;var e="P";return 0!==this.years&&(e+=this.years+"Y"),0===this.months&&0===this.quarters||(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(e+=ne(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e},e.toISOTime=function(e){if(void 0===e&&(e={}),!this.isValid)return null;var t=this.toMillis();if(t<0||864e5<=t)return null;e=s({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e);var n=this.shiftTo("hours","minutes","seconds","milliseconds"),t="basic"===e.format?"hhmm":"hh:mm";e.suppressSeconds&&0===n.seconds&&0===n.milliseconds||(t+="basic"===e.format?"ss":":ss",e.suppressMilliseconds&&0===n.milliseconds||(t+=".SSS"));t=n.toFormat(t);return t=e.includePrefix?"T"+t:t},e.toJSON=function(){return this.toISO()},e.toString=function(){return this.toISO()},e.toMillis=function(){return this.as("milliseconds")},e.valueOf=function(){return this.toMillis()},e.plus=function(e){if(!this.isValid)return this;for(var t=m.fromDurationLike(e),n={},r=k(Jt);!(i=r()).done;){var i=i.value;(B(t.values,i)||B(this.values,i))&&(n[i]=t.get(i)+this.get(i))}return Gt(this,{values:n},!0)},e.minus=function(e){if(!this.isValid)return this;e=m.fromDurationLike(e);return this.plus(e.negate())},e.mapUnits=function(e){if(!this.isValid)return this;for(var t={},n=0,r=Object.keys(this.values);n<r.length;n++){var i=r[n];t[i]=fe(e(this.values[i],i))}return Gt(this,{values:t},!0)},e.get=function(e){return this[m.normalizeUnit(e)]},e.set=function(e){return this.isValid?Gt(this,{values:s({},this.values,de(e,m.normalizeUnit))}):this},e.reconfigure=function(e){var t=void 0===e?{}:e,n=t.locale,e=t.numberingSystem,t=t.conversionAccuracy,e={loc:this.loc.clone({locale:n,numberingSystem:e})};return t&&(e.conversionAccuracy=t),Gt(this,e)},e.as=function(e){return this.isValid?this.shiftTo(e).get(e):NaN},e.normalize=function(){if(!this.isValid)return this;var n,r,e=this.toObject();return n=this.matrix,r=e,Yt.reduce(function(e,t){return W(r[t])?e:(e&&$t(n,r,e,r,t),t)},null),Gt(this,{values:e},!0)},e.shiftTo=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!this.isValid)return this;if(0===t.length)return this;for(var r,t=t.map(function(e){return m.normalizeUnit(e)}),i={},o={},a=this.toObject(),u=k(Jt);!(h=u()).done;){var s=h.value;if(0<=t.indexOf(s)){var c,l=s,f=0;for(c in o)f+=this.matrix[c][s]*o[c],o[c]=0;J(a[s])&&(f+=a[s]);var d,h=Math.trunc(f);for(d in i[s]=h,o[s]=(1e3*f-1e3*h)/1e3,a)Jt.indexOf(d)>Jt.indexOf(s)&&$t(this.matrix,a,d,i,s)}else J(a[s])&&(o[s]=a[s])}for(r in o)0!==o[r]&&(i[l]+=r===l?o[r]:o[r]/this.matrix[l][r]);return Gt(this,{values:i},!0).normalize()},e.negate=function(){if(!this.isValid)return this;for(var e={},t=0,n=Object.keys(this.values);t<n.length;t++){var r=n[t];e[r]=0===this.values[r]?0:-this.values[r]}return Gt(this,{values:e},!0)},e.equals=function(e){if(!this.isValid||!e.isValid)return!1;if(!this.loc.equals(e.loc))return!1;for(var t,n=k(Jt);!(t=n()).done;){var r=t.value;if(t=this.values[r],r=e.values[r],!(void 0===t||0===t?void 0===r||0===r:t===r))return!1}return!0},o(m,[{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"years",get:function(){return this.isValid?this.values.years||0:NaN}},{key:"quarters",get:function(){return this.isValid?this.values.quarters||0:NaN}},{key:"months",get:function(){return this.isValid?this.values.months||0:NaN}},{key:"weeks",get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:"days",get:function(){return this.isValid?this.values.days||0:NaN}},{key:"hours",get:function(){return this.isValid?this.values.hours||0:NaN}},{key:"minutes",get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:"seconds",get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:"milliseconds",get:function(){return this.isValid?this.values.milliseconds||0:NaN}},{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),m}(),Qt="Invalid Interval";var Kt=function(){function c(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}c.invalid=function(e,t){if(void 0===t&&(t=null),!e)throw new p("need to specify a reason the Interval is invalid");t=e instanceof Ce?e:new Ce(e,t);if(Be.throwOnInvalid)throw new h(t);return new c({invalid:t})},c.fromDateTimes=function(e,t){var n=nr(e),r=nr(t),e=(e=r,(t=n)&&t.isValid?e&&e.isValid?e<t?Kt.invalid("end before start","The end of an interval must be after its start, but you had start="+t.toISO()+" and end="+e.toISO()):null:Kt.invalid("missing or invalid end"):Kt.invalid("missing or invalid start"));return null==e?new c({start:n,end:r}):e},c.after=function(e,t){t=Bt.fromDurationLike(t),e=nr(e);return c.fromDateTimes(e,e.plus(t))},c.before=function(e,t){t=Bt.fromDurationLike(t),e=nr(e);return c.fromDateTimes(e.minus(t),e)},c.fromISO=function(e,t){var n,r,i,o=(e||"").split("/",2),a=o[0],u=o[1];if(a&&u){try{s=(n=tr.fromISO(a,t)).isValid}catch(u){s=!1}try{i=(r=tr.fromISO(u,t)).isValid}catch(u){i=!1}if(s&&i)return c.fromDateTimes(n,r);if(s){var s=Bt.fromISO(u,t);if(s.isValid)return c.after(n,s)}else if(i){t=Bt.fromISO(a,t);if(t.isValid)return c.before(r,t)}}return c.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},c.isInterval=function(e){return e&&e.isLuxonInterval||!1};var e=c.prototype;return e.length=function(e){return void 0===e&&(e="milliseconds"),this.isValid?this.toDuration.apply(this,[e]).get(e):NaN},e.count=function(e){if(!this.isValid)return NaN;var t=this.start.startOf(e=void 0===e?"milliseconds":e),n=this.end.startOf(e);return Math.floor(n.diff(t,e).get(e))+1},e.hasSame=function(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))},e.isEmpty=function(){return this.s.valueOf()===this.e.valueOf()},e.isAfter=function(e){return!!this.isValid&&this.s>e},e.isBefore=function(e){return!!this.isValid&&this.e<=e},e.contains=function(e){return!!this.isValid&&(this.s<=e&&this.e>e)},e.set=function(e){var t=void 0===e?{}:e,e=t.start,t=t.end;return this.isValid?c.fromDateTimes(e||this.s,t||this.e):this},e.splitAt=function(){var t=this;if(!this.isValid)return[];for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];for(var i=n.map(nr).filter(function(e){return t.contains(e)}).sort(),o=[],a=this.s,u=0;a<this.e;){var s=i[u]||this.e,s=+s>+this.e?this.e:s;o.push(c.fromDateTimes(a,s)),a=s,u+=1}return o},e.splitBy=function(e){var t=Bt.fromDurationLike(e);if(!this.isValid||!t.isValid||0===t.as("milliseconds"))return[];for(var n=this.s,r=1,i=[];n<this.e;){var o=this.start.plus(t.mapUnits(function(e){return e*r})),o=+o>+this.e?this.e:o;i.push(c.fromDateTimes(n,o)),n=o,r+=1}return i},e.divideEqually=function(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]},e.overlaps=function(e){return this.e>e.s&&this.s<e.e},e.abutsStart=function(e){return!!this.isValid&&+this.e==+e.s},e.abutsEnd=function(e){return!!this.isValid&&+e.e==+this.s},e.engulfs=function(e){return!!this.isValid&&(this.s<=e.s&&this.e>=e.e)},e.equals=function(e){return!(!this.isValid||!e.isValid)&&(this.s.equals(e.s)&&this.e.equals(e.e))},e.intersection=function(e){if(!this.isValid)return this;var t=(this.s>e.s?this:e).s,e=(this.e<e.e?this:e).e;return e<=t?null:c.fromDateTimes(t,e)},e.union=function(e){if(!this.isValid)return this;var t=(this.s<e.s?this:e).s,e=(this.e>e.e?this:e).e;return c.fromDateTimes(t,e)},c.merge=function(e){var t=e.sort(function(e,t){return e.s-t.s}).reduce(function(e,t){var n=e[0],e=e[1];return e?e.overlaps(t)||e.abutsStart(t)?[n,e.union(t)]:[n.concat([e]),t]:[n,t]},[[],null]),e=t[0],t=t[1];return t&&e.push(t),e},c.xor=function(e){for(var t=null,n=0,r=[],i=e.map(function(e){return[{time:e.s,type:"s"},{time:e.e,type:"e"}]}),o=k((e=Array.prototype).concat.apply(e,i).sort(function(e,t){return e.time-t.time}));!(a=o()).done;)var a=a.value,t=1===(n+="s"===a.type?1:-1)?a.time:(t&&+t!=+a.time&&r.push(c.fromDateTimes(t,a.time)),null);return c.merge(r)},e.difference=function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return c.xor([this].concat(n)).map(function(e){return t.intersection(e)}).filter(function(e){return e&&!e.isEmpty()})},e.toString=function(){return this.isValid?"["+this.s.toISO()+" – "+this.e.toISO()+")":Qt},e.toISO=function(e){return this.isValid?this.s.toISO(e)+"/"+this.e.toISO(e):Qt},e.toISODate=function(){return this.isValid?this.s.toISODate()+"/"+this.e.toISODate():Qt},e.toISOTime=function(e){return this.isValid?this.s.toISOTime(e)+"/"+this.e.toISOTime(e):Qt},e.toFormat=function(e,t){t=(void 0===t?{}:t).separator,t=void 0===t?" – ":t;return this.isValid?""+this.s.toFormat(e)+t+this.e.toFormat(e):Qt},e.toDuration=function(e,t){return this.isValid?this.e.diff(this.s,e,t):Bt.invalid(this.invalidReason)},e.mapEndpoints=function(e){return c.fromDateTimes(e(this.s),e(this.e))},o(c,[{key:"start",get:function(){return this.isValid?this.s:null}},{key:"end",get:function(){return this.isValid?this.e:null}},{key:"isValid",get:function(){return null===this.invalidReason}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),c}(),Xt=function(){function e(){}return e.hasDST=function(e){void 0===e&&(e=Be.defaultZone);var t=tr.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset},e.isValidIANAZone=function(e){return qe.isValidZone(e)},e.normalizeZone=function(e){return He(e,Be.defaultZone)},e.months=function(e,t){void 0===e&&(e="long");var n=void 0===t?{}:t,r=n.locale,i=n.numberingSystem,t=n.locObj,t=void 0===t?null:t,n=n.outputCalendar;return(t||ct.create(void 0===r?null:r,void 0===i?null:i,void 0===n?"gregory":n)).months(e)},e.monthsFormat=function(e,t){void 0===e&&(e="long");var n=void 0===t?{}:t,r=n.locale,i=n.numberingSystem,t=n.locObj,t=void 0===t?null:t,n=n.outputCalendar;return(t||ct.create(void 0===r?null:r,void 0===i?null:i,void 0===n?"gregory":n)).months(e,!0)},e.weekdays=function(e,t){void 0===e&&(e="long");var n=void 0===t?{}:t,r=n.locale,t=n.numberingSystem,n=n.locObj;return((void 0===n?null:n)||ct.create(void 0===r?null:r,void 0===t?null:t,null)).weekdays(e)},e.weekdaysFormat=function(e,t){void 0===e&&(e="long");var n=void 0===t?{}:t,r=n.locale,t=n.numberingSystem,n=n.locObj;return((void 0===n?null:n)||ct.create(void 0===r?null:r,void 0===t?null:t,null)).weekdays(e,!0)},e.meridiems=function(e){e=(void 0===e?{}:e).locale;return ct.create(void 0===e?null:e).meridiems()},e.eras=function(e,t){void 0===e&&(e="short");t=(void 0===t?{}:t).locale;return ct.create(void 0===t?null:t,null,"gregory").eras(e)},e.features=function(){return{relative:G()}},e}();function en(e,t){function n(e){return e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf()}e=n(t)-n(e);return Math.floor(Bt.fromMillis(e).as("days"))}function tn(e,t,n,r){var i=function(e,t,n){for(var r={},i=0,o=[["years",function(e,t){return t.year-e.year}],["quarters",function(e,t){return t.quarter-e.quarter}],["months",function(e,t){return t.month-e.month+12*(t.year-e.year)}],["weeks",function(e,t){t=en(e,t);return(t-t%7)/7}],["days",en]];i<o.length;i++){var a,u,s=o[i],c=s[0],l=s[1];0<=n.indexOf(c)&&(a=c,s=l(e,t),t<(u=e.plus(((l={})[c]=s,l)))?(e=e.plus(((l={})[c]=s-1,l)),--s):e=u,r[c]=s)}return[e,r,u,a]}(e,t,n),o=i[0],a=i[1],u=i[2],e=i[3],i=t-o,n=n.filter(function(e){return 0<=["hours","minutes","seconds","milliseconds"].indexOf(e)});0===n.length&&(u=u<t?o.plus(((t={})[e]=1,t)):u)!==o&&(a[e]=(a[e]||0)+i/(u-o));a=Bt.fromObject(a,r);return 0<n.length?(r=Bt.fromMillis(i,r)).shiftTo.apply(r,n).plus(a):a}var nn={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},rn={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},on=nn.hanidec.replace(/[\[|\]]/g,"").split("");function an(e,t){e=e.numberingSystem;return void 0===t&&(t=""),new RegExp(""+nn[e||"latn"]+t)}var un="missing Intl.DateTimeFormat.formatToParts support";function sn(e,t){return void 0===t&&(t=function(e){return e}),{regex:e,deser:function(e){e=e[0];return t(function(e){var t=parseInt(e,10);if(isNaN(t)){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);if(-1!==e[n].search(nn.hanidec))t+=on.indexOf(e[n]);else for(var i in rn){var o=rn[i],i=o[0],o=o[1];i<=r&&r<=o&&(t+=r-i)}}return parseInt(t,10)}return t}(e))}}}var cn="[ "+String.fromCharCode(160)+"]",ln=new RegExp(cn,"g");function fn(e){return e.replace(/\./g,"\\.?").replace(ln,cn)}function dn(e){return e.replace(/\./g,"").replace(ln," ").toLowerCase()}function hn(n,r){return null===n?null:{regex:RegExp(n.map(fn).join("|")),deser:function(e){var t=e[0];return n.findIndex(function(e){return dn(t)===dn(e)})+r}}}function mn(e,t){return{regex:e,deser:function(e){return le(e[1],e[2])},groups:t}}function yn(e){return{regex:e,deser:function(e){return e[0]}}}function vn(t,n){function r(e){return{regex:RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")),deser:function(e){return e[0]},literal:!0}}var i=an(n),o=an(n,"{2}"),a=an(n,"{3}"),u=an(n,"{4}"),s=an(n,"{6}"),c=an(n,"{1,2}"),l=an(n,"{1,3}"),f=an(n,"{1,6}"),d=an(n,"{1,9}"),h=an(n,"{2,4}"),m=an(n,"{4,6}"),e=function(e){if(t.literal)return r(e);switch(e.val){case"G":return hn(n.eras("short",!1),0);case"GG":return hn(n.eras("long",!1),0);case"y":return sn(f);case"yy":return sn(h,se);case"yyyy":return sn(u);case"yyyyy":return sn(m);case"yyyyyy":return sn(s);case"M":return sn(c);case"MM":return sn(o);case"MMM":return hn(n.months("short",!0,!1),1);case"MMMM":return hn(n.months("long",!0,!1),1);case"L":return sn(c);case"LL":return sn(o);case"LLL":return hn(n.months("short",!1,!1),1);case"LLLL":return hn(n.months("long",!1,!1),1);case"d":return sn(c);case"dd":return sn(o);case"o":return sn(l);case"ooo":return sn(a);case"HH":return sn(o);case"H":return sn(c);case"hh":return sn(o);case"h":return sn(c);case"mm":return sn(o);case"m":case"q":return sn(c);case"qq":return sn(o);case"s":return sn(c);case"ss":return sn(o);case"S":return sn(l);case"SSS":return sn(a);case"u":return yn(d);case"uu":return yn(c);case"uuu":return sn(i);case"a":return hn(n.meridiems(),0);case"kkkk":return sn(u);case"kk":return sn(h,se);case"W":return sn(c);case"WW":return sn(o);case"E":case"c":return sn(i);case"EEE":return hn(n.weekdays("short",!1,!1),1);case"EEEE":return hn(n.weekdays("long",!1,!1),1);case"ccc":return hn(n.weekdays("short",!0,!1),1);case"cccc":return hn(n.weekdays("long",!0,!1),1);case"Z":case"ZZ":return mn(new RegExp("([+-]"+c.source+")(?::("+o.source+"))?"),2);case"ZZZ":return mn(new RegExp("([+-]"+c.source+")("+o.source+")?"),2);case"z":return yn(/[a-z_+-/]{1,256}?/i);default:return r(e)}}(t)||{invalidReason:un};return e.token=t,e}var pn={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"}};var gn=null;function wn(e,t){if(e.literal)return e;var i=xe.macroTokenToFormatOpts(e.val);if(!i)return e;t=xe.create(t,i).formatDateTimeParts(gn=gn||tr.fromMillis(1555555555555)).map(function(e){return n=i,r=(t=e).type,t=e.value,"literal"===r?{literal:!0,val:t}:(n=n[r],(r="object"==typeof(r=pn[r])?r[n]:r)?{literal:!1,val:r}:void 0);var t,n,r});return t.includes(void 0)?e:t}function kn(t,e,n){var r,i=(u=xe.parseFormat(n),r=t,(s=Array.prototype).concat.apply(s,u.map(function(e){return wn(e,r)}))),o=i.map(function(e){return vn(e,t)}),n=o.find(function(e){return e.invalidReason});if(n)return{input:e,tokens:i,invalidReason:n.invalidReason};var a,u=["^"+(s=o).map(function(e){return e.regex}).reduce(function(e,t){return e+"("+t.source+")"},"")+"$",s],n=u[1],o=RegExp(u[0],"i"),s=function(e,t,n){var r=e.match(t);if(r){var i,o,a,u={},s=1;for(i in n)B(n,i)&&(a=(o=n[i]).groups?o.groups+1:1,!o.literal&&o.token&&(u[o.token.val[0]]=o.deser(r.slice(s,s+a))),s+=a);return[r,u]}return[r,{}]}(e,o,n),u=s[0],n=s[1],s=n?(c=null,W((a=n).z)||(c=qe.create(a.z)),W(a.Z)||(c=c||new Ue(a.Z),l=a.Z),W(a.q)||(a.M=3*(a.q-1)+1),W(a.h)||(a.h<12&&1===a.a?a.h+=12:12===a.h&&0===a.a&&(a.h=0)),0===a.G&&a.y&&(a.y=-a.y),W(a.u)||(a.S=te(a.u)),[Object.keys(a).reduce(function(e,t){var n=function(e){switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}}(t);return n&&(e[n]=a[t]),e},{}),c,l]):[null,null,void 0],c=s[0],l=s[1],s=s[2];if(B(n,"a")&&B(n,"H"))throw new T("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:i,regex:o,rawMatches:u,matches:n,result:c,zone:l,specificOffset:s}}var Tn=[0,31,59,90,120,151,181,212,243,273,304,334],Sn=[0,31,60,91,121,152,182,213,244,274,305,335];function bn(e,t){return new Ce("unit out of range","you specified "+t+" (of type "+typeof t+") as a "+e+", which is invalid")}function On(e,t,n){n=new Date(Date.UTC(e,t-1,n));e<100&&0<=e&&n.setUTCFullYear(n.getUTCFullYear()-1900);n=n.getUTCDay();return 0===n?7:n}function Mn(e,t,n){return n+(re(e)?Sn:Tn)[t-1]}function Nn(e,t){var n=re(e)?Sn:Tn,e=n.findIndex(function(e){return e<t});return{month:e+1,day:t-n[e]}}function Dn(e){var t,n=e.year,r=e.month,i=e.day,o=Mn(n,r,i),i=On(n,r,i),o=Math.floor((o-i+10)/7);return o<1?o=ue(t=n-1):o>ue(n)?(t=n+1,o=1):t=n,s({weekYear:t,weekNumber:o,weekday:i},me(e))}function En(e){var t,n=e.weekYear,r=e.weekNumber,i=e.weekday,o=On(n,1,4),a=ie(n),o=7*r+i-o-3;o<1?o+=ie(t=n-1):a<o?(t=n+1,o-=ie(n)):t=n;o=Nn(t,o);return s({year:t,month:o.month,day:o.day},me(e))}function Vn(e){var t=e.year;return s({year:t,ordinal:Mn(t,e.month,e.day)},me(e))}function In(e){var t=e.year,n=Nn(t,e.ordinal);return s({year:t,month:n.month,day:n.day},me(e))}function xn(e){var t=Y(e.year),n=Q(e.month,1,12),r=Q(e.day,1,oe(e.year,e.month));return t?n?!r&&bn("day",e.day):bn("month",e.month):bn("year",e.year)}function Cn(e){var t=e.hour,n=e.minute,r=e.second,i=e.millisecond,o=Q(t,0,23)||24===t&&0===n&&0===r&&0===i,a=Q(n,0,59),u=Q(r,0,59),e=Q(i,0,999);return o?a?u?!e&&bn("millisecond",i):bn("second",r):bn("minute",n):bn("hour",t)}var Fn="Invalid DateTime";function Zn(e){return new Ce("unsupported zone",'the zone "'+e.name+'" is not supported')}function Ln(e){return null===e.weekData&&(e.weekData=Dn(e.c)),e.weekData}function An(e,t){e={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new tr(s({},e,t,{old:e}))}function zn(e,t,n){var r=e-60*t*1e3,i=n.offset(r);if(t===i)return[r,t];t=n.offset(r-=60*(i-t)*1e3);return i===t?[r,i]:[e-60*Math.min(i,t)*1e3,Math.max(i,t)]}function jn(e,t){e+=60*t*1e3;e=new Date(e);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate(),hour:e.getUTCHours(),minute:e.getUTCMinutes(),second:e.getUTCSeconds(),millisecond:e.getUTCMilliseconds()}}function qn(e,t,n){return zn(ae(e),t,n)}function _n(e,t){var n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),i=s({},e.c,{year:r,month:i,day:Math.min(e.c.day,oe(r,i))+Math.trunc(t.days)+7*Math.trunc(t.weeks)}),t=Bt.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),i=zn(ae(i),n,e.zone),n=i[0],i=i[1];return 0!==t&&(i=e.zone.offset(n+=t)),{ts:n,o:i}}function Un(e,t,n,r,i,o){var a=n.setZone,u=n.zone;if(e&&0!==Object.keys(e).length){o=tr.fromObject(e,s({},n,{zone:t||u,specificOffset:o}));return a?o:o.setZone(u)}return tr.invalid(new Ce("unparsable",'the input "'+i+"\" can't be parsed as "+r))}function Rn(e,t,n){return void 0===n&&(n=!0),e.isValid?xe.create(ct.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Hn(e,t){var n=9999<e.c.year||e.c.year<0,r="";return n&&0<=e.c.year&&(r+="+"),r+=K(e.c.year,n?6:4),t?(r+="-",r+=K(e.c.month),r+="-"):r+=K(e.c.month),r+=K(e.c.day)}function Pn(e,t,n,r,i,o){var a=K(e.c.hour);return t?(a+=":",a+=K(e.c.minute),0===e.c.second&&n||(a+=":")):a+=K(e.c.minute),0===e.c.second&&n||(a+=K(e.c.second),0===e.c.millisecond&&r||(a+=".",a+=K(e.c.millisecond,3))),i&&(e.isOffsetFixed&&0===e.offset&&!o?a+="Z":e.o<0?(a+="-",a+=K(Math.trunc(-e.o/60)),a+=":",a+=K(Math.trunc(-e.o%60))):(a+="+",a+=K(Math.trunc(e.o/60)),a+=":",a+=K(Math.trunc(e.o%60)))),o&&(a+="["+e.zone.ianaName+"]"),a}var Wn={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Jn={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Yn={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Gn=["year","month","day","hour","minute","second","millisecond"],$n=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Bn=["year","ordinal","hour","minute","second","millisecond"];function Qn(e){var t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new v(e);return t}function Kn(e,t){var n=He(t.zone,Be.defaultZone),r=ct.fromObject(t),t=Be.now();if(W(e.year))u=t;else{for(var i=k(Gn);!(o=i()).done;){var o=o.value;W(e[o])&&(e[o]=Wn[o])}var a=xn(e)||Cn(e);if(a)return tr.invalid(a);var a=qn(e,n.offset(t),n),u=a[0],a=a[1]}return new tr({ts:u,zone:n,loc:r,o:a})}function Xn(t,n,r){function e(e,t){return e=ne(e,o||r.calendary?0:2,!0),n.loc.clone(r).relFormatter(r).format(e,t)}function i(e){return r.calendary?n.hasSame(t,e)?0:n.startOf(e).diff(t.startOf(e),e).get(e):n.diff(t,e).get(e)}var o=!!W(r.round)||r.round;if(r.unit)return e(i(r.unit),r.unit);for(var a=k(r.units);!(s=a()).done;){var u=s.value,s=i(u);if(1<=Math.abs(s))return e(s,u)}return e(n<t?-0:0,r.units[r.units.length-1])}function er(e){var t={},e=0<e.length&&"object"==typeof e[e.length-1]?(t=e[e.length-1],Array.from(e).slice(0,e.length-1)):Array.from(e);return[t,e]}var tr=function(){function w(e){var t=e.zone||Be.defaultZone,n=e.invalid||(Number.isNaN(e.ts)?new Ce("invalid input"):null)||(t.isValid?null:Zn(t));this.ts=W(e.ts)?Be.now():e.ts;var r,i=null,o=null;n||(o=e.old&&e.old.ts===this.ts&&e.old.zone.equals(t)?(i=(r=[e.old.c,e.old.o])[0],r[1]):(r=t.offset(this.ts),i=jn(this.ts,r),i=(n=Number.isNaN(i.year)?new Ce("invalid input"):null)?null:i,n?null:r)),this._zone=t,this.loc=e.loc||ct.create(),this.invalid=n,this.weekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}w.now=function(){return new w({})},w.local=function(){var e=er(arguments),t=e[0],e=e[1];return Kn({year:e[0],month:e[1],day:e[2],hour:e[3],minute:e[4],second:e[5],millisecond:e[6]},t)},w.utc=function(){var e=er(arguments),t=e[0],n=e[1],r=n[0],i=n[1],o=n[2],a=n[3],u=n[4],e=n[5],n=n[6];return t.zone=Ue.utcInstance,Kn({year:r,month:i,day:o,hour:a,minute:u,second:e,millisecond:n},t)},w.fromJSDate=function(e,t){void 0===t&&(t={});var n="[object Date]"===Object.prototype.toString.call(e)?e.valueOf():NaN;if(Number.isNaN(n))return w.invalid("invalid input");e=He(t.zone,Be.defaultZone);return e.isValid?new w({ts:n,zone:e,loc:ct.fromObject(t)}):w.invalid(Zn(e))},w.fromMillis=function(e,t){if(void 0===t&&(t={}),J(e))return e<-864e13||864e13<e?w.invalid("Timestamp out of range"):new w({ts:e,zone:He(t.zone,Be.defaultZone),loc:ct.fromObject(t)});throw new p("fromMillis requires a numerical input, but received a "+typeof e+" with value "+e)},w.fromSeconds=function(e,t){if(void 0===t&&(t={}),J(e))return new w({ts:1e3*e,zone:He(t.zone,Be.defaultZone),loc:ct.fromObject(t)});throw new p("fromSeconds requires a numerical input")},w.fromObject=function(e,t){e=e||{};var n=He((t=void 0===t?{}:t).zone,Be.defaultZone);if(!n.isValid)return w.invalid(Zn(n));var r=Be.now(),i=W(t.specificOffset)?n.offset(r):t.specificOffset,o=de(e,Qn),a=!W(o.ordinal),u=!W(o.year),s=!W(o.month)||!W(o.day),c=u||s,u=o.weekYear||o.weekNumber,t=ct.fromObject(t);if((c||a)&&u)throw new T("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(s&&a)throw new T("Can't mix ordinal dates with month/day");var l,u=u||o.weekday&&!c,f=jn(r,i);u?(v=$n,l=Jn,f=Dn(f)):a?(v=Bn,l=Yn,f=Vn(f)):(v=Gn,l=Wn);for(var d=!1,h=k(v);!(m=h()).done;){var m=m.value;W(o[m])?o[m]=(d?l:f)[m]:d=!0}var y,v,p,g=(u?(r=Y((y=o).weekYear),v=Q(y.weekNumber,1,ue(y.weekYear)),p=Q(y.weekday,1,7),r?v?!p&&bn("weekday",y.weekday):bn("week",y.week):bn("weekYear",y.weekYear)):a?(p=Y((g=o).year),y=Q(g.ordinal,1,ie(g.year)),p?!y&&bn("ordinal",g.ordinal):bn("year",g.year)):xn(o))||Cn(o);if(g)return w.invalid(g);i=qn(u?En(o):a?In(o):o,i,n),t=new w({ts:i[0],zone:n,o:i[1],loc:t});return o.weekday&&c&&e.weekday!==t.weekday?w.invalid("mismatched weekday","you can't specify both a weekday of "+o.weekday+" and a date of "+t.toISO()):t},w.fromISO=function(e,t){void 0===t&&(t={});var n=dt(e,[Ct,At],[Ft,zt],[Zt,jt],[Lt,qt]);return Un(n[0],n[1],t,"ISO 8601",e)},w.fromRFC2822=function(e,t){void 0===t&&(t={});var n=dt(e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim(),[Mt,Nt]);return Un(n[0],n[1],t,"RFC 2822",e)},w.fromHTTP=function(e,t){void 0===t&&(t={});e=dt(e,[Dt,It],[Et,It],[Vt,xt]);return Un(e[0],e[1],t,"HTTP",t)},w.fromFormat=function(e,t,n){if(void 0===n&&(n={}),W(e)||W(t))throw new p("fromFormat requires an input string and a format");var r=n,i=r.locale,o=r.numberingSystem,a=ct.fromOpts({locale:void 0===i?null:i,numberingSystem:void 0===o?null:o,defaultToEN:!0}),i=[(r=kn(a,e,r=t)).result,r.zone,r.specificOffset,r.invalidReason],o=i[0],a=i[1],r=i[2],i=i[3];return i?w.invalid(i):Un(o,a,n,"format "+t,e,r)},w.fromString=function(e,t,n){return w.fromFormat(e,t,n=void 0===n?{}:n)},w.fromSQL=function(e,t){void 0===t&&(t={});var n=dt(e,[Ut,At],[Rt,Ht]);return Un(n[0],n[1],t,"SQL",e)},w.invalid=function(e,t){if(void 0===t&&(t=null),!e)throw new p("need to specify a reason the DateTime is invalid");t=e instanceof Ce?e:new Ce(e,t);if(Be.throwOnInvalid)throw new d(t);return new w({invalid:t})},w.isDateTime=function(e){return e&&e.isLuxonDateTime||!1};var e=w.prototype;return e.get=function(e){return this[e]},e.resolvedLocaleOptions=function(e){e=xe.create(this.loc.clone(e=void 0===e?{}:e),e).resolvedOptions(this);return{locale:e.locale,numberingSystem:e.numberingSystem,outputCalendar:e.calendar}},e.toUTC=function(e,t){return void 0===t&&(t={}),this.setZone(Ue.instance(e=void 0===e?0:e),t)},e.toLocal=function(){return this.setZone(Be.defaultZone)},e.setZone=function(e,t){var n=void 0===t?{}:t,r=n.keepLocalTime,t=void 0!==r&&r,r=n.keepCalendarTime,n=void 0!==r&&r;if((e=He(e,Be.defaultZone)).equals(this.zone))return this;if(e.isValid){r=this.ts;return(t||n)&&(n=e.offset(this.ts),r=qn(this.toObject(),n,e)[0]),An(this,{ts:r,zone:e})}return w.invalid(Zn(e))},e.reconfigure=function(e){var t=void 0===e?{}:e,n=t.locale,e=t.numberingSystem,t=t.outputCalendar,t=this.loc.clone({locale:n,numberingSystem:e,outputCalendar:t});return An(this,{loc:t})},e.setLocale=function(e){return this.reconfigure({locale:e})},e.set=function(e){if(!this.isValid)return this;var t=de(e,Qn),n=!W(t.weekYear)||!W(t.weekNumber)||!W(t.weekday),r=!W(t.ordinal),i=!W(t.year),o=!W(t.month)||!W(t.day),e=t.weekYear||t.weekNumber;if((i||o||r)&&e)throw new T("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(o&&r)throw new T("Can't mix ordinal dates with month/day");n?a=En(s({},Dn(this.c),t)):W(t.ordinal)?(a=s({},this.toObject(),t),W(t.day)&&(a.day=Math.min(oe(a.year,a.month),a.day))):a=In(s({},Vn(this.c),t));var a=qn(a,this.o,this.zone);return An(this,{ts:a[0],o:a[1]})},e.plus=function(e){return this.isValid?An(this,_n(this,Bt.fromDurationLike(e))):this},e.minus=function(e){return this.isValid?An(this,_n(this,Bt.fromDurationLike(e).negate())):this},e.startOf=function(e){if(!this.isValid)return this;var t={},e=Bt.normalizeUnit(e);switch(e){case"years":t.month=1;case"quarters":case"months":t.day=1;case"weeks":case"days":t.hour=0;case"hours":t.minute=0;case"minutes":t.second=0;case"seconds":t.millisecond=0}return"weeks"===e&&(t.weekday=1),"quarters"===e&&(e=Math.ceil(this.month/3),t.month=3*(e-1)+1),this.set(t)},e.endOf=function(e){var t;return this.isValid?this.plus(((t={})[e]=1,t)).startOf(e).minus(1):this},e.toFormat=function(e,t){return void 0===t&&(t={}),this.isValid?xe.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):Fn},e.toLocaleString=function(e,t){return void 0===e&&(e=b),void 0===t&&(t={}),this.isValid?xe.create(this.loc.clone(t),e).formatDateTime(this):Fn},e.toLocaleParts=function(e){return void 0===e&&(e={}),this.isValid?xe.create(this.loc.clone(e),e).formatDateTimeParts(this):[]},e.toISO=function(e){var t=void 0===e?{}:e,n=t.format,r=t.suppressSeconds,i=void 0!==r&&r,o=t.suppressMilliseconds,e=void 0!==o&&o,r=t.includeOffset,o=void 0===r||r,r=t.extendedZone,t=void 0!==r&&r;if(!this.isValid)return null;r="extended"===(void 0===n?"extended":n),n=Hn(this,r);return n+="T",n+=Pn(this,r,i,e,o,t)},e.toISODate=function(e){e=(void 0===e?{}:e).format;return this.isValid?Hn(this,"extended"===(void 0===e?"extended":e)):null},e.toISOWeekDate=function(){return Rn(this,"kkkk-'W'WW-c")},e.toISOTime=function(e){var t=void 0===e?{}:e,n=t.suppressMilliseconds,r=t.suppressSeconds,i=t.includeOffset,o=t.includePrefix,e=t.extendedZone,t=t.format;return this.isValid?(void 0!==o&&o?"T":"")+Pn(this,"extended"===(void 0===t?"extended":t),void 0!==r&&r,void 0!==n&&n,void 0===i||i,void 0!==e&&e):null},e.toRFC2822=function(){return Rn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)},e.toHTTP=function(){return Rn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")},e.toSQLDate=function(){return this.isValid?Hn(this,!0):null},e.toSQLTime=function(e){var t=void 0===e?{}:e,n=t.includeOffset,r=void 0===n||n,e=t.includeZone,n=void 0!==e&&e,e=t.includeOffsetSpace,t="HH:mm:ss.SSS";return(n||r)&&((void 0===e||e)&&(t+=" "),n?t+="z":r&&(t+="ZZ")),Rn(this,t,!0)},e.toSQL=function(e){return void 0===e&&(e={}),this.isValid?this.toSQLDate()+" "+this.toSQLTime(e):null},e.toString=function(){return this.isValid?this.toISO():Fn},e.valueOf=function(){return this.toMillis()},e.toMillis=function(){return this.isValid?this.ts:NaN},e.toSeconds=function(){return this.isValid?this.ts/1e3:NaN},e.toUnixInteger=function(){return this.isValid?Math.floor(this.ts/1e3):NaN},e.toJSON=function(){return this.toISO()},e.toBSON=function(){return this.toJSDate()},e.toObject=function(e){if(void 0===e&&(e={}),!this.isValid)return{};var t=s({},this.c);return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t},e.toJSDate=function(){return new Date(this.isValid?this.ts:NaN)},e.diff=function(e,t,n){if(void 0===t&&(t="milliseconds"),void 0===n&&(n={}),!this.isValid||!e.isValid)return Bt.invalid("created by diffing an invalid DateTime");var r=s({locale:this.locale,numberingSystem:this.numberingSystem},n),t=(n=t,(Array.isArray(n)?n:[n]).map(Bt.normalizeUnit)),n=e.valueOf()>this.valueOf(),r=tn(n?this:e,n?e:this,t,r);return n?r.negate():r},e.diffNow=function(e,t){return void 0===e&&(e="milliseconds"),void 0===t&&(t={}),this.diff(w.now(),e,t)},e.until=function(e){return this.isValid?Kt.fromDateTimes(this,e):this},e.hasSame=function(e,t){if(!this.isValid)return!1;var n=e.valueOf(),e=this.setZone(e.zone,{keepLocalTime:!0});return e.startOf(t)<=n&&n<=e.endOf(t)},e.equals=function(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)},e.toRelative=function(e){if(!this.isValid)return null;var t=(e=void 0===e?{}:e).base||w.fromObject({},{zone:this.zone}),n=e.padding?this<t?-e.padding:e.padding:0,r=["years","months","days","hours","minutes","seconds"],i=e.unit;return Array.isArray(e.unit)&&(r=e.unit,i=void 0),Xn(t,this.plus(n),s({},e,{numeric:"always",units:r,unit:i}))},e.toRelativeCalendar=function(e){return void 0===e&&(e={}),this.isValid?Xn(e.base||w.fromObject({},{zone:this.zone}),this,s({},e,{numeric:"auto",units:["years","months","days"],calendary:!0})):null},w.min=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!t.every(w.isDateTime))throw new p("min requires all arguments be DateTimes");return $(t,function(e){return e.valueOf()},Math.min)},w.max=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!t.every(w.isDateTime))throw new p("max requires all arguments be DateTimes");return $(t,function(e){return e.valueOf()},Math.max)},w.fromFormatExplain=function(e,t,n){var r=n=void 0===n?{}:n,n=r.locale,r=r.numberingSystem;return kn(ct.fromOpts({locale:void 0===n?null:n,numberingSystem:void 0===r?null:r,defaultToEN:!0}),e,t)},w.fromStringExplain=function(e,t,n){return w.fromFormatExplain(e,t,n=void 0===n?{}:n)},o(w,[{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}},{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"outputCalendar",get:function(){return this.isValid?this.loc.outputCalendar:null}},{key:"zone",get:function(){return this._zone}},{key:"zoneName",get:function(){return this.isValid?this.zone.name:null}},{key:"year",get:function(){return this.isValid?this.c.year:NaN}},{key:"quarter",get:function(){return this.isValid?Math.ceil(this.c.month/3):NaN}},{key:"month",get:function(){return this.isValid?this.c.month:NaN}},{key:"day",get:function(){return this.isValid?this.c.day:NaN}},{key:"hour",get:function(){return this.isValid?this.c.hour:NaN}},{key:"minute",get:function(){return this.isValid?this.c.minute:NaN}},{key:"second",get:function(){return this.isValid?this.c.second:NaN}},{key:"millisecond",get:function(){return this.isValid?this.c.millisecond:NaN}},{key:"weekYear",get:function(){return this.isValid?Ln(this).weekYear:NaN}},{key:"weekNumber",get:function(){return this.isValid?Ln(this).weekNumber:NaN}},{key:"weekday",get:function(){return this.isValid?Ln(this).weekday:NaN}},{key:"ordinal",get:function(){return this.isValid?Vn(this.c).ordinal:NaN}},{key:"monthShort",get:function(){return this.isValid?Xt.months("short",{locObj:this.loc})[this.month-1]:null}},{key:"monthLong",get:function(){return this.isValid?Xt.months("long",{locObj:this.loc})[this.month-1]:null}},{key:"weekdayShort",get:function(){return this.isValid?Xt.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}},{key:"weekdayLong",get:function(){return this.isValid?Xt.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}},{key:"offset",get:function(){return this.isValid?+this.o:NaN}},{key:"offsetNameShort",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}},{key:"offsetNameLong",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}},{key:"isOffsetFixed",get:function(){return this.isValid?this.zone.isUniversal:null}},{key:"isInDST",get:function(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}},{key:"isInLeapYear",get:function(){return re(this.year)}},{key:"daysInMonth",get:function(){return oe(this.year,this.month)}},{key:"daysInYear",get:function(){return this.isValid?ie(this.year):NaN}},{key:"weeksInWeekYear",get:function(){return this.isValid?ue(this.weekYear):NaN}}],[{key:"DATE_SHORT",get:function(){return b}},{key:"DATE_MED",get:function(){return O}},{key:"DATE_MED_WITH_WEEKDAY",get:function(){return M}},{key:"DATE_FULL",get:function(){return N}},{key:"DATE_HUGE",get:function(){return D}},{key:"TIME_SIMPLE",get:function(){return E}},{key:"TIME_WITH_SECONDS",get:function(){return V}},{key:"TIME_WITH_SHORT_OFFSET",get:function(){return I}},{key:"TIME_WITH_LONG_OFFSET",get:function(){return x}},{key:"TIME_24_SIMPLE",get:function(){return C}},{key:"TIME_24_WITH_SECONDS",get:function(){return F}},{key:"TIME_24_WITH_SHORT_OFFSET",get:function(){return Z}},{key:"TIME_24_WITH_LONG_OFFSET",get:function(){return L}},{key:"DATETIME_SHORT",get:function(){return A}},{key:"DATETIME_SHORT_WITH_SECONDS",get:function(){return z}},{key:"DATETIME_MED",get:function(){return j}},{key:"DATETIME_MED_WITH_SECONDS",get:function(){return q}},{key:"DATETIME_MED_WITH_WEEKDAY",get:function(){return _}},{key:"DATETIME_FULL",get:function(){return U}},{key:"DATETIME_FULL_WITH_SECONDS",get:function(){return R}},{key:"DATETIME_HUGE",get:function(){return H}},{key:"DATETIME_HUGE_WITH_SECONDS",get:function(){return P}}]),w}();function nr(e){if(tr.isDateTime(e))return e;if(e&&e.valueOf&&J(e.valueOf()))return tr.fromJSDate(e);if(e&&"object"==typeof e)return tr.fromObject(e);throw new p("Unknown datetime argument: "+e+", of type "+typeof e)}return e.DateTime=tr,e.Duration=Bt,e.FixedOffsetZone=Ue,e.IANAZone=qe,e.Info=Xt,e.Interval=Kt,e.InvalidZone=Re,e.Settings=Be,e.SystemZone=Le,e.VERSION="2.4.0",e.Zone=Fe,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
/*! List.js v1.5.0 (http://listjs.com) by Jonny Strömberg (http://javve.com) */
var List=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=11)}([function(t,e,r){function n(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var i=r(4),s=/\s+/;Object.prototype.toString;t.exports=function(t){return new n(t)},n.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array(),r=i(e,t);return~r||e.push(t),this.el.className=e.join(" "),this},n.prototype.remove=function(t){if(this.list)return this.list.remove(t),this;var e=this.array(),r=i(e,t);return~r&&e.splice(r,1),this.el.className=e.join(" "),this},n.prototype.toggle=function(t,e){return this.list?("undefined"!=typeof e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):("undefined"!=typeof e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},n.prototype.array=function(){var t=this.el.getAttribute("class")||"",e=t.replace(/^\s+|\s+$/g,""),r=e.split(s);return""===r[0]&&r.shift(),r},n.prototype.has=n.prototype.contains=function(t){return this.list?this.list.contains(t):!!~i(this.array(),t)}},function(t,e,r){var n=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",s="addEventListener"!==n?"on":"",a=r(5);e.bind=function(t,e,r,i){t=a(t);for(var o=0;o<t.length;o++)t[o][n](s+e,r,i||!1)},e.unbind=function(t,e,r,n){t=a(t);for(var o=0;o<t.length;o++)t[o][i](s+e,r,n||!1)}},function(t,e){t.exports=function(t){return function(e,r,n){var i=this;this._values={},this.found=!1,this.filtered=!1;var s=function(e,r,n){if(void 0===r)n?i.values(e,n):i.values(e);else{i.elm=r;var s=t.templater.get(i,e);i.values(s)}};this.values=function(e,r){if(void 0===e)return i._values;for(var n in e)i._values[n]=e[n];r!==!0&&t.templater.set(i,i.values())},this.show=function(){t.templater.show(i)},this.hide=function(){t.templater.hide(i)},this.matching=function(){return t.filtered&&t.searched&&i.found&&i.filtered||t.filtered&&!t.searched&&i.filtered||!t.filtered&&t.searched&&i.found||!t.filtered&&!t.searched},this.visible=function(){return!(!i.elm||i.elm.parentNode!=t.list)},s(e,r,n)}}},function(t,e){var r=function(t,e,r){return r?t.getElementsByClassName(e)[0]:t.getElementsByClassName(e)},n=function(t,e,r){return e="."+e,r?t.querySelector(e):t.querySelectorAll(e)},i=function(t,e,r){for(var n=[],i="*",s=t.getElementsByTagName(i),a=s.length,o=new RegExp("(^|\\s)"+e+"(\\s|$)"),l=0,u=0;l<a;l++)if(o.test(s[l].className)){if(r)return s[l];n[u]=s[l],u++}return n};t.exports=function(){return function(t,e,s,a){return a=a||{},a.test&&a.getElementsByClassName||!a.test&&document.getElementsByClassName?r(t,e,s):a.test&&a.querySelector||!a.test&&document.querySelector?n(t,e,s):i(t,e,s)}}()},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){function r(t){return"[object Array]"===Object.prototype.toString.call(t)}t.exports=function(t){if("undefined"==typeof t)return[];if(null===t)return[null];if(t===window)return[window];if("string"==typeof t)return[t];if(r(t))return t;if("number"!=typeof t.length)return[t];if("function"==typeof t&&t instanceof Function)return[t];for(var e=[],n=0;n<t.length;n++)(Object.prototype.hasOwnProperty.call(t,n)||n in t)&&e.push(t[n]);return e.length?e:[]}},function(t,e){t.exports=function(t){return t=void 0===t?"":t,t=null===t?"":t,t=t.toString()}},function(t,e){t.exports=function(t){for(var e,r=Array.prototype.slice.call(arguments,1),n=0;e=r[n];n++)if(e)for(var i in e)t[i]=e[i];return t}},function(t,e){t.exports=function(t){var e=function(r,n,i){var s=r.splice(0,50);i=i||[],i=i.concat(t.add(s)),r.length>0?setTimeout(function(){e(r,n,i)},1):(t.update(),n(i))};return e}},function(t,e){t.exports=function(t){return t.handlers.filterStart=t.handlers.filterStart||[],t.handlers.filterComplete=t.handlers.filterComplete||[],function(e){if(t.trigger("filterStart"),t.i=1,t.reset.filter(),void 0===e)t.filtered=!1;else{t.filtered=!0;for(var r=t.items,n=0,i=r.length;n<i;n++){var s=r[n];e(s)?s.filtered=!0:s.filtered=!1}}return t.update(),t.trigger("filterComplete"),t.visibleItems}}},function(t,e,r){var n=(r(0),r(1)),i=r(7),s=r(6),a=r(3),o=r(19);t.exports=function(t,e){e=e||{},e=i({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},e);var r={search:function(n,i){for(var s=e.multiSearch?n.replace(/ +$/,"").split(/ +/):[n],a=0,o=t.items.length;a<o;a++)r.item(t.items[a],i,s)},item:function(t,e,n){for(var i=!0,s=0;s<n.length;s++){for(var a=!1,o=0,l=e.length;o<l;o++)r.values(t.values(),e[o],n[s])&&(a=!0);a||(i=!1)}t.found=i},values:function(t,r,n){if(t.hasOwnProperty(r)){var i=s(t[r]).toLowerCase();if(o(i,n,e))return!0}return!1}};return n.bind(a(t.listContainer,e.searchClass),"keyup",function(e){var n=e.target||e.srcElement;t.search(n.value,r.search)}),function(e,n){t.search(e,n,r.search)}}},function(t,e,r){var n=r(18),i=r(3),s=r(7),a=r(4),o=r(1),l=r(6),u=r(0),c=r(17),f=r(5);t.exports=function(t,e,h){var d,v=this,m=r(2)(v),g=r(8)(v),p=r(12)(v);d={start:function(){v.listClass="list",v.searchClass="search",v.sortClass="sort",v.page=1e4,v.i=1,v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.searchColumns=void 0,v.handlers={updated:[]},v.valueNames=[],v.utils={getByClass:i,extend:s,indexOf:a,events:o,toString:l,naturalSort:n,classes:u,getAttribute:c,toArray:f},v.utils.extend(v,e),v.listContainer="string"==typeof t?document.getElementById(t):t,v.listContainer&&(v.list=i(v.listContainer,v.listClass,!0),v.parse=r(13)(v),v.templater=r(16)(v),v.search=r(14)(v),v.filter=r(9)(v),v.sort=r(15)(v),v.fuzzySearch=r(10)(v,e.fuzzySearch),this.handlers(),this.items(),this.pagination(),v.update())},handlers:function(){for(var t in v.handlers)v[t]&&v.on(t,v[t])},items:function(){v.parse(v.list),void 0!==h&&v.add(h)},pagination:function(){if(void 0!==e.pagination){e.pagination===!0&&(e.pagination=[{}]),void 0===e.pagination[0]&&(e.pagination=[e.pagination]);for(var t=0,r=e.pagination.length;t<r;t++)p(e.pagination[t])}}},this.reIndex=function(){v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.parse(v.list)},this.toJSON=function(){for(var t=[],e=0,r=v.items.length;e<r;e++)t.push(v.items[e].values());return t},this.add=function(t,e){if(0!==t.length){if(e)return void g(t,e);var r=[],n=!1;void 0===t[0]&&(t=[t]);for(var i=0,s=t.length;i<s;i++){var a=null;n=v.items.length>v.page,a=new m(t[i],void 0,n),v.items.push(a),r.push(a)}return v.update(),r}},this.show=function(t,e){return this.i=t,this.page=e,v.update(),v},this.remove=function(t,e,r){for(var n=0,i=0,s=v.items.length;i<s;i++)v.items[i].values()[t]==e&&(v.templater.remove(v.items[i],r),v.items.splice(i,1),s--,i--,n++);return v.update(),n},this.get=function(t,e){for(var r=[],n=0,i=v.items.length;n<i;n++){var s=v.items[n];s.values()[t]==e&&r.push(s)}return r},this.size=function(){return v.items.length},this.clear=function(){return v.templater.clear(),v.items=[],v},this.on=function(t,e){return v.handlers[t].push(e),v},this.off=function(t,e){var r=v.handlers[t],n=a(r,e);return n>-1&&r.splice(n,1),v},this.trigger=function(t){for(var e=v.handlers[t].length;e--;)v.handlers[t][e](v);return v},this.reset={filter:function(){for(var t=v.items,e=t.length;e--;)t[e].filtered=!1;return v},search:function(){for(var t=v.items,e=t.length;e--;)t[e].found=!1;return v}},this.update=function(){var t=v.items,e=t.length;v.visibleItems=[],v.matchingItems=[],v.templater.clear();for(var r=0;r<e;r++)t[r].matching()&&v.matchingItems.length+1>=v.i&&v.visibleItems.length<v.page?(t[r].show(),v.visibleItems.push(t[r]),v.matchingItems.push(t[r])):t[r].matching()?(v.matchingItems.push(t[r]),t[r].hide()):t[r].hide();return v.trigger("updated"),v},d.start()}},function(t,e,r){var n=r(0),i=r(1),s=r(11);t.exports=function(t){var e=function(e,i){var s,o=t.matchingItems.length,l=t.i,u=t.page,c=Math.ceil(o/u),f=Math.ceil(l/u),h=i.innerWindow||2,d=i.left||i.outerWindow||0,v=i.right||i.outerWindow||0;v=c-v,e.clear();for(var m=1;m<=c;m++){var g=f===m?"active":"";r.number(m,d,v,f,h)?(s=e.add({page:m,dotted:!1})[0],g&&n(s.elm).add(g),a(s.elm,m,u)):r.dotted(e,m,d,v,f,h,e.size())&&(s=e.add({page:"...",dotted:!0})[0],n(s.elm).add("disabled"))}},r={number:function(t,e,r,n,i){return this.left(t,e)||this.right(t,r)||this.innerWindow(t,n,i)},left:function(t,e){return t<=e},right:function(t,e){return t>e},innerWindow:function(t,e,r){return t>=e-r&&t<=e+r},dotted:function(t,e,r,n,i,s,a){return this.dottedLeft(t,e,r,n,i,s)||this.dottedRight(t,e,r,n,i,s,a)},dottedLeft:function(t,e,r,n,i,s){return e==r+1&&!this.innerWindow(e,i,s)&&!this.right(e,n)},dottedRight:function(t,e,r,n,i,s,a){return!t.items[a-1].values().dotted&&(e==n&&!this.innerWindow(e,i,s)&&!this.right(e,n))}},a=function(e,r,n){i.bind(e,"click",function(){t.show((r-1)*n+1,n)})};return function(r){var n=new s(t.listContainer.id,{listClass:r.paginationClass||"pagination",item:"<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});t.on("updated",function(){e(n,r)}),e(n,r)}}},function(t,e,r){t.exports=function(t){var e=r(2)(t),n=function(t){for(var e=t.childNodes,r=[],n=0,i=e.length;n<i;n++)void 0===e[n].data&&r.push(e[n]);return r},i=function(r,n){for(var i=0,s=r.length;i<s;i++)t.items.push(new e(n,r[i]))},s=function(e,r){var n=e.splice(0,50);i(n,r),e.length>0?setTimeout(function(){s(e,r)},1):(t.update(),t.trigger("parseComplete"))};return t.handlers.parseComplete=t.handlers.parseComplete||[],function(){var e=n(t.list),r=t.valueNames;t.indexAsync?s(e,r):i(e,r)}}},function(t,e){t.exports=function(t){var e,r,n,i,s={resetList:function(){t.i=1,t.templater.clear(),i=void 0},setOptions:function(t){2==t.length&&t[1]instanceof Array?r=t[1]:2==t.length&&"function"==typeof t[1]?(r=void 0,i=t[1]):3==t.length?(r=t[1],i=t[2]):r=void 0},setColumns:function(){0!==t.items.length&&void 0===r&&(r=void 0===t.searchColumns?s.toArray(t.items[0].values()):t.searchColumns)},setSearchString:function(e){e=t.utils.toString(e).toLowerCase(),e=e.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),n=e},toArray:function(t){var e=[];for(var r in t)e.push(r);return e}},a={list:function(){for(var e=0,r=t.items.length;e<r;e++)a.item(t.items[e])},item:function(t){t.found=!1;for(var e=0,n=r.length;e<n;e++)if(a.values(t.values(),r[e]))return void(t.found=!0)},values:function(r,i){return!!(r.hasOwnProperty(i)&&(e=t.utils.toString(r[i]).toLowerCase(),""!==n&&e.search(n)>-1))},reset:function(){t.reset.search(),t.searched=!1}},o=function(e){return t.trigger("searchStart"),s.resetList(),s.setSearchString(e),s.setOptions(arguments),s.setColumns(),""===n?a.reset():(t.searched=!0,i?i(n,r):a.list()),t.update(),t.trigger("searchComplete"),t.visibleItems};return t.handlers.searchStart=t.handlers.searchStart||[],t.handlers.searchComplete=t.handlers.searchComplete||[],t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"keyup",function(e){var r=e.target||e.srcElement,n=""===r.value&&!t.searched;n||o(r.value)}),t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"input",function(t){var e=t.target||t.srcElement;""===e.value&&o("")}),o}},function(t,e){t.exports=function(t){var e={els:void 0,clear:function(){for(var r=0,n=e.els.length;r<n;r++)t.utils.classes(e.els[r]).remove("asc"),t.utils.classes(e.els[r]).remove("desc")},getOrder:function(e){var r=t.utils.getAttribute(e,"data-order");return"asc"==r||"desc"==r?r:t.utils.classes(e).has("desc")?"asc":t.utils.classes(e).has("asc")?"desc":"asc"},getInSensitive:function(e,r){var n=t.utils.getAttribute(e,"data-insensitive");"false"===n?r.insensitive=!1:r.insensitive=!0},setOrder:function(r){for(var n=0,i=e.els.length;n<i;n++){var s=e.els[n];if(t.utils.getAttribute(s,"data-sort")===r.valueName){var a=t.utils.getAttribute(s,"data-order");"asc"==a||"desc"==a?a==r.order&&t.utils.classes(s).add(r.order):t.utils.classes(s).add(r.order)}}}},r=function(){t.trigger("sortStart");var r={},n=arguments[0].currentTarget||arguments[0].srcElement||void 0;n?(r.valueName=t.utils.getAttribute(n,"data-sort"),e.getInSensitive(n,r),r.order=e.getOrder(n)):(r=arguments[1]||r,r.valueName=arguments[0],r.order=r.order||"asc",r.insensitive="undefined"==typeof r.insensitive||r.insensitive),e.clear(),e.setOrder(r);var i,s=r.sortFunction||t.sortFunction||null,a="desc"===r.order?-1:1;i=s?function(t,e){return s(t,e,r)*a}:function(e,n){var i=t.utils.naturalSort;return i.alphabet=t.alphabet||r.alphabet||void 0,!i.alphabet&&r.insensitive&&(i=t.utils.naturalSort.caseInsensitive),i(e.values()[r.valueName],n.values()[r.valueName])*a},t.items.sort(i),t.update(),t.trigger("sortComplete")};return t.handlers.sortStart=t.handlers.sortStart||[],t.handlers.sortComplete=t.handlers.sortComplete||[],e.els=t.utils.getByClass(t.listContainer,t.sortClass),t.utils.events.bind(e.els,"click",r),t.on("searchStart",e.clear),t.on("filterStart",e.clear),r}},function(t,e){var r=function(t){var e,r=this,n=function(){e=r.getItemSource(t.item),e&&(e=r.clearSourceItem(e,t.valueNames))};this.clearSourceItem=function(e,r){for(var n=0,i=r.length;n<i;n++){var s;if(r[n].data)for(var a=0,o=r[n].data.length;a<o;a++)e.setAttribute("data-"+r[n].data[a],"");else r[n].attr&&r[n].name?(s=t.utils.getByClass(e,r[n].name,!0),s&&s.setAttribute(r[n].attr,"")):(s=t.utils.getByClass(e,r[n],!0),s&&(s.innerHTML=""));s=void 0}return e},this.getItemSource=function(e){if(void 0===e){for(var r=t.list.childNodes,n=0,i=r.length;n<i;n++)if(void 0===r[n].data)return r[n].cloneNode(!0)}else{if(/<tr[\s>]/g.exec(e)){var s=document.createElement("tbody");return s.innerHTML=e,s.firstChild}if(e.indexOf("<")!==-1){var a=document.createElement("div");return a.innerHTML=e,a.firstChild}var o=document.getElementById(t.item);if(o)return o}},this.get=function(e,n){r.create(e);for(var i={},s=0,a=n.length;s<a;s++){var o;if(n[s].data)for(var l=0,u=n[s].data.length;l<u;l++)i[n[s].data[l]]=t.utils.getAttribute(e.elm,"data-"+n[s].data[l]);else n[s].attr&&n[s].name?(o=t.utils.getByClass(e.elm,n[s].name,!0),i[n[s].name]=o?t.utils.getAttribute(o,n[s].attr):""):(o=t.utils.getByClass(e.elm,n[s],!0),i[n[s]]=o?o.innerHTML:"");o=void 0}return i},this.set=function(e,n){var i=function(e){for(var r=0,n=t.valueNames.length;r<n;r++)if(t.valueNames[r].data){for(var i=t.valueNames[r].data,s=0,a=i.length;s<a;s++)if(i[s]===e)return{data:e}}else{if(t.valueNames[r].attr&&t.valueNames[r].name&&t.valueNames[r].name==e)return t.valueNames[r];if(t.valueNames[r]===e)return e}},s=function(r,n){var s,a=i(r);a&&(a.data?e.elm.setAttribute("data-"+a.data,n):a.attr&&a.name?(s=t.utils.getByClass(e.elm,a.name,!0),s&&s.setAttribute(a.attr,n)):(s=t.utils.getByClass(e.elm,a,!0),s&&(s.innerHTML=n)),s=void 0)};if(!r.create(e))for(var a in n)n.hasOwnProperty(a)&&s(a,n[a])},this.create=function(t){if(void 0!==t.elm)return!1;if(void 0===e)throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");var n=e.cloneNode(!0);return n.removeAttribute("id"),t.elm=n,r.set(t,t.values()),!0},this.remove=function(e){e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.show=function(e){r.create(e),t.list.appendChild(e.elm)},this.hide=function(e){void 0!==e.elm&&e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.clear=function(){if(t.list.hasChildNodes())for(;t.list.childNodes.length>=1;)t.list.removeChild(t.list.firstChild)},n()};t.exports=function(t){return new r(t)}},function(t,e){t.exports=function(t,e){var r=t.getAttribute&&t.getAttribute(e)||null;if(!r)for(var n=t.attributes,i=n.length,s=0;s<i;s++)void 0!==e[s]&&e[s].nodeName===e&&(r=e[s].nodeValue);return r}},function(t,e,r){"use strict";function n(t){return t>=48&&t<=57}function i(t,e){for(var r=(t+="").length,i=(e+="").length,s=0,l=0;s<r&&l<i;){var u=t.charCodeAt(s),c=e.charCodeAt(l);if(n(u)){if(!n(c))return u-c;for(var f=s,h=l;48===u&&++f<r;)u=t.charCodeAt(f);for(;48===c&&++h<i;)c=e.charCodeAt(h);for(var d=f,v=h;d<r&&n(t.charCodeAt(d));)++d;for(;v<i&&n(e.charCodeAt(v));)++v;var m=d-f-v+h;if(m)return m;for(;f<d;)if(m=t.charCodeAt(f++)-e.charCodeAt(h++))return m;s=d,l=v}else{if(u!==c)return u<o&&c<o&&a[u]!==-1&&a[c]!==-1?a[u]-a[c]:u-c;++s,++l}}return r-i}var s,a,o=0;i.caseInsensitive=i.i=function(t,e){return i((""+t).toLowerCase(),(""+e).toLowerCase())},Object.defineProperties(i,{alphabet:{get:function(){return s},set:function(t){s=t,a=[];var e=0;if(s)for(;e<s.length;e++)a[s.charCodeAt(e)]=e;for(o=a.length,e=0;e<o;e++)void 0===a[e]&&(a[e]=-1)}}}),t.exports=i},function(t,e){t.exports=function(t,e,r){function n(t,r){var n=t/e.length,i=Math.abs(o-r);return s?n+i/s:i?1:n}var i=r.location||0,s=r.distance||100,a=r.threshold||.4;if(e===t)return!0;if(e.length>32)return!1;var o=i,l=function(){var t,r={};for(t=0;t<e.length;t++)r[e.charAt(t)]=0;for(t=0;t<e.length;t++)r[e.charAt(t)]|=1<<e.length-t-1;return r}(),u=a,c=t.indexOf(e,o);c!=-1&&(u=Math.min(n(0,c),u),c=t.lastIndexOf(e,o+e.length),c!=-1&&(u=Math.min(n(0,c),u)));var f=1<<e.length-1;c=-1;for(var h,d,v,m=e.length+t.length,g=0;g<e.length;g++){for(h=0,d=m;h<d;)n(g,o+d)<=u?h=d:m=d,d=Math.floor((m-h)/2+h);m=d;var p=Math.max(1,o-d+1),C=Math.min(o+d,t.length)+e.length,y=Array(C+2);y[C+1]=(1<<g)-1;for(var b=C;b>=p;b--){var w=l[t.charAt(b-1)];if(0===g?y[b]=(y[b+1]<<1|1)&w:y[b]=(y[b+1]<<1|1)&w|((v[b+1]|v[b])<<1|1)|v[b+1],y[b]&f){var x=n(g,b-1);if(x<=u){if(u=x,c=b-1,!(c>o))break;p=Math.max(1,2*o-c)}}}if(n(g+1,o)>u)break;v=y}return!(c<0)}}]);
/*! checkboxes.js v1.2.2 | (c) 2013 - 2018 Rubens Mariuzzo | http://github.com/rmariuzzo/checkboxes.js/LICENSE */"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(a){_classCallCheck(this,b),this.$context=a}return _createClass(b,[{key:"check",value:function(){this.$context.find(":checkbox").filter(":not(:disabled)").filter(":visible").prop("checked",!0).trigger("change")}},{key:"uncheck",value:function(){this.$context.find(":checkbox:visible").filter(":not(:disabled)").prop("checked",!1).trigger("change")}},{key:"toggle",value:function(){this.$context.find(":checkbox:visible").filter(":not(:disabled)").each(function(b,c){var d=a(c);d.prop("checked",!d.is(":checked"))}).trigger("change")}},{key:"max",value:function(a){if(a>0){var b=this;this.$context.on("click.checkboxes.max",":checkbox",function(){b.$context.find(":checked").length===a?b.$context.find(":checkbox:not(:checked)").prop("disabled",!0):b.$context.find(":checkbox:not(:checked)").prop("disabled",!1)})}else this.$context.off("click.checkboxes.max")}},{key:"range",value:function(b){if(b){var c=this;this.$context.on("click.checkboxes.range",":checkbox",function(b){var d=a(b.target);if(b.shiftKey&&c.$last){var e=c.$context.find(":checkbox:visible"),f=e.index(c.$last),g=e.index(d),h=Math.min(f,g),i=Math.max(f,g)+1;e.slice(h,i).filter(":not(:disabled)").prop("checked",d.prop("checked")).trigger("change")}c.$last=d})}else this.$context.off("click.checkboxes.range")}}]),b}(),c=a.fn.checkboxes;a.fn.checkboxes=function(c){var d=Array.prototype.slice.call(arguments,1);return this.each(function(e,f){var g=a(f),h=g.data("checkboxes");h||g.data("checkboxes",h=new b(g)),"string"==typeof c&&h[c]&&h[c].apply(h,d)})},a.fn.checkboxes.Constructor=b,a.fn.checkboxes.noConflict=function(){return a.fn.checkboxes=c,this};var d=function(b){var c=a(b.target),d=c.attr("href"),e=a(c.data("context")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=c.data("action");e&&f&&(c.is(":checkbox")||b.preventDefault(),e.checkboxes(f))},e=function(){a("[data-toggle^=checkboxes]").each(function(){var b=a(this),c=b.data();delete c.toggle;for(var d in c)b.checkboxes(d,c[d])})};a(document).on("click.checkboxes.data-api","[data-toggle^=checkboxes]",d),a(document).on("ready.checkboxes.data-api",e)}(window.jQuery);
try{var jq2 = $.noConflict(true);}catch{};(($, jQuery) => {
// ==UserScript==
// @name        Steam Economy Enhancer
// @icon        https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg
// @namespace   https://github.com/Nuklon
// @author      Nuklon
// @license     MIT
// @version     6.8.6
// @description 增强 Steam 库存和 Steam 市场功能
// @include     ://steamcommunity.com/id/.*/inventory/
// @include     ://steamcommunity.com/profiles/.*/inventory
// @include     ://steamcommunity.com/market
// @include     ://steamcommunity.com/tradeoffer
// @require     https://code.jquery.com/jquery-3.3.1.min.js
// @require     https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @require     https://unpkg.com/@kapetan/jquery-observe@3.0.0/jquery-observe.js
// @require     https://unpkg.com/paginationjs@2.1.2/dist/pagination.min.js
// @require     https://unpkg.com/async@2.6.0/dist/async.min.js
// @require     https://unpkg.com/localforage@1.7.1/dist/localforage.min.js
// @require     https://unpkg.com/luxon@2.4.0/build/global/luxon.min.js
// @require     https://unpkg.com/list.js@1.5.0/dist/list.min.js
// @require     https://unpkg.com/checkboxes.js@1.2.2/dist/jquery.checkboxes-1.2.2.min.js
// @grant       unsafeWindow
// @grant       GM_addStyle
// @homepageURL https://steamcn.com/t311996-1-1
// @supportURL  https://steamcn.com/t311996-1-1
// @downloadURL https://raw.githubusercontent.com/Sneer-Cat/Steam-Economy-Enhancer/master/code.user.js
// @updateURL   https://raw.githubusercontent.com/Sneer-Cat/Steam-Economy-Enhancer/master/code.user.js
// ==/UserScript==
// jQuery is already added by Steam, force no conflict mode.
(function($, async) {
    $.noConflict(true);

    var DateTime = luxon.DateTime;

    const STEAM_INVENTORY_ID = 753;

    const PAGE_MARKET = 0;
    const PAGE_MARKET_LISTING = 1;
    const PAGE_TRADEOFFER = 2;
    const PAGE_INVENTORY = 3;

    const COLOR_ERROR = '#8A4243';
    const COLOR_SUCCESS = '#407736';
    const COLOR_PENDING = '#908F44';
    const COLOR_PRICE_FAIR = '#496424';
    const COLOR_PRICE_CHEAP = '#837433';
    const COLOR_PRICE_EXPENSIVE = '#813030';
    const COLOR_PRICE_NOT_CHECKED = '#26566c';

    const ERROR_SUCCESS = null;
    const ERROR_FAILED = 1;
    const ERROR_DATA = 2;

    var marketLists = [];
    var totalNumberOfProcessedQueueItems = 0;
    var totalNumberOfQueuedItems = 0;
    var totalPriceWithFeesOnMarket = 0;
    var totalPriceWithoutFeesOnMarket = 0;
    var totalScrap = 0;

    var spinnerBlock =
        '<div class="spinner"><div class="rect1"></div>&nbsp;<div class="rect2"></div>&nbsp;<div class="rect3"></div>&nbsp;<div class="rect4"></div>&nbsp;<div class="rect5"></div>&nbsp;</div>';
    var numberOfFailedRequests = 0;

    var enableConsoleLog = false;

    var country = typeof unsafeWindow.g_strCountryCode !== 'undefined' ? unsafeWindow.g_strCountryCode : undefined;
    var isLoggedIn = typeof unsafeWindow.g_rgWalletInfo !== 'undefined' && unsafeWindow.g_rgWalletInfo != null || (typeof unsafeWindow.g_bLoggedIn !== 'undefined' && unsafeWindow.g_bLoggedIn);

    var currentPage = window.location.href.includes('.com/market') ?
        (window.location.href.includes('market/listings') ?
            PAGE_MARKET_LISTING :
            PAGE_MARKET) :
        (window.location.href.includes('.com/tradeoffer') ?
            PAGE_TRADEOFFER :
            PAGE_INVENTORY);

    var market = new SteamMarket(unsafeWindow.g_rgAppContextData,
        typeof unsafeWindow.g_strInventoryLoadURL !== 'undefined' && unsafeWindow.g_strInventoryLoadURL != null
           ? unsafeWindow.g_strInventoryLoadURL
           : typeof unsafeWindow.g_strProfileURL !== 'undefined' && unsafeWindow.g_strProfileURL != null
              ? unsafeWindow.g_strProfileURL + '/inventory/json/'
              : 'https://steamcommunity.com/my/inventory/json/',
        isLoggedIn ? unsafeWindow.g_rgWalletInfo : undefined);

    var currencyId =
        isLoggedIn &&
        market != null &&
        market.walletInfo != null &&
        market.walletInfo.wallet_currency != null ?
        market.walletInfo.wallet_currency :
        3;

    var currencySymbol = unsafeWindow.GetCurrencySymbol(unsafeWindow.GetCurrencyCode(currencyId));

    function SteamMarket(appContext, inventoryUrl, walletInfo) {
        this.appContext = appContext;
        this.inventoryUrl = inventoryUrl;
        this.walletInfo = walletInfo;
        this.inventoryUrlBase = inventoryUrl.replace('/inventory/json', '');
        if (!this.inventoryUrlBase.endsWith('/'))
            this.inventoryUrlBase += '/';
    }

    //#region Settings
    const SETTING_MIN_NORMAL_PRICE = 'SETTING_MIN_NORMAL_PRICE';
    const SETTING_MAX_NORMAL_PRICE = 'SETTING_MAX_NORMAL_PRICE';
    const SETTING_MIN_FOIL_PRICE = 'SETTING_MIN_FOIL_PRICE';
    const SETTING_MAX_FOIL_PRICE = 'SETTING_MAX_FOIL_PRICE';
    const SETTING_MIN_MISC_PRICE = 'SETTING_MIN_MISC_PRICE';
    const SETTING_MAX_MISC_PRICE = 'SETTING_MAX_MISC_PRICE';
    const SETTING_PRICE_OFFSET = 'SETTING_PRICE_OFFSET';
    const SETTING_PRICE_MIN_CHECK_PRICE = 'SETTING_PRICE_MIN_CHECK_PRICE';
    const SETTING_PRICE_ALGORITHM = 'SETTING_PRICE_ALGORITHM';
    const SETTING_PRICE_IGNORE_LOWEST_Q = 'SETTING_PRICE_IGNORE_LOWEST_Q';
    const SETTING_PRICE_HISTORY_HOURS = 'SETTING_PRICE_HISTORY_HOURS';
    const SETTING_INVENTORY_PRICE_LABELS = 'SETTING_INVENTORY_PRICE_LABELS';
    const SETTING_TRADEOFFER_PRICE_LABELS = 'SETTING_TRADEOFFER_PRICE_LABELS';
    const SETTING_LAST_CACHE = 'SETTING_LAST_CACHE';
    const SETTING_RELIST_AUTOMATICALLY = 'SETTING_RELIST_AUTOMATICALLY';
    const SETTING_MARKET_PAGE_COUNT = 'SETTING_MARKET_PAGE_COUNT';
    const SETTING_INVENTORY_PRICES = 'SETTING_INVENTORY_PRICES';

    var settingDefaults = {
        SETTING_MIN_NORMAL_PRICE: 0.05,
        SETTING_MAX_NORMAL_PRICE: 2.50,
        SETTING_MIN_FOIL_PRICE: 0.15,
        SETTING_MAX_FOIL_PRICE: 10,
        SETTING_MIN_MISC_PRICE: 0.05,
        SETTING_MAX_MISC_PRICE: 10,
        SETTING_PRICE_OFFSET: 0.00,
        SETTING_PRICE_MIN_CHECK_PRICE: 0.00,
        SETTING_PRICE_ALGORITHM: 1,
        SETTING_PRICE_IGNORE_LOWEST_Q: 1,
        SETTING_PRICE_HISTORY_HOURS: 12,
        SETTING_INVENTORY_PRICE_LABELS: 1,
        SETTING_TRADEOFFER_PRICE_LABELS: 1,
        SETTING_LAST_CACHE: 0,
        SETTING_RELIST_AUTOMATICALLY: 0,
        SETTING_MARKET_PAGE_COUNT: 100
    };

    GM_addStyle('.inventory_iteminfo .market_commodity_orders_table th {min-width: 69px; padding: 4px} .inventory_iteminfo .market_commodity_orders_table td {min-width: initial} @media screen and (max-width: 910px) {html.responsive .view_inventory_logo {max-height: unset !important;}}');

    function getSettingWithDefault(name) {
        return getLocalStorageItem(name) || (name in settingDefaults ? settingDefaults[name] : null);
    }

    function setSetting(name, value) {
        setLocalStorageItem(name, value);
    }
    //#endregion

    //#region Storage

    var storagePersistent = localforage.createInstance({
        name: 'see_persistent'
    });

    var storageSession;

    var currentUrl = new URL(window.location.href);
    var noCache = currentUrl.searchParams.get('no-cache') != null;

    // This does not work the same as the 'normal' session storage because opening a new browser session/tab will clear the cache.
    // For this reason, a rolling cache is used.
    if (getSessionStorageItem('SESSION') == null || noCache) {
        var lastCache = getSettingWithDefault(SETTING_LAST_CACHE);
        if (lastCache > 5)
            lastCache = 0;

        setSetting(SETTING_LAST_CACHE, lastCache + 1);

        storageSession = localforage.createInstance({
            name: 'see_session_' + lastCache
        });

        storageSession.clear(); // Clear any previous data.
        setSessionStorageItem('SESSION', lastCache);
    } else {
        storageSession = localforage.createInstance({
            name: 'see_session_' + getSessionStorageItem('SESSION')
        });
    }

    function getLocalStorageItem(name) {
        try {
            return localStorage.getItem(name);
        } catch (e) {
            return null;
        }
    }

    function setLocalStorageItem(name, value) {
        try {
            localStorage.setItem(name, value);
            return true;
        } catch (e) {
            logConsole('无法设置localStorage内容，名称：' + name + '，原因：' + e + '。')
            return false;
        }
    }

    function getSessionStorageItem(name) {
        try {
            return sessionStorage.getItem(name);
        } catch (e) {
            return null;
        }
    }

    function setSessionStorageItem(name, value) {
        try {
            sessionStorage.setItem(name, value);
            return true;
        } catch (e) {
            logConsole('无法设置sessionStorage内容，名称：' + name + '，原因：' + e + '。')
            return false;
        }
    }
    //#endregion

    //#region Price helpers
    function getPriceInformationFromItem(item) {
        var isTradingCard = getIsTradingCard(item);
        var isFoilTradingCard = getIsFoilTradingCard(item);
        return getPriceInformation(isTradingCard, isFoilTradingCard);
    }

    function getPriceInformation(isTradingCard, isFoilTradingCard) {
        var maxPrice = 0;
        var minPrice = 0;

        if (!isTradingCard) {
            maxPrice = getSettingWithDefault(SETTING_MAX_MISC_PRICE);
            minPrice = getSettingWithDefault(SETTING_MIN_MISC_PRICE);
        } else {
            maxPrice = isFoilTradingCard ?
                getSettingWithDefault(SETTING_MAX_FOIL_PRICE) :
                getSettingWithDefault(SETTING_MAX_NORMAL_PRICE);
            minPrice = isFoilTradingCard ?
                getSettingWithDefault(SETTING_MIN_FOIL_PRICE) :
                getSettingWithDefault(SETTING_MIN_NORMAL_PRICE);
        }

        maxPrice = maxPrice * 100.0;
        minPrice = minPrice * 100.0;

        var maxPriceBeforeFees = market.getPriceBeforeFees(maxPrice);
        var minPriceBeforeFees = market.getPriceBeforeFees(minPrice);

        return {
            maxPrice,
            minPrice,
            maxPriceBeforeFees,
            minPriceBeforeFees
        };
    }

    // Calculates the average history price, before the fee.
    function calculateAverageHistoryPriceBeforeFees(history) {
        var highest = 0;
        var total = 0;

        if (history != null) {
            // Highest average price in the last xx hours.
            var timeAgo = Date.now() - (getSettingWithDefault(SETTING_PRICE_HISTORY_HOURS) * 60 * 60 * 1000);

            history.forEach(function(historyItem) {
                var d = new Date(historyItem[0]);
                if (d.getTime() > timeAgo) {
                    highest += historyItem[1] * historyItem[2];
                    total += historyItem[2];
                }
            });
        }

        if (total == 0)
            return 0;

        highest = Math.floor(highest / total);
        return market.getPriceBeforeFees(highest);
    }

    // Calculates the listing price, before the fee.
    function calculateListingPriceBeforeFees(histogram) {
        if (typeof histogram === 'undefined' ||
            histogram == null ||
            histogram.lowest_sell_order == null ||
            histogram.sell_order_graph == null)
            return 0;

        var listingPrice = market.getPriceBeforeFees(histogram.lowest_sell_order);

        var shouldIgnoreLowestListingOnLowQuantity = getSettingWithDefault(SETTING_PRICE_IGNORE_LOWEST_Q) == 1;

        if (shouldIgnoreLowestListingOnLowQuantity && histogram.sell_order_graph.length >= 2) {
            var listingPrice2ndLowest = market.getPriceBeforeFees(histogram.sell_order_graph[1][0] * 100);

            if (listingPrice2ndLowest > listingPrice) {
                var numberOfListingsLowest = histogram.sell_order_graph[0][1];
                var numberOfListings2ndLowest = histogram.sell_order_graph[1][1];

                var percentageLower = (100 * (numberOfListingsLowest / numberOfListings2ndLowest));

                // The percentage should change based on the quantity (for example, 1200 listings vs 5, or 1 vs 25).
                if (numberOfListings2ndLowest >= 1000 && percentageLower <= 5) {
                    listingPrice = listingPrice2ndLowest;
                } else if (numberOfListings2ndLowest < 1000 && percentageLower <= 10) {
                    listingPrice = listingPrice2ndLowest;
                } else if (numberOfListings2ndLowest < 100 && percentageLower <= 15) {
                    listingPrice = listingPrice2ndLowest;
                } else if (numberOfListings2ndLowest < 50 && percentageLower <= 20) {
                    listingPrice = listingPrice2ndLowest;
                } else if (numberOfListings2ndLowest < 25 && percentageLower <= 25) {
                    listingPrice = listingPrice2ndLowest;
                } else if (numberOfListings2ndLowest < 10 && percentageLower <= 30) {
                    listingPrice = listingPrice2ndLowest;
                }
            }
        }

        return listingPrice;
    }

    function calculateBuyOrderPriceBeforeFees(histogram) {
        if (typeof histogram === 'undefined')
            return 0;

        return market.getPriceBeforeFees(histogram.highest_buy_order);
    }

    // Calculate the sell price based on the history and listings.
    // applyOffset specifies whether the price offset should be applied when the listings are used to determine the price.
    function calculateSellPriceBeforeFees(history, histogram, applyOffset, minPriceBeforeFees, maxPriceBeforeFees) {
        var historyPrice = calculateAverageHistoryPriceBeforeFees(history);
        var listingPrice = calculateListingPriceBeforeFees(histogram);
        var buyPrice = calculateBuyOrderPriceBeforeFees(histogram);

        var shouldUseAverage = getSettingWithDefault(SETTING_PRICE_ALGORITHM) == 1;
        var shouldUseBuyOrder = getSettingWithDefault(SETTING_PRICE_ALGORITHM) == 3;

        // If the highest average price is lower than the first listing, return the offset + that listing.
        // Otherwise, use the highest average price instead.
        var calculatedPrice = 0;
        if (shouldUseBuyOrder && buyPrice !== -2) {
            calculatedPrice = buyPrice;
        } else if (historyPrice < listingPrice || !shouldUseAverage) {
            calculatedPrice = listingPrice;
        } else {
            calculatedPrice = historyPrice;
        }

        var changedToMax = false;
        // List for the maximum price if there are no listings yet.
        if (calculatedPrice == 0) {
            calculatedPrice = maxPriceBeforeFees;
            changedToMax = true;
        }


        // Apply the offset to the calculated price, but only if the price wasn't changed to the max (as otherwise it's impossible to list for this price).
        if (!changedToMax && applyOffset) {
            calculatedPrice = calculatedPrice + (getSettingWithDefault(SETTING_PRICE_OFFSET) * 100);
        }


        // Keep our minimum and maximum in mind.
        calculatedPrice = clamp(calculatedPrice, minPriceBeforeFees, maxPriceBeforeFees);


        // In case there's a buy order higher than the calculated price.
        if (typeof histogram !== 'undefined' && histogram != null && histogram.highest_buy_order != null) {
            var buyOrderPrice = market.getPriceBeforeFees(histogram.highest_buy_order);
            if (buyOrderPrice > calculatedPrice)
                calculatedPrice = buyOrderPrice;
        }

        return calculatedPrice;
    }
    //#endregion

    //#region Integer helpers
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getNumberOfDigits(x) {
        return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
    }

    function padLeftZero(str, max) {
        str = str.toString();
        return str.length < max ? padLeftZero("0" + str, max) : str;
    }

    function replaceNonNumbers(str) {
        return str.replace(/\D/g, '');
    }
    //#endregion

    //#region Steam Market

    // Sell an item with a price in cents.
    // Price is before fees.
    SteamMarket.prototype.sellItem = function(item, price, callback /*err, data*/ ) {
        var sessionId = readCookie('sessionid');
        var itemId = item.assetid || item.id;
        $.ajax({
            type: "POST",
            url: 'https://steamcommunity.com/market/sellitem/',
            data: {
                sessionid: sessionId,
                appid: item.appid,
                contextid: item.contextid,
                assetid: itemId,
                amount: 1,
                price: price
            },
            success: function(data) {
                if (data.success === false && isRetryMessage(data.message)) {
                    callback(ERROR_FAILED, data);
                } else {
                    callback(ERROR_SUCCESS, data);
                }
            },
            error: function(data) {
                return callback(ERROR_FAILED, data);
            },
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            dataType: 'json'
        });
    };

    // Removes an item.
    // Item is the unique item id.
    SteamMarket.prototype.removeListing = function(item, callback /*err, data*/ ) {
        var sessionId = readCookie('sessionid');
        $.ajax({
            type: "POST",
            url: window.location.protocol + '//steamcommunity.com/market/removelisting/' + item,
            data: {
                sessionid: sessionId
            },
            success: function(data) {
                callback(ERROR_SUCCESS, data);
            },
            error: function() {
                return callback(ERROR_FAILED);
            },
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            dataType: 'json'
        });
    };

    // Get the price history for an item.
    //
    // PriceHistory is an array of prices in the form [data, price, number sold].
    // Example: [["Fri, 19 Jul 2013 01:00:00 +0000",7.30050206184,362]]
    // Prices are ordered by oldest to most recent.
    // Price is inclusive of fees.
    SteamMarket.prototype.getPriceHistory = function(item, cache, callback) {
        try {
            var market_name = getMarketHashName(item);
            if (market_name == null) {
                callback(ERROR_FAILED);
                return;
            }

            var appid = item.appid;

            if (cache) {
                var storage_hash = 'pricehistory_' + appid + '+' + market_name;

                storageSession.getItem(storage_hash)
                    .then(function(value) {
                        if (value != null)
                            callback(ERROR_SUCCESS, value, true);
                        else
                            market.getCurrentPriceHistory(appid, market_name, callback);
                    })
                    .catch(function(error) {
                        market.getCurrentPriceHistory(appid, market_name, callback);
                    });
            } else
                market.getCurrentPriceHistory(appid, market_name, callback);
        } catch (e) {
            return callback(ERROR_FAILED);
        }
    };

    SteamMarket.prototype.getGooValue = function(item, callback) {
        try {
            for (var i = 0; i < item.owner_actions.length; i++) {
                var action = item.owner_actions[i];
                if ( !action.link || !action.name ) {
                    continue;
                }
                if (action.link.match(/^javascript:GetGooValue/)) {
                    var item_data = action.link.split(',');
                    var appid = item_data[2].trim();
                    var item_type = item_data[3].trim();
                    var border_color = item_data[4].split(' ')[0].trim();
                    $.ajax({
                        type: "GET",
                        url: window.location.protocol+'//steamcommunity.com/auction/ajaxgetgoovalueforitemtype/',
                        data: {
                            appid: appid,
                            item_type: item_type,
                            border_color: border_color
                        },
                        success: function(data) {
                            callback(ERROR_SUCCESS, data);
                        },
                        error: function(data) {
                            return callback(ERROR_FAILED, data);
                        },
                        crossDomain: true,
                        xhrFields: {
                            withCredentials: true
                        },
                        dataType: 'json'
                    });
                }
            }
        } catch (e) {
            return callback(ERROR_FAILED);
        }
        //http://steamcommunity.com/auction/ajaxgetgoovalueforitemtype/?appid=582980&item_type=18&border_color=0
        // OR
        //http://steamcommunity.com/my/ajaxgetgoovalue/?sessionid=xyz&appid=535690&assetid=4830605461&contextid=6
        //sessionid=xyz
        //appid = 535690
        //assetid = 4830605461
        //contextid = 6
    }

    // Grinds the item into gems.
    SteamMarket.prototype.grindIntoGoo = function(item, callback) {
        try {
            var sessionId = readCookie('sessionid');
            $.ajax({
                type: "POST",
                url: this.inventoryUrlBase + 'ajaxgrindintogoo/',
                data: {
                    sessionid: sessionId,
                    appid: item.market_fee_app,
                    assetid: item.assetid,
                    contextid: item.contextid,
                    goo_value_expected: item.goo_value_expected
                },
                success: function(data) {
                    callback(ERROR_SUCCESS, data);
                },
                error: function(data) {
                    return callback(ERROR_FAILED, data);
                },
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                dataType: 'json'
            });
        } catch (e) {
            return callback(ERROR_FAILED);
        }

        //sessionid = xyz
        //appid = 535690
        //assetid = 4830605461
        //contextid = 6
        //goo_value_expected = 10
        //http://steamcommunity.com/my/ajaxgrindintogoo/
    }


    // Unpacks the booster pack.
    SteamMarket.prototype.unpackBoosterPack = function(item, callback) {
        try {
            var sessionId = readCookie('sessionid');
            $.ajax({
                type: "POST",
                url: this.inventoryUrlBase + 'ajaxunpackbooster/',
                data: {
                    sessionid: sessionId,
                    appid: item.market_fee_app,
                    communityitemid: item.assetid
                },
                success: function(data) {
                    callback(ERROR_SUCCESS, data);
                },
                error: function(data) {
                    return callback(ERROR_FAILED, data);
                },
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                dataType: 'json'
            });
        } catch (e) {
            return callback(ERROR_FAILED);
        }

        //sessionid = xyz
        //appid = 535690
        //communityitemid = 4830605461
        //http://steamcommunity.com/my/ajaxunpackbooster/
    }

    // Get the current price history for an item.
    SteamMarket.prototype.getCurrentPriceHistory = function(appid, market_name, callback) {
        var url = window.location.protocol +
            '//steamcommunity.com/market/pricehistory/?appid=' +
            appid +
            '&market_hash_name=' +
            market_name;

        $.get(url,
                function(data) {
                    if (!data || !data.success || !data.prices) {
                        callback(ERROR_DATA);
                        return;
                    }

                    // Multiply prices so they're in pennies.
                    for (var i = 0; i < data.prices.length; i++) {
                        data.prices[i][1] *= 100;
                        data.prices[i][2] = parseInt(data.prices[i][2]);
                    }

                    // Store the price history in the session storage.
                    var storage_hash = 'pricehistory_' + appid + '+' + market_name;
                    storageSession.setItem(storage_hash, data.prices);

                    callback(ERROR_SUCCESS, data.prices, false);
                },
                'json')
            .fail(function(data) {
                if (!data || !data.responseJSON) {
                    return callback(ERROR_FAILED);
                }
                if (!data.responseJSON.success) {
                    callback(ERROR_DATA);
                    return;
                }
                return callback(ERROR_FAILED);
            });
    }

    // Get the item name id from a market item.
    //
    // This id never changes so we can store this in the persistent storage.
    SteamMarket.prototype.getMarketItemNameId = function(item, callback) {
        try {
            var market_name = getMarketHashName(item);
            if (market_name == null) {
                callback(ERROR_FAILED);
                return;
            }

            var appid = item.appid;
            var storage_hash = 'itemnameid_' + appid + '+' + market_name;

            storagePersistent.getItem(storage_hash)
                .then(function(value) {
                    if (value != null)
                        callback(ERROR_SUCCESS, value);
                    else
                        return market.getCurrentMarketItemNameId(appid, market_name, callback);
                })
                .catch(function(error) {
                    return market.getCurrentMarketItemNameId(appid, market_name, callback);
                });
        } catch (e) {
            return callback(ERROR_FAILED);
        }
    }

    // Get the item name id from a market item.
    SteamMarket.prototype.getCurrentMarketItemNameId = function(appid, market_name, callback) {
        var url = window.location.protocol + '//steamcommunity.com/market/listings/' + appid + '/' + market_name;
        $.get(url,
                function(page) {
                    var matches = /Market_LoadOrderSpread\( (.+) \);/.exec(page);
                    if (matches == null) {
                        callback(ERROR_DATA);
                        return;
                    }

                    var item_nameid = matches[1];

                    // Store the item name id in the persistent storage.
                    var storage_hash = 'itemnameid_' + appid + '+' + market_name;
                    storagePersistent.setItem(storage_hash, item_nameid);

                    callback(ERROR_SUCCESS, item_nameid);
                })
            .fail(function(e) {
                return callback(ERROR_FAILED, e.status);
            });
    };

    // Get the sales listings for this item in the market, with more information.
    //
    //{
    //"success" : 1,
    //"sell_order_table" : "<table class=\"market_commodity_orders_table\"><tr><th align=\"right\">Price<\/th><th align=\"right\">Quantity<\/th><\/tr><tr><td align=\"right\" class=\"\">0,04\u20ac<\/td><td align=\"right\">311<\/td><\/tr><tr><td align=\"right\" class=\"\">0,05\u20ac<\/td><td align=\"right\">895<\/td><\/tr><tr><td align=\"right\" class=\"\">0,06\u20ac<\/td><td align=\"right\">495<\/td><\/tr><tr><td align=\"right\" class=\"\">0,07\u20ac<\/td><td align=\"right\">174<\/td><\/tr><tr><td align=\"right\" class=\"\">0,08\u20ac<\/td><td align=\"right\">49<\/td><\/tr><tr><td align=\"right\" class=\"\">0,09\u20ac or more<\/td><td align=\"right\">41<\/td><\/tr><\/table>",
    //"sell_order_summary" : "<span class=\"market_commodity_orders_header_promote\">1965<\/span> for sale starting at <span class=\"market_commodity_orders_header_promote\">0,04\u20ac<\/span>",
    //"buy_order_table" : "<table class=\"market_commodity_orders_table\"><tr><th align=\"right\">Price<\/th><th align=\"right\">Quantity<\/th><\/tr><tr><td align=\"right\" class=\"\">0,03\u20ac<\/td><td align=\"right\">93<\/td><\/tr><\/table>",
    //"buy_order_summary" : "<span class=\"market_commodity_orders_header_promote\">93<\/span> requests to buy at <span class=\"market_commodity_orders_header_promote\">0,03\u20ac<\/span> or lower",
    //"highest_buy_order" : "3",
    //"lowest_sell_order" : "4",
    //"buy_order_graph" : [[0.03, 93, "93 buy orders at 0,03\u20ac or higher"]],
    //"sell_order_graph" : [[0.04, 311, "311 sell orders at 0,04\u20ac or lower"], [0.05, 1206, "1,206 sell orders at 0,05\u20ac or lower"], [0.06, 1701, "1,701 sell orders at 0,06\u20ac or lower"], [0.07, 1875, "1,875 sell orders at 0,07\u20ac or lower"], [0.08, 1924, "1,924 sell orders at 0,08\u20ac or lower"], [0.09, 1934, "1,934 sell orders at 0,09\u20ac or lower"], [0.1, 1936, "1,936 sell orders at 0,10\u20ac or lower"], [0.11, 1937, "1,937 sell orders at 0,11\u20ac or lower"], [0.12, 1944, "1,944 sell orders at 0,12\u20ac or lower"], [0.14, 1945, "1,945 sell orders at 0,14\u20ac or lower"]],
    //"graph_max_y" : 3000,
    //"graph_min_x" : 0.03,
    //"graph_max_x" : 0.14,
    //"price_prefix" : "",
    //"price_suffix" : "\u20ac"
    //}
    SteamMarket.prototype.getItemOrdersHistogram = function(item, cache, callback) {
        try {
            var market_name = getMarketHashName(item);
            if (market_name == null) {
                callback(ERROR_FAILED);
                return;
            }

            var appid = item.appid;

            if (cache) {
                var storage_hash = 'itemordershistogram_' + appid + '+' + market_name;
                storageSession.getItem(storage_hash)
                    .then(function(value) {
                        if (value != null)
                            callback(ERROR_SUCCESS, value, true);
                        else {
                            market.getCurrentItemOrdersHistogram(item, market_name, callback);
                        }
                    })
                    .catch(function(error) {
                        market.getCurrentItemOrdersHistogram(item, market_name, callback);
                    });
            } else {
                market.getCurrentItemOrdersHistogram(item, market_name, callback);
            }

        } catch (e) {
            return callback(ERROR_FAILED);
        }
    };

    // Get the sales listings for this item in the market, with more information.
    SteamMarket.prototype.getCurrentItemOrdersHistogram = function(item, market_name, callback) {
        market.getMarketItemNameId(item,
            function(error, item_nameid) {
                if (error) {
                    if (item_nameid != 429) // 429 = Too many requests made.
                        callback(ERROR_DATA);
                    else
                        callback(ERROR_FAILED);
                    return;
                }
                var url = window.location.protocol +
                    '//steamcommunity.com/market/itemordershistogram?country=' +
                    country +
                    '&language=schinese&currency=' +
                    currencyId +
                    '&item_nameid=' +
                    item_nameid +
                    '&two_factor=0';

                $.get(url,
                        function(histogram) {
                            // Store the histogram in the session storage.
                            var storage_hash = 'itemordershistogram_' + item.appid + '+' + market_name;
                            storageSession.setItem(storage_hash, histogram);

                            callback(ERROR_SUCCESS, histogram, false);
                        })
                    .fail(function() {
                        return callback(ERROR_FAILED, null);
                    });
            });
    };

    // Calculate the price before fees (seller price) from the buyer price
    SteamMarket.prototype.getPriceBeforeFees = function(price, item) {
        var publisherFee = -1;

        if (item != null) {
            if (item.market_fee != null)
                publisherFee = item.market_fee;
            else if (item.description != null && item.description.market_fee != null)
                publisherFee = item.description.market_fee;
        }

        if (publisherFee == -1) {
            if (this.walletInfo != null)
                publisherFee = this.walletInfo['wallet_publisher_fee_percent_default'];
            else
                publisherFee = 0.10;
        }

        price = Math.round(price);
        var feeInfo = CalculateFeeAmount(price, publisherFee, this.walletInfo);
        return price - feeInfo.fees;
    };

    // Calculate the buyer price from the seller price
    SteamMarket.prototype.getPriceIncludingFees = function(price, item) {
        var publisherFee = -1;
        if (item != null) {
            if (item.market_fee != null)
                publisherFee = item.market_fee;
            else if (item.description != null && item.description.market_fee != null)
                publisherFee = item.description.market_fee;
        }
        if (publisherFee == -1) {
            if (this.walletInfo != null)
                publisherFee = this.walletInfo['wallet_publisher_fee_percent_default'];
            else
                publisherFee = 0.10;
        }

        price = Math.round(price);
        var feeInfo = CalculateAmountToSendForDesiredReceivedAmount(price, publisherFee, this.walletInfo);
        return feeInfo.amount;
    };
    //#endregion

    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    // Cannot use encodeURI / encodeURIComponent, Steam only escapes certain characters.
    function escapeURI(name) {
        var previousName = '';
        while (previousName != name) {
            previousName = name;
            name = name.replace('?', '%3F')
                .replace('#', '%23')
                .replace('	', '%09');
        }
        return name;
    }

    //#region Steam Market / Inventory helpers
    function getMarketHashName(item) {
        if (item == null)
            return null;

        if (item.description != null && item.description.market_hash_name != null)
            return escapeURI(item.description.market_hash_name);

        if (item.description != null && item.description.name != null)
            return escapeURI(item.description.name);

        if (item.market_hash_name != null)
            return escapeURI(item.market_hash_name);

        if (item.name != null)
            return escapeURI(item.name);

        return null;
    }

    function getIsCrate(item) {
        if (item == null)
            return false;
        // This is available on the inventory page.
        var tags = item.tags != null ?
            item.tags :
            (item.description != null && item.description.tags != null ?
                item.description.tags :
                null);
        if (tags != null) {
            var isTaggedAsCrate = false;
            tags.forEach(function (arrayItem) {
                if (arrayItem.category == 'Type')
                    if (arrayItem.internal_name == 'Supply Crate')
                        isTaggedAsCrate = true;
            });
            if (isTaggedAsCrate)
                return true;
        }
    }

    function getIsTradingCard(item) {
        if (item == null)
            return false;

        // This is available on the inventory page.
        var tags = item.tags != null ?
            item.tags :
            (item.description != null && item.description.tags != null ?
                item.description.tags :
                null);
        if (tags != null) {
            var isTaggedAsTradingCard = false;
            tags.forEach(function(arrayItem) {
                if (arrayItem.category == 'item_class')
                    if (arrayItem.internal_name == 'item_class_2') // trading card.
                        isTaggedAsTradingCard = true;
            });
            if (isTaggedAsTradingCard)
                return true;
        }

        // This is available on the market page.
        if (item.owner_actions != null) {
            for (var i = 0; i < item.owner_actions.length; i++) {
                if (item.owner_actions[i].link == null)
                    continue;

                // Cards include a link to the gamecard page.
                // For example: "http://steamcommunity.com/my/gamecards/503820/".
                if (item.owner_actions[i].link.toString().toLowerCase().includes('gamecards'))
                    return true;
            }
        }

        // A fallback for the market page (only works with language on English).
        if (item.type != null && item.type.toLowerCase().includes('trading card'))
            return true;

        return false;
    }

    function getIsFoilTradingCard(item) {
        if (!getIsTradingCard(item))
            return false;

        // This is available on the inventory page.
        var tags = item.tags != null ?
            item.tags :
            (item.description != null && item.description.tags != null ?
                item.description.tags :
                null);
        if (tags != null) {
            var isTaggedAsFoilTradingCard = false;
            tags.forEach(function(arrayItem) {
                if (arrayItem.category == 'cardborder')
                    if (arrayItem.internal_name == 'cardborder_1') // foil border.
                        isTaggedAsFoilTradingCard = true;
            });
            if (isTaggedAsFoilTradingCard)
                return true;
        }

        // This is available on the market page.
        if (item.owner_actions != null) {
            for (var i = 0; i < item.owner_actions.length; i++) {
                if (item.owner_actions[i].link == null)
                    continue;

                // Cards include a link to the gamecard page.
                // The border parameter specifies the foil cards.
                // For example: "http://steamcommunity.com/my/gamecards/503820/?border=1".
                if (item.owner_actions[i].link.toString().toLowerCase().includes('gamecards') &&
                    item.owner_actions[i].link.toString().toLowerCase().includes('border'))
                    return true;
            }
        }

        // A fallback for the market page (only works with language on English).
        if (item.type != null && item.type.toLowerCase().includes('foil trading card'))
            return true;

        return false;
    }

    function CalculateFeeAmount(amount, publisherFee, walletInfo) {
        if (walletInfo == null || !walletInfo['wallet_fee']) {
            return {
                fees: 0
            };
        }

        publisherFee = (publisherFee == null) ? 0 : publisherFee;
        // Since CalculateFeeAmount has a Math.floor, we could be off a cent or two. Let's check:
        var iterations = 0; // shouldn't be needed, but included to be sure nothing unforseen causes us to get stuck
        var nEstimatedAmountOfWalletFundsReceivedByOtherParty =
            parseInt((amount - parseInt(walletInfo['wallet_fee_base'])) /
                (parseFloat(walletInfo['wallet_fee_percent']) + parseFloat(publisherFee) + 1));
        var bEverUndershot = false;
        var fees = CalculateAmountToSendForDesiredReceivedAmount(nEstimatedAmountOfWalletFundsReceivedByOtherParty,
            publisherFee,
            walletInfo);
        while (fees.amount != amount && iterations < 10) {
            if (fees.amount > amount) {
                if (bEverUndershot) {
                    fees = CalculateAmountToSendForDesiredReceivedAmount(
                        nEstimatedAmountOfWalletFundsReceivedByOtherParty - 1,
                        publisherFee,
                        walletInfo);
                    fees.steam_fee += (amount - fees.amount);
                    fees.fees += (amount - fees.amount);
                    fees.amount = amount;
                    break;
                } else {
                    nEstimatedAmountOfWalletFundsReceivedByOtherParty--;
                }
            } else {
                bEverUndershot = true;
                nEstimatedAmountOfWalletFundsReceivedByOtherParty++;
            }
            fees = CalculateAmountToSendForDesiredReceivedAmount(nEstimatedAmountOfWalletFundsReceivedByOtherParty,
                publisherFee,
                walletInfo);
            iterations++;
        }
        // fees.amount should equal the passed in amount
        return fees;
    }

    // Clamps cur between min and max (inclusive).
    function clamp(cur, min, max) {
        if (cur < min)
            cur = min;

        if (cur > max)
            cur = max;

        return cur;
    }

    // Strangely named function, it actually works out the fees and buyer price for a seller price
    function CalculateAmountToSendForDesiredReceivedAmount(receivedAmount, publisherFee, walletInfo) {
        if (walletInfo == null || !walletInfo['wallet_fee']) {
            return {
                amount: receivedAmount
            };
        }

        publisherFee = (publisherFee == null) ? 0 : publisherFee;
        var nSteamFee = parseInt(Math.floor(Math.max(receivedAmount * parseFloat(walletInfo['wallet_fee_percent']),
                walletInfo['wallet_fee_minimum']) +
            parseInt(walletInfo['wallet_fee_base'])));
        var nPublisherFee = parseInt(Math.floor(publisherFee > 0 ? Math.max(receivedAmount * publisherFee, 1) : 0));
        var nAmountToSend = receivedAmount + nSteamFee + nPublisherFee;
        return {
            steam_fee: nSteamFee,
            publisher_fee: nPublisherFee,
            fees: nSteamFee + nPublisherFee,
            amount: parseInt(nAmountToSend)
        };
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    }

    function isRetryMessage(message) {
        var messageList = [
            "在上一个操作完成之前，您不能出售任何物品。",
            "列出您的物品时出现问题。刷新页面并重试。",
            "我们无法连接到游戏物品服务器。游戏物品服务器可能已经关闭，或 Steam 可能正面临临时连接问题。您的列表尚未创建。请刷新页面并重试。"
        ];

        return messageList.indexOf(message) !== -1;
    }
    //#endregion

    //#region Logging
    var userScrolled = false;
    var logger = document.createElement('div');
    logger.setAttribute('id', 'logger');

    function updateScroll() {
        if (!userScrolled) {
            var element = document.getElementById("logger");
            element.scrollTop = element.scrollHeight;
        }
    }

    function logDOM(text) {
        logger.innerHTML += text + '<br/>';

        updateScroll();
    }

    function clearLogDOM() {
        logger.innerHTML = '';

        updateScroll();
    }

    function logConsole(text) {
        if (enableConsoleLog) {
            console.log(text);
        }
    }
    //#endregion

    //#region Inventory
    if (currentPage == PAGE_INVENTORY) {

        function onQueueDrain() {
            if (itemQueue.length() == 0 && sellQueue.length() == 0 && scrapQueue.length() == 0 && boosterQueue.length() == 0) {
                $('#inventory_items_spinner').remove();
            }
        }

        function updateTotals() {
            if ($('#loggerTotal').length == 0) {
                $(logger).parent().append('<div id="loggerTotal"></div>');
            }

            var totals = document.getElementById('loggerTotal');
            totals.innerHTML = '';

            if (totalPriceWithFeesOnMarket > 0) {
                totals.innerHTML += '<div><strong>累计上架物品总价为 ' +
                    (totalPriceWithFeesOnMarket / 100.0).toFixed(2) +
                    currencySymbol +
                    ', 你将会获得 ' +
                    (totalPriceWithoutFeesOnMarket / 100).toFixed(2) +
                    currencySymbol +
                    '.</strong></div>';
            }
            if (totalScrap > 0) {
                totals.innerHTML += '<div><strong>总共分解：' + totalScrap + '</strong></div>';
            }
        }

        var sellQueue = async.queue(function(task, next) {
                market.sellItem(task.item,
                    task.sellPrice,
                    function(err, data) {
                        totalNumberOfProcessedQueueItems++;

                        var digits = getNumberOfDigits(totalNumberOfQueuedItems);
                        var itemId = task.item.assetid || task.item.id;
                        var itemName = task.item.name || task.item.description.name;
                        var padLeft = padLeftZero('' + totalNumberOfProcessedQueueItems, digits) + ' / ' + totalNumberOfQueuedItems;

                        if (!err) {
                            logDOM(padLeft +
                                ' - ' +
                                itemName +
                                ' 已添加至市场，售价为 ' +
                                (market.getPriceIncludingFees(task.sellPrice) / 100.0).toFixed(2) +
                                currencySymbol +
                                ', 你将收到 ' +
                                (task.sellPrice / 100.0).toFixed(2) + currencySymbol +
                                '.');

                            $('#' + task.item.appid + '_' + task.item.contextid + '_' + itemId)
                                .css('background', COLOR_SUCCESS);

                            totalPriceWithoutFeesOnMarket += task.sellPrice;
                            totalPriceWithFeesOnMarket += market.getPriceIncludingFees(task.sellPrice);
                            updateTotals();
                        } else if (data != null && isRetryMessage(data.message)) {
                            logDOM(padLeft +
                                ' - ' +
                                itemName +
                                ' 正在重试列出物品，原因为 ' +
                                data.message[0].toLowerCase() +
                                data.message.slice(1));

                            totalNumberOfProcessedQueueItems--;
                            sellQueue.unshift(task);
                            sellQueue.pause();

                            setTimeout(function() {
                                sellQueue.resume();
                            }, getRandomInt(30000, 45000));
                        } else {
                            if (data != null && data.responseJSON != null && data.responseJSON.message != null) {
                                logDOM(padLeft +
                                    ' - ' +
                                    itemName +
                                    ' 上架市场失败，原因为 ' +
                                    data.responseJSON.message[0].toLowerCase() +
                                    data.responseJSON.message.slice(1));
                            } else
                                logDOM(padLeft + ' - ' + itemName + ' 上架市场失败');

                            $('#' + task.item.appid + '_' + task.item.contextid + '_' + itemId)
                                .css('background', COLOR_ERROR);
                        }

                        next();
                    });
            },
            1);

        sellQueue.drain = function() {
            onQueueDrain();
        }

        function sellAllItems(appId) {
            loadAllInventories().then(function() {
                    var items = getInventoryItems();
                    var filteredItems = [];

                    items.forEach(function(item) {
                        if (!item.marketable) {
                            return;
                        }

                        filteredItems.push(item);
                    });

                    sellItems(filteredItems);
                },
                function() {
                    logDOM('无法检索库存...');
                });
        }

        function sellAllDuplicateItems() {
            loadAllInventories().then(function () {
                var items = getInventoryItems();
                var marketableItems = [];
                var filteredItems = [];

                items.forEach(function (item) {
                    if (!item.marketable) {
                        return;
                    }

                    marketableItems.push(item);
                });

                filteredItems = marketableItems.filter((e, i) => marketableItems.map(m => m.classid).indexOf(e.classid) !== i);

                sellItems(filteredItems);
            },
            function () {
                logDOM('无法检索库存...');
            });
        }

        function sellAllCards() {
            loadAllInventories().then(function() {
                    var items = getInventoryItems();
                    var filteredItems = [];

                    items.forEach(function(item) {
                        if (!getIsTradingCard(item) || !item.marketable) {
                            return;
                        }

                        filteredItems.push(item);
                    });

                    sellItems(filteredItems);
                },
                function() {
                    logDOM('无法检索库存...');
                });
        }

        function sellAllCrates() {
            loadAllInventories().then(function () {
                    var items = getInventoryItems();
                    var filteredItems = [];
                    items.forEach(function (item) {
                        if (!getIsCrate(item) || !item.marketable) {
                            return;
                        }
                        filteredItems.push(item);
                    });

                    sellItems(filteredItems);
                },
                function() {
                    logDOM('无法检索库存...');
                });
        }

        var scrapQueue = async.queue(function(item, next) {
            scrapQueueWorker(item, function(success) {
                if (success) {
                    setTimeout(function() {
                        next();
                    }, 250);
                } else {
                    var delay = numberOfFailedRequests > 1 ?
                        getRandomInt(30000, 45000) :
                        getRandomInt(1000, 1500);

                    if (numberOfFailedRequests > 3)
                        numberOfFailedRequests = 0;

                    setTimeout(function() {
                        next();
                    }, delay);
                }
            });
        }, 1);

        scrapQueue.drain = function() {
            onQueueDrain();
        }

        function scrapQueueWorker(item, callback) {
            var failed = 0;
            var itemName = item.name || item.description.name;
            var itemId = item.assetid || item.id;

            market.getGooValue(item,
                function(err, goo) {
                    totalNumberOfProcessedQueueItems++;

                    var digits = getNumberOfDigits(totalNumberOfQueuedItems);
                    var padLeft = padLeftZero('' + totalNumberOfProcessedQueueItems, digits) + ' / ' + totalNumberOfQueuedItems;

                    if (err != ERROR_SUCCESS) {
                        logConsole('无法获取 ' + itemName + ' 分解后的宝石数。');
                        logDOM(padLeft + ' - ' + itemName + ' 由于缺少宝石数而未变成宝石');

                        $('#' + item.appid + '_' + item.contextid + '_' + itemId).css('background', COLOR_ERROR);
                        return callback(false);
                    }

                    item.goo_value_expected = parseInt(goo.goo_value);

                    market.grindIntoGoo(item,
                        function(err, result) {
                            if (err != ERROR_SUCCESS) {
                                logConsole('无法将' + itemName + '分解为宝石。');
                                logDOM(padLeft + ' - ' + itemName + ' 由于未知错误，未分解为宝石');

                                $('#' + item.appid + '_' + item.contextid + '_' + itemId).css('background', COLOR_ERROR);
                                return callback(false);
                            }

                            logConsole('============================')
                            logConsole(itemName);
                            logConsole('分解为 ' + goo.goo_value + '个 宝石');
                            logDOM(padLeft + ' - ' + itemName + ' 已分解为 ' + item.goo_value_expected + '个 宝石.');
                            $('#' + item.appid + '_' + item.contextid + '_' + itemId).css('background', COLOR_SUCCESS);

                            totalScrap += item.goo_value_expected;
                            updateTotals();

                            callback(true);
                        });
                });
        }

        var boosterQueue = async.queue(function(item, next) {
            boosterQueueWorker(item, function(success) {
                if (success) {
                    setTimeout(function() {
                        next();
                    }, 250);
                } else {
                    var delay = numberOfFailedRequests > 1 ?
                        getRandomInt(30000, 45000) :
                        getRandomInt(1000, 1500);

                    if (numberOfFailedRequests > 3)
                        numberOfFailedRequests = 0;

                    setTimeout(function() {
                        next();
                    }, delay);
                }
            });
        }, 1);

        boosterQueue.drain = function() {
            onQueueDrain();
        }

        function boosterQueueWorker(item, callback) {
            var failed = 0;
            var itemName = item.name || item.description.name;
            var itemId = item.assetid || item.id;

            market.unpackBoosterPack(item,
                function(err, goo) {
                    totalNumberOfProcessedQueueItems++;

                    var digits = getNumberOfDigits(totalNumberOfQueuedItems);
                    var padLeft = padLeftZero('' + totalNumberOfProcessedQueueItems, digits) + ' / ' + totalNumberOfQueuedItems;

                    if (err != ERROR_SUCCESS) {
                        logConsole('无法拆开补充包 ' + itemName);
                        logDOM(padLeft + ' - ' + itemName + ' 拆包失败.');

                        $('#' + item.appid + '_' + item.contextid + '_' + itemId).css('background', COLOR_ERROR);
                        return callback(false);
                    }

                    logDOM(padLeft + ' - ' + itemName + ' 拆包成功.');
                    $('#' + item.appid + '_' + item.contextid + '_' + itemId).css('background', COLOR_SUCCESS);

                    callback(true);
                });
        }


        // Turns the selected items into gems.
        function turnSelectedItemsIntoGems() {
            var ids = getSelectedItems();

            loadAllInventories().then(function() {
                var items = getInventoryItems();

                var numberOfQueuedItems = 0;
                items.forEach(function(item) {
                    // Ignored queued items.
                    if (item.queued != null) {
                        return;
                    }

                    if (item.owner_actions == null) {
                        return;
                    }

                    var canTurnIntoGems = false;
                    for (var owner_action in item.owner_actions) {
                        if (item.owner_actions[owner_action].link != null && item.owner_actions[owner_action].link.includes('GetGooValue')) {
                            canTurnIntoGems = true;
                        }
                    }

                    if (!canTurnIntoGems)
                        return;

                    var itemId = item.assetid || item.id;
                    if (ids.indexOf(itemId) !== -1) {
                        item.queued = true;
                        scrapQueue.push(item);
                        numberOfQueuedItems++;
                    }
                });

                if (numberOfQueuedItems > 0) {
                    totalNumberOfQueuedItems += numberOfQueuedItems;

                    $('#inventory_items_spinner').remove();
                    $('#inventory_sell_buttons').append('<div id="inventory_items_spinner">' +
                        spinnerBlock +
                        '<div style="text-align:center">正在处理 ' + numberOfQueuedItems + '个 物品</div>' +
                        '</div>');
                }
            }, function() {
                logDOM('无法检索库存...');
            });
        }

        // Unpacks the selected booster packs.
        function unpackSelectedBoosterPacks() {
            var ids = getSelectedItems();

            loadAllInventories().then(function() {
                var items = getInventoryItems();

                var numberOfQueuedItems = 0;
                items.forEach(function(item) {
                    // Ignored queued items.
                    if (item.queued != null) {
                        return;
                    }

                    if (item.owner_actions == null) {
                        return;
                    }

                    var canOpenBooster = false;
                    for (var owner_action in item.owner_actions) {
                        if (item.owner_actions[owner_action].link != null && item.owner_actions[owner_action].link.includes('OpenBooster')) {
                            canOpenBooster = true;
                        }
                    }

                    if (!canOpenBooster)
                        return;

                    var itemId = item.assetid || item.id;
                    if (ids.indexOf(itemId) !== -1) {
                        item.queued = true;
                        boosterQueue.push(item);
                        numberOfQueuedItems++;
                    }
                });

                if (numberOfQueuedItems > 0) {
                    totalNumberOfQueuedItems += numberOfQueuedItems;

                    $('#inventory_items_spinner').remove();
                    $('#inventory_sell_buttons').append('<div id="inventory_items_spinner">' +
                        spinnerBlock +
                        '<div style="text-align:center">正在处理 ' + numberOfQueuedItems + '个 物品</div>' +
                        '</div>');
                }
            }, function() {
                logDOM('无法检索库存...');
            });
        }

        function sellSelectedItems() {
            getInventorySelectedMarketableItems(function(items) {
                sellItems(items);
            });
        }

        function canSellSelectedItemsManually(items) {
            // We have to construct an URL like this
            // https://steamcommunity.com/market/multisell?appid=730&contextid=2&items[]=Falchion%20Case&qty[]=100
            var appid = items[0].appid;
            var contextid = items[0].contextid;

            var hasInvalidItem = false;

            items.forEach(function(item) {
				if (item.contextid != contextid || item.commodity == false)
				    hasInvalidItem = true;
            });

            return !hasInvalidItem;
        }

        function sellSelectedItemsManually() {
            getInventorySelectedMarketableItems(function(items) {
                // We have to construct an URL like this
                // https://steamcommunity.com/market/multisell?appid=730&contextid=2&items[]=Falchion%20Case&qty[]=100

				var appid = items[0].appid;
                var contextid = items[0].contextid;

                var itemsWithQty = {};

                items.forEach(function(item) {
                   itemsWithQty[item.market_hash_name] = itemsWithQty[item.market_hash_name] + 1 || 1;
                });

                var itemsString = '';
                for (var itemName in itemsWithQty) {
                    itemsString += '&items[]=' + encodeURI(itemName) + '&qty[]=' + itemsWithQty[itemName];
                }

                var baseUrl = 'https://steamcommunity.com/market/multisell';
                var redirectUrl = baseUrl + '?appid=' + appid + '&contextid=' + contextid + itemsString;

                var dialog = unsafeWindow.ShowDialog('Steam Economy Enhancer', '<iframe frameBorder="0" height="650" width="900" src="' + redirectUrl + '"></iframe>');
                dialog.OnDismiss(function() {
                    items.forEach(function(item) {
                        var itemId = item.assetid || item.id;
                        $('#' + item.appid + '_' + item.contextid + '_' + itemId).css('background', COLOR_PENDING);
                    });
                });
            });
        }

        function sellItems(items) {
            if (items.length == 0) {
                logDOM('这些物品无法被上架至市场...');

                return;
            }

            var numberOfQueuedItems = 0;

            items.forEach(function(item, index, array) {
                // Ignored queued items.
                if (item.queued != null) {
                    return;
                }

                item.queued = true;
                var itemId = item.assetid || item.id;
                item.ignoreErrors = false;
                itemQueue.push(item);
                numberOfQueuedItems++;
            });

            if (numberOfQueuedItems > 0) {
                totalNumberOfQueuedItems += numberOfQueuedItems;

                $('#inventory_items_spinner').remove();
                $('#inventory_sell_buttons').append('<div id="inventory_items_spinner">' +
                    spinnerBlock +
                    '<div style="text-align:center">正在处理 ' + numberOfQueuedItems + '个 物品</div>' +
                    '</div>');
            }
        }

        var itemQueue = async.queue(function(item, next) {
            itemQueueWorker(item,
                item.ignoreErrors,
                function(success, cached) {
                    if (success) {
                        setTimeout(function() {
                                next();
                            },
                            cached ? 0 : getRandomInt(1000, 1500));
                    } else {
                        if (!item.ignoreErrors) {
                            item.ignoreErrors = true;
                            itemQueue.push(item);
                        }

                        var delay = numberOfFailedRequests > 1 ?
                            getRandomInt(30000, 45000) :
                            getRandomInt(1000, 1500);

                        if (numberOfFailedRequests > 3)
                            numberOfFailedRequests = 0;

                        setTimeout(function() {
                                next();
                            },
                            cached ? 0 : delay);
                    }
                });
        }, 1);

        function itemQueueWorker(item, ignoreErrors, callback) {
            var priceInfo = getPriceInformationFromItem(item);

            var failed = 0;
            var itemName = item.name || item.description.name;

            market.getPriceHistory(item,
                true,
                function(err, history, cachedHistory) {
                    if (err) {
                        logConsole('无法获取 ' + itemName + ' 的价格历史');

                        if (err == ERROR_FAILED)
                            failed += 1;
                    }

                    market.getItemOrdersHistogram(item,
                        true,
                        function(err, histogram, cachedListings) {
                            if (err) {
                                logConsole('无法获取 ' + itemName + ' 的订单直方图');

                                if (err == ERROR_FAILED)
                                    failed += 1;
                            }

                            if (failed > 0 && !ignoreErrors) {
                                return callback(false, cachedHistory && cachedListings);
                            }

                            logConsole('============================')
                            logConsole(itemName);

                            var sellPrice = calculateSellPriceBeforeFees(history,
                                histogram,
                                true,
                                priceInfo.minPriceBeforeFees,
                                priceInfo.maxPriceBeforeFees);


                            logConsole('售价：' +
                                sellPrice / 100.0 +
                                ' (' +
                                market.getPriceIncludingFees(sellPrice) / 100.0 +
                                ')');

                            sellQueue.push({
                                item: item,
                                sellPrice: sellPrice
                            });

                            return callback(true, cachedHistory && cachedListings);
                        });
                });
        }

        // Initialize the inventory UI.
        function initializeInventoryUI() {
            var isOwnInventory = unsafeWindow.g_ActiveUser.strSteamId == unsafeWindow.g_steamID;
            var previousSelection = -1; // To store the index of the previous selection.
            updateInventoryUI(isOwnInventory);

            $('.games_list_tabs').on('click',
                '*',
                function() {
                    updateInventoryUI(isOwnInventory);
                });

            // Ignore selection on other user's inventories.
            if (!isOwnInventory)
                return;

            // Steam adds 'display:none' to items while searching. These should not be selected while using shift/ctrl.
            var filter = ".itemHolder:not([style*=none])";
            $('#inventories').selectable({
                filter: filter,
                selecting: function(e, ui) {
                    // Get selected item index.
                    var selectedIndex = $(ui.selecting.tagName, e.target).index(ui.selecting);

                    // If shift key was pressed and there is previous - select them all.
                    if (e.shiftKey && previousSelection > -1) {
                        $(ui.selecting.tagName, e.target)
                            .slice(Math.min(previousSelection, selectedIndex),
                                1 + Math.max(previousSelection, selectedIndex)).each(function() {
                                if ($(this).is(filter)) {
                                    $(this).addClass('ui-selected');
                                }
                            });
                        previousSelection = -1; // Reset previous.
                    } else {
                        previousSelection = selectedIndex; // Save previous.
                    }
                },
                selected: function(e, ui) {
                    updateInventorySelection(ui.selected);
                }
            });
        }

        // Gets the selected items in the inventory.
        function getSelectedItems() {
            var ids = [];
            $('.inventory_ctn').each(function() {
                $(this).find('.inventory_page').each(function() {
                    var inventory_page = this;

                    $(inventory_page).find('.itemHolder').each(function() {
                        if (!$(this).hasClass('ui-selected'))
                            return;

                        $(this).find('.item').each(function() {
                            var matches = this.id.match(/_(\-?\d+)$/);
                            if (matches) {
                                ids.push(matches[1]);
                            }
                        });
                    });
                });
            });

            return ids;
        }

        // Gets the selected and marketable items in the inventory.
        function getInventorySelectedMarketableItems(callback) {
            var ids = getSelectedItems();

            loadAllInventories().then(function() {
                var items = getInventoryItems();
                var filteredItems = [];

                items.forEach(function(item) {
                    if (!item.marketable) {
                        return;
                    }

                    var itemId = item.assetid || item.id;
                    if (ids.indexOf(itemId) !== -1) {
                        filteredItems.push(item);
                    }
                });

                callback(filteredItems);
            }, function() {
                logDOM('无法检索库存...');
            });
        }

        // Gets the selected and gemmable items in the inventory.
        function getInventorySelectedGemsItems(callback) {
            var ids = getSelectedItems();

            loadAllInventories().then(function() {
                var items = getInventoryItems();
                var filteredItems = [];

                items.forEach(function(item) {
                    var canTurnIntoGems = false;
                    for (var owner_action in item.owner_actions) {
                        if (item.owner_actions[owner_action].link != null && item.owner_actions[owner_action].link.includes('GetGooValue')) {
                            canTurnIntoGems = true;
                        }
                    }

                    if (!canTurnIntoGems)
                        return;

                    var itemId = item.assetid || item.id;
                    if (ids.indexOf(itemId) !== -1) {
                        filteredItems.push(item);
                    }
                });

                callback(filteredItems);
            }, function() {
                logDOM('无法检索库存...');
            });
        }

        // Gets the selected and booster pack items in the inventory.
        function getInventorySelectedBoosterPackItems(callback) {
            var ids = getSelectedItems();

            loadAllInventories().then(function() {
                var items = getInventoryItems();
                var filteredItems = [];

                items.forEach(function(item) {
                    var canOpenBooster = false;
                    for (var owner_action in item.owner_actions) {
                        if (item.owner_actions[owner_action].link != null && item.owner_actions[owner_action].link.includes('OpenBooster')) {
                            canOpenBooster = true;
                        }
                    }

                    if (!canOpenBooster)
                        return;

                    var itemId = item.assetid || item.id;
                    if (ids.indexOf(itemId) !== -1) {
                        filteredItems.push(item);
                    }
                });

                callback(filteredItems);
            }, function() {
                logDOM('无法检索库存...');
            });
        }

        // Updates the (selected) sell ... items button.
        function updateSellSelectedButton() {
            getInventorySelectedMarketableItems(function(items) {
                var selectedItems = items.length;
                if (items.length == 0) {
                    $('.sell_selected').hide();
                    $('.sell_manual').hide();
                } else {
                    $('.sell_selected').show();
                    if (canSellSelectedItemsManually(items)) {
                        $('.sell_manual').show();
                        $('.sell_manual > span').text('手动出售 ' + selectedItems + '个 物品');
                    } else {
                        $('.sell_manual').hide();
                    }
                    $('.sell_selected > span').text('出售 ' + selectedItems + '个 物品');
                }
            });
        }

        // Updates the (selected) turn into ... gems button.
        function updateTurnIntoGemsButton() {
            getInventorySelectedGemsItems(function(items) {
                var selectedItems = items.length;
                if (items.length == 0) {
                    $('.turn_into_gems').hide();
                } else {
                    $('.turn_into_gems').show();
                    $('.turn_into_gems > span')
                        .text('分解 ' + selectedItems + '个 物品为宝石');
                }
            });
        }

        // Updates the (selected) open ... booster packs button.
        function updateOpenBoosterPacksButton() {
            getInventorySelectedBoosterPackItems(function(items) {
                var selectedItems = items.length;
                if (items.length == 0) {
                    $('.unpack_booster_packs').hide();
                } else {
                    $('.unpack_booster_packs').show();
                    $('.unpack_booster_packs > span')
                        .text('拆开 ' + selectedItems + '个 补充包');
                }
            });
        }

        function updateInventorySelection(item) {
            updateSellSelectedButton();
            updateTurnIntoGemsButton();
            updateOpenBoosterPacksButton();

            // Wait until g_ActiveInventory.selectedItem is identical to the selected UI item.
            // This also makes sure that the new - and correct - item_info (iteminfo0 or iteminfo1) is visible.
            var selectedItemIdUI = $('div', item).attr('id');
            var selectedItemIdInventory = getActiveInventory().selectedItem.appid +
                '_' +
                getActiveInventory().selectedItem.contextid +
                '_' +
                getActiveInventory().selectedItem.assetid;
            if (selectedItemIdUI !== selectedItemIdInventory) {
                setTimeout(function() {
                    updateInventorySelection(item);
                }, 250);

                return;
            }

            var item_info = $('.inventory_iteminfo:visible').first();
            if (item_info.html().indexOf('checkout/sendgift/') > -1) // Gifts have no market information.
                return;

            // Use a 'hard' item id instead of relying on the selected item_info (sometimes Steam temporarily changes the correct item (?)).
            var item_info_id = item_info.attr('id');

            // Move scrap to bottom, this is of little interest.
            var scrap = $('#' + item_info_id + '_scrap_content');
            scrap.next().insertBefore(scrap);

            // Starting at prices are already retrieved in the table.
            //$('#' + item_info_id + '_item_market_actions > div:nth-child(1) > div:nth-child(2)')
            //    .remove(); // Starting at: x,xx.

            var market_hash_name = getMarketHashName(getActiveInventory().selectedItem);
            if (market_hash_name == null)
                return;

            var appid = getActiveInventory().selectedItem.appid;
            var item = {
                appid: parseInt(appid),
                description: {
                    market_hash_name: market_hash_name
                }
            };

            market.getItemOrdersHistogram(item,
                false,
                function(err, histogram) {
                    if (err) {
                        logConsole('无法获取 ' + (getActiveInventory().selectedItem.name || getActiveInventory().selectedItem.description.name) + ' 的订单直方图');
                        return;
                    }

                    var groupMain = $('<div id="listings_group">' +
                        '<div><div id="listings_sell">出售</div>' +
                        histogram.sell_order_table +
                        '</div>' +
                        '<div><div id="listings_buy">购买</div>' +
                        histogram.buy_order_table +
                        '</div>' +
                        '</div>');

                    $('#' + item_info_id + '_item_market_actions > div').after(groupMain);

                    var ownerActions = $('#' + item_info_id + '_item_owner_actions');
                    // ownerActions is hidden on other games' inventories, we need to show it to have a "Market" button visible
                    ownerActions.show();

                    ownerActions.append('<a class="btn_small btn_grey_white_innerfade" href="/market/listings/' + appid + '/' + market_hash_name + '"><span>在社区市场中查看</span></a>');
                    $('#' + item_info_id + '_item_market_actions > div:nth-child(1) > div:nth-child(1)').hide();

                    var isBoosterPack = getActiveInventory().selectedItem.name.toLowerCase().endsWith('booster pack');
                    if (isBoosterPack) {
                        var tradingCardsUrl = "/market/search?q=&category_753_Game%5B%5D=tag_app_" + getActiveInventory().selectedItem.market_fee_app + "&category_753_item_class%5B%5D=tag_item_class_2&appid=753";
                        ownerActions.append('<br/> <a class="btn_small btn_grey_white_innerfade" href="' + tradingCardsUrl + '"><span>在社区市场中查看可集换式卡牌</span></a>');
                    }


                    // Generate quick sell buttons.
                    var itemId = getActiveInventory().selectedItem.assetid || getActiveInventory().selectedItem.id;

                    // Ignored queued items.
                    if (getActiveInventory().selectedItem.queued != null) {
                        return;
                    }

                    var prices = [];

                    if (histogram != null && histogram.highest_buy_order != null) {
                        prices.push(parseInt(histogram.highest_buy_order));
                    }

                    if (histogram != null && histogram.lowest_sell_order != null) {
                        // Transaction volume must be separable into three or more parts (no matter if equal): valve+publisher+seller.
                        if (parseInt(histogram.lowest_sell_order) > 3) {
                            prices.push(parseInt(histogram.lowest_sell_order) - 1);
                        }
                        prices.push(parseInt(histogram.lowest_sell_order));
                    }

                    prices = prices.filter((v, i) => prices.indexOf(v) === i).sort((a, b) => a - b);

                    var buttons = '<div>';
                    var oributton = $('#' + item_info_id + '_item_market_actions > a.item_market_action_button', item_info);
                    buttons += '<a class="item_market_action_button item_market_action_button_green" style="margin-right: 4px; display: inline-block;" href="javascript:SellCurrentSelection()">'+oributton.html()+'</a>';
                    oributton.remove();
                    prices.forEach(function(e) {
                        buttons +=
                            '<a class="item_market_action_button item_market_action_button_green quick_sell" style="display: inline-block;" id="quick_sell' +
                            e +
                            '">' +
                            '<span class="item_market_action_button_edge item_market_action_button_left"></span>' +
                            '<span class="item_market_action_button_contents">' +
                            (e / 100.0) +
                            currencySymbol +
                            '</span>' +
                            '<span class="item_market_action_button_edge item_market_action_button_right"></span>' +
                            '<span class="item_market_action_button_preload"></span>' +
                            '</a>'
                    });
                    buttons += '</div>';

                    $('#' + item_info_id + '_item_market_actions', item_info).append(buttons);

                    $('#' + item_info_id + '_item_market_actions', item_info).append(
                        '<div style="display:flex">' +
                        '<input id="quick_sell_input" style="background-color: black;color: white;border: transparent;max-width:65px;text-align:center;" type="number" value="' + (histogram.lowest_sell_order / 100) + '" step="0.01" />' +
                        '&nbsp;<a class="item_market_action_button item_market_action_button_green quick_sell_custom">' +
                        '<span class="item_market_action_button_edge item_market_action_button_left"></span>' +
                        '<span class="item_market_action_button_contents">➜ 确认出售</span>' +
                        '<span class="item_market_action_button_edge item_market_action_button_right"></span>' +
                        '<span class="item_market_action_button_preload"></span>' +
                        '</a>' +
                        '</div>');

                    $('.quick_sell').on('click',
                        function() {
                            var price = $(this).attr('id').replace('quick_sell', '');
                            price = market.getPriceBeforeFees(price);

                            totalNumberOfQueuedItems++;

                            sellQueue.push({
                                item: getActiveInventory().selectedItem,
                                sellPrice: price
                            });
                        });

                    $('.quick_sell_custom').on('click',
                        function() {
                            var price = $('#quick_sell_input', $('#' + item_info_id + '_item_market_actions', item_info)).val() * 100;
                            price = market.getPriceBeforeFees(price);

                            totalNumberOfQueuedItems++;

                            sellQueue.push({
                                item: getActiveInventory().selectedItem,
                                sellPrice: price
                            });
                        });
                });
        }

        // Update the inventory UI.
        function updateInventoryUI(isOwnInventory) {
            // Remove previous containers (e.g., when a user changes inventory).
            $('#inventory_sell_buttons').remove();
            $('#price_options').remove();
            $('#inventory_reload_button').remove();

            $('#see_settings').remove();
            $('#global_action_menu')
                .prepend('<span id="see_settings"><a href="javascript:void(0)">⬖ SEE 设置 </a></span>');
            $('#see_settings').on('click', '*', () => openSettings());

            var appId = getActiveInventory().m_appid;
            var showMiscOptions = appId == 753;
            var TF2 = appId == 440;

            var sellButtons = $('<div id="inventory_sell_buttons" style="margin-bottom:12px;">' +
                '<a class="btn_green_white_innerfade btn_medium_wide sell_all separator-btn-right"><span>出售所有物品</span></a>' +
                '<a class="btn_green_white_innerfade btn_medium_wide sell_all_duplicates separator-btn-right"><span>出售所有重复物品</span></a>' +
                '<a class="btn_green_white_innerfade btn_medium_wide sell_selected separator-btn-right" style="display:none"><span>出售所选物品</span></a>' +
                '<a class="btn_green_white_innerfade btn_medium_wide sell_manual separator-btn-right" style="display:none"><span>手动出售物品</span></a>' +
                (showMiscOptions ?
                    '<a class="btn_green_white_innerfade btn_medium_wide sell_all_cards separator-btn-right"><span>出售所有卡牌</span></a>' +
                    '<div style="margin-top:12px;">' +
                    '<a class="btn_darkblue_white_innerfade btn_medium_wide turn_into_gems separator-btn-right" style="display:none"><span>将选中物品分解为宝石</span></a>' +
                    '<a class="btn_darkblue_white_innerfade btn_medium_wide unpack_booster_packs separator-btn-right" style="display:none"><span>拆开选中的补充包</span></a>' +
                    '</div>' :
                    '') +
                (TF2 ? '<a class="btn_green_white_innerfade btn_medium_wide sell_all_crates separator-btn-right"><span>出售所有箱子</span></a>' : '') +
                '</div>');

            var reloadButton =
                $('<a id="inventory_reload_button" class="btn_darkblue_white_innerfade btn_medium_wide reload_inventory" style="margin-right:12px"><span>重新加载库存</span></a>');

            $('#inventory_logos')[0].style.height = 'auto';

            $('#inventory_applogo').hide(); // Hide the Steam/game logo, we don't need to see it twice.
            $('#inventory_applogo').after(logger);


            $("#logger").on('scroll',
                function() {
                    var hasUserScrolledToBottom =
                        $("#logger").prop('scrollHeight') - $("#logger").prop('clientHeight') <=
                        $("#logger").prop('scrollTop') + 1;
                    userScrolled = !hasUserScrolledToBottom;
                });

            // Only add buttons on the user's inventory.
            if (isOwnInventory) {
                $('#inventory_applogo').after(sellButtons);

                // Add bindings to sell buttons.
                $('.sell_all').on('click',
                    '*',
                    function() {
                        sellAllItems(appId);
                    });
                $('.sell_selected').on('click', '*', sellSelectedItems);
                $('.sell_all_duplicates').on('click', '*', sellAllDuplicateItems);
                $('.sell_manual').on('click', '*', sellSelectedItemsManually);
                $('.sell_all_cards').on('click', '*', sellAllCards);
                $('.sell_all_crates').on('click', '*', sellAllCrates);
                $('.turn_into_gems').on('click', '*', turnSelectedItemsIntoGems);
                $('.unpack_booster_packs').on('click', '*', unpackSelectedBoosterPacks);

            }

            $('.inventory_rightnav').prepend(reloadButton);
            $('.reload_inventory').on('click',
                '*',
                function() {
                    window.location.reload();
                });

            loadAllInventories().then(function() {
                    var updateInventoryPrices = function() {
                        if (getSettingWithDefault(SETTING_INVENTORY_PRICE_LABELS) == 1) {
                            setInventoryPrices(getInventoryItems());
                        }
                    };

                    // Load after the inventory is loaded.
                    updateInventoryPrices();

                    $('#inventory_pagecontrols').observe('childlist',
                        '*',
                        function(record) {
                            updateInventoryPrices();
                        });
                },
                function() {
                    logDOM('无法检索库存...');
                });
        }

        // Loads the specified inventories.
        function loadInventories(inventories) {
            return new Promise(function(resolve) {
                inventories.reduce(function(promise, inventory) {
                        return promise.then(function() {
                            return inventory.LoadCompleteInventory().done(function() {});
                        });
                    },
                    Promise.resolve());

                resolve();
            });
        }

        // Loads all inventories.
        function loadAllInventories() {
            var items = [];

            for (var child in getActiveInventory().m_rgChildInventories) {
                items.push(getActiveInventory().m_rgChildInventories[child]);
            }
            items.push(getActiveInventory());

            return loadInventories(items);
        }

        // Gets the inventory items from the active inventory.
        function getInventoryItems() {
            var arr = [];

            for (var child in getActiveInventory().m_rgChildInventories) {
                for (var key in getActiveInventory().m_rgChildInventories[child].m_rgAssets) {
                    var value = getActiveInventory().m_rgChildInventories[child].m_rgAssets[key];
                    if (typeof value === 'object') {
                        // Merges the description in the normal object, this is done to keep the layout consistent with the market page, which is also flattened.
                        Object.assign(value, value.description);
                        // Includes the id of the inventory item.
                        value['id'] = key;
                        arr.push(value);
                    }
                }
            }

            // Some inventories (e.g. BattleBlock Theater) do not have child inventories, they have just one.
            for (var key in getActiveInventory().m_rgAssets) {
                var value = getActiveInventory().m_rgAssets[key];
                if (typeof value === 'object') {
                    // Merges the description in the normal object, this is done to keep the layout consistent with the market page, which is also flattened.
                    Object.assign(value, value.description);
                    // Includes the id of the inventory item.
                    value['id'] = key;
                    arr.push(value);
                }
            }

            return arr;
        }
    }
    //#endregion

    //#region Inventory + Tradeoffer
    if (currentPage == PAGE_INVENTORY || currentPage == PAGE_TRADEOFFER) {

        // Gets the active inventory.
        function getActiveInventory() {
            return unsafeWindow.g_ActiveInventory;
        }

        // Sets the prices for the items.
        function setInventoryPrices(items) {
            inventoryPriceQueue.kill();

            items.forEach(function(item) {
                if (!item.marketable) {
                    return;
                }

                if (!$(item.element).is(":visible")) {
                    return;
                }

                inventoryPriceQueue.push(item);
            });
        }

        var inventoryPriceQueue = async.queue(function(item, next) {
                inventoryPriceQueueWorker(item,
                    false,
                    function(success, cached) {
                        if (success) {
                            setTimeout(function() {
                                    next();
                                },
                                cached ? 0 : getRandomInt(1000, 1500));
                        } else {
                            if (!item.ignoreErrors) {
                                item.ignoreErrors = true;
                                inventoryPriceQueue.push(item);
                            }

                            numberOfFailedRequests++;

                            var delay = numberOfFailedRequests > 1 ?
                                getRandomInt(30000, 45000) :
                                getRandomInt(1000, 1500);

                            if (numberOfFailedRequests > 3)
                                numberOfFailedRequests = 0;

                            setTimeout(function() {
                                next();
                            }, cached ? 0 : delay);
                        }
                    });
            },
            1);

        function inventoryPriceQueueWorker(item, ignoreErrors, callback) {
            var priceInfo = getPriceInformationFromItem(item);

            var failed = 0;
            var itemName = item.name || item.description.name;

            // Only get the market orders here, the history is not important to visualize the current prices.
            market.getItemOrdersHistogram(item,
                true,
                function(err, histogram, cachedListings) {
                    if (err) {
                        logConsole('无法获取 ' + itemName + ' 的订单历史直方图');

                        if (err == ERROR_FAILED)
                            failed += 1;
                    }

                    if (failed > 0 && !ignoreErrors) {
                        return callback(false, cachedListings);
                    }

                    var sellPrice = calculateSellPriceBeforeFees(null, histogram, false, 0, 65535);

                    var itemPrice = sellPrice == 65535 ?
                        '∞' :
                        (market.getPriceIncludingFees(sellPrice) / 100.0).toFixed(2) + currencySymbol;

                    var elementName = (currentPage == PAGE_TRADEOFFER ? '#item' : '#') +
                        item.appid +
                        '_' +
                        item.contextid +
                        '_' +
                        item.id;
                    var element = $(elementName);

                    $('.inventory_item_price', element).remove();
                    element.append('<span class="inventory_item_price price_' + (sellPrice == 65535 ? 0 : market.getPriceIncludingFees(sellPrice)) + '">' + itemPrice + '</span>');

                    return callback(true, cachedListings);
                });
        }
    }
    //#endregion

    //#region Market
    if (currentPage == PAGE_MARKET || currentPage == PAGE_MARKET_LISTING) {
        var marketListingsRelistedAssets = [];

        var marketListingsQueue = async.queue(function(listing, next) {
            marketListingsQueueWorker(listing,
                false,
                function(success, cached) {
                    if (success) {
                        setTimeout(function() {
                                next();
                            },
                            cached ? 0 : getRandomInt(1000, 1500));
                    } else {
                        setTimeout(function() {
                                marketListingsQueueWorker(listing,
                                    true,
                                    function(success, cached) {
                                        next(); // Go to the next queue item, regardless of success.
                                    });
                            },
                            cached ? 0 : getRandomInt(30000, 45000));
                    }
                });
        }, 1);

        marketListingsQueue.drain = function() {
            injectJs(function() {
                g_bMarketWindowHidden = false;
            })
        };

        // Gets the price, in cents, from a market listing.
        function getPriceFromMarketListing(listing) {
            var priceLabel = listing.trim().replace('--', '00');

            // Fixes RUB, which has a dot at the end.
            if (priceLabel[priceLabel.length - 1] === '.' || priceLabel[priceLabel.length - 1] === ",")
                priceLabel = priceLabel.slice(0, -1);

            // For round numbers (e.g., 100 EUR).
            if (priceLabel.indexOf('.') === -1 && priceLabel.indexOf(',') === -1) {
                priceLabel = priceLabel + ',00';
            }

            return parseInt(replaceNonNumbers(priceLabel));
        }

        function marketListingsQueueWorker(listing, ignoreErrors, callback) {
            var asset = unsafeWindow.g_rgAssets[listing.appid][listing.contextid][listing.assetid];

            // An asset:
            //{
            // "currency" : 0,
            // "appid" : 753,
            // "contextid" : "6",
            // "id" : "4363079664",
            // "classid" : "2228526061",
            // "instanceid" : "0",
            // "amount" : "1",
            // "status" : 2,
            // "original_amount" : "1",
            // "background_color" : "",
            // "icon_url" : "xx",
            // "icon_url_large" : "xxx",
            // "descriptions" : [{
            //   "value" : "Their dense, shaggy fur conceals the presence of swams of moogamites, purple scaly skin, and more nipples than one would expect."
            //  }
            // ],
            // "tradable" : 1,
            // "owner_actions" : [{
            //   "link" : "http://steamcommunity.com/my/gamecards/443880/",
            //   "name" : "View badge progress"
            //  }, {
            //   "link" : "javascript:GetGooValue( '%contextid%', '%assetid%', 443880, 7, 0 )",
            //   "name" : "Turn into Gems..."
            //  }
            // ],
            // "name" : "Wook",
            // "type" : "Loot Rascals Trading Card",
            // "market_name" : "Wook",
            // "market_hash_name" : "443880-Wook",
            // "market_fee_app" : 443880,
            // "commodity" : 1,
            // "market_tradable_restriction" : 7,
            // "market_marketable_restriction" : 7,
            // "marketable" : 1,
            // "app_icon" : "xxxx",
            // "owner" : 0
            //}

            var market_hash_name = getMarketHashName(asset);
            var appid = listing.appid;

            var listingUI = $(getListingFromLists(listing.listingid).elm);

            var game_name = asset.type;
            var price = getPriceFromMarketListing($('.market_listing_price > span:nth-child(1) > span:nth-child(1)', listingUI).text());

            if (price <= getSettingWithDefault(SETTING_PRICE_MIN_CHECK_PRICE) * 100) {
                $('.market_listing_my_price', listingUI).last().css('background', COLOR_PRICE_NOT_CHECKED);
                $('.market_listing_my_price', listingUI).last().prop('title', 'The price is not checked.');
                listingUI.addClass('not_checked');

                return callback(true, true);
            }

            var priceInfo = getPriceInformationFromItem(asset);
            var item = {
                appid: parseInt(appid),
                description: {
                    market_hash_name: market_hash_name
                }
            };

            var failed = 0;

            market.getPriceHistory(item,
                true,
                function(errorPriceHistory, history, cachedHistory) {
                    if (errorPriceHistory) {
                        logConsole('无法获取 ' + game_name + ' 的价格历史');

                        if (errorPriceHistory == ERROR_FAILED)
                            failed += 1;
                    }

                    market.getItemOrdersHistogram(item,
                        true,
                        function(errorHistogram, histogram, cachedListings) {
                            if (errorHistogram) {
                                logConsole('无法获取 '+ game_name + ' 的订单历史直方图');

                                if (errorHistogram == ERROR_FAILED)
                                    failed += 1;
                            }

                            if (failed > 0 && !ignoreErrors) {
                                return callback(false, cachedHistory && cachedListings);
                            }

                            // Shows the highest buy order price on the market listings.
                            // The 'histogram.highest_buy_order' is not reliable as Steam is caching this value, but it gives some idea for older titles/listings.
                            var highestBuyOrderPrice = (histogram == null || histogram.highest_buy_order == null ?
                                '-' :
                                ((histogram.highest_buy_order / 100) + currencySymbol));
                            $('.market_table_value > span:nth-child(1) > span:nth-child(1) > span:nth-child(1)',
                                listingUI).append(' ➤ <span title="这可能是当前最高买价。">' +
                                highestBuyOrderPrice +
                                '</span>');

                            logConsole('============================')
                            logConsole(JSON.stringify(listing));
                            logConsole(game_name + ': ' + asset.name);
                            logConsole('当前价格：' + price / 100.0);

                            // Calculate two prices here, one without the offset and one with the offset.
                            // The price without the offset is required to not relist the item constantly when you have the lowest price (i.e., with a negative offset).
                            // The price with the offset should be used for relisting so it will still apply the user-set offset.

                            var sellPriceWithoutOffset = calculateSellPriceBeforeFees(history,
                                histogram,
                                false,
                                priceInfo.minPriceBeforeFees,
                                priceInfo.maxPriceBeforeFees);
                            var sellPriceWithOffset = calculateSellPriceBeforeFees(history,
                                histogram,
                                true,
                                priceInfo.minPriceBeforeFees,
                                priceInfo.maxPriceBeforeFees);

                            var sellPriceWithoutOffsetWithFees = market.getPriceIncludingFees(sellPriceWithoutOffset);

                            logConsole('计算出的价格：' +
                                sellPriceWithoutOffsetWithFees / 100.0 +
                                ' (' +
                                sellPriceWithoutOffset / 100.0 +
                                ')');

                            listingUI.addClass('price_' + sellPriceWithOffset);

                            $('.market_listing_my_price', listingUI).last().prop('title',
                                '最好的价格是 ' + (sellPriceWithoutOffsetWithFees / 100.0) + currencySymbol + '.');

                            if (sellPriceWithoutOffsetWithFees < price) {
                                logConsole('售价太高。');

                                $('.market_listing_my_price', listingUI).last()
                                    .css('background', COLOR_PRICE_EXPENSIVE);
                                listingUI.addClass('overpriced');

                                if (getSettingWithDefault(SETTING_RELIST_AUTOMATICALLY) == 1) {
                                    queueOverpricedItemListing(listing.listingid);
                                }
                            } else if (sellPriceWithoutOffsetWithFees > price) {
                                logConsole('售价太低。');

                                $('.market_listing_my_price', listingUI).last().css('background', COLOR_PRICE_CHEAP);
                                listingUI.addClass('underpriced');
                            } else {
                                logConsole('售价正好。');

                                $('.market_listing_my_price', listingUI).last().css('background', COLOR_PRICE_FAIR);
                                listingUI.addClass('fair');
                            }

                            return callback(true, cachedHistory && cachedListings);
                        });
                });
        }

        var marketOverpricedQueue = async.queue(function(item, next) {
                marketOverpricedQueueWorker(item,
                    false,
                    function(success) {
                        if (success) {
                            setTimeout(function() {
                                    next();
                                },
                                getRandomInt(1000, 1500));
                        } else {
                            setTimeout(function() {
                                    marketOverpricedQueueWorker(item,
                                        true,
                                        function(success) {
                                            next(); // Go to the next queue item, regardless of success.
                                        });
                                },
                                getRandomInt(30000, 45000));
                        }
                    });
            },
            1);

        function marketOverpricedQueueWorker(item, ignoreErrors, callback) {
            var listingUI = getListingFromLists(item.listing).elm;

            market.removeListing(item.listing,
                function(errorRemove, data) {
                    if (!errorRemove) {
                        $('.actual_content', listingUI).css('background', COLOR_PENDING);

                        setTimeout(function() {
                            var baseUrl = $('.header_notification_items').first().attr('href') + 'json/';
                            var itemName = $('.market_listing_item_name_link', listingUI).first().attr('href');
                            var marketHashNameIndex = itemName.lastIndexOf('/') + 1;
                            var marketHashName = itemName.substring(marketHashNameIndex);
                            var decodedMarketHashName = decodeURIComponent(itemName.substring(marketHashNameIndex));
                            var newAssetId = -1;

                            unsafeWindow.RequestFullInventory(baseUrl + item.appid + "/" + item.contextid + "/", {}, null, null, function(transport) {
                                if (transport.responseJSON && transport.responseJSON.success) {
                                    var inventory = transport.responseJSON.rgInventory;

                                    for (var child in inventory) {
                                        if (marketListingsRelistedAssets.indexOf(child) == -1 && inventory[child].appid == item.appid && (inventory[child].market_hash_name == decodedMarketHashName || inventory[child].market_hash_name == marketHashName)) {
                                            newAssetId = child;
                                            break;
                                        }
                                    }

                                    if (newAssetId == -1) {
                                        $('.actual_content', listingUI).css('background', COLOR_ERROR);
                                        return callback(false);
                                    }

                                    item.assetid = newAssetId;
                                    marketListingsRelistedAssets.push(newAssetId);

                                    market.sellItem(item,
                                        item.sellPrice,
                                        function(errorSell) {
                                            if (!errorSell) {
                                                $('.actual_content', listingUI).css('background', COLOR_SUCCESS);

                                                setTimeout(function() {
                                                    removeListingFromLists(item.listing)
                                                }, 3000);

                                                return callback(true);
                                            } else {
                                                $('.actual_content', listingUI).css('background', COLOR_ERROR);
                                                return callback(false);
                                            }
                                        });

                                } else {
                                    $('.actual_content', listingUI).css('background', COLOR_ERROR);
                                    return callback(false);
                                }
                            });
                        }, getRandomInt(1500, 2500)); // Wait a little to make sure the item is returned to inventory.
                    } else {
                        $('.actual_content', listingUI).css('background', COLOR_ERROR);
                        return callback(false);
                    }
                });
        }

        // Queue an overpriced item listing to be relisted.
        function queueOverpricedItemListing(listingid) {
            var assetInfo = getAssetInfoFromListingId(listingid);
            var listingUI = $(getListingFromLists(listingid).elm);
            var price = -1;

            var items = $(listingUI).attr('class').split(' ');
            for (var i in items) {
                if (items[i].toString().includes('price_'))
                    price = parseInt(items[i].toString().replace('price_', ''));
            }

            if (price > 0) {
                marketOverpricedQueue.push({
                    listing: listingid,
                    assetid: assetInfo.assetid,
                    contextid: assetInfo.contextid,
                    appid: assetInfo.appid,
                    sellPrice: price
                });
            }
        }

        var marketRemoveQueue = async.queue(function(listingid, next) {
                marketRemoveQueueWorker(listingid,
                    false,
                    function(success) {
                        if (success) {
                            setTimeout(function() {
                                    next();
                                },
                                getRandomInt(50, 100));
                        } else {
                            setTimeout(function() {
                                    marketRemoveQueueWorker(listingid,
                                        true,
                                        function(success) {
                                            next(); // Go to the next queue item, regardless of success.
                                        });
                                },
                                getRandomInt(30000, 45000));
                        }
                    });
            },
            10);

        function marketRemoveQueueWorker(listingid, ignoreErrors, callback) {
            var listingUI = getListingFromLists(listingid).elm;

            market.removeListing(listingid,
                function(errorRemove, data) {
                    if (!errorRemove) {
                        $('.actual_content', listingUI).css('background', COLOR_SUCCESS);

                        setTimeout(function() {
                                removeListingFromLists(listingid);

                                var numberOfListings = marketLists[0].size;
                                if (numberOfListings > 0) {
                                    $('#my_market_selllistings_number').text((numberOfListings).toString());

                                    // This seems identical to the number of sell listings.
                                    $('#my_market_activelistings_number').text((numberOfListings).toString());
                                }
                            },
                            3000);

                        return callback(true);
                    } else {
                        $('.actual_content', listingUI).css('background', COLOR_ERROR);

                        return callback(false);
                    }
                });
        }

        var marketListingsItemsQueue = async.queue(function(listing, next) {
                $.get(window.location.protocol + '//steamcommunity.com/market/mylistings?count=100&start=' + listing,
                        function(data) {
                            if (!data || !data.success) {
                                next();
                                return;
                            }

                            var myMarketListings = $('#tabContentsMyActiveMarketListingsRows');

                            var nodes = $.parseHTML(data.results_html);
                            var rows = $('.market_listing_row', nodes);
                            myMarketListings.append(rows);

                            // g_rgAssets
                            unsafeWindow.MergeWithAssetArray(data.assets); // This is a method from Steam.

                            next();
                        },
                        'json')
                    .fail(function(data) {
                        next();
                        return;
                    });
            },
            1);

        marketListingsItemsQueue.drain = function() {
            var myMarketListings = $('#tabContentsMyActiveMarketListingsRows');
            myMarketListings.checkboxes('range', true);

            // Sometimes the Steam API is returning duplicate entries (especially during item listing), filter these.
            var seen = {};
            $('.market_listing_row', myMarketListings).each(function() {
                var item_id = $(this).attr('id');
                if (seen[item_id])
                    $(this).remove();
                else
                    seen[item_id] = true;

                // Remove listings awaiting confirmations, they are already listed separately.
                if ($('.item_market_action_button', this).attr('href').toLowerCase()
                    .includes('CancelMarketListingConfirmation'.toLowerCase()))
                    $(this).remove();

                // Remove buy order listings, they are already listed separately.
                if ($('.item_market_action_button', this).attr('href').toLowerCase()
                    .includes('CancelMarketBuyOrder'.toLowerCase()))
                    $(this).remove();
            });

            // Now add the market checkboxes.
            addMarketCheckboxes();

            // Show the listings again, rendering is done.
            $('#market_listings_spinner').remove();
            myMarketListings.show();

            fillMarketListingsQueue();

            injectJs(function() {
                g_bMarketWindowHidden =
                    true; // Limits the number of requests made to steam by stopping constant polling of popular listings.
            });
        };


        function fillMarketListingsQueue() {
            $('.market_home_listing_table').each(function(e) {

                // Not for popular / new / recently sold items (bottom of page).
                if ($('.my_market_header', $(this)).length == 0)
                    return;

                // Buy orders and listings confirmations are not grouped like the sell listings, add this so pagination works there as well.
                if (!$(this).attr('id')) {
                    $(this).attr('id', 'market-listing-' + e);

                    $(this).append('<div class="market_listing_see" id="market-listing-container-' + e + '"></div>')
                    $('.market_listing_row', $(this)).appendTo($('#market-listing-container-' + e));
                } else {
                    $(this).children().last().addClass("market_listing_see");
                }

                addMarketPagination($('.market_listing_see', this).last());
                sortMarketListings($(this), false, false, true);
            });

            var totalPriceBuyer = 0;
            var totalPriceSeller = 0;
            // Add the listings to the queue to be checked for the price.
            for (var i = 0; i < marketLists.length; i++) {
                for (var j = 0; j < marketLists[i].items.length; j++) {
                    var listingid = replaceNonNumbers(marketLists[i].items[j].values().market_listing_item_name);
                    var assetInfo = getAssetInfoFromListingId(listingid);

                    if (!isNaN(assetInfo.priceBuyer))
                        totalPriceBuyer += assetInfo.priceBuyer;
                    if (!isNaN(assetInfo.priceSeller))
                        totalPriceSeller += assetInfo.priceSeller;

                    marketListingsQueue.push({
                        listingid,
                        appid: assetInfo.appid,
                        contextid: assetInfo.contextid,
                        assetid: assetInfo.assetid
                    });
                }
            }

            $('#my_market_selllistings_number').append('<span id="my_market_sellistings_total_price">, ' + (totalPriceBuyer / 100.0).toFixed(2) + currencySymbol + ' ➤ ' + (totalPriceSeller / 100.0).toFixed(2) + currencySymbol + '</span>');
        }


        // Gets the asset info (appid/contextid/assetid) based on a listingid.
        function getAssetInfoFromListingId(listingid) {
            var listing = getListingFromLists(listingid);
            if (listing == null) {
                return {};
            }

            var actionButton = $('.item_market_action_button', listing.elm).attr('href');
            // Market buy orders have no asset info.
            if (actionButton == null || actionButton.toLowerCase().includes('cancelmarketbuyorder'))
                return {};

            var priceBuyer = getPriceFromMarketListing($('.market_listing_price > span:nth-child(1) > span:nth-child(1)', listing.elm).text());
            var priceSeller = getPriceFromMarketListing($('.market_listing_price > span:nth-child(1) > span:nth-child(3)', listing.elm).text());
            var itemIds = actionButton.split(',');
            var appid = replaceNonNumbers(itemIds[2]);
            var contextid = replaceNonNumbers(itemIds[3]);
            var assetid = replaceNonNumbers(itemIds[4]);
            return {
                appid,
                contextid,
                assetid,
                priceBuyer,
                priceSeller
            };
        }

        // Adds pagination and search options to the market item listings.
        function addMarketPagination(market_listing_see) {
            market_listing_see.addClass('list');

            market_listing_see.before('<ul class="paginationTop pagination"></ul>');
            market_listing_see.after('<ul class="paginationBottom pagination"></ul>');

            $('.market_listing_table_header', market_listing_see.parent())
                .append('<input class="search" id="market_name_search" placeholder="Search..." />');

            var options = {
                valueNames: [
                    'market_listing_game_name', 'market_listing_item_name_link', 'market_listing_price',
                    'market_listing_listed_date', {
                        name: 'market_listing_item_name',
                        attr: 'id'
                    }
                ],
                pagination: [{
                    name: "paginationTop",
                    paginationClass: "paginationTop",
                    innerWindow: 100,
                    outerWindow: 100,
                    left: 100,
                    right: 100
                }, {
                    name: "paginationBottom",
                    paginationClass: "paginationBottom",
                    innerWindow: 100,
                    outerWindow: 100,
                    left: 100,
                    right: 100
                }],
                page: parseInt(getSettingWithDefault(SETTING_MARKET_PAGE_COUNT))
            };

            var list = new List(market_listing_see.parent().attr('id'), options);
            list.on('searchComplete', updateMarketSelectAllButton);
            marketLists.push(list);
        }

        // Adds checkboxes to market listings.
        function addMarketCheckboxes() {
            $('.market_listing_row').each(function() {
                // Don't add it again, one time is enough.
                if ($('.market_listing_select', this).length == 0) {
                    $('.market_listing_cancel_button', $(this)).append('<div class="market_listing_select">' +
                        '<input type="checkbox" class="market_select_item"/>' +
                        '</div>');

                    $('.market_select_item', this).change(function(e) {
                        updateMarketSelectAllButton();
                    });
                }
            });
        }

        // Process the market listings.
        function processMarketListings() {
            addMarketCheckboxes();

            if (currentPage == PAGE_MARKET) {
                // Load the market listings.
                var currentCount = 0;
                var totalCount = 0;

                if (typeof unsafeWindow.g_oMyListings !== 'undefined' && unsafeWindow.g_oMyListings != null && unsafeWindow.g_oMyListings.m_cTotalCount != null)
                    totalCount = unsafeWindow.g_oMyListings.m_cTotalCount;
                else {
                    totalCount = parseInt($('#my_market_selllistings_number').text());
                }

                if (isNaN(totalCount) || totalCount == 0) {
                    fillMarketListingsQueue();
                    return;
                }

                $('#tabContentsMyActiveMarketListingsRows').html(''); // Clear the default listings.
                $('#tabContentsMyActiveMarketListingsRows').hide(); // Hide all listings until everything has been loaded.

                // Hide Steam's paging controls.
                $('#tabContentsMyActiveMarketListings_ctn').hide();
                $('.market_pagesize_options').hide();

                // Show the spinner so the user knows that something is going on.
                $('.my_market_header').eq(0).append('<div id="market_listings_spinner">' +
                    spinnerBlock +
                    '<div style="text-align:center">正在加载交易列表...</div>' +
                    '</div>');

                while (currentCount < totalCount) {
                    marketListingsItemsQueue.push(currentCount);
                    currentCount += 100;
                }
            } else {
                // This is on a market item page.
                $('.market_home_listing_table').each(function(e) {
                    // Not on 'x requests to buy at y,yy or lower'.
                    if ($('#market_buyorder_info_show_details', $(this)).length > 0)
                        return;

                    $(this).children().last().addClass("market_listing_see");

                    addMarketPagination($('.market_listing_see', this).last());
                    sortMarketListings($(this), false, false, true);
                });

                $('#tabContentsMyActiveMarketListingsRows > .market_listing_row').each(function() {
                    var listingid = $(this).attr('id').replace('mylisting_', '').replace('mybuyorder_', '').replace('mbuyorder_', '');
                    var assetInfo = getAssetInfoFromListingId(listingid);

                    // There's only one item in the g_rgAssets on a market listing page.
                    var existingAsset = null;
                    for (var appid in unsafeWindow.g_rgAssets) {
                        for (var contextid in unsafeWindow.g_rgAssets[appid]) {
                            for (var assetid in unsafeWindow.g_rgAssets[appid][contextid]) {
                                existingAsset = unsafeWindow.g_rgAssets[appid][contextid][assetid];
                                break;
                            }
                        }
                    }

                    // appid and contextid are identical, only the assetid is different for each asset.
                    unsafeWindow.g_rgAssets[appid][contextid][assetInfo.assetid] = existingAsset;
                    marketListingsQueue.push({
                        listingid,
                        appid: assetInfo.appid,
                        contextid: assetInfo.contextid,
                        assetid: assetInfo.assetid
                    });
                })
            }
        }

        // Update the select/deselect all button on the market.
        function updateMarketSelectAllButton() {
            $('.market_listing_buttons').each(function() {
                var selectionGroup = $(this).parent().parent();
                var invert = $('.market_select_item:checked', selectionGroup).length == $('.market_select_item', selectionGroup).length;
                if ($('.market_select_item', selectionGroup).length == 0) // If there are no items to select, keep it at Select all.
                    invert = false;
                $('.select_all > span', selectionGroup).text(invert ? '取消所选物品' : '选中全部物品');
            });
        }

        // Sort the market listings.
        function sortMarketListings(elem, isPrice, isDate, isName) {
            var list = getListFromContainer(elem);
            if (list == null) {
                console.log('无效参数，找不到匹配元素的列表。');
                return;
            }

            // Change sort order (asc/desc).
            var nextSort = isPrice ? 1 : (isDate ? 2 : 3);
            var asc = true;

            // (Re)set the asc/desc arrows.
            const arrow_down = '🡻';
            const arrow_up = '🡹';

            $('.market_listing_table_header > span', elem).each(function() {
                if ($(this).hasClass('market_listing_edit_buttons'))
                    return;

                if ($(this).text().includes(arrow_up))
                    asc = false;

                $(this).text($(this).text().replace(' ' + arrow_down, '').replace(' ' + arrow_up, ''));
            })

            var market_listing_selector;
            if (isPrice) {
                market_listing_selector = $('.market_listing_table_header', elem).children().eq(1);
            } else if (isDate) {
                market_listing_selector = $('.market_listing_table_header', elem).children().eq(2);
            } else if (isName) {
                market_listing_selector = $('.market_listing_table_header', elem).children().eq(3);
            }
            market_listing_selector.text(market_listing_selector.text() + ' ' + (asc ? arrow_up : arrow_down));

            if (list.sort == null)
                return;

            if (isName) {
                list.sort('', {
                    order: asc ? "asc" : "desc",
                    sortFunction: function(a, b) {
                        if (a.values().market_listing_game_name.toLowerCase()
                            .localeCompare(b.values().market_listing_game_name.toLowerCase()) ==
                            0) {
                            return a.values().market_listing_item_name_link.toLowerCase()
                                .localeCompare(b.values().market_listing_item_name_link.toLowerCase());
                        }
                        return a.values().market_listing_game_name.toLowerCase()
                            .localeCompare(b.values().market_listing_game_name.toLowerCase());
                    }
                });
            } else if (isDate) {
                var currentMonth = DateTime.local().month;

                list.sort('market_listing_listed_date', {
                    order: asc ? "asc" : "desc",
                    sortFunction: function(a, b) {
                        var firstDate = DateTime.fromString((a.values().market_listing_listed_date).trim(), 'd MMM');
                        var secondDate = DateTime.fromString((b.values().market_listing_listed_date).trim(), 'd MMM');

                        if (firstDate == null || secondDate == null) {
                            return 0;
                        }

                        if (firstDate.month > currentMonth)
                            firstDate = firstDate.plus({ years: -1});
                        if (secondDate.month > currentMonth)
                            secondDate = secondDate.plus({ years: -1});

                        if (firstDate > secondDate)
                            return 1;
                        if (firstDate === secondDate)
                            return 0;
                        return -1;
                    }
                })
            } else if (isPrice) {
                list.sort('market_listing_price', {
                    order: asc ? "asc" : "desc",
                    sortFunction: function(a, b) {
                        var listingPriceA = $(a.values().market_listing_price).text();
                        listingPriceA = listingPriceA.substr(0, listingPriceA.indexOf('('));
                        listingPriceA = listingPriceA.replace('--', '00');

                        var listingPriceB = $(b.values().market_listing_price).text();
                        listingPriceB = listingPriceB.substr(0, listingPriceB.indexOf('('));
                        listingPriceB = listingPriceB.replace('--', '00');

                        var firstPrice = parseInt(replaceNonNumbers(listingPriceA));
                        var secondPrice = parseInt(replaceNonNumbers(listingPriceB));

                        return firstPrice - secondPrice;
                    }
                })
            }
        }

        function getListFromContainer(group) {
            for (var i = 0; i < marketLists.length; i++) {
                if (group.attr('id') == $(marketLists[i].listContainer).attr('id'))
                    return marketLists[i];
            }
        }

        function getListingFromLists(listingid) {
            // Sometimes listing ids are contained in multiple lists (?), use the last one available as this is the one we're most likely interested in.
            for (var i = marketLists.length - 1; i >= 0; i--) {
                var values = marketLists[i].get("market_listing_item_name", 'mylisting_' + listingid + '_name');
                if (values != null && values.length > 0) {
                    return values[0];
                }

                values = marketLists[i].get("market_listing_item_name", 'mbuyorder_' + listingid + '_name');
                if (values != null && values.length > 0) {
                    return values[0];
                }
            }


        }

        function removeListingFromLists(listingid) {
            for (var i = 0; i < marketLists.length; i++) {
                marketLists[i].remove("market_listing_item_name", 'mylisting_' + listingid + '_name');
                marketLists[i].remove("market_listing_item_name", 'mbuyorder_' + listingid + '_name');
            }
        }

        // Initialize the market UI.
        function initializeMarketUI() {
            // Sell orders.
            $('.my_market_header').first().append(
                '<div class="market_listing_buttons">' +
                '<a class="item_market_action_button item_market_action_button_green select_all market_listing_button">' +
                '<span class="item_market_action_button_contents" style="text-transform:none">选中全部物品</span>' +
                '</a>' +
                '<span class="separator-small"></span>' +
                '<a class="item_market_action_button item_market_action_button_green remove_selected market_listing_button">' +
                '<span class="item_market_action_button_contents" style="text-transform:none">下架选中物品</span>' +
                '</a>' +
                '<a class="item_market_action_button item_market_action_button_green relist_selected market_listing_button market_listing_button_right">' +
                '<span class="item_market_action_button_contents" style="text-transform:none">重新上架选中物品</span>' +
                '</a>' +
                '<span class="separator-small"></span>' +
                '<a class="item_market_action_button item_market_action_button_green relist_overpriced market_listing_button market_listing_button_right">' +
                '<span class="item_market_action_button_contents" style="text-transform:none">重新上架高价物品</span>' +
                '</a>' +
                '<span class="separator-small"></span>' +
                '<a class="item_market_action_button item_market_action_button_green select_overpriced market_listing_button market_listing_button_right">' +
                '<span class="item_market_action_button_contents" style="text-transform:none">选中高价物品</span>' +
                '</a>' +
                '</div>');

            // Listings confirmations and buy orders.
            $('.my_market_header').slice(1).append(
                '<div class="market_listing_buttons">' +
                '<a class="item_market_action_button item_market_action_button_green select_all market_listing_button">' +
                '<span class="item_market_action_button_contents" style="text-transform:none">选中全部物品</span>' +
                '</a>' +
                '<span class="separator-large"></span>' +
                '<a class="item_market_action_button item_market_action_button_green remove_selected market_listing_button">' +
                '<span class="item_market_action_button_contents" style="text-transform:none">删除选中物品</span>' +
                '</a>' +
                '</div>');

            $('.market_listing_table_header').on('click', 'span', function() {
                if ($(this).hasClass('market_listing_edit_buttons') || $(this).hasClass('item_market_action_button_contents'))
                    return;

                var isPrice = $('.market_listing_table_header', $(this).parent().parent()).children().eq(1).text() == $(this).text();
                var isDate = $('.market_listing_table_header', $(this).parent().parent()).children().eq(2).text() == $(this).text();
                var isName = $('.market_listing_table_header', $(this).parent().parent()).children().eq(3).text() == $(this).text();

                sortMarketListings($(this).parent().parent(), isPrice, isDate, isName);
            });

            $('.select_all').on('click', '*', function() {
                var selectionGroup = $(this).parent().parent().parent().parent();
                var marketList = getListFromContainer(selectionGroup);

                var invert = $('.market_select_item:checked', selectionGroup).length == $('.market_select_item', selectionGroup).length;

                for (var i = 0; i < marketList.matchingItems.length; i++) {
                    $('.market_select_item', marketList.matchingItems[i].elm).prop('checked', !invert);
                }

                updateMarketSelectAllButton();
            });


            $('#market_removelisting_dialog_accept').on('click', '*', function() {
                // This is when a user removed an item through the Remove/Cancel button.
                // Ideally, it should remove this item from the list (instead of just the UI element which Steam does), but I'm not sure how to get the current item yet.
                window.location.reload();
            });

            $('.select_overpriced').on('click', '*', function() {
                var selectionGroup = $(this).parent().parent().parent().parent();
                var marketList = getListFromContainer(selectionGroup);

                for (var i = 0; i < marketList.matchingItems.length; i++) {
                    if ($(marketList.matchingItems[i].elm).hasClass('overpriced')) {
                        $('.market_select_item', marketList.matchingItems[i].elm).prop('checked', true);
                    }
                }

                $('.market_listing_row', selectionGroup).each(function(index) {
                    if ($(this).hasClass('overpriced'))
                        $('.market_select_item', $(this)).prop('checked', true);
                });

                updateMarketSelectAllButton();
            });

            $('.remove_selected').on('click', '*', function() {
                var selectionGroup = $(this).parent().parent().parent().parent();
                var marketList = getListFromContainer(selectionGroup);

                for (var i = 0; i < marketList.matchingItems.length; i++) {
                    if ($('.market_select_item', $(marketList.matchingItems[i].elm)).prop('checked')) {
                        var listingid = replaceNonNumbers(marketList.matchingItems[i].values().market_listing_item_name);
                        marketRemoveQueue.push(listingid);
                    }
                }
            });

            $('.market_relist_auto').change(function() {
                setSetting(SETTING_RELIST_AUTOMATICALLY, $('.market_relist_auto').is(":checked") ? 1 : 0);
            });

            $('.relist_overpriced').on('click', '*', function() {
                var selectionGroup = $(this).parent().parent().parent().parent();
                var marketList = getListFromContainer(selectionGroup);

                for (var i = 0; i < marketList.matchingItems.length; i++) {
                    if ($(marketList.matchingItems[i].elm).hasClass('overpriced')) {
                        var listingid = replaceNonNumbers(marketList.matchingItems[i].values().market_listing_item_name);
                        queueOverpricedItemListing(listingid);
                    }
                }
            });

            $('.relist_selected').on('click', '*', function() {
                var selectionGroup = $(this).parent().parent().parent().parent();
                var marketList = getListFromContainer(selectionGroup);

                for (var i = 0; i < marketList.matchingItems.length; i++) {
                    if ($(marketList.matchingItems[i].elm).hasClass('overpriced') && $('.market_select_item', $(marketList.matchingItems[i].elm)).prop('checked')) {
                        var listingid = replaceNonNumbers(marketList.matchingItems[i].values().market_listing_item_name);
                        queueOverpricedItemListing(listingid);
                    }
                }
            });

            $('#see_settings').remove();
            $('#global_action_menu').prepend('<span id="see_settings"><a href="javascript:void(0)">⬖ SEE 设置</a></span>');
            $('#see_settings').on('click', '*', () => openSettings());

            processMarketListings();
        }
    }
    //#endregion

    //#region Tradeoffers
    if (currentPage == PAGE_TRADEOFFER) {
        // Gets the trade offer's inventory items from the active inventory.
        function getTradeOfferInventoryItems() {
            var arr = [];

            for (var child in getActiveInventory().rgChildInventories) {
                for (var key in getActiveInventory().rgChildInventories[child].rgInventory) {
                    var value = getActiveInventory().rgChildInventories[child].rgInventory[key];
                    if (typeof value === 'object') {
                        // Merges the description in the normal object, this is done to keep the layout consistent with the market page, which is also flattened.
                        Object.assign(value, value.description);
                        // Includes the id of the inventory item.
                        value['id'] = key;
                        arr.push(value);
                    }
                }
            }

            // Some inventories (e.g. BattleBlock Theater) do not have child inventories, they have just one.
            for (var key in getActiveInventory().rgInventory) {
                var value = getActiveInventory().rgInventory[key];
                if (typeof value === 'object') {
                    // Merges the description in the normal object, this is done to keep the layout consistent with the market page, which is also flattened.
                    Object.assign(value, value.description);
                    // Includes the id of the inventory item.
                    value['id'] = key;
                    arr.push(value);
                }
            }

            return arr;
        }

        function sumTradeOfferAssets(assets, user) {
            var total = {};
            var totalPrice = 0;
            for (var i = 0; i < assets.length; i++) {
                var rgItem = user.findAsset(assets[i].appid, assets[i].contextid, assets[i].assetid);

                var text = '';
                if (rgItem != null) {
                    if (rgItem.element) {
                        var inventoryPriceElements = $('.inventory_item_price', rgItem.element);
                        if (inventoryPriceElements.length) {
                            var firstPriceElement = inventoryPriceElements[0];
                            var classes = $(firstPriceElement).attr('class').split(' ');
                            for (var c in classes) {
                                if (classes[c].toString().includes('price_')) {
                                    var price = parseInt(classes[c].toString().replace('price_', ''));
                                    totalPrice += price;
                                }
                            }

                        }
                    }

                    if (rgItem.original_amount != null && rgItem.amount != null) {
                        var originalAmount = parseInt(rgItem.original_amount);
                        var currentAmount = parseInt(rgItem.amount);
                        var usedAmount = originalAmount - currentAmount;
                        text += usedAmount.toString() + 'x ';
                    }

                    text += rgItem.name;

                    if (rgItem.type != null && rgItem.type.length > 0) {
                        text += ' (' + rgItem.type + ')';
                    }
                } else
                    text = 'Unknown Item';

                if (text in total)
                    total[text] = total[text] + 1;
                else
                    total[text] = 1;
            }

            var sortable = [];
            for (var item in total)
                sortable.push([item, total[item]])

            sortable.sort(function(a, b) {
                return a[1] - b[1];
            }).reverse();

            var totalText = '<strong>物品数量：' + sortable.length + '，价值 ' + (totalPrice / 100).toFixed(2) + currencySymbol + '<br/><br/></strong>';

            for (var i = 0; i < sortable.length; i++) {
                totalText += sortable[i][1] + 'x ' + sortable[i][0] + '<br/>';
            }

            return totalText;
        }
    }


    var lastTradeOfferSum = 0;

    function hasLoadedAllTradeOfferItems() {
        for (var i = 0; i < unsafeWindow.g_rgCurrentTradeStatus.them.assets.length; i++) {
            var asset = UserThem.findAsset(unsafeWindow.g_rgCurrentTradeStatus.them.assets[i].appid, unsafeWindow.g_rgCurrentTradeStatus.them.assets[i].contextid, unsafeWindow.g_rgCurrentTradeStatus.them.assets[i].assetid);
            if (asset == null)
                return false;
        }
        for (var i = 0; i < unsafeWindow.g_rgCurrentTradeStatus.me.assets.length; i++) {
            var asset = UserYou.findAsset(unsafeWindow.g_rgCurrentTradeStatus.me.assets[i].appid, unsafeWindow.g_rgCurrentTradeStatus.me.assets[i].contextid, unsafeWindow.g_rgCurrentTradeStatus.me.assets[i].assetid);
            if (asset == null)
                return false;
        }
        return true;

    }

    function initializeTradeOfferUI() {
        var updateInventoryPrices = function() {
            if (getSettingWithDefault(SETTING_TRADEOFFER_PRICE_LABELS) == 1) {
                setInventoryPrices(getTradeOfferInventoryItems());
            }
        };

        var updateInventoryPricesInTrade = function() {
            var items = [];
            for (var i = 0; i < unsafeWindow.g_rgCurrentTradeStatus.them.assets.length; i++) {
                var asset = UserThem.findAsset(unsafeWindow.g_rgCurrentTradeStatus.them.assets[i].appid, unsafeWindow.g_rgCurrentTradeStatus.them.assets[i].contextid, unsafeWindow.g_rgCurrentTradeStatus.them.assets[i].assetid);
                items.push(asset);
            }
            for (var i = 0; i < unsafeWindow.g_rgCurrentTradeStatus.me.assets.length; i++) {
                var asset = UserYou.findAsset(unsafeWindow.g_rgCurrentTradeStatus.me.assets[i].appid, unsafeWindow.g_rgCurrentTradeStatus.me.assets[i].contextid, unsafeWindow.g_rgCurrentTradeStatus.me.assets[i].assetid);
                items.push(asset);
            }
            setInventoryPrices(items);
        };

        $('.trade_right > div > div > div > .trade_item_box').observe('childlist subtree', function(record) {
            if (!hasLoadedAllTradeOfferItems())
                return;

            var currentTradeOfferSum = unsafeWindow.g_rgCurrentTradeStatus.me.assets.length + unsafeWindow.g_rgCurrentTradeStatus.them.assets.length;
            if (lastTradeOfferSum != currentTradeOfferSum) {
                updateInventoryPricesInTrade();
            }

            lastTradeOfferSum = currentTradeOfferSum;

            $('#trade_offer_your_sum').remove();
            $('#trade_offer_their_sum').remove();

            var your_sum = sumTradeOfferAssets(unsafeWindow.g_rgCurrentTradeStatus.me.assets, UserYou);
            var their_sum = sumTradeOfferAssets(unsafeWindow.g_rgCurrentTradeStatus.them.assets, UserThem);

            $('div.offerheader:nth-child(1) > div:nth-child(3)').append('<div class="trade_offer_sum" id="trade_offer_your_sum">' + your_sum + '</div>');
            $('div.offerheader:nth-child(3) > div:nth-child(3)').append('<div class="trade_offer_sum" id="trade_offer_their_sum">' + their_sum + '</div>');
        });


        // Load after the inventory is loaded.
        updateInventoryPrices();

        $('#inventory_pagecontrols').observe('childlist',
            '*',
            function(record) {
                updateInventoryPrices();
            });


        // This only works with a new trade offer.
        if (!window.location.href.includes('tradeoffer/new'))
            return;

        $('#inventory_displaycontrols').append(
            '<br/>' +
            '<div class="trade_offer_buttons">' +
            '<a class="item_market_action_button item_market_action_button_green select_all" style="margin-top:1px">' +
            '<span class="item_market_action_button_contents" style="text-transform:none">选中页面中全部物品</span>' +
            '</a>' +
            '</div>');

        $('.select_all').on('click', '*', function() {
            $('.inventory_ctn:visible > .inventory_page:visible > .itemHolder:visible').delayedEach(250, function(i, it) {
                var item = it.rgItem;
                if (item.is_stackable)
                    return;

                if (!item.tradable)
                    return;

                unsafeWindow.MoveItemToTrade(it);
            });
        });
    }
    //#endregion

    //#region Settings
    function openSettings() {
        var price_options = $('<div id="price_options">' +
            '<div style="margin-bottom:6px;">' +
            '基准价格计算方式：<select class="price_option_input" style="background-color: black;color: white;border: transparent;" id="' + SETTING_PRICE_ALGORITHM + '">' +
            '<option value="1"' + (getSettingWithDefault(SETTING_PRICE_ALGORITHM) == 1 ? 'selected="selected"' : '') + '>历史均价 和 最低售价 之间的最大值</option>' +
            '<option value="2" ' + (getSettingWithDefault(SETTING_PRICE_ALGORITHM) == 2 ? 'selected="selected"' : '') + '>最低售价</option>' +
            '<option value="3" ' + (getSettingWithDefault(SETTING_PRICE_ALGORITHM) == 3 ? 'selected="selected"' : '') + '>当前 最高买入价 或 最低售价</option>' +
            '</select>' +
            '<br/>' +
            '</div>' +
            '<div style="margin-bottom:6px;">' +
            '计算多少小时内的历史均价：<input class="price_option_input" style="background-color: black;color: white;border: transparent;" type="number" step="2" id="' + SETTING_PRICE_HISTORY_HOURS + '" value=' + getSettingWithDefault(SETTING_PRICE_HISTORY_HOURS) + '>' +
            '</div>' +
            '<div style="margin-bottom:6px;">' +
            '价格补正（基于“基准价格”在批量出售时进行调价，可为负数）；<input class="price_option_input price_option_price" style="background-color: black;color: white;border: transparent;" type="number" step="0.01" id="' + SETTING_PRICE_OFFSET + '" value=' + getSettingWithDefault(SETTING_PRICE_OFFSET) + '>' +
            '<br/>' +
            '</div>' +
            '<div style="margin-top:6px">' +
            '在当前最低售价较少时，使用第二低售价：<input class="price_option_input" style="background-color: black;color: white;border: transparent;" type="checkbox" id="' + SETTING_PRICE_IGNORE_LOWEST_Q + '" ' + (getSettingWithDefault(SETTING_PRICE_IGNORE_LOWEST_Q) == 1 ? 'checked=""' : '') + '>' +
            '<br/>' +
            '</div>' +
            '<div style="margin-top:6px;">' +
            '不检查指定价格及以下的市场列表：<input class="price_option_input price_option_price" style="background-color: black;color: white;border: transparent;" type="number" step="0.01" id="' + SETTING_PRICE_MIN_CHECK_PRICE + '" value=' + getSettingWithDefault(SETTING_PRICE_MIN_CHECK_PRICE) + '>' +
            '<br/>' +
            '</div>' +
            '<div style="margin-top:24px">' +
            '在库存中显示价格标签：<input class="price_option_input" style="background-color: black;color: white;border: transparent;" type="checkbox" id="' + SETTING_INVENTORY_PRICE_LABELS + '" ' + (getSettingWithDefault(SETTING_INVENTORY_PRICE_LABELS) == 1 ? 'checked=""' : '') + '>' +
            '</div>' +
            '<div style="margin-top:6px">' +
            '在交易报价中显示价格标签：<input class="price_option_input" style="background-color: black;color: white;border: transparent;" type="checkbox" id="' + SETTING_TRADEOFFER_PRICE_LABELS + '" ' + (getSettingWithDefault(SETTING_TRADEOFFER_PRICE_LABELS) == 1 ? 'checked=""' : '') + '>' +
            '</div>' +
            '<div style="margin-top:24px">' +
            '<div style="margin-bottom:6px;">' +
            '最低售价：<input class="price_option_input price_option_price" style="background-color: black;color: white;border: transparent;" type="number" step="0.01" id="' + SETTING_MIN_NORMAL_PRICE + '" value=' + getSettingWithDefault(SETTING_MIN_NORMAL_PRICE) + '>&nbsp;' +
            '最高售价：<input class="price_option_input price_option_price" style="background-color: black;color: white;border: transparent;" type="number" step="0.01" id="' + SETTING_MAX_NORMAL_PRICE + '" value=' + getSettingWithDefault(SETTING_MAX_NORMAL_PRICE) + '>&nbsp;普通卡牌的价格' +
            '<br/>' +
            '</div>' +
            '<div style="margin-bottom:6px;">' +
            '最低售价：<input class="price_option_input price_option_price" style="background-color: black;color: white;border: transparent;" type="number" step="0.01" id="' + SETTING_MIN_FOIL_PRICE + '" value=' + getSettingWithDefault(SETTING_MIN_FOIL_PRICE) + '>&nbsp;' +
            '最高售价：<input class="price_option_input price_option_price" style="background-color: black;color: white;border: transparent;" type="number" step="0.01" id="' + SETTING_MAX_FOIL_PRICE + '" value=' + getSettingWithDefault(SETTING_MAX_FOIL_PRICE) + '>&nbsp;闪亮卡牌的价格' +
            '<br/>' +
            '</div>' +
            '<div style="margin-bottom:6px;">' +
            '最低售价：<input class="price_option_input price_option_price" style="background-color: black;color: white;border: transparent;" type="number" step="0.01" id="' + SETTING_MIN_MISC_PRICE + '" value=' + getSettingWithDefault(SETTING_MIN_MISC_PRICE) + '>&nbsp;' +
            '最高售价：<input class="price_option_input price_option_price" style="background-color: black;color: white;border: transparent;" type="number" step="0.01" id="' + SETTING_MAX_MISC_PRICE + '" value=' + getSettingWithDefault(SETTING_MAX_MISC_PRICE) + '>&nbsp;其他物品的价格' +
            '<br/>' +
            '</div>' +
            '<div style="margin-top:24px;margin-bottom:6px;">' +
            '市场中每页的物品数量：<input class="price_option_input price_option_price" style="background-color: black;color: white;border: transparent;" type="number" step="0.01" id="' + SETTING_MARKET_PAGE_COUNT + '" value=' + getSettingWithDefault(SETTING_MARKET_PAGE_COUNT) + '>' +
            '<br/>' +
            '<div style="margin-top:6px;">' +
            '自动上架定价高于市场的物品（当库存较多时，耗时较高）：<input id="' + SETTING_RELIST_AUTOMATICALLY + '" class="market_relist_auto" type="checkbox" ' + (getSettingWithDefault(SETTING_RELIST_AUTOMATICALLY) == 1 ? 'checked=""' : '') + '>' +
            '</label>' +
            '</div>' +
            '</div>' +
            '</div>');

        var dialog = unsafeWindow.ShowConfirmDialog('Steam Economy Enhancer', price_options).done(function() {
            setSetting(SETTING_MIN_NORMAL_PRICE, $('#' + SETTING_MIN_NORMAL_PRICE, price_options).val());
            setSetting(SETTING_MAX_NORMAL_PRICE, $('#' + SETTING_MAX_NORMAL_PRICE, price_options).val());
            setSetting(SETTING_MIN_FOIL_PRICE, $('#' + SETTING_MIN_FOIL_PRICE, price_options).val());
            setSetting(SETTING_MAX_FOIL_PRICE, $('#' + SETTING_MAX_FOIL_PRICE, price_options).val());
            setSetting(SETTING_MIN_MISC_PRICE, $('#' + SETTING_MIN_MISC_PRICE, price_options).val());
            setSetting(SETTING_MAX_MISC_PRICE, $('#' + SETTING_MAX_MISC_PRICE, price_options).val());
            setSetting(SETTING_PRICE_OFFSET, $('#' + SETTING_PRICE_OFFSET, price_options).val());
            setSetting(SETTING_PRICE_MIN_CHECK_PRICE, $('#' + SETTING_PRICE_MIN_CHECK_PRICE, price_options).val());
            setSetting(SETTING_PRICE_ALGORITHM, $('#' + SETTING_PRICE_ALGORITHM, price_options).val());
            setSetting(SETTING_PRICE_IGNORE_LOWEST_Q, $('#' + SETTING_PRICE_IGNORE_LOWEST_Q, price_options).prop('checked') ? 1 : 0);
            setSetting(SETTING_PRICE_HISTORY_HOURS, $('#' + SETTING_PRICE_HISTORY_HOURS, price_options).val());
            setSetting(SETTING_MARKET_PAGE_COUNT, $('#' + SETTING_MARKET_PAGE_COUNT, price_options).val());
            setSetting(SETTING_RELIST_AUTOMATICALLY, $('#' + SETTING_RELIST_AUTOMATICALLY, price_options).prop('checked') ? 1 : 0);
            setSetting(SETTING_INVENTORY_PRICE_LABELS, $('#' + SETTING_INVENTORY_PRICE_LABELS, price_options).prop('checked') ? 1 : 0);
            setSetting(SETTING_TRADEOFFER_PRICE_LABELS, $('#' + SETTING_TRADEOFFER_PRICE_LABELS, price_options).prop('checked') ? 1 : 0);

            window.location.reload();
        });
    }
    //#endregion

    //#region UI
    injectCss('.ui-selected { outline: 2px dashed #FFFFFF; } ' +
        '#logger { color: #767676; font-size: 12px;margin-top:16px; max-height: 200px; overflow-y: auto; }' +
        '.trade_offer_sum { color: #767676; font-size: 12px;margin-top:8px; }' +
        '.trade_offer_buttons { margin-top: 12px; }' +
        '.market_commodity_orders_table { font-size:12px; font-family: "Motiva Sans", Sans-serif; font-weight: 300; }' +
        '.market_commodity_orders_table th { padding-left: 10px; }' +
        '#listings_group { display: flex; justify-content: space-between; margin-bottom: 8px; }' +
        '#listings_sell { text-align: right; color: #589328; font-weight:600; }' +
        '#listings_buy { text-align: right; color: #589328; font-weight:600; }' +
        '.market_listing_my_price { height: 50px; padding-right:6px; }' +
        '.market_listing_edit_buttons.actual_content { width:276px; transition-property: background-color, border-color; transition-timing-function: linear; transition-duration: 0.5s;}' +
        '.market_listing_buttons { margin-top: 6px; background: rgba(0, 0, 0, 0.4); padding: 5px 0px 1px 0px; }' +
        '.market_listing_button { margin-right: 4px; }' +
        '.market_listing_button_right { float:right; }' +
        '.market_listing_button:first-child { margin-left: 4px; }' +
        '.market_listing_label_right { float:right; font-size:12px; margin-top:1px; }' +
        '.market_listing_select { position: absolute; top: 16px;right: 10px; display: flex; }' +
        '#market_listing_relist { vertical-align: middle; position: relative; bottom: -1px; right: 2px; }' +
        '.pick_and_sell_button > a { vertical-align: middle; }' +
        '.market_relist_auto { margin-bottom: 8px;  }' +
        '.market_relist_auto_label { margin-right: 6px;  }' +
        '.quick_sell { margin-right: 4px; }' +
        '.spinner{margin:10px auto;width:50px;height:40px;text-align:center;font-size:10px;}.spinner > div{background-color:#ccc;height:100%;width:6px;display:inline-block;-webkit-animation:sk-stretchdelay 1.2s infinite ease-in-out;animation:sk-stretchdelay 1.2s infinite ease-in-out}.spinner .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.spinner .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.spinner .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.spinner .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-stretchdelay{0%,40%,100%{-webkit-transform:scaleY(0.4)}20%{-webkit-transform:scaleY(1.0)}}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4);-webkit-transform:scaleY(0.4)}20%{transform:scaleY(1.0);-webkit-transform:scaleY(1.0)}}' +
        '#market_name_search { float: right; background: rgba(0, 0, 0, 0.25); color: white; border: none;height: 25px; padding-left: 6px;}' +
        '.price_option_price { width: 100px }' +
        '#see_settings { background: #26566c; margin-right: 10px; height: 24px; line-height:24px; display:inline-block; padding: 0px 6px; }' +
        '.inventory_item_price { top: 0px;position: absolute;right: 0;background: #3571a5;padding: 2px;color: white; font-size:11px; border: 1px solid #666666;}' +
        '.separator-large {display:inline-block;width:6px;}' +
        '.separator-small {display:inline-block;width:1px;}' +
        '.separator-btn-right {margin-right:12px;}' +
        '.pagination { padding-left: 0px; }' +
        '.pagination li { display:inline-block; padding: 5px 10px;background: rgba(255, 255, 255, 0.10); margin-right: 6px; border: 1px solid #666666; }' +
        '.pagination li.active { background: rgba(255, 255, 255, 0.25); }');

    $(document).ready(function() {
        // Make sure the user is logged in, there's not much we can do otherwise.
        if (!isLoggedIn) {
            return;
        }

        if (currentPage == PAGE_INVENTORY) {
            initializeInventoryUI();
        }

        if (currentPage == PAGE_MARKET || currentPage == PAGE_MARKET_LISTING) {
            initializeMarketUI();
        }

        if (currentPage == PAGE_TRADEOFFER) {
            initializeTradeOfferUI();
        }
    });

    function injectCss(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    function injectJs(js) {
        var script = document.createElement('script');
        script.setAttribute("type", "application/javascript");
        script.textContent = '(' + js + ')();';
        document.body.appendChild(script);
        document.body.removeChild(script);
    }

    $.fn.delayedEach = function(timeout, callback, continuous) {
        var $els, iterator;

        $els = this;
        iterator = function(index) {
            var cur;

            if (index >= $els.length) {
                if (!continuous) {
                    return;
                }
                index = 0;
            }

            cur = $els[index];
            callback.call(cur, index, cur);

            setTimeout(function() {
                iterator(++index);
            }, timeout);
        };

        iterator(0);
    };

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };
    //#endregion
})(jQuery, async);

})(jq2, jq2)})()});