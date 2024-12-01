// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,s=String.prototype.toLowerCase,u=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,b,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,f,"e+0$1"),n=p.call(n,g,"e-0$1"),e.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===u.call(e.specifier)?u.call(n):s.call(n)}function v(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var E=String.fromCharCode,_=Array.isArray;function S(e){return e!=e}function A(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,a,o,l,s,u,p,f,g,d,y;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,u=0;u<e.length;u++)if("string"==typeof(n=e[u]))l+=n;else{if(r=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,S(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-f.length)<0?f:f=d?f+v(y):v(y)+f)),l+=n.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function j(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){var r,t;if("string"!=typeof e)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[j(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var I=Object.prototype,V=I.toString,O=I.__defineGetter__,P=I.__defineSetter__,$=I.__lookupGetter__,C=I.__lookupSetter__,R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(e,r)||C.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};function U(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"number"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return L&&"symbol"==typeof Symbol.toStringTag}var Z,G=Object.prototype.toString,W=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,B="function"==typeof Y?Y.toStringTag:"";Z=M()?function(e){var r,t,n,i,a;if(null==e)return G.call(e);t=e[B],a=B,r=null!=(i=e)&&W.call(i,a);try{e[B]=void 0}catch(r){return G.call(e)}return n=G.call(e),r?e[B]=t:delete e[B],n}:function(e){return G.call(e)};var X=Z,z=Number,J=z.prototype.toString,q=M();function D(e){return"object"==typeof e&&(e instanceof z||(q?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Number]"===X(e)))}function H(e){return N(e)||D(e)}U(H,"isPrimitive",N),U(H,"isObject",D);var K="function"==typeof Math.fround?Math.fround:null,Q="function"==typeof Float32Array,ee=Number.POSITIVE_INFINITY,re="function"==typeof Float32Array?Float32Array:null,te="function"==typeof Float32Array?Float32Array:void 0,ne=function(){var e,r,t;if("function"!=typeof re)return!1;try{r=new re([1,3.14,-3.14,5e40]),t=r,e=(Q&&t instanceof Float32Array||"[object Float32Array]"===X(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ee}catch(r){e=!1}return e}()?te:function(){throw new Error("not implemented")},ie=new ne(1),ae="function"==typeof K?K:function(e){return ie[0]=e,ie[0]};function oe(e,r){if(!(this instanceof oe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!N(e))throw new TypeError(F("invalid argument. Real component must be a number. Value: `%s`.",e));if(!N(r))throw new TypeError(F("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return R(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ae(e)}),R(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ae(r)}),this}U(oe,"BYTES_PER_ELEMENT",4),U(oe.prototype,"BYTES_PER_ELEMENT",4),U(oe.prototype,"byteLength",8),U(oe.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),U(oe.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var ce="function"==typeof Uint32Array,le="function"==typeof Uint32Array?Uint32Array:null,se="function"==typeof Uint32Array?Uint32Array:void 0,ue=function(){var e,r,t;if("function"!=typeof le)return!1;try{r=new le(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ce&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?se:function(){throw new Error("not implemented")},pe=new ne(1);new ue(pe.buffer)[0]=4286578688;var fe=pe[0];return function(e,r){var t,n=function(e){return e.re}(e),i=function(e){return e.im}(e);return(r<0||0===(t=r)&&1/t===fe)&&(n=-n,i=-i),new oe(n,i)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).cflipsignf=r();
//# sourceMappingURL=index.js.map