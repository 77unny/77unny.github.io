(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[155],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2237:function(e,t,n){"use strict";n.d(t,{Z:function(){return je}});var r,o,i,a,c=n(5444),l=n(7294),u=n(5697),s=n.n(u),f=n(4839),p=n.n(f),d=n(2993),m=n.n(d),y=n(6494),h=n.n(y),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",C="href",A="http-equiv",O="innerHTML",S="itemprop",x="name",k="property",j="rel",L="src",I="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",N="defer",R="encodeSpecialCharacters",M="onChangeClientState",U="titleTemplate",B=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],D="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=X(e,w.TITLE),n=X(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,P);return t||r||void 0},Z=function(e){return X(e,M)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,o),le(f,p);var d={baseTag:se(w.BASE,n),linkTags:se(w.LINK,i),metaTags:se(w.META,a),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,u),styleTags:se(w.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),l(e,m,y)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(D):n.getAttribute(D)!==a.join(",")&&n.setAttribute(D,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(D,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[D]=!0,o=pe(n,r),[l.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=fe(n),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=_[e]||e;if(n===O||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),l.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(b,o,r),link:de(w.LINK,i,r),meta:de(w.META,a,r),noscript:de(w.NOSCRIPT,c,r),script:de(w.SCRIPT,l,r),style:de(w.STYLE,u,r),title:de(w.TITLE,{title:f,titleAttributes:p},r)}},ye=p()((function(e){return{baseTag:$([C,I],e),bodyAttributes:Q(g,e),defer:X(e,N),encode:X(e,R),htmlAttributes:Q(b,e),linkTags:J(w.LINK,[j,C],e),metaTags:J(w.META,[x,T,A,k,S],e),noscriptTags:J(w.NOSCRIPT,[O],e),onChangeClientState:Z(e),scriptTags:J(w.SCRIPT,[L,O],e),styleTags:J(w.STYLE,[E],e),title:G(e),titleAttributes:Q(v,e)}}),(function(e){ie&&re(ie),e.defer?ie=ne((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),me)((function(){return null})),he=(o=ye,a=i=function(e){function t(){return F(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return z({},o,((t={})[r.type]=a,t.titleAttributes=z({},i),t));case w.BODY:return z({},o,{bodyAttributes:z({},i)});case w.HTML:return z({},o,{htmlAttributes:z({},i)})}return z({},o,((n={})[r.type]=z({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(K(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ge=n(6885),be=n(7452),ve=be.default.li.withConfig({displayName:"style__Item",componentId:"sc-1lyn52e-0"})([""," ",""],(function(e){return e.active?{fontWeight:"700"}:""}),{});function we(e){var t,n=e.selectedCategory,r=e.categoryList;return l.createElement("div",null,l.createElement("ul",null,(t=Object.entries(r),t.sort((function(e,t){var n=e[0],r=e[1],o=t[0],i=t[1];return r<i?1:r>i||n.toUpperCase()<o.toUpperCase()?-1:n.toUpperCase()>o.toUpperCase()?1:0}))).map((function(e){var t=e[0],r=e[1];return l.createElement(ve,{key:t,active:n===t},l.createElement(c.rU,{to:"/?category="+t},t," #",r))}))))}var Te=be.default.div.withConfig({displayName:"style__Container",componentId:"sc-1v9vg5k-0"})(["",""],{display:"flex",flexDirection:"column",height:"100%"}),Ee=be.default.main.withConfig({displayName:"style__Contents",componentId:"sc-1v9vg5k-1"})(["",""],{}),Ce=be.default.footer.withConfig({displayName:"style__Footer",componentId:"sc-1v9vg5k-2"})(["",""],{paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",textAlign:"center","@media (min-width: 640px)":{paddingLeft:"2.5rem",paddingRight:"2.5rem",paddingTop:"1.25rem",paddingBottom:"1.25rem"}}),Ae=be.default.header.withConfig({displayName:"style__HeaderContainer",componentId:"sc-1v9vg5k-3"})(["",""],{position:"sticky",top:"0px",left:"0px","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))",zIndex:"50","--tw-shadow":"0 1px 2px 0 rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem","@media (min-width: 640px)":{paddingLeft:"2.5rem",paddingRight:"2.5rem",paddingTop:"1.25rem",paddingBottom:"1.25rem"}}),Oe=be.default.div.withConfig({displayName:"style__HeaderInner",componentId:"sc-1v9vg5k-4"})(["",""],{display:"flex",alignItems:"center",justifyContent:"space-between"}),Se=be.default.h1.withConfig({displayName:"style__HeaderLogo",componentId:"sc-1v9vg5k-5"})(["a{","}"],{display:"flex",alignItems:"center",fontSize:"1.5rem",lineHeight:"2rem"}),xe=be.default.img.withConfig({displayName:"style__Thumbnail",componentId:"sc-1v9vg5k-6"})(["",""],{width:"1.75rem",height:"1.75rem",marginRight:"0.5rem",borderRadius:"9999px","--tw-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"});function ke(e){var t=e.title,n=e.logo,r=e.selectedCategory,o=e.categoryList;return l.createElement(Ae,null,l.createElement(Oe,null,l.createElement(Se,null,l.createElement(c.rU,{to:"/"},l.createElement(xe,{src:n,alt:t+" LOGO"}),t)),l.createElement("nav",null,l.createElement("ul",null,l.createElement("li",null,l.createElement(c.rU,{to:"/about"},"about me")),l.createElement("li",null,l.createElement(c.rU,{to:"/"},"posts"))))),r&&o&&l.createElement(we,{selectedCategory:r,categoryList:o}))}function je(e){var t=e.title,n=e.headingTitle,r=e.description,o=e.url,i=e.image,a=e.selectedCategory,u=e.categoryList,s=e.logo,f=e.footerLink,p=e.author,d=e.children;return l.createElement(l.Fragment,null,l.createElement(he,null,l.createElement("html",{lang:"ko"}),l.createElement("title",null,t),l.createElement("meta",{name:"description",content:r}),l.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),l.createElement("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:title",content:t}),l.createElement("meta",{property:"og:description",content:r}),l.createElement("meta",{property:"og:image",content:i}),l.createElement("meta",{property:"og:url",content:o}),l.createElement("meta",{property:"og:site_name",content:t}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:title",content:t}),l.createElement("meta",{name:"twitter:description",content:r}),l.createElement("meta",{name:"twitter:image",content:i}),l.createElement("meta",{name:"twitter:site",content:"@baekcode"}),l.createElement("meta",{name:"twitter:creator",content:"@baekcode"}),l.createElement("link",{rel:"canonical",href:o}),l.createElement("meta",{name:"google-site-verification",content:"lbgradPGc5SxVkGEYQ3qAKDAjWiTrU_tCVQ35_sUhgU"}),l.createElement("meta",{name:"naver-site-verification",content:"54621279b405c5c93047c44c38d3db1f8c67183c"})),l.createElement(ge.Z,null),l.createElement(Te,null,l.createElement(ke,{title:n,logo:s,selectedCategory:a,categoryList:u}),l.createElement(Ee,null,d),l.createElement(Ce,{style:{marginTop:"2rem"}},l.createElement(c.rU,{to:f,target:"_blank"},p))))}},6885:function(e,t,n){"use strict";var r=(0,n(7452).createGlobalStyle)(["@import url('https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Condensed&family=Noto+Serif+KR&display=swap');*{padding:0;margin:0;box-sizing:border-box;font-family:'Encode Sans Semi Condensed',sans-serif;font-size:16px;letter-spacing:0.05em;}html,body,#___gatsby{height:100%;","}a,a:hover{color:inherit;text-decoration:none;cursor:pointer;}img{max-width:100%;}ol,ul{list-style:none;}.utterances{"," border-top:1px solid #eee;.utterances-frame{","}}"],(function(e){var t=e.bgColor;return t?"background: "+t:{"--tw-bg-opacity":"1",backgroundColor:"rgba(249, 250, 251, var(--tw-bg-opacity))"}}),{width:"100%",maxWidth:"100%",paddingTop:"1rem"},{paddingLeft:"1.25rem",paddingRight:"1.25rem","@media (min-width: 640px)":{paddingLeft:"2.5rem",paddingRight:"2.5rem"}});t.Z=r}}]);
//# sourceMappingURL=1ebcef1f50f4fd50358800c4a582f61d733aaf94-c5cb917b1a10be305acf.js.map