// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(i):a(i)+r,n&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,a,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(a=r.arg,c=parseInt(a,10),!isFinite(c)){if(!t(a))throw new Error("invalid integer. Value: "+a);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(a=(-c).toString(e),r.precision&&(a=n(a,r.precision,r.padRight)),a="-"+a):(a=c.toString(e),c||r.precision?r.precision&&(a=n(a,r.precision,r.padRight)):a="",r.sign&&(a=r.sign+a)),16===e&&(r.alternate&&(a="0x"+a),a=r.specifier===o.call(r.specifier)?o.call(a):i.call(a)),8===e&&r.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}function s(r){return"string"==typeof r}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,a,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+a);n=r.arg}switch(r.specifier){case"e":case"E":a=n.toExponential(r.precision);break;case"f":case"F":a=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),a=n.toExponential(e)):a=n.toPrecision(r.precision),r.alternate||(a=f.call(a,w,"$1e"),a=f.call(a,b,"e"),a=f.call(a,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return a=f.call(a,g,"e+0$1"),a=f.call(a,d,"e-0$1"),r.alternate&&(a=f.call(a,h,"$1."),a=f.call(a,y,"$1.e")),n>=0&&r.sign&&(a=r.sign+a),a=r.specifier===u.call(r.specifier)?u.call(a):p.call(a)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var a=e-r.length;return a<0?r:r=t?r+_(a):_(a)+r}var E=String.fromCharCode,k=isNaN,x=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,a,i,o,l,p,u,f;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",p=1,u=0;u<r.length;u++)if(s(a=r[u]))l+=a;else{if(e=void 0!==a.precision,!(a=F(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+a+"`.");for(a.mapping&&(p=a.mapping),t=a.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=t.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===a.width){if(a.width=parseInt(arguments[p],10),p+=1,k(a.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(e&&"*"===a.precision){if(a.precision=parseInt(arguments[p],10),p+=1,k(a.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,e=!1)}switch(a.arg=arguments[p],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(a.padZeros=!1),a.arg=c(a);break;case"s":a.maxWidth=e?a.precision:-1;break;case"c":if(!k(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=k(o)?String(a.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(a.precision=6),a.arg=m(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=n(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=S(a.arg,a.width,a.padRight)),l+=a.arg||"",p+=1}return l}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,a,n;for(t=[],n=0,a=j.exec(r);a;)(e=r.slice(n,j.lastIndex-a[0].length)).length&&t.push(e),t.push(I(a)),n=j.lastIndex,a=j.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function V(r){return"string"==typeof r}function $(r){var e,t;if(!V(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return A.apply(null,e)}var O=Object.prototype,C=O.toString,P=O.__defineGetter__,R=O.__defineSetter__,N=O.__lookupGetter__,Z=O.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var a,n,i,o;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(r,e)||Z.call(r,e)?(a=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=a):r[e]=t.value),i="get"in t,o="set"in t,n&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,e,t.get),o&&R&&R.call(r,e,t.set),r};function M(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r,e,t,a,n,i,o,c){var s,l,p,u;if(r<=0)return i;for(s=t<0?(1-r)*t:0,l=n<0?(1-r)*n:0,p=o<0?(1-r)*o:0,u=0;u<r;u++)0===a[l]&&(i[p]=c(e[s])),s+=t,l+=n,p+=o;return i}function L(r,e,t,a,n,i,o,c,s,l,p){var u,f,g,d;if(r<=0)return c;for(u=a,f=o,g=l,d=0;d<r;d++)0===n[f]&&(c[g]=p(e[u])),u+=t,f+=i,g+=s;return c}M(W,"ndarray",L);var U="function"==typeof Math.fround?Math.fround:null;var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var q=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,B="function"==typeof Y?Y.toStringTag:"";var D=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,a,n,i;if(null==r)return q.call(r);t=r[B],i=B,e=null!=(n=r)&&z.call(n,i);try{r[B]=void 0}catch(e){return q.call(r)}return a=q.call(r),e?r[B]=t:delete r[B],a}:function(r){return q.call(r)},H="function"==typeof Float32Array;var J=Number.POSITIVE_INFINITY,K="function"==typeof Float32Array?Float32Array:null;var Q="function"==typeof Float32Array?Float32Array:void 0;var rr=new(function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K([1,3.14,-3.14,5e40]),t=e,r=(H&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===J}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")})(1);var er="function"==typeof U?U:function(r){return rr[0]=r,rr[0]},tr=Math.sqrt;function ar(r){return er(tr(er(r)))}function nr(r,e,t,a,n,i,o){return W(r,e,t,a,n,i,o,ar)}function ir(r,e,t,a,n,i,o,c,s,l){return L(r,e,t,a,n,i,o,c,s,l,ar)}M(nr,"ndarray",ir);export{nr as default,ir as ndarray};
//# sourceMappingURL=mod.js.map
