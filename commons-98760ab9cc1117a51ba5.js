(self.webpackChunkqed_team=self.webpackChunkqed_team||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function l(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var i,c,u,s;if(Array.isArray(e)){if((i=e.length)!=o.length)return!1;for(c=i;0!=c--;)if(!l(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!l(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((i=e.length)!=o.length)return!1;for(c=i;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((i=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=i;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=i;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!l(e[u[c]],o[u[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return l(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),l=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),m.canUseDOM?t(c):n&&(c=n(c))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},o.render=function(){return l.createElement(r,this.props)},a}(a.PureComponent);return o(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(m,"canUseDOM",i),m}}},9147:function(e,t,n){"use strict";n.d(t,{Z:function(){return ye}});var r,a,l,o,i=n(7294),c=n(5697),u=n.n(c),s=n(4839),m=n.n(s),h=n(2993),v=n.n(h),f=n(6494),d=n.n(f),p="bodyAttributes",z="htmlAttributes",M="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(y).map((function(e){return y[e]})),"charset"),b="cssText",T="href",I="http-equiv",L="innerHTML",w="itemprop",j="name",N="property",A="rel",E="src",x="target",C={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",S="defer",H="encodeSpecialCharacters",O="onChangeClientState",V="titleTemplate",k=Object.keys(C).reduce((function(e,t){return e[C[t]]=t,e}),{}),P=[y.NOSCRIPT,y.SCRIPT,y.STYLE],Q="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=K(e,y.TITLE),n=K(e,V);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=K(e,D);return t||r||void 0},J=function(e){return K(e,O)||function(){}},_=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},q=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var l=r[a].toLowerCase();if(-1!==e.indexOf(l)&&n[l])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,l=Object.keys(e),o=0;o<l.length;o++){var i=l[o],c=i.toLowerCase();-1===t.indexOf(c)||n===A&&"canonical"===e[n].toLowerCase()||c===A&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(i)||i!==L&&i!==b&&i!==w||(n=i)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var l=Object.keys(a),o=0;o<l.length;o++){var i=l[o],c=d()({},r[i],a[i]);r[i]=c}return e}),[]).reverse()},K=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,le=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,l=e.linkTags,o=e.metaTags,i=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,m=e.title,h=e.titleAttributes;ce(y.BODY,r),ce(y.HTML,a),ie(m,h);var v={baseTag:ue(y.BASE,n),linkTags:ue(y.LINK,l),metaTags:ue(y.META,o),noscriptTags:ue(y.NOSCRIPT,i),scriptTags:ue(y.SCRIPT,u),styleTags:ue(y.STYLE,s)},f={},d={};Object.keys(v).forEach((function(e){var t=v[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(d[e]=v[e].oldTags)})),t&&t(),c(e,f,d)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(y.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Q),a=r?r.split(","):[],l=[].concat(a),o=Object.keys(t),i=0;i<o.length;i++){var c=o[i],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var s=l.indexOf(c);-1!==s&&l.splice(s,1)}for(var m=l.length-1;m>=0;m--)n.removeAttribute(l[m]);a.length===l.length?n.removeAttribute(Q):n.getAttribute(Q)!==o.join(",")&&n.setAttribute(Q,o.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),l=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===L)n.innerHTML=t.innerHTML;else if(r===b)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i=void 0===t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute(Q,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):l.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),l.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:l}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[C[n]||n]=e[n],t}),t)},he=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Q]=!0,a=me(n,r),[i.createElement(y.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),l=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(l,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(l,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case p:case z:return{toComponent:function(){return me(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[Q]=!0,r);return Object.keys(t).forEach((function(e){var n=C[e]||e;if(n===L||n===b){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===L||e===b)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+a:a}),""),l=r.innerHTML||r.cssText||"",o=-1===P.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+l+"</"+e+">")}),"")}(e,t,n)}}}},ve=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,l=e.linkTags,o=e.metaTags,i=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,m=void 0===s?"":s,h=e.titleAttributes;return{base:he(y.BASE,t,r),bodyAttributes:he(p,n,r),htmlAttributes:he(z,a,r),link:he(y.LINK,l,r),meta:he(y.META,o,r),noscript:he(y.NOSCRIPT,i,r),script:he(y.SCRIPT,c,r),style:he(y.STYLE,u,r),title:he(y.TITLE,{title:m,titleAttributes:h},r)}},fe=m()((function(e){return{baseTag:q([T,x],e),bodyAttributes:_(p,e),defer:K(e,S),encode:K(e,H),htmlAttributes:_(z,e),linkTags:X(y.LINK,[A,T],e),metaTags:X(y.META,[j,g,I,N,w],e),noscriptTags:X(y.NOSCRIPT,[L],e),onChangeClientState:J(e),scriptTags:X(y.SCRIPT,[E,L],e),styleTags:X(y.STYLE,[b],e),title:F(e),titleAttributes:_(M,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){le(e,(function(){ae=null}))})):(le(e),ae=null)}),ve)((function(){return null})),de=(a=fe,o=l=function(e){function t(){return B(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!v()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,l=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},a,this.mapNestedChildrenToProps(n,l))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,l=e.newChildProps,o=e.nestedChildren;switch(r.type){case y.TITLE:return W({},a,((t={})[r.type]=o,t.titleAttributes=W({},l),t));case y.BODY:return W({},a,{bodyAttributes:W({},l)});case y.HTML:return W({},a,{htmlAttributes:W({},l)})}return W({},a,((n={})[r.type]=W({},l),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,l=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)}(R(a,["children"]));switch(n.warnOnInvalidChildren(e,l),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:l});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:l})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=R(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),i.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(i.Component),l.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},l.defaultProps={defer:!0,encodeSpecialCharacters:!0},l.peek=a.peek,l.rewind=function(){var e=a.rewind();return e||(e=ve({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);de.renderStatic=de.rewind;var pe=n.p+"static/favicon@2x-e32a5f2b2e26ee86d8f8ce3847975e46.png",ze=n.p+"static/card-facebook-fccb06d165092a3884e5a1166632f6e4.png",Me=n.p+"static/card-twitter-9544b8db9d72a8f558f92db323b86bf0.png",ye=function(e){var t=e.children;return i.createElement(i.Fragment,null,i.createElement(de,null,i.createElement("meta",{charSet:"utf-8"}),i.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),i.createElement("meta",{name:"description",content:"We move startups forward"}),i.createElement("meta",{property:"og:title",content:"QED"}),i.createElement("meta",{property:"og:description",content:"We move startups forward"}),i.createElement("meta",{property:"og:url",content:"https://qed.team/"}),i.createElement("meta",{property:"og:image",content:ze}),i.createElement("meta",{name:"twitter:title",content:"QED"}),i.createElement("meta",{name:"twitter:description",content:"We move startups forward"}),i.createElement("meta",{name:"twitter:image",content:Me}),i.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.createElement("link",{rel:"icon",type:"image/png",href:pe}),i.createElement("title",null,"QED — We move startups forward")),i.createElement("main",{role:"main"},t))}},5965:function(e,t,n){"use strict";var r=n(7294);t.Z=function(){return r.createElement("section",{className:"container w-11/12 max-w-screen-lg mx-auto py-20 md:pt-40 lg:pt-60"},r.createElement("div",{className:"max-w-sm"},r.createElement("h3",{className:"text-2xl font-semibold mb-5 md:text-4xl"},"Get in touch"),r.createElement("p",{className:"text-lg text-gray-400 mb-10 leading-8 md:leading-10 md:text-2xl"},"We’re located in Timisoara, Romania and help startups around the world."),r.createElement("a",{href:"mailto:contact@qed.team",target:"_self",className:"text-blue-50 text-lg leading-10 border-b-2 border-blue-50 font-semibold inline-block md:text-2xl"},"contact@qed.team")))}},313:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),a=function(){return r.createElement("section",{className:"container w-11/12 max-w-screen-lg mx-auto flex flex-col justify-between text-center items-center pb-6 sm:flex-row sm:text-left sm:pb-10"},r.createElement("p",{className:"text-gray-400 text-base"},"Copyright © 2022 QED. All rights reserved. QED is on",r.createElement("a",{href:"https://github.com/qed-team",rel:"noreferrer",target:"_blank",className:"border-b ml-2"},"GitHub"),"."),r.createElement("a",{href:"#header",className:"flex p-2 -mr-2 hidden sm:block"},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMiAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImdvLXVwLWljb24iPgo8cGF0aCBpZD0iUGF0aCBDb3B5IDE3IiBkPSJNMTIgMjNWMyIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGlkPSJTaGFwZSBDb3B5IiBkPSJNMjIgMTNMMTIgM0wyIDEzIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjQiLz4KPC9nPgo8L3N2Zz4K",alt:"Go up"})))}},9556:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),a=function(){return r.createElement("section",{id:"header",className:"flex flex-col w-11/12 items-center mx-auto container max-w-screen-lg pt-10 pb-10 sm:pt-10 sm:pb-12 sm:flex-row sm:justify-between"},r.createElement("a",{href:"/",target:"_self",className:"block mb-3 sm:mb-0"},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1IiBoZWlnaHQ9IjQyIiB2aWV3Qm94PSIwIDAgMTI1IDQyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBpZD0ibG9nby1kZXNrdG9wIj4KPHBhdGggaWQ9IkNvbWJpbmVkIFNoYXBlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMjAuNTI4MUMwIDMxLjg2NTQgOS4xOTA3NCA0MS4wNTYyIDIwLjUyODEgNDEuMDU2MkMyNS4xMTQ2IDQxLjA1NjIgMjkuMzQ5OSAzOS41NTIgMzIuNzY3NCAzNy4wMUwzNS45MzQ5IDQwLjE3NzVMNDAuMTc3NSAzNS45MzQ5TDM3LjAxIDMyLjc2NzRDMzkuNTUyIDI5LjM0OTkgNDEuMDU2MiAyNS4xMTQ2IDQxLjA1NjIgMjAuNTI4MUM0MS4wNTYyIDkuMTkwNzQgMzEuODY1NCAwIDIwLjUyODEgMEM5LjE5MDc0IDAgMCA5LjE5MDc0IDAgMjAuNTI4MVpNMjAuNTI4MSAzNS4wNTYyQzIzLjQ1NDYgMzUuMDU2MiAyNi4xNzkxIDM0LjE5MDkgMjguNDU5NSAzMi43MDIxTDI0LjcxMDEgMjguOTUyOEwyOC45NTI4IDI0LjcxMDFMMzIuNzAyMSAyOC40NTk1QzM0LjE5MDkgMjYuMTc5MSAzNS4wNTYyIDIzLjQ1NDYgMzUuMDU2MiAyMC41MjgxQzM1LjA1NjIgMTIuNTA0NCAyOC41NTE3IDYgMjAuNTI4MSA2QzEyLjUwNDQgNiA2IDEyLjUwNDQgNiAyMC41MjgxQzYgMjguNTUxNyAxMi41MDQ0IDM1LjA1NjIgMjAuNTI4MSAzNS4wNTYyWk02OS41NzMgMzQuMzI1OEg0OS44MjAyVjIzLjUyODFINjUuMTkxVjE3LjUyODFINDkuODIwMlY2LjczMDM0SDY5LjU3M1YwLjczMDMzN0g0My44MjAyVjQwLjMyNThINjkuNTczVjM0LjMyNThaTTgzLjU2MTggMC43MzAzMzdINzMuMTQ2MVY0MC4zMjU4SDgzLjU2MThDOTQuNDk1OCA0MC4zMjU4IDEwMy4zNiAzMS40NjIxIDEwMy4zNiAyMC41MjgxQzEwMy4zNiA5LjU5NDA5IDk0LjQ5NTggMC43MzAzMzcgODMuNTYxOCAwLjczMDMzN1pNNzkuMTQ2MSA2LjczMDM0SDgzLjU2MThDOTEuMTgyMSA2LjczMDM0IDk3LjM1OTYgMTIuOTA3OCA5Ny4zNTk2IDIwLjUyODFDOTcuMzU5NiAyOC4xNDg0IDkxLjE4MjEgMzQuMzI1OCA4My41NjE4IDM0LjMyNThINzkuMTQ2MVY2LjczMDM0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggaWQ9IlJlY3RhbmdsZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjUgMTYuNDE1N1YwLjczMDM0N0gxMDkuMzE1VjE2LjQxNTdIMTI1Wk0xMjEgMTIuNDE1N0gxMTMuMzE1VjQuNzMwMzVIMTIxVjEyLjQxNTdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xMDEwKSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xMDEwIiB4MT0iMTAxLjU3NCIgeTE9IjguNDcwNjkiIHgyPSIxMTcuMDU1IiB5Mj0iMjMuOTUxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDc5MEQ3Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzA4RjdGNyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",alt:"QED Software"})),r.createElement("a",{href:"/jobs",className:"flex items-center","data-action-contact":!0},r.createElement("span",{className:"text-blue-50 text-lg font-semibold sm:text-2xl"},"Join us"),r.createElement("span",{className:"bg-blue-50 block p-3 ml-5 rounded-full"},r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMyAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImFycm93Ij4KPHBhdGggaWQ9IlBhdGgiIGQ9Ik0wIDEySDIwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggaWQ9IlNoYXBlIiBkPSJNMTAgMkwyMCAxMkwxMCAyMiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjwvZz4KPC9zdmc+Cg==",alt:"Join us",className:"block"}))))}},3543:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a=JSON.parse('{"H":["M1410 440c2.52 0 5.02.104 7.5.308l.12.01a89.486 89.486 0 0129 7.444c30.82 13.745 52.49 44.31 53.35 80.032v.003a90.076 90.076 0 01-4.24 29.683 89.691 89.691 0 01-15.27 28.52 90.531 90.531 0 01-22.23 20c-13.94 8.865-30.49 14-48.23 14-17.84 0-34.46-5.188-48.44-14.137A90.304 90.304 0 011339.54 586a89.712 89.712 0 01-14.81-27.134 68.12 68.12 0 01-.46-1.386 90.076 90.076 0 01-4.24-29.686c.86-35.722 22.53-66.287 53.35-80.032l.42-.185a89.472 89.472 0 0128.58-7.259c2.51-.211 5.05-.318 7.62-.318zm-49.59 27.221c-13.08 10.347-22.85 24.694-27.46 41.194l27.46-41.194zm-22.87 96.736a82.979 82.979 0 01-2.17-5.093l72.56-108.838.14-.003a82.142 82.142 0 013.74-.003l.26.006 72.56 108.838a79.824 79.824 0 01-9.17 17.136h-130.92a79.9 79.9 0 01-7-12.043zM1384.95 606c7.88 2.596 16.3 4 25.05 4s17.17-1.404 25.05-4h-50.1zm70.27-10h-90.44a80.41 80.41 0 01-11.91-10h114.26a80.41 80.41 0 01-11.91 10zm4.37-128.779c13.08 10.347 22.85 24.694 27.46 41.194l-27.46-41.194zm-19.63-11.423l50.04 75.056a80.527 80.527 0 01-1.68 15.514l-63.31-94.962a79.358 79.358 0 0114.95 4.392zm-59.92 0a79.358 79.358 0 0114.95-4.392l-63.31 94.962a80.527 80.527 0 01-1.68-15.514l50.04-75.056zM1410 501l30 45h-60l30-45zm11.31 35h-22.62l11.31-16.972L1421.31 536zm-78.68 30L1410 464.944 1477.37 566h-134.74zm67.37-83.028L1361.31 556h97.38L1410 482.972zM1130 440h-30v30h15c-8.28 0-15 6.716-15 15 0 8.284 6.72 15 15 15l-15 15 15 15h-15l30 30h-30v30h15l-15 15 15 15 15-15v15h30v-15l15 15 15-15v15h30l-30-30h45c-8.28 0-15 6.716-15 15 0 8.284 6.72 15 15 15 8.28 0 15-6.716 15-15l15 15 15-15-15-15c8.28 0 15-6.716 15-15 0-8.284-6.72-15-15-15h15v-60h-15l15-15-15-15c8.28 0 15-6.716 15-15 0-8.284-6.72-15-15-15-8.28 0-15 6.716-15 15v-15h-30l-30 30v-30h-30v15c0-8.284-6.72-15-15-15-8.28 0-15 6.716-15 15v-15zm15 30c8.28 0 15-6.716 15-15v15h-15zm-15 0h15c-8.28 0-15-6.716-15-15v15zm0 15c0-8.284-6.72-15-15-15h15v15zm0 15v-15c0 8.284-6.72 15-15 15l15 15-15 15h15v60h-15l15 15v-15h30v15l15-15 15 15v-45h30v30l30-30v30h-15c8.28 0 15 6.716 15 15l15-15c-8.28 0-15-6.716-15-15 0-8.284 6.72-15 15-15h-15l30-30h-30v-30h15l-15-15 15-15c-8.28 0-15-6.716-15-15v15l-30-30v30h-60v30h-30zm30 30l-30-30v30h15c-8.28 0-15 6.716-15 15 0 8.284 6.72 15 15 15h-15l30 30v-15c0 8.284 6.72 15 15 15 8.28 0 15-6.716 15-15 0-8.284-6.72-15-15-15l15-15c0 8.284 6.72 15 15 15 8.28 0 15-6.716 15-15v15h30v-30h-30v-30h30v-30h-30v15c0-8.284-6.72-15-15-15-8.28 0-15 6.716-15 15v-15l-30 30h30l-30 30zm15 0l15 15c0-8.284 6.72-15 15-15 8.28 0 15 6.716 15 15v-15l-30-30h30v-15c0 8.284-6.72 15-15 15-8.28 0-15-6.716-15-15v45h-15zm-15 15c0-8.284-6.72-15-15-15h30l-15 15zm0 0l15 15c-8.28 0-15 6.716-15 15v-15h-15c8.28 0 15-6.716 15-15zm-50-85h10v-10h-10v10zm10 120v-10h-10v10h10zm50-120h10v-10h-10v10zm70 30h-10v-10h10v10zm0 50h-10v10h10v-10zm25.86-55l-.86.858-.86-.858.86-.858.86.858zM1115 515.858l.86-.858-.86-.858-.86.858.86.858zM1175.86 545l-.86.858-.86-.858.86-.858.86.858zm-.86 60.858l.86-.858-.86-.858-.86.858.86.858zm-59.14-.858l-.86.858-.86-.858.86-.858.86.858zm149.14.858l.86-.858-.86-.858-.86.858.86.858zM1200 570v10h10v-10h-10zm60-60v10h10v-10h-10zm-115-60a5.001 5.001 0 000 10 5.001 5.001 0 000-10zm115 5a5.001 5.001 0 0110 0 5.001 5.001 0 01-10 0zm-120 35v-10h10v10h-10zm65-10a5.001 5.001 0 000 10 5.001 5.001 0 000-10zm55 95a5.001 5.001 0 0110 0 5.001 5.001 0 01-10 0zm-25 25a5.001 5.001 0 000 10 5.001 5.001 0 000-10zm-35-55a5.001 5.001 0 0110 0 5.001 5.001 0 01-10 0zm-50 65h-10v-10h10v10zm25-40a5.001 5.001 0 000 10 5.001 5.001 0 000-10zm-35-25a5.001 5.001 0 0110 0 5.001 5.001 0 01-10 0zm-25-65a5.001 5.001 0 000 10 5.001 5.001 0 000-10zm-117.601-30.984c-8.622 1.178-18.016 5.622-27.387 12.627-16.423-12.271-32.847-16.609-45.012-9.585-8.739 5.045-13.614 14.998-14.63 28.133C901.675 481.464 895 488.952 895 498c0 2.098.359 4.112 1.019 5.985C885.79 511.304 880 520.239 880 530c0 14.043 11.962 26.096 30.793 34.183-2.412 20.352 2.045 36.738 14.207 43.759 12.073 6.971 28.425 2.834 45-9.575 16.419 12.264 32.84 16.597 45 9.575 12.16-7.022 16.62-23.408 14.21-43.76 19.04-8.154 30.79-20.246 30.79-34.182 0-14.047-11.97-26.102-30.81-34.189 1.22-10.261.71-19.544-1.7-27.126A17.968 17.968 0 001031 458c0-9.941-8.06-18-18-18-6.67 0-12.49 3.627-15.601 9.016zm-95.565 63.103C894.035 517.693 890 523.904 890 530c0 8.98 8.542 17.574 22.503 23.999 1.651-7.691 4.165-15.777 7.501-24.012a156.075 156.075 0 01-4.949-14.103c-.675.077-1.36.116-2.055.116a17.923 17.923 0 01-11.166-3.881zm22.5-.134c.479 1.668.998 3.348 1.555 5.037a187.711 187.711 0 0110.82-18.735c-1.962.408-3.891.852-5.781 1.332a17.97 17.97 0 01-6.594 12.366zm4.688-22.198a154.8 154.8 0 0115.984-3.08c5.449-6.981 11.197-13.203 17.043-18.49-12.549-8.886-24.269-11.991-32.049-7.499-5.581 3.222-9.015 10.419-9.703 20.823a18.073 18.073 0 018.725 8.246zm66.053-30.131c-5.348 1.409-11.158 4.337-17.114 8.547 5.833 5.274 11.578 11.491 17.039 18.495 8.8 1.228 17.05 3.094 24.54 5.509.58-6.4.36-12.214-.7-17.175-1.83.627-3.8.968-5.84.968-9.38 0-17.089-7.179-17.925-16.344zM1013 466a8 8 0 008-8 8 8 0 00-8-8 8 8 0 00-8 8 8 8 0 008 8zm-53.804 19.312c3.556-3.987 7.178-7.599 10.799-10.785 3.611 3.175 7.237 6.783 10.806 10.782a188.04 188.04 0 00-21.605.003zM939.689 512.5a171.85 171.85 0 0110.749-16.404A172.654 172.654 0 01970 495c6.763 0 13.317.385 19.57 1.103a171.719 171.719 0 0110.74 16.397 171.13 171.13 0 018.83 17.499 172.548 172.548 0 01-8.83 17.501 176.55 176.55 0 01-1.957 3.309A17.994 17.994 0 00993 550c-8.892 0-16.278 6.448-17.738 14.922-1.746.052-3.5.078-5.262.078-6.763 0-13.317-.385-19.57-1.103a171.916 171.916 0 01-10.741-16.397 172.815 172.815 0 01-8.833-17.492 171.9 171.9 0 018.833-17.508zm69.601 47.826a18.186 18.186 0 00-2.59-4 168.87 168.87 0 002.27-3.826c1.82-3.158 3.54-6.334 5.13-9.512 1.68 5.092 2.99 10.037 3.94 14.753-2.77.938-5.69 1.803-8.75 2.585zM993 586c9.18 0 16.76-6.875 17.86-15.758 3-.743 5.89-1.565 8.67-2.459 1.42 15.308-1.75 27.008-9.53 31.499-7.78 4.491-19.496 1.387-32.044-7.495a134.094 134.094 0 007.55-7.417A17.92 17.92 0 00993 586zm-16.633-11.108c.428 1.033.95 2.018 1.555 2.943a121.222 121.222 0 01-7.917 7.638c-3.611-3.175-7.237-6.783-10.806-10.782a188.04 188.04 0 0017.168.201zm51.133-20.901c-1.66-7.689-4.17-15.774-7.51-24.006 3.32-8.202 5.83-16.286 7.49-23.991 13.97 6.425 22.52 15.022 22.52 24.006 0 8.702-8.3 17.421-22.5 23.991zm-13.39-36.98c1.67-5.068 2.99-10.011 3.94-14.743-4.56-1.54-9.5-2.876-14.75-3.967a189.903 189.903 0 0110.81 18.71zM945 573.302c5.458 7 11.2 13.214 17.029 18.486-12.778 9.007-24.482 11.851-32.029 7.494-7.777-4.49-10.948-16.185-9.532-31.487 7.482 2.414 15.737 4.279 24.532 5.507zm-8.303-11.603c-5.246-1.091-10.181-2.426-14.735-3.964.945-4.714 2.257-9.657 3.935-14.747a187.545 187.545 0 0010.8 18.711zM1001 568a8 8 0 11-16 0 8 8 0 0116 0zm-88-62a8 8 0 100-16 8 8 0 000 16zm-253-66h180v180H660V440zm10 100v70h160V450H670v90zm0 0l30-30h30v-30l30-30v60l-30 30h-60zm160-20l-30 30h-30v30l-2.929 2.929-10 10L750 600l-10 10v-60l30-30h60zm-90-35.858v31.716l10-10v-31.716l-10 10zM726.126 520H730v10h-35.858l10-10h21.984zM750 550h10v25.858l-10 10V550zm14.142-10h31.716l10-10h-31.716l-10 10zM470 620h150V470l-30-30v150H440l30 30zm120-10H474.142l-10-10H600V464.142l10 10V610h-20zm-40-130h-70v70h10v-60h60v-10zm-50 80v-60h60v-30h-90v90h30zM370 450v30l-30 10v30l-60-20 30-10v-30l-30 10v-30l-30 10v30l-30-10v60l30 10-30 10v60l30-10v-30l30-10v-30l60 20-30 10v30l-30-10v30l30 10v-30l30-10v30l30-10v-60l30 10v-30l-30-10 30-10v-60l-30 10zm0 60v30l-30 10v-30l30-10zm-90 20l-30 10v-60l30-10v60zm100-42.792v-30l10-3.334v38.918l-40 13.334v-8.918l30-10zm-140 75.584v30l-10 3.334v-38.918l40-13.334v8.918l-30 10zm80 4.416v8.918l30-10v30l10-3.334v-38.918l-40 13.334zm-60-101.082l10-3.334v-8.918l-10 3.334v8.918zm40 16.666l-10 3.334v-8.918l10-3.334v8.918zm-10 111.082l10 3.334v8.918l-10-3.334v-8.918zm100-66.666l-10-3.334v8.918l10 3.334v-8.918zm-100-13.334l40 13.334v8.918l-40-13.334v-8.918zm-60 8.918l10 3.334v-38.918l-10-3.334v38.918zM47.071 440L90 482.929V440h47.071L180 482.929V530h-42.929L180 572.929V620h-47.071L90 577.071V620H42.929L0 577.071V530h42.929L0 487.071V440h47.071zM90 572.929V530h42.929L90 487.071V530H47.071L90 572.929zM10 450v30h30v-30H10zm37.071 70l-30-30H42.93l30 30H47.07zM80 512.929l-30-30v-25.858l30 30v25.858zM100 480h30v-30h-30v30zm40-22.929v25.858l30 30v-25.858l-30-30zM132.929 490h-25.858l30 30h25.858l-30-30zM40 570H10v-30h30v30zm10 2.929v-25.858l30 30v25.858l-30-30zM17.071 580H42.93l30 30H47.07l-30-30zm90 0l30 30h25.858l-30-30h-25.858zM100 570v-30h30v30h-30zm40-22.929v25.858l30 30v-25.858l-30-30zM1320 280c0 33.137 26.86 60 60 60h-60v60h180V220h-60v60c0-33.137-26.86-60-60-60s-60 26.863-60 60zm120 60h-60c33.14 0 60-26.863 60-60v60zm10 0h40V230h-40v110zm40 10h-160v40h160v-40zm-60-70c0 27.614-22.39 50-50 50s-50-22.386-50-50 22.39-50 50-50 50 22.386 50 50zm-300-30h-30l30-30h30v30l-30 30v-30zm30 60v-30h-30l-30 30h30v30l-30 30h30v30l30-30h30v30l30-30h30v30l30-30v-30h-30l30-30v-30h-30l30-30v-30h-30l-30 30v-30h-30l-30 30h30v30l-30 30zm30 30l-30 30v-30h-30l30-30h30v30zm30-30h30v30l-30 30v-30h-30l30-30zm0 0v-30h-30l30-30h30v30l-30 30zm-70-64.142V230h-15.86l-10 10H1140v15.858l10-10zm60 0V230h-15.86l-10 10H1200v15.858l10-10zM1270 230v15.858l-10 10V240h-15.86l10-10H1270zm-120 75.858V290h-15.86l-10 10H1140v15.858l10-10zM1210 290v15.858l-10 10V300h-15.86l10-10H1210zm60 15.858V290h-15.86l-10 10H1260v15.858l10-10zM1150 350v15.858l-10 10V360h-15.86l10-10H1150zm60 15.858V350h-15.86l-10 10H1200v15.858l10-10zM1270 350v15.858l-10 10V360h-15.86l10-10H1270zm-210-130h-62.071L970 247.929 942.071 220H880v62.071L907.929 310 880 337.929V400h62.071L970 372.071 997.929 400H1060v-62.071L1032.07 310l27.93-27.929V220zm-122.071 10L970 262.071 1002.07 230H1050v47.929L1017.93 310l32.07 32.071V390h-47.93L970 357.929 937.929 390H890v-47.929L922.071 310 890 277.929V230h47.929z","M719.487 374.773L835.92 400h-47.224l-68.183-14.773L686.42 400h-25.149l58.216-25.227zm.187-19.861L840 370.955v10.088l-119.674-15.955L660 381.174v-10.35l59.674-15.912zm.16-19.934L840 342.988v10.023l-119.834-7.989L660 353.044v-10.089l59.834-7.977zm.124-19.979l120.042 2v10.002l-119.958-2L660 327.003v-10.006l59.958-1.998zM660 292.997l60.042 2.002L840 293v10l-120.042 2.001L660 303.002v-10.005zm0-26.04l60.166 8.021L840 266.989v10.022l-120.166 8.011L660 277.044v-10.087zm0-28.132l60.326 16.087L840 238.956v10.088l-120.326 16.044L660 249.174v-10.349zM686.421 220l34.092 14.773L788.694 220h47.226l-116.433 25.227L661.271 220h25.15z","M530 400c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90zm0-10c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80zm0-125c8.284 0 15 6.716 15 15v60c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15v-60c0-8.284 6.716-15 15-15zm0 10a5 5 0 00-5 5v60a5 5 0 0010 0v-60a5 5 0 00-5-5z","M230 250v140h10V260h110v-10H230zm20 20v130h-30V240h140v30H250zm-20-40v10h130v110h10V230H230zm120 20H220v-30h160v140h-30V250zm30 110H270v10h120V230h-10v130zm-10-140h30v160H260v-30h110V220zm-120 50v120h140v-10H260V270h-10zm20 100h130v30H240V260h30v110z","M180 375v10H0v-10h180zm-90-50v10H40l10 10h40v10H60l10 10H0v-10h60l-10-10H0v-10h40l-10-10h60zm60 0l-10 10h40v10h-50l-10 10h60v10h-70l10-10H90v-10h40l10-10H90v-10h60zM20 315l10 10H0v-10h20zm160 0v10h-30l10-10h20zM40 295l-10 9.999L90 305v10H20l9.998-10H0v-10h40zm140 0v10h-29.998L160 315H90v-10l60-.001L140 295h40zm-90-10v10H40l10-10h40zm40 0l10 10H90v-10h40zm-70-10l-10 10H0v-10h60zm120 0v10h-50l-10-10h60zm-120 0l10-10h40l10 10H60zm20-20l-10 10H0v-10h80zm100 0v10h-70l-10-10h80zm0-20v10H0v-10h180zM1334.07 0L1380 45.929 1394.07 60h13.86L1380 32.071 1347.93 0h14.14L1380 17.929 1422.07 60h13.86L1380 4.071 1375.93 0h14.14L1440 49.929 1489.93 0H1500v4.071L1444.07 60h13.86L1500 17.929V32.07L1472.07 60h13.86L1500 45.929V60h-13.93L1500 73.929V88.07L1471.93 60h-13.86l41.93 41.929v14.142L1443.93 60h-7.86L1380 116.071 1323.93 60l-3.93-3.929V41.93L1338.07 60l41.93 41.929L1421.93 60h-13.86L1380 88.071 1351.93 60 1320 28.071V13.93L1366.07 60 1380 73.929 1393.93 60h-14L1320 .071V0h14.07zM1320 170.071v-14.142L1355.93 120 1320 84.071V69.93l50.07 50.07-50.07 50.071zm3.93 9.929h14.14l41.93-41.929L1421.93 180h14.14L1380 123.929 1323.93 180zm28 0h14.14l13.93-13.929L1393.93 180h14.14L1380 151.929 1351.93 180zM1320 127.929v14.142L1342.07 120 1320 97.929v14.142l7.93 7.929-7.93 7.929zm84.07-7.929l35.93 35.929L1475.93 120 1440 84.071 1404.07 120zm-14.14 0l50.07 50.071L1490.07 120 1440 69.929 1389.93 120zm50.07 7.929l-7.93-7.929 7.93-7.929 7.93 7.929-7.93 7.929zM1417.93 120l22.07 22.071L1462.07 120 1440 97.929 1417.93 120zm.14-120L1440 21.929 1461.93 0h14.14L1440 36.071 1403.93 0h14.14zm13.86 0l8.07 8.071L1448.07 0h-16.14zm12 180h14.14l41.93-41.929v-14.142L1443.93 180zm28 0h14.14l13.93-13.929v-14.142L1471.93 180zM1175 0h30c41.66 0 75 40.486 75 90 0 49.515-33.34 90-75 90h-30c-41.66 0-75-40.485-75-90 0-49.514 33.34-90 75-90zm95 90c0 44.374-29.34 80-65 80s-65-35.626-65-80 29.34-80 65-80 65 35.626 65 80zm-99.78-79.785C1136.75 13.23 1110 47.627 1110 90s26.75 76.769 60.22 79.785C1146.24 154.718 1130 124.558 1130 90s16.24-64.718 40.22-79.785zM1150 90c0 38.416 24.3 70 55 70s55-31.584 55-70-24.3-70-55-70-55 31.584-55 70zm100 0c0 33.381-20.48 60-45 60-.51 0-1.03-.012-1.54-.035C1219.64 137.542 1230 115.005 1230 90c0-24.989-10.35-47.533-26.54-59.965A33.63 33.63 0 011205 30c24.52 0 45 26.619 45 60zm-59.99-56.556C1172.67 41.669 1160 63.742 1160 90s12.67 48.332 30.01 56.557c17.6-8.345 29.99-30.745 29.99-56.557 0-25.788-12.37-48.2-29.99-56.556zM880 30h50v50h30V30h70v100h30V0H880v30zm70 40V20h90v100h10V10H890v10h50v50h10zm110 110v-30H960v-20h50V50h-30v50h-50v50h-20V50h-30v130h180zM990 60h10v60h-50v40h100v10H890V60h10v100h40v-50h50V60zM700 0h140l-40 40H700v100h-40V40l40-40zm100 140V40h40v100l-40 40H660l40-40h100zm10 0h20V50h-20v90zM670 40h20v90h-20V40zm34.142-30l-20 20h111.716l20-20H704.142zm0 140l-20 20h111.716l20-20H704.142zM620 0v180H440V0h180zm-87.071 170H450V10h160v82.929L567.071 50H490v77.071L532.929 170zm14.142 0h55.858l-40-40h-55.858l40 40zM500 120h60V60h-60v60zm70-52.929l40 40v55.858l-40-40V67.071zM220 180c49.706 0 90-40.294 90-90v90c49.706 0 90-40.294 90-90S359.706 0 310 0v90c0-49.706-40.294-90-90-90v180zm80-90c0 40.796-30.537 74.46-70 79.381V10.619c39.463 4.92 70 38.585 70 79.381zm20-79.381c39.463 4.92 70 38.585 70 79.381s-30.537 74.46-70 79.381V10.619zM150 30H0V0h180v180h-30V30zm20 140V10H10v10h150v150h10zm-70-90H0V50h130v130h-30V80zm20-20H10v10h100v100h10V60zM0 130h50v50h30v-80H0v30zm10-20h60v60H60v-50H10v-10zm20 40v30H0v-30h30zm-20 10v10h10v-10H10z"]}'),l=n(4865),o=function(e){var t=e.jobs;return r.createElement("section",{className:"container w-11/12 max-w-screen-xl mx-auto relative"},r.createElement("h1",{className:"whitespace-nowrap font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-4xl md:text-6xl"},t?r.createElement(r.Fragment,null,"Find your ",r.createElement("em",null,"dream")," job."):r.createElement(r.Fragment,null,"We ",r.createElement("em",null,"move")," startups forward.")),r.createElement("svg",{viewBox:"0 0 1500 620"},a.H.map((function(e,t){return r.createElement("path",{key:t,d:e,fill:l.theme.extend.colors.gray[100],fillRule:"evenodd",clipRule:"evenodd"})}))))}},4865:function(e){e.exports={content:["./src/**/*.{js,jsx,ts,tsx}"],theme:{extend:{fontFamily:{sans:["IBM Plex Sans","Helvetica Neue","Helvetica","sans-serif"]},colors:{blue:{50:"#00A5FF",100:"#0790D7"},green:{50:"#08F7F7"},gray:{50:"#F2F2F2",100:"#E6E6E6",200:"#D8D8D8",300:"#C4C4C4",400:"#979797"}}}},plugins:[]}}}]);
//# sourceMappingURL=commons-98760ab9cc1117a51ba5.js.map