"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[218],{7480:function(e,t,r){function n(e,t){return t||(t=e.slice(0)),e.raw=t,e}r.r(t),r.d(t,{default:function(){return Ie}});r(7154);var a=r(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var o=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}},s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c=o((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));var l=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),u=Math.abs,d=String.fromCharCode;function f(e){return e.trim()}function p(e,t,r){return e.replace(t,r)}function h(e,t){return e.indexOf(t)}function m(e,t){return 0|e.charCodeAt(t)}function g(e,t,r){return e.slice(t,r)}function y(e){return e.length}function v(e){return e.length}function b(e,t){return t.push(e),e}var k=1,w=1,x=0,C=0,_=0,A="";function S(e,t,r,n,a,i,o){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:k,column:w,length:o,return:""}}function $(e,t,r){return S(e,t.root,t.parent,r,t.props,t.children,0)}function E(){return _=C>0?m(A,--C):0,w--,10===_&&(w=1,k--),_}function P(){return _=C<x?m(A,C++):0,w++,10===_&&(w=1,k++),_}function T(){return m(A,C)}function O(){return C}function R(e,t){return g(A,e,t)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L(e){return k=w=1,x=y(A=e),C=0,[]}function M(e){return A="",e}function N(e){return f(R(C-1,I(91===e?e+2:40===e?e+1:e)))}function j(e){for(;(_=T())&&_<33;)P();return z(e)>2||z(_)>3?"":" "}function H(e,t){for(;--t&&P()&&!(_<48||_>102||_>57&&_<65||_>70&&_<97););return R(e,O()+(t<6&&32==T()&&32==P()))}function I(e){for(;P();)switch(_){case e:return C;case 34:case 39:return I(34===e||39===e?e:_);case 40:41===e&&I(e);break;case 92:P()}return C}function q(e,t){for(;P()&&e+_!==57&&(e+_!==84||47!==T()););return"/*"+R(t,C-1)+"*"+d(47===e?e:P())}function U(e){for(;!z(T());)P();return R(e,C)}var D="-ms-",B="-moz-",F="-webkit-",W="comm",X="rule",V="decl";function G(e,t){for(var r="",n=v(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function Y(e,t,r,n){switch(e.type){case"@import":case V:return e.return=e.return||e.value;case W:return"";case X:e.value=e.props.join(",")}return y(r=G(e.children,n))?e.return=e.value+"{"+r+"}":""}function Z(e,t){switch(function(e,t){return(((t<<2^m(e,0))<<2^m(e,1))<<2^m(e,2))<<2^m(e,3)}(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+B+e+D+e+e;case 6828:case 4268:return F+e+D+e+e;case 6165:return F+e+D+"flex-"+e+e;case 5187:return F+e+p(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return F+e+D+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return F+e+D+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return F+e+D+p(e,"shrink","negative")+e;case 5292:return F+e+D+p(e,"basis","preferred-size")+e;case 6060:return F+"box-"+p(e,"-grow","")+F+e+D+p(e,"grow","positive")+e;case 4554:return F+p(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(y(e)-1-t>6)switch(m(e,t+1)){case 109:if(45!==m(e,t+4))break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+B+(108==m(e,t+3)?"$3":"$2-$3"))+e;case 115:return~h(e,"stretch")?Z(p(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==m(e,t+1))break;case 6444:switch(m(e,y(e)-3-(~h(e,"!important")&&10))){case 107:return p(e,":",":"+F)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(45===m(e,14)?"inline-":"")+"box$3$1"+F+"$2$3$1"+D+"$2box$3")+e}break;case 5936:switch(m(e,t+11)){case 114:return F+e+D+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+D+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+D+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return F+e+D+e+e}return e}function K(e){return M(J("",null,null,null,[""],e=L(e),0,[0],e))}function J(e,t,r,n,a,i,o,s,c){for(var l=0,u=0,f=o,h=0,m=0,g=0,v=1,k=1,w=1,x=0,C="",_=a,A=i,S=n,$=C;k;)switch(g=x,x=P()){case 34:case 39:case 91:case 40:$+=N(x);break;case 9:case 10:case 13:case 32:$+=j(g);break;case 92:$+=H(O()-1,7);continue;case 47:switch(T()){case 42:case 47:b(ee(q(P(),O()),t,r),c);break;default:$+="/"}break;case 123*v:s[l++]=y($)*w;case 125*v:case 59:case 0:switch(x){case 0:case 125:k=0;case 59+u:m>0&&y($)-f&&b(m>32?te($+";",n,r,f-1):te(p($," ","")+";",n,r,f-2),c);break;case 59:$+=";";default:if(b(S=Q($,t,r,l,u,a,s,C,_=[],A=[],f),i),123===x)if(0===u)J($,t,S,S,_,i,f,s,A);else switch(h){case 100:case 109:case 115:J(e,S,S,n&&b(Q(e,S,S,0,0,a,s,C,a,_=[],f),A),a,A,f,s,n?_:A);break;default:J($,S,S,S,[""],A,f,s,A)}}l=u=m=0,v=w=1,C=$="",f=o;break;case 58:f=1+y($),m=g;default:if(v<1)if(123==x)--v;else if(125==x&&0==v++&&125==E())continue;switch($+=d(x),x*v){case 38:w=u>0?1:($+="\f",-1);break;case 44:s[l++]=(y($)-1)*w,w=1;break;case 64:45===T()&&($+=N(P())),h=T(),u=y(C=$+=U(O())),x++;break;case 45:45===g&&2==y($)&&(v=0)}}return i}function Q(e,t,r,n,a,i,o,s,c,l,d){for(var h=a-1,m=0===a?i:[""],y=v(m),b=0,k=0,w=0;b<n;++b)for(var x=0,C=g(e,h+1,h=u(k=o[b])),_=e;x<y;++x)(_=f(k>0?m[x]+" "+C:p(C,/&\f/g,m[x])))&&(c[w++]=_);return S(e,t,r,0===a?X:s,c,l,d)}function ee(e,t,r){return S(e,t,r,W,d(_),g(e,2,-2),0)}function te(e,t,r,n){return S(e,t,r,V,g(e,0,n),g(e,n+1,-1),n)}var re=function(e,t,r){for(var n=0,a=0;n=a,a=T(),38===n&&12===a&&(t[r]=1),!z(a);)P();return R(e,C)},ne=function(e,t){return M(function(e,t){var r=-1,n=44;do{switch(z(n)){case 0:38===n&&12===T()&&(t[r]=1),e[r]+=re(C-1,t,r);break;case 2:e[r]+=N(n);break;case 4:if(44===n){e[++r]=58===T()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=d(n)}}while(n=P());return e}(L(e),t))},ae=new WeakMap,ie=function(e){if("rule"===e.type&&e.parent&&e.length){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ae.get(r))&&!n){ae.set(e,!0);for(var a=[],i=ne(t,a),o=r.props,s=0,c=0;s<i.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=a[s]?i[s].replace(/&\f/g,o[l]):o[l]+" "+i[s]}}},oe=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},se=[function(e,t,r,n){if(!e.return)switch(e.type){case V:e.return=Z(e.value,e.length);break;case"@keyframes":return G([$(p(e.value,"@","@"+F),e,"")],n);case X:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return G([$(p(t,/:(read-\w+)/,":-moz-$1"),e,"")],n);case"::placeholder":return G([$(p(t,/:(plac\w+)/,":-webkit-input-$1"),e,""),$(p(t,/:(plac\w+)/,":-moz-$1"),e,""),$(p(t,/:(plac\w+)/,D+"input-$1"),e,"")],n)}return""}))}}],ce=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n=e.stylisPlugins||se;var a,i,o={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;s.push(e)}));var c,u,d,f,p=[Y,(f=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],h=(u=[ie,oe].concat(n,p),d=v(u),function(e,t,r,n){for(var a="",i=0;i<d;i++)a+=u[i](e,t,r,n)||"";return a});i=function(e,t,r,n){c=r,G(K(e?e+"{"+t.styles+"}":t.styles),h),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new l({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:o,registered:{},insert:i};return m.sheet.hydrate(s),m};var le=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},ue=r(4759),de=/[A-Z]|^ms/g,fe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,pe=function(e){return 45===e.charCodeAt(1)},he=function(e){return null!=e&&"boolean"!=typeof e},me=o((function(e){return pe(e)?e:e.replace(de,"-$&").toLowerCase()})),ge=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(fe,(function(e,t,r){return ve={name:t,styles:r,next:ve},t}))}return 1===ue.Z[e]||pe(e)||"number"!=typeof t||0===t?t:t+"px"};function ye(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return ve={name:r.name,styles:r.styles,next:ve},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)ve={name:n.name,styles:n.styles,next:ve},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=ye(e,t,r[a])+";";else for(var i in r){var o=r[i];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=i+"{"+t[o]+"}":he(o)&&(n+=me(i)+":"+ge(i,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=ye(e,t,o);switch(i){case"animation":case"animationName":n+=me(i)+":"+s+";";break;default:n+=i+"{"+s+"}"}}else for(var c=0;c<o.length;c++)he(o[c])&&(n+=me(i)+":"+ge(i,o[c])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=ve,i=r(e);return ve=a,ye(e,t,i)}}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var ve,be=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var ke=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";ve=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=ye(r,t,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=ye(r,t,e[o]),n&&(a+=i[o]);be.lastIndex=0;for(var s,c="";null!==(s=be.exec(a));)c+="-"+s[1];return{name:le(a)+c,styles:a,next:ve}},we=(Object.prototype.hasOwnProperty,(0,a.createContext)("undefined"!=typeof HTMLElement?ce({key:"css"}):null));we.Provider;var xe=function(e){return(0,a.forwardRef)((function(t,r){var n=(0,a.useContext)(we);return e(t,n,r)}))},Ce=(0,a.createContext)({});function _e(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var Ae=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0);a=a.next}while(void 0!==a)}},Se=c,$e=function(e){return"theme"!==e},Ee=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?Se:$e},Pe=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},Te=function e(t,r){var n,o,s=t.__emotion_real===t,c=s&&t.__emotion_base||t;void 0!==r&&(n=r.label,o=r.target);var l=Pe(t,r,s),u=l||Ee(c),d=!u("as");return function(){var f=arguments,p=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&p.push("label:"+n+";"),null==f[0]||void 0===f[0].raw)p.push.apply(p,f);else{0,p.push(f[0][0]);for(var h=f.length,m=1;m<h;m++)p.push(f[m],f[0][m])}var g=xe((function(e,t,r){var n=d&&e.as||c,i="",s=[],f=e;if(null==e.theme){for(var h in f={},e)f[h]=e[h];f.theme=(0,a.useContext)(Ce)}"string"==typeof e.className?i=_e(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var m=ke(p.concat(s),t.registered,f);Ae(t,m,"string"==typeof n);i+=t.key+"-"+m.name,void 0!==o&&(i+=" "+o);var g=d&&void 0===l?Ee(n):u,y={};for(var v in e)d&&"as"===v||g(v)&&(y[v]=e[v]);return y.className=i,y.ref=r,(0,a.createElement)(n,y)}));return g.displayName=void 0!==n?n:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=c,g.__emotion_styles=p,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+o}}),g.withComponent=function(t,n){return e(t,i({},r,n,{shouldForwardProp:Pe(g,n,!0)})).apply(void 0,p)},g}},Oe=Te.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Oe[e]=Oe(e)}));var Re,ze,Le=Oe,Me=r(5444),Ne=r(6885),je=Le.div(Re||(Re=n(["\n  ","\n  * {\n    font-family: 'Noto Serif KR';\n  }\n  h1 {\n    ","\n  }\n  h3 {\n    ","\n  }\n  p {\n    ","\n  }\n  img {\n    ","\n\n    margin-top: -5%;\n  }\n"])),{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},{position:"relative",fontSize:"4.5rem",lineHeight:"1","@media (min-width: 640px)":{fontSize:"8rem",lineHeight:"1"}},{marginBottom:"1rem",fontSize:"1.5rem",lineHeight:"2rem","--tw-text-opacity":"1",color:"rgba(55, 65, 81, var(--tw-text-opacity))","@media (min-width: 640px)":{fontSize:"2.25rem",lineHeight:"2.5rem"}},{marginBottom:"1rem","--tw-text-opacity":"1",color:"rgba(107, 114, 128, var(--tw-text-opacity))"},{width:"50%"}),He=Le.div(ze||(ze=n(["\n  ","\n\n  button, a {\n    ","\n  }\n"])),{display:"flex","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":0,marginRight:"calc(1rem * var(--tw-space-x-reverse))",marginLeft:"calc(1rem * calc(1 - var(--tw-space-x-reverse)))"}},{"--tw-text-opacity":"1",color:"rgba(96, 165, 250, var(--tw-text-opacity))",textDecoration:"underline",borderStyle:"none",backgroundColor:"rgba(0, 0, 0, 0)",cursor:"pointer"}),Ie=function(){return a.createElement(je,null,a.createElement(Ne.Z,{bgColor:"#fff"}),a.createElement("h1",null,"404"),a.createElement("img",{src:"https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif",alt:""}),a.createElement("h3",null,"페이지를 찾을 수 없습니다."),a.createElement("p",null,"페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. ",a.createElement("br",null)," 주소를 다시 한 번 확인 해주세요"),a.createElement(He,null,a.createElement(Me.rU,{to:"/"},"홈으로"),a.createElement("button",{onClick:function(){"undefined"!=typeof window&&window.document&&window.history.back()}},"뒤로가기")))}},6885:function(e,t,r){var n=(0,r(7452).createGlobalStyle)(["@import url('https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Condensed&family=Noto+Serif+KR&display=swap');*{padding:0;margin:0;box-sizing:border-box;font-family:'Encode Sans Semi Condensed',sans-serif;font-size:16px;letter-spacing:0.05em;}html,body,#___gatsby{height:100%;","}a,a:hover{color:inherit;text-decoration:none;cursor:pointer;}img{max-width:100%;}ol,ul{list-style:none;}.utterances{"," border-top:1px solid #eee;.utterances-frame{","}}"],(function(e){var t=e.bgColor;return t?"background: "+t:{"--tw-bg-opacity":"1",backgroundColor:"rgba(249, 250, 251, var(--tw-bg-opacity))"}}),{width:"100%",maxWidth:"100%",paddingTop:"1rem"},{paddingLeft:"1.25rem",paddingRight:"1.25rem","@media (min-width: 640px)":{paddingLeft:"2.5rem",paddingRight:"2.5rem"}});t.Z=n}}]);
//# sourceMappingURL=component---src-pages-404-tsx-a60a01ddd4363e44ec81.js.map