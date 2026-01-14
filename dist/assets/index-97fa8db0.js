(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wl={exports:{}},Zi={},Hl={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr=Symbol.for("react.element"),sd=Symbol.for("react.portal"),ld=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),dd=Symbol.for("react.provider"),fd=Symbol.for("react.context"),pd=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),md=Symbol.for("react.memo"),gd=Symbol.for("react.lazy"),Rs=Symbol.iterator;function vd(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var Vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kl=Object.assign,Gl={};function Hn(e,t,n){this.props=e,this.context=t,this.refs=Gl,this.updater=n||Vl}Hn.prototype.isReactComponent={};Hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $l(){}$l.prototype=Hn.prototype;function zo(e,t,n){this.props=e,this.context=t,this.refs=Gl,this.updater=n||Vl}var Oo=zo.prototype=new $l;Oo.constructor=zo;Kl(Oo,Hn.prototype);Oo.isPureReactComponent=!0;var Ds=Array.isArray,Zl=Object.prototype.hasOwnProperty,Lo={current:null},Ql={key:!0,ref:!0,__self:!0,__source:!0};function Yl(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Zl.call(t,r)&&!Ql.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),h=0;h<s;h++)l[h]=arguments[h+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:zr,type:e,key:a,ref:o,props:i,_owner:Lo.current}}function yd(e,t){return{$$typeof:zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mo(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr}function kd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ps=/\/+/g;function da(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kd(""+e.key):t.toString(36)}function ci(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case zr:case sd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+da(o,0):r,Ds(i)?(n="",e!=null&&(n=e.replace(Ps,"$&/")+"/"),ci(i,t,n,"",function(h){return h})):i!=null&&(Mo(i)&&(i=yd(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ps,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ds(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+da(a,s);o+=ci(a,t,n,l,i)}else if(l=vd(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+da(a,s++),o+=ci(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Hr(e,t,n){if(e==null)return e;var r=[],i=0;return ci(e,r,"","",function(a){return t.call(n,a,i++)}),r}function wd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},di={transition:null},xd={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:di,ReactCurrentOwner:Lo};function ql(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Hr,forEach:function(e,t,n){Hr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hr(e,function(){t++}),t},toArray:function(e){return Hr(e,function(t){return t})||[]},only:function(e){if(!Mo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Hn;ie.Fragment=ld;ie.Profiler=cd;ie.PureComponent=zo;ie.StrictMode=ud;ie.Suspense=hd;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xd;ie.act=ql;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kl({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Lo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Zl.call(t,l)&&!Ql.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var h=0;h<l;h++)s[h]=arguments[h+2];r.children=s}return{$$typeof:zr,type:e.type,key:i,ref:a,props:r,_owner:o}};ie.createContext=function(e){return e={$$typeof:fd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dd,_context:e},e.Consumer=e};ie.createElement=Yl;ie.createFactory=function(e){var t=Yl.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:pd,render:e}};ie.isValidElement=Mo;ie.lazy=function(e){return{$$typeof:gd,_payload:{_status:-1,_result:e},_init:wd}};ie.memo=function(e,t){return{$$typeof:md,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=di.transition;di.transition={};try{e()}finally{di.transition=t}};ie.unstable_act=ql;ie.useCallback=function(e,t){return We.current.useCallback(e,t)};ie.useContext=function(e){return We.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return We.current.useDeferredValue(e)};ie.useEffect=function(e,t){return We.current.useEffect(e,t)};ie.useId=function(){return We.current.useId()};ie.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return We.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};ie.useRef=function(e){return We.current.useRef(e)};ie.useState=function(e){return We.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return We.current.useTransition()};ie.version="18.3.1";Hl.exports=ie;var de=Hl.exports;const _d=Bl(de);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd=de,bd=Symbol.for("react.element"),Cd=Symbol.for("react.fragment"),Ed=Object.prototype.hasOwnProperty,Ad=Sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nd={key:!0,ref:!0,__self:!0,__source:!0};function Jl(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ed.call(t,r)&&!Nd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bd,type:e,key:a,ref:o,props:i,_owner:Ad.current}}Zi.Fragment=Cd;Zi.jsx=Jl;Zi.jsxs=Jl;Wl.exports=Zi;var S=Wl.exports,Ma={},Xl={exports:{}},et={},eu={exports:{}},tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(V,L){var Q=V.length;V.push(L);e:for(;0<Q;){var j=Q-1>>>1,D=V[j];if(0<i(D,L))V[j]=L,V[Q]=D,Q=j;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var L=V[0],Q=V.pop();if(Q!==L){V[0]=Q;e:for(var j=0,D=V.length,te=D>>>1;j<te;){var J=2*(j+1)-1,Y=V[J],ue=J+1,ke=V[ue];if(0>i(Y,Q))ue<D&&0>i(ke,Y)?(V[j]=ke,V[ue]=Q,j=ue):(V[j]=Y,V[J]=Q,j=J);else if(ue<D&&0>i(ke,Q))V[j]=ke,V[ue]=Q,j=ue;else break e}}return L}function i(V,L){var Q=V.sortIndex-L.sortIndex;return Q!==0?Q:V.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],h=[],w=1,v=null,y=3,m=!1,k=!1,f=!1,x=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(V){for(var L=n(h);L!==null;){if(L.callback===null)r(h);else if(L.startTime<=V)r(h),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(h)}}function b(V){if(f=!1,g(V),!k)if(n(l)!==null)k=!0,re(E);else{var L=n(h);L!==null&&G(b,L.startTime-V)}}function E(V,L){k=!1,f&&(f=!1,u(z),z=-1),m=!0;var Q=y;try{for(g(L),v=n(l);v!==null&&(!(v.expirationTime>L)||V&&!ee());){var j=v.callback;if(typeof j=="function"){v.callback=null,y=v.priorityLevel;var D=j(v.expirationTime<=L);L=e.unstable_now(),typeof D=="function"?v.callback=D:v===n(l)&&r(l),g(L)}else r(l);v=n(l)}if(v!==null)var te=!0;else{var J=n(h);J!==null&&G(b,J.startTime-L),te=!1}return te}finally{v=null,y=Q,m=!1}}var R=!1,I=null,z=-1,O=5,U=-1;function ee(){return!(e.unstable_now()-U<O)}function A(){if(I!==null){var V=e.unstable_now();U=V;var L=!0;try{L=I(!0,V)}finally{L?F():(R=!1,I=null)}}else R=!1}var F;if(typeof d=="function")F=function(){d(A)};else if(typeof MessageChannel<"u"){var p=new MessageChannel,W=p.port2;p.port1.onmessage=A,F=function(){W.postMessage(null)}}else F=function(){x(A,0)};function re(V){I=V,R||(R=!0,F())}function G(V,L){z=x(function(){V(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_continueExecution=function(){k||m||(k=!0,re(E))},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(V){switch(y){case 1:case 2:case 3:var L=3;break;default:L=y}var Q=y;y=L;try{return V()}finally{y=Q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(V,L){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Q=y;y=V;try{return L()}finally{y=Q}},e.unstable_scheduleCallback=function(V,L,Q){var j=e.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?j+Q:j):Q=j,V){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Q+D,V={id:w++,callback:L,priorityLevel:V,startTime:Q,expirationTime:D,sortIndex:-1},Q>j?(V.sortIndex=Q,t(h,V),n(l)===null&&V===n(h)&&(f?(u(z),z=-1):f=!0,G(b,Q-j))):(V.sortIndex=D,t(l,V),k||m||(k=!0,re(E))),V},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(V){var L=y;return function(){var Q=y;y=L;try{return V.apply(this,arguments)}finally{y=Q}}}})(tu);eu.exports=tu;var Id=eu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=de,Xe=Id;function Z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nu=new Set,yr={};function hn(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(yr[e]=t,e=0;e<t.length;e++)nu.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fa=Object.prototype.hasOwnProperty,Rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,js={},zs={};function Dd(e){return Fa.call(zs,e)?!0:Fa.call(js,e)?!1:Rd.test(e)?zs[e]=!0:(js[e]=!0,!1)}function Pd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jd(e,t,n,r){if(t===null||typeof t>"u"||Pd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fo=/[\-:]([a-z])/g;function Uo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fo,Uo);je[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fo,Uo);je[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fo,Uo);je[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bo(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jd(t,n,i,r)&&(n=null),r||i===null?Dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Dt=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vr=Symbol.for("react.element"),yn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),Wo=Symbol.for("react.strict_mode"),Ua=Symbol.for("react.profiler"),ru=Symbol.for("react.provider"),iu=Symbol.for("react.context"),Ho=Symbol.for("react.forward_ref"),Ba=Symbol.for("react.suspense"),Wa=Symbol.for("react.suspense_list"),Vo=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),au=Symbol.for("react.offscreen"),Os=Symbol.iterator;function Qn(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,fa;function ir(e){if(fa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fa=t&&t[1]||""}return`
`+fa+e}var pa=!1;function ha(e,t){if(!e||pa)return"";pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{pa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ir(e):""}function zd(e){switch(e.tag){case 5:return ir(e.type);case 16:return ir("Lazy");case 13:return ir("Suspense");case 19:return ir("SuspenseList");case 0:case 2:case 15:return e=ha(e.type,!1),e;case 11:return e=ha(e.type.render,!1),e;case 1:return e=ha(e.type,!0),e;default:return""}}function Ha(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case yn:return"Portal";case Ua:return"Profiler";case Wo:return"StrictMode";case Ba:return"Suspense";case Wa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case iu:return(e.displayName||"Context")+".Consumer";case ru:return(e._context.displayName||"Context")+".Provider";case Ho:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vo:return t=e.displayName||null,t!==null?t:Ha(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return Ha(e(t))}catch{}}return null}function Od(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ha(t);case 8:return t===Wo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ou(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ld(e){var t=ou(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){e._valueTracker||(e._valueTracker=Ld(e))}function su(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ou(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Va(e,t){var n=t.checked;return _e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ls(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lu(e,t){t=t.checked,t!=null&&Bo(e,"checked",t,!1)}function Ka(e,t){lu(e,t);var n=Qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ga(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ga(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ms(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ga(e,t,n){(t!=="number"||bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Z(91));return _e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Z(92));if(ar(n)){if(1<n.length)throw Error(Z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qt(n)}}function uu(e,t){var n=Qt(t.value),r=Qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Us(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gr,du=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Md=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Md.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function fu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function pu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fd=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(e,t){if(t){if(Fd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Z(62))}}function Ya(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qa=null;function Ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Rn=null,Dn=null;function Bs(e){if(e=Mr(e)){if(typeof Ja!="function")throw Error(Z(280));var t=e.stateNode;t&&(t=Xi(t),Ja(e.stateNode,e.type,t))}}function hu(e){Rn?Dn?Dn.push(e):Dn=[e]:Rn=e}function mu(){if(Rn){var e=Rn,t=Dn;if(Dn=Rn=null,Bs(e),t)for(e=0;e<t.length;e++)Bs(t[e])}}function gu(e,t){return e(t)}function vu(){}var ma=!1;function yu(e,t,n){if(ma)return e(t,n);ma=!0;try{return gu(e,t,n)}finally{ma=!1,(Rn!==null||Dn!==null)&&(vu(),mu())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Z(231,t,typeof n));return n}var Xa=!1;if(Nt)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){Xa=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{Xa=!1}function Ud(e,t,n,r,i,a,o,s,l){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(w){this.onError(w)}}var cr=!1,Ci=null,Ei=!1,eo=null,Bd={onError:function(e){cr=!0,Ci=e}};function Wd(e,t,n,r,i,a,o,s,l){cr=!1,Ci=null,Ud.apply(Bd,arguments)}function Hd(e,t,n,r,i,a,o,s,l){if(Wd.apply(this,arguments),cr){if(cr){var h=Ci;cr=!1,Ci=null}else throw Error(Z(198));Ei||(Ei=!0,eo=h)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ku(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ws(e){if(mn(e)!==e)throw Error(Z(188))}function Vd(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Ws(i),e;if(a===r)return Ws(i),t;a=a.sibling}throw Error(Z(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(Z(189))}}if(n.alternate!==r)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?e:t}function wu(e){return e=Vd(e),e!==null?xu(e):null}function xu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xu(e);if(t!==null)return t;e=e.sibling}return null}var _u=Xe.unstable_scheduleCallback,Hs=Xe.unstable_cancelCallback,Kd=Xe.unstable_shouldYield,Gd=Xe.unstable_requestPaint,Ce=Xe.unstable_now,$d=Xe.unstable_getCurrentPriorityLevel,Go=Xe.unstable_ImmediatePriority,Su=Xe.unstable_UserBlockingPriority,Ai=Xe.unstable_NormalPriority,Zd=Xe.unstable_LowPriority,bu=Xe.unstable_IdlePriority,Qi=null,wt=null;function Qd(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Qi,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Jd,Yd=Math.log,qd=Math.LN2;function Jd(e){return e>>>=0,e===0?32:31-(Yd(e)/qd|0)|0}var $r=64,Zr=4194304;function or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=or(s):(a&=o,a!==0&&(r=or(a)))}else o=n&~i,o!==0?r=or(o):a!==0&&(r=or(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Xd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ef(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-pt(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=Xd(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function to(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cu(){var e=$r;return $r<<=1,!($r&4194240)&&($r=64),e}function ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function tf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function $o(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var fe=0;function Eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Au,Zo,Nu,Iu,Tu,no=!1,Qr=[],Bt=null,Wt=null,Ht=null,xr=new Map,_r=new Map,Lt=[],nf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vs(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function qn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Mr(t),t!==null&&Zo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rf(e,t,n,r,i){switch(t){case"focusin":return Bt=qn(Bt,e,t,n,r,i),!0;case"dragenter":return Wt=qn(Wt,e,t,n,r,i),!0;case"mouseover":return Ht=qn(Ht,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return xr.set(a,qn(xr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,_r.set(a,qn(_r.get(a)||null,e,t,n,r,i)),!0}return!1}function Ru(e){var t=rn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=ku(n),t!==null){e.blockedOn=t,Tu(e.priority,function(){Nu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ro(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qa=r,n.target.dispatchEvent(r),qa=null}else return t=Mr(n),t!==null&&Zo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ks(e,t,n){fi(e)&&n.delete(t)}function af(){no=!1,Bt!==null&&fi(Bt)&&(Bt=null),Wt!==null&&fi(Wt)&&(Wt=null),Ht!==null&&fi(Ht)&&(Ht=null),xr.forEach(Ks),_r.forEach(Ks)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,no||(no=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,af)))}function Sr(e){function t(i){return Jn(i,e)}if(0<Qr.length){Jn(Qr[0],e);for(var n=1;n<Qr.length;n++){var r=Qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&Jn(Bt,e),Wt!==null&&Jn(Wt,e),Ht!==null&&Jn(Ht,e),xr.forEach(t),_r.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)Ru(n),n.blockedOn===null&&Lt.shift()}var Pn=Dt.ReactCurrentBatchConfig,Ii=!0;function of(e,t,n,r){var i=fe,a=Pn.transition;Pn.transition=null;try{fe=1,Qo(e,t,n,r)}finally{fe=i,Pn.transition=a}}function sf(e,t,n,r){var i=fe,a=Pn.transition;Pn.transition=null;try{fe=4,Qo(e,t,n,r)}finally{fe=i,Pn.transition=a}}function Qo(e,t,n,r){if(Ii){var i=ro(e,t,n,r);if(i===null)Ea(e,t,r,Ti,n),Vs(e,r);else if(rf(i,e,t,n,r))r.stopPropagation();else if(Vs(e,r),t&4&&-1<nf.indexOf(e)){for(;i!==null;){var a=Mr(i);if(a!==null&&Au(a),a=ro(e,t,n,r),a===null&&Ea(e,t,r,Ti,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ea(e,t,r,null,n)}}var Ti=null;function ro(e,t,n,r){if(Ti=null,e=Ko(r),e=rn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ku(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ti=e,null}function Du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($d()){case Go:return 1;case Su:return 4;case Ai:case Zd:return 16;case bu:return 536870912;default:return 16}default:return 16}}var Ft=null,Yo=null,pi=null;function Pu(){if(pi)return pi;var e,t=Yo,n=t.length,r,i="value"in Ft?Ft.value:Ft.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return pi=i.slice(e,1<r?1-r:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function Gs(){return!1}function tt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Yr:Gs,this.isPropagationStopped=Gs,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=tt(Vn),Lr=_e({},Vn,{view:0,detail:0}),lf=tt(Lr),va,ya,Xn,Yi=_e({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(va=e.screenX-Xn.screenX,ya=e.screenY-Xn.screenY):ya=va=0,Xn=e),va)},movementY:function(e){return"movementY"in e?e.movementY:ya}}),$s=tt(Yi),uf=_e({},Yi,{dataTransfer:0}),cf=tt(uf),df=_e({},Lr,{relatedTarget:0}),ka=tt(df),ff=_e({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),pf=tt(ff),hf=_e({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mf=tt(hf),gf=_e({},Vn,{data:0}),Zs=tt(gf),vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kf[e])?!!t[e]:!1}function Jo(){return wf}var xf=_e({},Lr,{key:function(e){if(e.key){var t=vf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jo,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_f=tt(xf),Sf=_e({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qs=tt(Sf),bf=_e({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jo}),Cf=tt(bf),Ef=_e({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Af=tt(Ef),Nf=_e({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),If=tt(Nf),Tf=[9,13,27,32],Xo=Nt&&"CompositionEvent"in window,dr=null;Nt&&"documentMode"in document&&(dr=document.documentMode);var Rf=Nt&&"TextEvent"in window&&!dr,ju=Nt&&(!Xo||dr&&8<dr&&11>=dr),Ys=String.fromCharCode(32),qs=!1;function zu(e,t){switch(e){case"keyup":return Tf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ou(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function Df(e,t){switch(e){case"compositionend":return Ou(t);case"keypress":return t.which!==32?null:(qs=!0,Ys);case"textInput":return e=t.data,e===Ys&&qs?null:e;default:return null}}function Pf(e,t){if(wn)return e==="compositionend"||!Xo&&zu(e,t)?(e=Pu(),pi=Yo=Ft=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ju&&t.locale!=="ko"?null:t.data;default:return null}}var jf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jf[e.type]:t==="textarea"}function Lu(e,t,n,r){hu(r),t=Ri(t,"onChange"),0<t.length&&(n=new qo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,br=null;function zf(e){Zu(e,0)}function qi(e){var t=Sn(e);if(su(t))return e}function Of(e,t){if(e==="change")return t}var Mu=!1;if(Nt){var wa;if(Nt){var xa="oninput"in document;if(!xa){var Xs=document.createElement("div");Xs.setAttribute("oninput","return;"),xa=typeof Xs.oninput=="function"}wa=xa}else wa=!1;Mu=wa&&(!document.documentMode||9<document.documentMode)}function el(){fr&&(fr.detachEvent("onpropertychange",Fu),br=fr=null)}function Fu(e){if(e.propertyName==="value"&&qi(br)){var t=[];Lu(t,br,e,Ko(e)),yu(zf,t)}}function Lf(e,t,n){e==="focusin"?(el(),fr=t,br=n,fr.attachEvent("onpropertychange",Fu)):e==="focusout"&&el()}function Mf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(br)}function Ff(e,t){if(e==="click")return qi(t)}function Uf(e,t){if(e==="input"||e==="change")return qi(t)}function Bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Bf;function Cr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fa.call(t,i)||!mt(e[i],t[i]))return!1}return!0}function tl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nl(e,t){var n=tl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tl(n)}}function Uu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bu(){for(var e=window,t=bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=bi(e.document)}return t}function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wf(e){var t=Bu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uu(n.ownerDocument.documentElement,n)){if(r!==null&&es(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=nl(n,a);var o=nl(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hf=Nt&&"documentMode"in document&&11>=document.documentMode,xn=null,io=null,pr=null,ao=!1;function rl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ao||xn==null||xn!==bi(r)||(r=xn,"selectionStart"in r&&es(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&Cr(pr,r)||(pr=r,r=Ri(io,"onSelect"),0<r.length&&(t=new qo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xn)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},_a={},Wu={};Nt&&(Wu=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function Ji(e){if(_a[e])return _a[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wu)return _a[e]=t[n];return e}var Hu=Ji("animationend"),Vu=Ji("animationiteration"),Ku=Ji("animationstart"),Gu=Ji("transitionend"),$u=new Map,il="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){$u.set(e,t),hn(t,[e])}for(var Sa=0;Sa<il.length;Sa++){var ba=il[Sa],Vf=ba.toLowerCase(),Kf=ba[0].toUpperCase()+ba.slice(1);qt(Vf,"on"+Kf)}qt(Hu,"onAnimationEnd");qt(Vu,"onAnimationIteration");qt(Ku,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(Gu,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function al(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hd(r,t,void 0,e),e.currentTarget=null}function Zu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,h=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;al(i,s,h),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,h=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;al(i,s,h),a=l}}}if(Ei)throw e=eo,Ei=!1,eo=null,e}function me(e,t){var n=t[co];n===void 0&&(n=t[co]=new Set);var r=e+"__bubble";n.has(r)||(Qu(t,e,2,!1),n.add(r))}function Ca(e,t,n){var r=0;t&&(r|=4),Qu(n,e,r,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[Jr]){e[Jr]=!0,nu.forEach(function(n){n!=="selectionchange"&&(Gf.has(n)||Ca(n,!1,e),Ca(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,Ca("selectionchange",!1,t))}}function Qu(e,t,n,r){switch(Du(t)){case 1:var i=of;break;case 4:i=sf;break;default:i=Qo}n=i.bind(null,t,n,e),i=void 0,!Xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ea(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=rn(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}yu(function(){var h=a,w=Ko(n),v=[];e:{var y=$u.get(e);if(y!==void 0){var m=qo,k=e;switch(e){case"keypress":if(hi(n)===0)break e;case"keydown":case"keyup":m=_f;break;case"focusin":k="focus",m=ka;break;case"focusout":k="blur",m=ka;break;case"beforeblur":case"afterblur":m=ka;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Cf;break;case Hu:case Vu:case Ku:m=pf;break;case Gu:m=Af;break;case"scroll":m=lf;break;case"wheel":m=If;break;case"copy":case"cut":case"paste":m=mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qs}var f=(t&4)!==0,x=!f&&e==="scroll",u=f?y!==null?y+"Capture":null:y;f=[];for(var d=h,g;d!==null;){g=d;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,u!==null&&(b=wr(d,u),b!=null&&f.push(Ar(d,b,g)))),x)break;d=d.return}0<f.length&&(y=new m(y,k,null,n,w),v.push({event:y,listeners:f}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",y&&n!==qa&&(k=n.relatedTarget||n.fromElement)&&(rn(k)||k[It]))break e;if((m||y)&&(y=w.window===w?w:(y=w.ownerDocument)?y.defaultView||y.parentWindow:window,m?(k=n.relatedTarget||n.toElement,m=h,k=k?rn(k):null,k!==null&&(x=mn(k),k!==x||k.tag!==5&&k.tag!==6)&&(k=null)):(m=null,k=h),m!==k)){if(f=$s,b="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(f=Qs,b="onPointerLeave",u="onPointerEnter",d="pointer"),x=m==null?y:Sn(m),g=k==null?y:Sn(k),y=new f(b,d+"leave",m,n,w),y.target=x,y.relatedTarget=g,b=null,rn(w)===h&&(f=new f(u,d+"enter",k,n,w),f.target=g,f.relatedTarget=x,b=f),x=b,m&&k)t:{for(f=m,u=k,d=0,g=f;g;g=gn(g))d++;for(g=0,b=u;b;b=gn(b))g++;for(;0<d-g;)f=gn(f),d--;for(;0<g-d;)u=gn(u),g--;for(;d--;){if(f===u||u!==null&&f===u.alternate)break t;f=gn(f),u=gn(u)}f=null}else f=null;m!==null&&ol(v,y,m,f,!1),k!==null&&x!==null&&ol(v,x,k,f,!0)}}e:{if(y=h?Sn(h):window,m=y.nodeName&&y.nodeName.toLowerCase(),m==="select"||m==="input"&&y.type==="file")var E=Of;else if(Js(y))if(Mu)E=Uf;else{E=Mf;var R=Lf}else(m=y.nodeName)&&m.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=Ff);if(E&&(E=E(e,h))){Lu(v,E,n,w);break e}R&&R(e,y,h),e==="focusout"&&(R=y._wrapperState)&&R.controlled&&y.type==="number"&&Ga(y,"number",y.value)}switch(R=h?Sn(h):window,e){case"focusin":(Js(R)||R.contentEditable==="true")&&(xn=R,io=h,pr=null);break;case"focusout":pr=io=xn=null;break;case"mousedown":ao=!0;break;case"contextmenu":case"mouseup":case"dragend":ao=!1,rl(v,n,w);break;case"selectionchange":if(Hf)break;case"keydown":case"keyup":rl(v,n,w)}var I;if(Xo)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else wn?zu(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(ju&&n.locale!=="ko"&&(wn||z!=="onCompositionStart"?z==="onCompositionEnd"&&wn&&(I=Pu()):(Ft=w,Yo="value"in Ft?Ft.value:Ft.textContent,wn=!0)),R=Ri(h,z),0<R.length&&(z=new Zs(z,e,null,n,w),v.push({event:z,listeners:R}),I?z.data=I:(I=Ou(n),I!==null&&(z.data=I)))),(I=Rf?Df(e,n):Pf(e,n))&&(h=Ri(h,"onBeforeInput"),0<h.length&&(w=new Zs("onBeforeInput","beforeinput",null,n,w),v.push({event:w,listeners:h}),w.data=I))}Zu(v,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=wr(e,n),a!=null&&r.unshift(Ar(e,a,i)),a=wr(e,t),a!=null&&r.push(Ar(e,a,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ol(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,h=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&h!==null&&(s=h,i?(l=wr(n,a),l!=null&&o.unshift(Ar(n,l,s))):i||(l=wr(n,a),l!=null&&o.push(Ar(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var $f=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function sl(e){return(typeof e=="string"?e:""+e).replace($f,`
`).replace(Zf,"")}function Xr(e,t,n){if(t=sl(t),sl(e)!==t&&n)throw Error(Z(425))}function Di(){}var oo=null,so=null;function lo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uo=typeof setTimeout=="function"?setTimeout:void 0,Qf=typeof clearTimeout=="function"?clearTimeout:void 0,ll=typeof Promise=="function"?Promise:void 0,Yf=typeof queueMicrotask=="function"?queueMicrotask:typeof ll<"u"?function(e){return ll.resolve(null).then(e).catch(qf)}:uo;function qf(e){setTimeout(function(){throw e})}function Aa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Sr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ul(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),kt="__reactFiber$"+Kn,Nr="__reactProps$"+Kn,It="__reactContainer$"+Kn,co="__reactEvents$"+Kn,Jf="__reactListeners$"+Kn,Xf="__reactHandles$"+Kn;function rn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ul(e);e!==null;){if(n=e[kt])return n;e=ul(e)}return t}e=n,n=e.parentNode}return null}function Mr(e){return e=e[kt]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Z(33))}function Xi(e){return e[Nr]||null}var fo=[],bn=-1;function Jt(e){return{current:e}}function ge(e){0>bn||(e.current=fo[bn],fo[bn]=null,bn--)}function he(e,t){bn++,fo[bn]=e.current,e.current=t}var Yt={},Me=Jt(Yt),Ge=Jt(!1),un=Yt;function Ln(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function Pi(){ge(Ge),ge(Me)}function cl(e,t,n){if(Me.current!==Yt)throw Error(Z(168));he(Me,t),he(Ge,n)}function Yu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Z(108,Od(e)||"Unknown",i));return _e({},n,r)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,un=Me.current,he(Me,e),he(Ge,Ge.current),!0}function dl(e,t,n){var r=e.stateNode;if(!r)throw Error(Z(169));n?(e=Yu(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,ge(Ge),ge(Me),he(Me,e)):ge(Ge),he(Ge,n)}var bt=null,ea=!1,Na=!1;function qu(e){bt===null?bt=[e]:bt.push(e)}function ep(e){ea=!0,qu(e)}function Xt(){if(!Na&&bt!==null){Na=!0;var e=0,t=fe;try{var n=bt;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,ea=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),_u(Go,Xt),i}finally{fe=t,Na=!1}}return null}var Cn=[],En=0,zi=null,Oi=0,rt=[],it=0,cn=null,Ct=1,Et="";function en(e,t){Cn[En++]=Oi,Cn[En++]=zi,zi=e,Oi=t}function Ju(e,t,n){rt[it++]=Ct,rt[it++]=Et,rt[it++]=cn,cn=e;var r=Ct;e=Et;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var a=32-pt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ct=1<<32-pt(t)+i|n<<i|r,Et=a+e}else Ct=1<<a|n<<i|r,Et=e}function ts(e){e.return!==null&&(en(e,1),Ju(e,1,0))}function ns(e){for(;e===zi;)zi=Cn[--En],Cn[En]=null,Oi=Cn[--En],Cn[En]=null;for(;e===cn;)cn=rt[--it],rt[it]=null,Et=rt[--it],rt[it]=null,Ct=rt[--it],rt[it]=null}var Je=null,qe=null,ye=!1,ft=null;function Xu(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,qe=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:Ct,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,qe=null,!0):!1;default:return!1}}function po(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ho(e){if(ye){var t=qe;if(t){var n=t;if(!fl(e,t)){if(po(e))throw Error(Z(418));t=Vt(n.nextSibling);var r=Je;t&&fl(e,t)?Xu(r,n):(e.flags=e.flags&-4097|2,ye=!1,Je=e)}}else{if(po(e))throw Error(Z(418));e.flags=e.flags&-4097|2,ye=!1,Je=e}}}function pl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function ei(e){if(e!==Je)return!1;if(!ye)return pl(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!lo(e.type,e.memoizedProps)),t&&(t=qe)){if(po(e))throw ec(),Error(Z(418));for(;t;)Xu(e,t),t=Vt(t.nextSibling)}if(pl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Je?Vt(e.stateNode.nextSibling):null;return!0}function ec(){for(var e=qe;e;)e=Vt(e.nextSibling)}function Mn(){qe=Je=null,ye=!1}function rs(e){ft===null?ft=[e]:ft.push(e)}var tp=Dt.ReactCurrentBatchConfig;function er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var r=n.stateNode}if(!r)throw Error(Z(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,e))}return e}function ti(e,t){throw e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hl(e){var t=e._init;return t(e._payload)}function tc(e){function t(u,d){if(e){var g=u.deletions;g===null?(u.deletions=[d],u.flags|=16):g.push(d)}}function n(u,d){if(!e)return null;for(;d!==null;)t(u,d),d=d.sibling;return null}function r(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function i(u,d){return u=Zt(u,d),u.index=0,u.sibling=null,u}function a(u,d,g){return u.index=g,e?(g=u.alternate,g!==null?(g=g.index,g<d?(u.flags|=2,d):g):(u.flags|=2,d)):(u.flags|=1048576,d)}function o(u){return e&&u.alternate===null&&(u.flags|=2),u}function s(u,d,g,b){return d===null||d.tag!==6?(d=za(g,u.mode,b),d.return=u,d):(d=i(d,g),d.return=u,d)}function l(u,d,g,b){var E=g.type;return E===kn?w(u,d,g.props.children,b,g.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===zt&&hl(E)===d.type)?(b=i(d,g.props),b.ref=er(u,d,g),b.return=u,b):(b=xi(g.type,g.key,g.props,null,u.mode,b),b.ref=er(u,d,g),b.return=u,b)}function h(u,d,g,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Oa(g,u.mode,b),d.return=u,d):(d=i(d,g.children||[]),d.return=u,d)}function w(u,d,g,b,E){return d===null||d.tag!==7?(d=ln(g,u.mode,b,E),d.return=u,d):(d=i(d,g),d.return=u,d)}function v(u,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=za(""+d,u.mode,g),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Vr:return g=xi(d.type,d.key,d.props,null,u.mode,g),g.ref=er(u,null,d),g.return=u,g;case yn:return d=Oa(d,u.mode,g),d.return=u,d;case zt:var b=d._init;return v(u,b(d._payload),g)}if(ar(d)||Qn(d))return d=ln(d,u.mode,g,null),d.return=u,d;ti(u,d)}return null}function y(u,d,g,b){var E=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:s(u,d,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vr:return g.key===E?l(u,d,g,b):null;case yn:return g.key===E?h(u,d,g,b):null;case zt:return E=g._init,y(u,d,E(g._payload),b)}if(ar(g)||Qn(g))return E!==null?null:w(u,d,g,b,null);ti(u,g)}return null}function m(u,d,g,b,E){if(typeof b=="string"&&b!==""||typeof b=="number")return u=u.get(g)||null,s(d,u,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Vr:return u=u.get(b.key===null?g:b.key)||null,l(d,u,b,E);case yn:return u=u.get(b.key===null?g:b.key)||null,h(d,u,b,E);case zt:var R=b._init;return m(u,d,g,R(b._payload),E)}if(ar(b)||Qn(b))return u=u.get(g)||null,w(d,u,b,E,null);ti(d,b)}return null}function k(u,d,g,b){for(var E=null,R=null,I=d,z=d=0,O=null;I!==null&&z<g.length;z++){I.index>z?(O=I,I=null):O=I.sibling;var U=y(u,I,g[z],b);if(U===null){I===null&&(I=O);break}e&&I&&U.alternate===null&&t(u,I),d=a(U,d,z),R===null?E=U:R.sibling=U,R=U,I=O}if(z===g.length)return n(u,I),ye&&en(u,z),E;if(I===null){for(;z<g.length;z++)I=v(u,g[z],b),I!==null&&(d=a(I,d,z),R===null?E=I:R.sibling=I,R=I);return ye&&en(u,z),E}for(I=r(u,I);z<g.length;z++)O=m(I,u,z,g[z],b),O!==null&&(e&&O.alternate!==null&&I.delete(O.key===null?z:O.key),d=a(O,d,z),R===null?E=O:R.sibling=O,R=O);return e&&I.forEach(function(ee){return t(u,ee)}),ye&&en(u,z),E}function f(u,d,g,b){var E=Qn(g);if(typeof E!="function")throw Error(Z(150));if(g=E.call(g),g==null)throw Error(Z(151));for(var R=E=null,I=d,z=d=0,O=null,U=g.next();I!==null&&!U.done;z++,U=g.next()){I.index>z?(O=I,I=null):O=I.sibling;var ee=y(u,I,U.value,b);if(ee===null){I===null&&(I=O);break}e&&I&&ee.alternate===null&&t(u,I),d=a(ee,d,z),R===null?E=ee:R.sibling=ee,R=ee,I=O}if(U.done)return n(u,I),ye&&en(u,z),E;if(I===null){for(;!U.done;z++,U=g.next())U=v(u,U.value,b),U!==null&&(d=a(U,d,z),R===null?E=U:R.sibling=U,R=U);return ye&&en(u,z),E}for(I=r(u,I);!U.done;z++,U=g.next())U=m(I,u,z,U.value,b),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?z:U.key),d=a(U,d,z),R===null?E=U:R.sibling=U,R=U);return e&&I.forEach(function(A){return t(u,A)}),ye&&en(u,z),E}function x(u,d,g,b){if(typeof g=="object"&&g!==null&&g.type===kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Vr:e:{for(var E=g.key,R=d;R!==null;){if(R.key===E){if(E=g.type,E===kn){if(R.tag===7){n(u,R.sibling),d=i(R,g.props.children),d.return=u,u=d;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===zt&&hl(E)===R.type){n(u,R.sibling),d=i(R,g.props),d.ref=er(u,R,g),d.return=u,u=d;break e}n(u,R);break}else t(u,R);R=R.sibling}g.type===kn?(d=ln(g.props.children,u.mode,b,g.key),d.return=u,u=d):(b=xi(g.type,g.key,g.props,null,u.mode,b),b.ref=er(u,d,g),b.return=u,u=b)}return o(u);case yn:e:{for(R=g.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(u,d.sibling),d=i(d,g.children||[]),d.return=u,u=d;break e}else{n(u,d);break}else t(u,d);d=d.sibling}d=Oa(g,u.mode,b),d.return=u,u=d}return o(u);case zt:return R=g._init,x(u,d,R(g._payload),b)}if(ar(g))return k(u,d,g,b);if(Qn(g))return f(u,d,g,b);ti(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(u,d.sibling),d=i(d,g),d.return=u,u=d):(n(u,d),d=za(g,u.mode,b),d.return=u,u=d),o(u)):n(u,d)}return x}var Fn=tc(!0),nc=tc(!1),Li=Jt(null),Mi=null,An=null,is=null;function as(){is=An=Mi=null}function os(e){var t=Li.current;ge(Li),e._currentValue=t}function mo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){Mi=e,is=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(is!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Mi===null)throw Error(Z(308));An=e,Mi.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var an=null;function ss(e){an===null?an=[e]:an.push(e)}function rc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ss(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ic(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tt(e,n)}return i=r.interleaved,i===null?(t.next=t,ss(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tt(e,n)}function mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$o(e,n)}}function ml(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fi(e,t,n,r){var i=e.updateQueue;Ot=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,h=l.next;l.next=null,o===null?a=h:o.next=h,o=l;var w=e.alternate;w!==null&&(w=w.updateQueue,s=w.lastBaseUpdate,s!==o&&(s===null?w.firstBaseUpdate=h:s.next=h,w.lastBaseUpdate=l))}if(a!==null){var v=i.baseState;o=0,w=h=l=null,s=a;do{var y=s.lane,m=s.eventTime;if((r&y)===y){w!==null&&(w=w.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,f=s;switch(y=t,m=n,f.tag){case 1:if(k=f.payload,typeof k=="function"){v=k.call(m,v,y);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=f.payload,y=typeof k=="function"?k.call(m,v,y):k,y==null)break e;v=_e({},v,y);break e;case 2:Ot=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=i.effects,y===null?i.effects=[s]:y.push(s))}else m={eventTime:m,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},w===null?(h=w=m,l=v):w=w.next=m,o|=y;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;y=s,s=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(1);if(w===null&&(l=v),i.baseState=l,i.firstBaseUpdate=h,i.lastBaseUpdate=w,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);fn|=o,e.lanes=o,e.memoizedState=v}}function gl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Z(191,i));i.call(r)}}}var Fr={},xt=Jt(Fr),Ir=Jt(Fr),Tr=Jt(Fr);function on(e){if(e===Fr)throw Error(Z(174));return e}function us(e,t){switch(he(Tr,t),he(Ir,e),he(xt,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Za(t,e)}ge(xt),he(xt,t)}function Un(){ge(xt),ge(Ir),ge(Tr)}function ac(e){on(Tr.current);var t=on(xt.current),n=Za(t,e.type);t!==n&&(he(Ir,e),he(xt,n))}function cs(e){Ir.current===e&&(ge(xt),ge(Ir))}var we=Jt(0);function Ui(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ia=[];function ds(){for(var e=0;e<Ia.length;e++)Ia[e]._workInProgressVersionPrimary=null;Ia.length=0}var gi=Dt.ReactCurrentDispatcher,Ta=Dt.ReactCurrentBatchConfig,dn=0,xe=null,Ne=null,Te=null,Bi=!1,hr=!1,Rr=0,np=0;function ze(){throw Error(Z(321))}function fs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function ps(e,t,n,r,i,a){if(dn=a,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,gi.current=e===null||e.memoizedState===null?op:sp,e=n(r,i),hr){a=0;do{if(hr=!1,Rr=0,25<=a)throw Error(Z(301));a+=1,Te=Ne=null,t.updateQueue=null,gi.current=lp,e=n(r,i)}while(hr)}if(gi.current=Wi,t=Ne!==null&&Ne.next!==null,dn=0,Te=Ne=xe=null,Bi=!1,t)throw Error(Z(300));return e}function hs(){var e=Rr!==0;return Rr=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?xe.memoizedState=Te=e:Te=Te.next=e,Te}function lt(){if(Ne===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Te===null?xe.memoizedState:Te.next;if(t!==null)Te=t,Ne=e;else{if(e===null)throw Error(Z(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Te===null?xe.memoizedState=Te=e:Te=Te.next=e}return Te}function Dr(e,t){return typeof t=="function"?t(e):t}function Ra(e){var t=lt(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,h=a;do{var w=h.lane;if((dn&w)===w)l!==null&&(l=l.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var v={lane:w,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};l===null?(s=l=v,o=r):l=l.next=v,xe.lanes|=w,fn|=w}h=h.next}while(h!==null&&h!==a);l===null?o=r:l.next=s,mt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,xe.lanes|=a,fn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Da(e){var t=lt(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);mt(a,t.memoizedState)||(Ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function oc(){}function sc(e,t){var n=xe,r=lt(),i=t(),a=!mt(r.memoizedState,i);if(a&&(r.memoizedState=i,Ke=!0),r=r.queue,ms(cc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Pr(9,uc.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(Z(349));dn&30||lc(n,t,i)}return i}function lc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uc(e,t,n,r){t.value=n,t.getSnapshot=r,dc(t)&&fc(e)}function cc(e,t,n){return n(function(){dc(t)&&fc(e)})}function dc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function fc(e){var t=Tt(e,1);t!==null&&ht(t,e,1,-1)}function vl(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},t.queue=e,e=e.dispatch=ap.bind(null,xe,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function pc(){return lt().memoizedState}function vi(e,t,n,r){var i=yt();xe.flags|=e,i.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function ta(e,t,n,r){var i=lt();r=r===void 0?null:r;var a=void 0;if(Ne!==null){var o=Ne.memoizedState;if(a=o.destroy,r!==null&&fs(r,o.deps)){i.memoizedState=Pr(t,n,a,r);return}}xe.flags|=e,i.memoizedState=Pr(1|t,n,a,r)}function yl(e,t){return vi(8390656,8,e,t)}function ms(e,t){return ta(2048,8,e,t)}function hc(e,t){return ta(4,2,e,t)}function mc(e,t){return ta(4,4,e,t)}function gc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vc(e,t,n){return n=n!=null?n.concat([e]):null,ta(4,4,gc.bind(null,t,e),n)}function gs(){}function yc(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kc(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wc(e,t,n){return dn&21?(mt(n,t)||(n=Cu(),xe.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function rp(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=Ta.transition;Ta.transition={};try{e(!1),t()}finally{fe=n,Ta.transition=r}}function xc(){return lt().memoizedState}function ip(e,t,n){var r=$t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_c(e))Sc(t,n);else if(n=rc(e,t,n,r),n!==null){var i=Be();ht(n,e,r,i),bc(n,t,r)}}function ap(e,t,n){var r=$t(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_c(e))Sc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,mt(s,o)){var l=t.interleaved;l===null?(i.next=i,ss(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=rc(e,t,i,r),n!==null&&(i=Be(),ht(n,e,r,i),bc(n,t,r))}}function _c(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Sc(e,t){hr=Bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$o(e,n)}}var Wi={readContext:st,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},op={readContext:st,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:yl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vi(4194308,4,gc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return vi(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ip.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:vl,useDebugValue:gs,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=vl(!1),t=e[0];return e=rp.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,i=yt();if(ye){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=t(),Re===null)throw Error(Z(349));dn&30||lc(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,yl(cc.bind(null,r,a,e),[e]),r.flags|=2048,Pr(9,uc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=yt(),t=Re.identifierPrefix;if(ye){var n=Et,r=Ct;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=np++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sp={readContext:st,useCallback:yc,useContext:st,useEffect:ms,useImperativeHandle:vc,useInsertionEffect:hc,useLayoutEffect:mc,useMemo:kc,useReducer:Ra,useRef:pc,useState:function(){return Ra(Dr)},useDebugValue:gs,useDeferredValue:function(e){var t=lt();return wc(t,Ne.memoizedState,e)},useTransition:function(){var e=Ra(Dr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:oc,useSyncExternalStore:sc,useId:xc,unstable_isNewReconciler:!1},lp={readContext:st,useCallback:yc,useContext:st,useEffect:ms,useImperativeHandle:vc,useInsertionEffect:hc,useLayoutEffect:mc,useMemo:kc,useReducer:Da,useRef:pc,useState:function(){return Da(Dr)},useDebugValue:gs,useDeferredValue:function(e){var t=lt();return Ne===null?t.memoizedState=e:wc(t,Ne.memoizedState,e)},useTransition:function(){var e=Da(Dr)[0],t=lt().memoizedState;return[e,t]},useMutableSource:oc,useSyncExternalStore:sc,useId:xc,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=_e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function go(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var na={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),i=$t(e),a=At(r,i);a.payload=t,n!=null&&(a.callback=n),t=Kt(e,a,i),t!==null&&(ht(t,e,i,r),mi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),i=$t(e),a=At(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Kt(e,a,i),t!==null&&(ht(t,e,i,r),mi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=$t(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kt(e,i,r),t!==null&&(ht(t,e,r,n),mi(t,e,r))}};function kl(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(i,a):!0}function Cc(e,t,n){var r=!1,i=Yt,a=t.contextType;return typeof a=="object"&&a!==null?a=st(a):(i=$e(t)?un:Me.current,r=t.contextTypes,a=(r=r!=null)?Ln(e,i):Yt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=na,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function wl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&na.enqueueReplaceState(t,t.state,null)}function vo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ls(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=st(a):(a=$e(t)?un:Me.current,i.context=Ln(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(go(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&na.enqueueReplaceState(i,i.state,null),Fi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",r=t;do n+=zd(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Pa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var up=typeof WeakMap=="function"?WeakMap:Map;function Ec(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vi||(Vi=!0,No=r),yo(e,t)},n}function Ac(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yo(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){yo(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function xl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new up;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sp.bind(null,e,t,n),t.then(e,e))}function _l(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var cp=Dt.ReactCurrentOwner,Ke=!1;function Ue(e,t,n,r){t.child=e===null?nc(t,null,n,r):Fn(t,e.child,n,r)}function bl(e,t,n,r,i){n=n.render;var a=t.ref;return jn(t,i),r=ps(e,t,n,r,a,i),n=hs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(ye&&n&&ts(t),t.flags|=1,Ue(e,t,r,i),t.child)}function Cl(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!bs(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Nc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(o,r)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=Zt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Nc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Cr(a,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return ko(e,t,n,r,i)}function Ic(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(In,Ye),Ye|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(In,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,he(In,Ye),Ye|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,he(In,Ye),Ye|=r;return Ue(e,t,i,n),t.child}function Tc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ko(e,t,n,r,i){var a=$e(n)?un:Me.current;return a=Ln(t,a),jn(t,i),n=ps(e,t,n,r,a,i),r=hs(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(ye&&r&&ts(t),t.flags|=1,Ue(e,t,n,i),t.child)}function El(e,t,n,r,i){if($e(n)){var a=!0;ji(t)}else a=!1;if(jn(t,i),t.stateNode===null)yi(e,t),Cc(t,n,r),vo(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=st(h):(h=$e(n)?un:Me.current,h=Ln(t,h));var w=n.getDerivedStateFromProps,v=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==h)&&wl(t,o,r,h),Ot=!1;var y=t.memoizedState;o.state=y,Fi(t,r,o,i),l=t.memoizedState,s!==r||y!==l||Ge.current||Ot?(typeof w=="function"&&(go(t,n,w,r),l=t.memoizedState),(s=Ot||kl(t,n,s,r,y,l,h))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=h,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ic(e,t),s=t.memoizedProps,h=t.type===t.elementType?s:ct(t.type,s),o.props=h,v=t.pendingProps,y=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=st(l):(l=$e(n)?un:Me.current,l=Ln(t,l));var m=n.getDerivedStateFromProps;(w=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==v||y!==l)&&wl(t,o,r,l),Ot=!1,y=t.memoizedState,o.state=y,Fi(t,r,o,i);var k=t.memoizedState;s!==v||y!==k||Ge.current||Ot?(typeof m=="function"&&(go(t,n,m,r),k=t.memoizedState),(h=Ot||kl(t,n,h,r,y,k,l)||!1)?(w||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),o.props=r,o.state=k,o.context=l,r=h):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return wo(e,t,n,r,a,i)}function wo(e,t,n,r,i,a){Tc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&dl(t,n,!1),Rt(e,t,a);r=t.stateNode,cp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fn(t,e.child,null,a),t.child=Fn(t,null,s,a)):Ue(e,t,s,a),t.memoizedState=r.state,i&&dl(t,n,!0),t.child}function Rc(e){var t=e.stateNode;t.pendingContext?cl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cl(e,t.context,!1),us(e,t.containerInfo)}function Al(e,t,n,r,i){return Mn(),rs(i),t.flags|=256,Ue(e,t,n,r),t.child}var xo={dehydrated:null,treeContext:null,retryLane:0};function _o(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dc(e,t,n){var r=t.pendingProps,i=we.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(we,i&1),e===null)return ho(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=aa(o,r,0,null),e=ln(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=_o(n),t.memoizedState=xo,e):vs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return dp(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Zt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Zt(s,a):(a=ln(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?_o(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=xo,r}return a=e.child,e=a.sibling,r=Zt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vs(e,t){return t=aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ni(e,t,n,r){return r!==null&&rs(r),Fn(t,e.child,null,n),e=vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dp(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Pa(Error(Z(422))),ni(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=aa({mode:"visible",children:r.children},i,0,null),a=ln(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Fn(t,e.child,null,o),t.child.memoizedState=_o(o),t.memoizedState=xo,a);if(!(t.mode&1))return ni(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(Z(419)),r=Pa(a,r,void 0),ni(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ke||s){if(r=Re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Tt(e,i),ht(r,e,i,-1))}return Ss(),r=Pa(Error(Z(421))),ni(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bp.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,qe=Vt(i.nextSibling),Je=t,ye=!0,ft=null,e!==null&&(rt[it++]=Ct,rt[it++]=Et,rt[it++]=cn,Ct=e.id,Et=e.overflow,cn=t),t=vs(t,r.children),t.flags|=4096,t)}function Nl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),mo(e.return,t,n)}function ja(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Pc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ue(e,t,r.children,n),r=we.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nl(e,n,t);else if(e.tag===19)Nl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(we,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ui(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ja(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ui(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ja(t,!0,n,null,a);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fp(e,t,n){switch(t.tag){case 3:Rc(t),Mn();break;case 5:ac(t);break;case 1:$e(t.type)&&ji(t);break;case 4:us(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(Li,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(we,we.current&1),t.flags|=128,null):n&t.child.childLanes?Dc(e,t,n):(he(we,we.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);he(we,we.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(we,we.current),r)break;return null;case 22:case 23:return t.lanes=0,Ic(e,t,n)}return Rt(e,t,n)}var jc,So,zc,Oc;jc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};So=function(){};zc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,on(xt.current);var a=null;switch(n){case"input":i=Va(e,i),r=Va(e,r),a=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),a=[];break;case"textarea":i=$a(e,i),r=$a(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Di)}Qa(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var s=i[h];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(yr.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in r){var l=r[h];if(s=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&l!==s&&(l!=null||s!=null))if(h==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(h,n)),n=l;else h==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(h,l)):h==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(h,""+l):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(yr.hasOwnProperty(h)?(l!=null&&h==="onScroll"&&me("scroll",e),a||s===l||(a=[])):(a=a||[]).push(h,l))}n&&(a=a||[]).push("style",n);var h=a;(t.updateQueue=h)&&(t.flags|=4)}};Oc=function(e,t,n,r){n!==r&&(t.flags|=4)};function tr(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function pp(e,t,n){var r=t.pendingProps;switch(ns(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return $e(t.type)&&Pi(),Oe(t),null;case 3:return r=t.stateNode,Un(),ge(Ge),ge(Me),ds(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Ro(ft),ft=null))),So(e,t),Oe(t),null;case 5:cs(t);var i=on(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)zc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Z(166));return Oe(t),null}if(e=on(xt.current),ei(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[kt]=t,r[Nr]=a,e=(t.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<sr.length;i++)me(sr[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Ls(r,a),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},me("invalid",r);break;case"textarea":Fs(r,a),me("invalid",r)}Qa(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Xr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Xr(r.textContent,s,e),i=["children",""+s]):yr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Kr(r),Ms(r,a,!0);break;case"textarea":Kr(r),Us(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Di)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[kt]=t,e[Nr]=r,jc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ya(n,r),n){case"dialog":me("cancel",e),me("close",e),i=r;break;case"iframe":case"object":case"embed":me("load",e),i=r;break;case"video":case"audio":for(i=0;i<sr.length;i++)me(sr[i],e);i=r;break;case"source":me("error",e),i=r;break;case"img":case"image":case"link":me("error",e),me("load",e),i=r;break;case"details":me("toggle",e),i=r;break;case"input":Ls(e,r),i=Va(e,r),me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),me("invalid",e);break;case"textarea":Fs(e,r),i=$a(e,r),me("invalid",e);break;default:i=r}Qa(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?pu(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&du(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&kr(e,l):typeof l=="number"&&kr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(yr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&me("scroll",e):l!=null&&Bo(e,a,l,o))}switch(n){case"input":Kr(e),Ms(e,r,!1);break;case"textarea":Kr(e),Us(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Tn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Oc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Z(166));if(n=on(Tr.current),on(xt.current),ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(a=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:Xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Oe(t),null;case 13:if(ge(we),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&qe!==null&&t.mode&1&&!(t.flags&128))ec(),Mn(),t.flags|=98560,a=!1;else if(a=ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(Z(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Z(317));a[kt]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),a=!1}else ft!==null&&(Ro(ft),ft=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||we.current&1?Ie===0&&(Ie=3):Ss())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Un(),So(e,t),e===null&&Er(t.stateNode.containerInfo),Oe(t),null;case 10:return os(t.type._context),Oe(t),null;case 17:return $e(t.type)&&Pi(),Oe(t),null;case 19:if(ge(we),a=t.memoizedState,a===null)return Oe(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)tr(a,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ui(e),o!==null){for(t.flags|=128,tr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(we,we.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ce()>Wn&&(t.flags|=128,r=!0,tr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ui(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),tr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ye)return Oe(t),null}else 2*Ce()-a.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,tr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ce(),t.sibling=null,n=we.current,he(we,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return _s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(Z(156,t.tag))}function hp(e,t){switch(ns(t),t.tag){case 1:return $e(t.type)&&Pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),ge(Ge),ge(Me),ds(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cs(t),null;case 13:if(ge(we),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(we),null;case 4:return Un(),null;case 10:return os(t.type._context),null;case 22:case 23:return _s(),null;case 24:return null;default:return null}}var ri=!1,Le=!1,mp=typeof WeakSet=="function"?WeakSet:Set,X=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function bo(e,t,n){try{n()}catch(r){Se(e,t,r)}}var Il=!1;function gp(e,t){if(oo=Ii,e=Bu(),es(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,h=0,w=0,v=e,y=null;t:for(;;){for(var m;v!==n||i!==0&&v.nodeType!==3||(s=o+i),v!==a||r!==0&&v.nodeType!==3||(l=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(m=v.firstChild)!==null;)y=v,v=m;for(;;){if(v===e)break t;if(y===n&&++h===i&&(s=o),y===a&&++w===r&&(l=o),(m=v.nextSibling)!==null)break;v=y,y=v.parentNode}v=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(so={focusedElem:e,selectionRange:n},Ii=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var f=k.memoizedProps,x=k.memoizedState,u=t.stateNode,d=u.getSnapshotBeforeUpdate(t.elementType===t.type?f:ct(t.type,f),x);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(b){Se(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return k=Il,Il=!1,k}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&bo(t,n,a)}i=i.next}while(i!==r)}}function ra(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Co(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lc(e){var t=e.alternate;t!==null&&(e.alternate=null,Lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[Nr],delete t[co],delete t[Jf],delete t[Xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mc(e){return e.tag===5||e.tag===3||e.tag===4}function Tl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Eo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Eo(e,t,n),e=e.sibling;e!==null;)Eo(e,t,n),e=e.sibling}function Ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ao(e,t,n),e=e.sibling;e!==null;)Ao(e,t,n),e=e.sibling}var De=null,dt=!1;function Pt(e,t,n){for(n=n.child;n!==null;)Fc(e,t,n),n=n.sibling}function Fc(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Qi,n)}catch{}switch(n.tag){case 5:Le||Nn(n,t);case 6:var r=De,i=dt;De=null,Pt(e,t,n),De=r,dt=i,De!==null&&(dt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(dt?(e=De,n=n.stateNode,e.nodeType===8?Aa(e.parentNode,n):e.nodeType===1&&Aa(e,n),Sr(e)):Aa(De,n.stateNode));break;case 4:r=De,i=dt,De=n.stateNode.containerInfo,dt=!0,Pt(e,t,n),De=r,dt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&bo(n,t,o),i=i.next}while(i!==r)}Pt(e,t,n);break;case 1:if(!Le&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Se(n,t,s)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Pt(e,t,n),Le=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function Rl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mp),t.forEach(function(r){var i=Cp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:De=s.stateNode,dt=!1;break e;case 3:De=s.stateNode.containerInfo,dt=!0;break e;case 4:De=s.stateNode.containerInfo,dt=!0;break e}s=s.return}if(De===null)throw Error(Z(160));Fc(a,o,i),De=null,dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(h){Se(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uc(t,e),t=t.sibling}function Uc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),vt(e),r&4){try{mr(3,e,e.return),ra(3,e)}catch(f){Se(e,e.return,f)}try{mr(5,e,e.return)}catch(f){Se(e,e.return,f)}}break;case 1:ut(t,e),vt(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(ut(t,e),vt(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{kr(i,"")}catch(f){Se(e,e.return,f)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&lu(i,a),Ya(s,o);var h=Ya(s,a);for(o=0;o<l.length;o+=2){var w=l[o],v=l[o+1];w==="style"?pu(i,v):w==="dangerouslySetInnerHTML"?du(i,v):w==="children"?kr(i,v):Bo(i,w,v,h)}switch(s){case"input":Ka(i,a);break;case"textarea":uu(i,a);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?Tn(i,!!a.multiple,m,!1):y!==!!a.multiple&&(a.defaultValue!=null?Tn(i,!!a.multiple,a.defaultValue,!0):Tn(i,!!a.multiple,a.multiple?[]:"",!1))}i[Nr]=a}catch(f){Se(e,e.return,f)}}break;case 6:if(ut(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(Z(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(f){Se(e,e.return,f)}}break;case 3:if(ut(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(f){Se(e,e.return,f)}break;case 4:ut(t,e),vt(e);break;case 13:ut(t,e),vt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ws=Ce())),r&4&&Rl(e);break;case 22:if(w=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(h=Le)||w,ut(t,e),Le=h):ut(t,e),vt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!w&&e.mode&1)for(X=e,w=e.child;w!==null;){for(v=X=w;X!==null;){switch(y=X,m=y.child,y.tag){case 0:case 11:case 14:case 15:mr(4,y,y.return);break;case 1:Nn(y,y.return);var k=y.stateNode;if(typeof k.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(f){Se(r,n,f)}}break;case 5:Nn(y,y.return);break;case 22:if(y.memoizedState!==null){Pl(v);continue}}m!==null?(m.return=y,X=m):Pl(v)}w=w.sibling}e:for(w=null,v=e;;){if(v.tag===5){if(w===null){w=v;try{i=v.stateNode,h?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=v.stateNode,l=v.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=fu("display",o))}catch(f){Se(e,e.return,f)}}}else if(v.tag===6){if(w===null)try{v.stateNode.nodeValue=h?"":v.memoizedProps}catch(f){Se(e,e.return,f)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;w===v&&(w=null),v=v.return}w===v&&(w=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ut(t,e),vt(e),r&4&&Rl(e);break;case 21:break;default:ut(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mc(n)){var r=n;break e}n=n.return}throw Error(Z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kr(i,""),r.flags&=-33);var a=Tl(e);Ao(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Tl(e);Eo(e,s,o);break;default:throw Error(Z(161))}}catch(l){Se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vp(e,t,n){X=e,Bc(e)}function Bc(e,t,n){for(var r=(e.mode&1)!==0;X!==null;){var i=X,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ri;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Le;s=ri;var h=Le;if(ri=o,(Le=l)&&!h)for(X=i;X!==null;)o=X,l=o.child,o.tag===22&&o.memoizedState!==null?jl(i):l!==null?(l.return=o,X=l):jl(i);for(;a!==null;)X=a,Bc(a),a=a.sibling;X=i,ri=s,Le=h}Dl(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,X=a):Dl(e)}}function Dl(e){for(;X!==null;){var t=X;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||ra(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&gl(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gl(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var w=h.memoizedState;if(w!==null){var v=w.dehydrated;v!==null&&Sr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Le||t.flags&512&&Co(t)}catch(y){Se(t,t.return,y)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function Pl(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function jl(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ra(4,t)}catch(l){Se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Se(t,i,l)}}var a=t.return;try{Co(t)}catch(l){Se(t,a,l)}break;case 5:var o=t.return;try{Co(t)}catch(l){Se(t,o,l)}}}catch(l){Se(t,t.return,l)}if(t===e){X=null;break}var s=t.sibling;if(s!==null){s.return=t.return,X=s;break}X=t.return}}var yp=Math.ceil,Hi=Dt.ReactCurrentDispatcher,ys=Dt.ReactCurrentOwner,ot=Dt.ReactCurrentBatchConfig,se=0,Re=null,Ae=null,Pe=0,Ye=0,In=Jt(0),Ie=0,jr=null,fn=0,ia=0,ks=0,gr=null,Ve=null,ws=0,Wn=1/0,St=null,Vi=!1,No=null,Gt=null,ii=!1,Ut=null,Ki=0,vr=0,Io=null,ki=-1,wi=0;function Be(){return se&6?Ce():ki!==-1?ki:ki=Ce()}function $t(e){return e.mode&1?se&2&&Pe!==0?Pe&-Pe:tp.transition!==null?(wi===0&&(wi=Cu()),wi):(e=fe,e!==0||(e=window.event,e=e===void 0?16:Du(e.type)),e):1}function ht(e,t,n,r){if(50<vr)throw vr=0,Io=null,Error(Z(185));Or(e,n,r),(!(se&2)||e!==Re)&&(e===Re&&(!(se&2)&&(ia|=n),Ie===4&&Mt(e,Pe)),Ze(e,r),n===1&&se===0&&!(t.mode&1)&&(Wn=Ce()+500,ea&&Xt()))}function Ze(e,t){var n=e.callbackNode;ef(e,t);var r=Ni(e,e===Re?Pe:0);if(r===0)n!==null&&Hs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hs(n),t===1)e.tag===0?ep(zl.bind(null,e)):qu(zl.bind(null,e)),Yf(function(){!(se&6)&&Xt()}),n=null;else{switch(Eu(r)){case 1:n=Go;break;case 4:n=Su;break;case 16:n=Ai;break;case 536870912:n=bu;break;default:n=Ai}n=Qc(n,Wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wc(e,t){if(ki=-1,wi=0,se&6)throw Error(Z(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=Ni(e,e===Re?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Gi(e,r);else{t=r;var i=se;se|=2;var a=Vc();(Re!==e||Pe!==t)&&(St=null,Wn=Ce()+500,sn(e,t));do try{xp();break}catch(s){Hc(e,s)}while(1);as(),Hi.current=a,se=i,Ae!==null?t=0:(Re=null,Pe=0,t=Ie)}if(t!==0){if(t===2&&(i=to(e),i!==0&&(r=i,t=To(e,i))),t===1)throw n=jr,sn(e,0),Mt(e,r),Ze(e,Ce()),n;if(t===6)Mt(e,r);else{if(i=e.current.alternate,!(r&30)&&!kp(i)&&(t=Gi(e,r),t===2&&(a=to(e),a!==0&&(r=a,t=To(e,a))),t===1))throw n=jr,sn(e,0),Mt(e,r),Ze(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Z(345));case 2:tn(e,Ve,St);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=ws+500-Ce(),10<t)){if(Ni(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=uo(tn.bind(null,e,Ve,St),t);break}tn(e,Ve,St);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-pt(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yp(r/1960))-r,10<r){e.timeoutHandle=uo(tn.bind(null,e,Ve,St),r);break}tn(e,Ve,St);break;case 5:tn(e,Ve,St);break;default:throw Error(Z(329))}}}return Ze(e,Ce()),e.callbackNode===n?Wc.bind(null,e):null}function To(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=Gi(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&Ro(t)),e}function Ro(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function kp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!mt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~ks,t&=~ia,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function zl(e){if(se&6)throw Error(Z(327));zn();var t=Ni(e,0);if(!(t&1))return Ze(e,Ce()),null;var n=Gi(e,t);if(e.tag!==0&&n===2){var r=to(e);r!==0&&(t=r,n=To(e,r))}if(n===1)throw n=jr,sn(e,0),Mt(e,t),Ze(e,Ce()),n;if(n===6)throw Error(Z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Ve,St),Ze(e,Ce()),null}function xs(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Wn=Ce()+500,ea&&Xt())}}function pn(e){Ut!==null&&Ut.tag===0&&!(se&6)&&zn();var t=se;se|=1;var n=ot.transition,r=fe;try{if(ot.transition=null,fe=1,e)return e()}finally{fe=r,ot.transition=n,se=t,!(se&6)&&Xt()}}function _s(){Ye=In.current,ge(In)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qf(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(ns(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pi();break;case 3:Un(),ge(Ge),ge(Me),ds();break;case 5:cs(r);break;case 4:Un();break;case 13:ge(we);break;case 19:ge(we);break;case 10:os(r.type._context);break;case 22:case 23:_s()}n=n.return}if(Re=e,Ae=e=Zt(e.current,null),Pe=Ye=t,Ie=0,jr=null,ks=ia=fn=0,Ve=gr=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}an=null}return e}function Hc(e,t){do{var n=Ae;try{if(as(),gi.current=Wi,Bi){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bi=!1}if(dn=0,Te=Ne=xe=null,hr=!1,Rr=0,ys.current=null,n===null||n.return===null){Ie=1,jr=t,Ae=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=Pe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=l,w=s,v=w.tag;if(!(w.mode&1)&&(v===0||v===11||v===15)){var y=w.alternate;y?(w.updateQueue=y.updateQueue,w.memoizedState=y.memoizedState,w.lanes=y.lanes):(w.updateQueue=null,w.memoizedState=null)}var m=_l(o);if(m!==null){m.flags&=-257,Sl(m,o,s,a,t),m.mode&1&&xl(a,h,t),t=m,l=h;var k=t.updateQueue;if(k===null){var f=new Set;f.add(l),t.updateQueue=f}else k.add(l);break e}else{if(!(t&1)){xl(a,h,t),Ss();break e}l=Error(Z(426))}}else if(ye&&s.mode&1){var x=_l(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Sl(x,o,s,a,t),rs(Bn(l,s));break e}}a=l=Bn(l,s),Ie!==4&&(Ie=2),gr===null?gr=[a]:gr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var u=Ec(a,l,t);ml(a,u);break e;case 1:s=l;var d=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Gt===null||!Gt.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var b=Ac(a,s,t);ml(a,b);break e}}a=a.return}while(a!==null)}Gc(n)}catch(E){t=E,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function Vc(){var e=Hi.current;return Hi.current=Wi,e===null?Wi:e}function Ss(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Re===null||!(fn&268435455)&&!(ia&268435455)||Mt(Re,Pe)}function Gi(e,t){var n=se;se|=2;var r=Vc();(Re!==e||Pe!==t)&&(St=null,sn(e,t));do try{wp();break}catch(i){Hc(e,i)}while(1);if(as(),se=n,Hi.current=r,Ae!==null)throw Error(Z(261));return Re=null,Pe=0,Ie}function wp(){for(;Ae!==null;)Kc(Ae)}function xp(){for(;Ae!==null&&!Kd();)Kc(Ae)}function Kc(e){var t=Zc(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?Gc(e):Ae=t,ys.current=null}function Gc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hp(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Ae=null;return}}else if(n=pp(n,t,Ye),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ie===0&&(Ie=5)}function tn(e,t,n){var r=fe,i=ot.transition;try{ot.transition=null,fe=1,_p(e,t,n,r)}finally{ot.transition=i,fe=r}return null}function _p(e,t,n,r){do zn();while(Ut!==null);if(se&6)throw Error(Z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Z(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(tf(e,a),e===Re&&(Ae=Re=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ii||(ii=!0,Qc(Ai,function(){return zn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=ot.transition,ot.transition=null;var o=fe;fe=1;var s=se;se|=4,ys.current=null,gp(e,n),Uc(n,e),Wf(so),Ii=!!oo,so=oo=null,e.current=n,vp(n),Gd(),se=s,fe=o,ot.transition=a}else e.current=n;if(ii&&(ii=!1,Ut=e,Ki=i),a=e.pendingLanes,a===0&&(Gt=null),Qd(n.stateNode),Ze(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vi)throw Vi=!1,e=No,No=null,e;return Ki&1&&e.tag!==0&&zn(),a=e.pendingLanes,a&1?e===Io?vr++:(vr=0,Io=e):vr=0,Xt(),null}function zn(){if(Ut!==null){var e=Eu(Ki),t=ot.transition,n=fe;try{if(ot.transition=null,fe=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,Ki=0,se&6)throw Error(Z(331));var i=se;for(se|=4,X=e.current;X!==null;){var a=X,o=a.child;if(X.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var h=s[l];for(X=h;X!==null;){var w=X;switch(w.tag){case 0:case 11:case 15:mr(8,w,a)}var v=w.child;if(v!==null)v.return=w,X=v;else for(;X!==null;){w=X;var y=w.sibling,m=w.return;if(Lc(w),w===h){X=null;break}if(y!==null){y.return=m,X=y;break}X=m}}}var k=a.alternate;if(k!==null){var f=k.child;if(f!==null){k.child=null;do{var x=f.sibling;f.sibling=null,f=x}while(f!==null)}}X=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,X=o;else e:for(;X!==null;){if(a=X,a.flags&2048)switch(a.tag){case 0:case 11:case 15:mr(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,X=u;break e}X=a.return}}var d=e.current;for(X=d;X!==null;){o=X;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,X=g;else e:for(o=d;X!==null;){if(s=X,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ra(9,s)}}catch(E){Se(s,s.return,E)}if(s===o){X=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,X=b;break e}X=s.return}}if(se=i,Xt(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Qi,e)}catch{}r=!0}return r}finally{fe=n,ot.transition=t}}return!1}function Ol(e,t,n){t=Bn(n,t),t=Ec(e,t,1),e=Kt(e,t,1),t=Be(),e!==null&&(Or(e,1,t),Ze(e,t))}function Se(e,t,n){if(e.tag===3)Ol(e,e,n);else for(;t!==null;){if(t.tag===3){Ol(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=Bn(n,e),e=Ac(t,e,1),t=Kt(t,e,1),e=Be(),t!==null&&(Or(t,1,e),Ze(t,e));break}}t=t.return}}function Sp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Pe&n)===n&&(Ie===4||Ie===3&&(Pe&130023424)===Pe&&500>Ce()-ws?sn(e,0):ks|=n),Ze(e,t)}function $c(e,t){t===0&&(e.mode&1?(t=Zr,Zr<<=1,!(Zr&130023424)&&(Zr=4194304)):t=1);var n=Be();e=Tt(e,t),e!==null&&(Or(e,t,n),Ze(e,n))}function bp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$c(e,n)}function Cp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Z(314))}r!==null&&r.delete(t),$c(e,n)}var Zc;Zc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,fp(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,ye&&t.flags&1048576&&Ju(t,Oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yi(e,t),e=t.pendingProps;var i=Ln(t,Me.current);jn(t,n),i=ps(null,t,r,e,i,n);var a=hs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(a=!0,ji(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ls(t),i.updater=na,t.stateNode=i,i._reactInternals=t,vo(t,r,e,n),t=wo(null,t,r,!0,a,n)):(t.tag=0,ye&&a&&ts(t),Ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ap(r),e=ct(r,e),i){case 0:t=ko(null,t,r,e,n);break e;case 1:t=El(null,t,r,e,n);break e;case 11:t=bl(null,t,r,e,n);break e;case 14:t=Cl(null,t,r,ct(r.type,e),n);break e}throw Error(Z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),ko(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),El(e,t,r,i,n);case 3:e:{if(Rc(t),e===null)throw Error(Z(387));r=t.pendingProps,a=t.memoizedState,i=a.element,ic(e,t),Fi(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Bn(Error(Z(423)),t),t=Al(e,t,r,n,i);break e}else if(r!==i){i=Bn(Error(Z(424)),t),t=Al(e,t,r,n,i);break e}else for(qe=Vt(t.stateNode.containerInfo.firstChild),Je=t,ye=!0,ft=null,n=nc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===i){t=Rt(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return ac(t),e===null&&ho(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,lo(r,i)?o=null:a!==null&&lo(r,a)&&(t.flags|=32),Tc(e,t),Ue(e,t,o,n),t.child;case 6:return e===null&&ho(t),null;case 13:return Dc(e,t,n);case 4:return us(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),bl(e,t,r,i,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,he(Li,r._currentValue),r._currentValue=o,a!==null)if(mt(a.value,o)){if(a.children===i.children&&!Ge.current){t=Rt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=At(-1,n&-n),l.tag=2;var h=a.updateQueue;if(h!==null){h=h.shared;var w=h.pending;w===null?l.next=l:(l.next=w.next,w.next=l),h.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),mo(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(Z(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),mo(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,jn(t,n),i=st(i),r=r(i),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),Cl(e,t,r,i,n);case 15:return Nc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),yi(e,t),t.tag=1,$e(r)?(e=!0,ji(t)):e=!1,jn(t,n),Cc(t,r,i),vo(t,r,i,n),wo(null,t,r,!0,e,n);case 19:return Pc(e,t,n);case 22:return Ic(e,t,n)}throw Error(Z(156,t.tag))};function Qc(e,t){return _u(e,t)}function Ep(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new Ep(e,t,n,r)}function bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ap(e){if(typeof e=="function")return bs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ho)return 11;if(e===Vo)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xi(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")bs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case kn:return ln(n.children,i,a,t);case Wo:o=8,i|=8;break;case Ua:return e=at(12,n,t,i|2),e.elementType=Ua,e.lanes=a,e;case Ba:return e=at(13,n,t,i),e.elementType=Ba,e.lanes=a,e;case Wa:return e=at(19,n,t,i),e.elementType=Wa,e.lanes=a,e;case au:return aa(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ru:o=10;break e;case iu:o=9;break e;case Ho:o=11;break e;case Vo:o=14;break e;case zt:o=16,r=null;break e}throw Error(Z(130,e==null?e:typeof e,""))}return t=at(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function ln(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function aa(e,t,n,r){return e=at(22,e,r,t),e.elementType=au,e.lanes=n,e.stateNode={isHidden:!1},e}function za(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Oa(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Np(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cs(e,t,n,r,i,a,o,s,l){return e=new Np(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=at(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ls(a),e}function Ip(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yc(e){if(!e)return Yt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(Z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Z(171))}if(e.tag===1){var n=e.type;if($e(n))return Yu(e,n,t)}return t}function qc(e,t,n,r,i,a,o,s,l){return e=Cs(n,r,!0,e,i,a,o,s,l),e.context=Yc(null),n=e.current,r=Be(),i=$t(n),a=At(r,i),a.callback=t??null,Kt(n,a,i),e.current.lanes=i,Or(e,i,r),Ze(e,r),e}function oa(e,t,n,r){var i=t.current,a=Be(),o=$t(i);return n=Yc(n),t.context===null?t.context=n:t.pendingContext=n,t=At(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(i,t,o),e!==null&&(ht(e,i,o,a),mi(e,i,o)),o}function $i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ll(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Es(e,t){Ll(e,t),(e=e.alternate)&&Ll(e,t)}function Tp(){return null}var Jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function As(e){this._internalRoot=e}sa.prototype.render=As.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));oa(e,t,null,null)};sa.prototype.unmount=As.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){oa(null,e,null,null)}),t[It]=null}};function sa(e){this._internalRoot=e}sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&Ru(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function la(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ml(){}function Rp(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var h=$i(o);a.call(h)}}var o=qc(t,r,e,0,null,!1,!1,"",Ml);return e._reactRootContainer=o,e[It]=o.current,Er(e.nodeType===8?e.parentNode:e),pn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var h=$i(l);s.call(h)}}var l=Cs(e,0,!1,null,null,!1,!1,"",Ml);return e._reactRootContainer=l,e[It]=l.current,Er(e.nodeType===8?e.parentNode:e),pn(function(){oa(t,l,n,r)}),l}function ua(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=$i(o);s.call(l)}}oa(t,o,e,i)}else o=Rp(n,t,e,i,r);return $i(o)}Au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=or(t.pendingLanes);n!==0&&($o(t,n|1),Ze(t,Ce()),!(se&6)&&(Wn=Ce()+500,Xt()))}break;case 13:pn(function(){var r=Tt(e,1);if(r!==null){var i=Be();ht(r,e,1,i)}}),Es(e,1)}};Zo=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Be();ht(t,e,134217728,n)}Es(e,134217728)}};Nu=function(e){if(e.tag===13){var t=$t(e),n=Tt(e,t);if(n!==null){var r=Be();ht(n,e,t,r)}Es(e,t)}};Iu=function(){return fe};Tu=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}};Ja=function(e,t,n){switch(t){case"input":if(Ka(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xi(r);if(!i)throw Error(Z(90));su(r),Ka(r,i)}}}break;case"textarea":uu(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};gu=xs;vu=pn;var Dp={usingClientEntryPoint:!1,Events:[Mr,Sn,Xi,hu,mu,xs]},nr={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pp={bundleType:nr.bundleType,version:nr.version,rendererPackageName:nr.rendererPackageName,rendererConfig:nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wu(e),e===null?null:e.stateNode},findFiberByHostInstance:nr.findFiberByHostInstance||Tp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{Qi=ai.inject(Pp),wt=ai}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dp;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(Z(200));return Ip(e,t,null,n)};et.createRoot=function(e,t){if(!Ns(e))throw Error(Z(299));var n=!1,r="",i=Jc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cs(e,1,!1,null,null,n,!1,r,i),e[It]=t.current,Er(e.nodeType===8?e.parentNode:e),new As(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=wu(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return pn(e)};et.hydrate=function(e,t,n){if(!la(t))throw Error(Z(200));return ua(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(Z(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Jc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=qc(t,null,e,1,n??null,i,!1,a,o),e[It]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new sa(t)};et.render=function(e,t,n){if(!la(t))throw Error(Z(200));return ua(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!la(e))throw Error(Z(40));return e._reactRootContainer?(pn(function(){ua(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};et.unstable_batchedUpdates=xs;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!la(n))throw Error(Z(200));if(e==null||e._reactInternals===void 0)throw Error(Z(38));return ua(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function Xc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc)}catch(e){console.error(e)}}Xc(),Xl.exports=et;var jp=Xl.exports,Fl=jp;Ma.createRoot=Fl.createRoot,Ma.hydrateRoot=Fl.hydrateRoot;var zp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Op=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lp=(e,t)=>{const n=de.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:o,children:s,...l},h)=>de.createElement("svg",{ref:h,...zp,width:i,height:i,stroke:r,strokeWidth:o?Number(a)*24/Number(i):a,className:`lucide lucide-${Op(e)}`,...l},[...t.map(([w,v])=>de.createElement(w,v)),...(Array.isArray(s)?s:[s])||[]]));return n.displayName=`${e}`,n};var ce=Lp;const Mp=ce("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Fp=ce("Archive",[["rect",{width:"20",height:"5",x:"2",y:"4",rx:"2",key:"uhwcea"}],["path",{d:"M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9",key:"shkvi4"}],["path",{d:"M10 13h4",key:"ytezjc"}]]),_i=ce("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Do=ce("Box",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),Up=ce("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),Bp=ce("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Wp=ce("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),La=ce("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]),jt=ce("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]),Hp=ce("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]),Po=ce("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Ul=ce("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),Vp=ce("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]),nn=ce("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),lr=ce("Layers",[["polygon",{points:"12 2 2 7 12 12 22 7 12 2",key:"1b0ttc"}],["polyline",{points:"2 17 12 22 22 17",key:"imjtdl"}],["polyline",{points:"2 12 12 17 22 12",key:"5dexcv"}]]),Kp=ce("Layout",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"9",x2:"9",y1:"21",y2:"9",key:"wpwpyp"}]]),Gp=ce("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]),$p=ce("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Zp=ce("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),oi=ce("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),Qp=ce("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),Yp=ce("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),ed=ce("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]),td=ce("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),jo=ce("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),qp=ce("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),Jp=ce("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),si=ce("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Si=ce("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),nd=ce("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]),li=ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ui(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var rd={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(e,t){(function(n){e.exports=n()})(function(){return function n(r,i,a){function o(h,w){if(!i[h]){if(!r[h]){var v=typeof ui=="function"&&ui;if(!w&&v)return v(h,!0);if(s)return s(h,!0);var y=new Error("Cannot find module '"+h+"'");throw y.code="MODULE_NOT_FOUND",y}var m=i[h]={exports:{}};r[h][0].call(m.exports,function(k){var f=r[h][1][k];return o(f||k)},m,m.exports,n,r,i,a)}return i[h].exports}for(var s=typeof ui=="function"&&ui,l=0;l<a.length;l++)o(a[l]);return o}({1:[function(n,r,i){var a=n("./utils"),o=n("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var h,w,v,y,m,k,f,x=[],u=0,d=l.length,g=d,b=a.getTypeOf(l)!=="string";u<l.length;)g=d-u,v=b?(h=l[u++],w=u<d?l[u++]:0,u<d?l[u++]:0):(h=l.charCodeAt(u++),w=u<d?l.charCodeAt(u++):0,u<d?l.charCodeAt(u++):0),y=h>>2,m=(3&h)<<4|w>>4,k=1<g?(15&w)<<2|v>>6:64,f=2<g?63&v:64,x.push(s.charAt(y)+s.charAt(m)+s.charAt(k)+s.charAt(f));return x.join("")},i.decode=function(l){var h,w,v,y,m,k,f=0,x=0,u="data:";if(l.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var d,g=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===s.charAt(64)&&g--,l.charAt(l.length-2)===s.charAt(64)&&g--,g%1!=0)throw new Error("Invalid base64 input, bad content length.");for(d=o.uint8array?new Uint8Array(0|g):new Array(0|g);f<l.length;)h=s.indexOf(l.charAt(f++))<<2|(y=s.indexOf(l.charAt(f++)))>>4,w=(15&y)<<4|(m=s.indexOf(l.charAt(f++)))>>2,v=(3&m)<<6|(k=s.indexOf(l.charAt(f++))),d[x++]=h,m!==64&&(d[x++]=w),k!==64&&(d[x++]=v);return d}},{"./support":30,"./utils":32}],2:[function(n,r,i){var a=n("./external"),o=n("./stream/DataWorker"),s=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function h(w,v,y,m,k){this.compressedSize=w,this.uncompressedSize=v,this.crc32=y,this.compression=m,this.compressedContent=k}h.prototype={getContentWorker:function(){var w=new o(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),v=this;return w.on("end",function(){if(this.streamInfo.data_length!==v.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),w},getCompressedWorker:function(){return new o(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},h.createWorkerFrom=function(w,v,y){return w.pipe(new s).pipe(new l("uncompressedSize")).pipe(v.compressWorker(y)).pipe(new l("compressedSize")).withStreamInfo("compression",v)},r.exports=h},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var a=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new a("STORE compression")},uncompressWorker:function(){return new a("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var a=n("./utils"),o=function(){for(var s,l=[],h=0;h<256;h++){s=h;for(var w=0;w<8;w++)s=1&s?3988292384^s>>>1:s>>>1;l[h]=s}return l}();r.exports=function(s,l){return s!==void 0&&s.length?a.getTypeOf(s)!=="string"?function(h,w,v,y){var m=o,k=y+v;h^=-1;for(var f=y;f<k;f++)h=h>>>8^m[255&(h^w[f])];return-1^h}(0|l,s,s.length,0):function(h,w,v,y){var m=o,k=y+v;h^=-1;for(var f=y;f<k;f++)h=h>>>8^m[255&(h^w.charCodeAt(f))];return-1^h}(0|l,s,s.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var a=null;a=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:a}},{lie:37}],7:[function(n,r,i){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=n("pako"),s=n("./utils"),l=n("./stream/GenericWorker"),h=a?"uint8array":"array";function w(v,y){l.call(this,"FlateWorker/"+v),this._pako=null,this._pakoAction=v,this._pakoOptions=y,this.meta={}}i.magic="\b\0",s.inherits(w,l),w.prototype.processChunk=function(v){this.meta=v.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(h,v.data),!1)},w.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},w.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},w.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var v=this;this._pako.onData=function(y){v.push({data:y,meta:v.meta})}},i.compressWorker=function(v){return new w("Deflate",v)},i.uncompressWorker=function(){return new w("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function a(m,k){var f,x="";for(f=0;f<k;f++)x+=String.fromCharCode(255&m),m>>>=8;return x}function o(m,k,f,x,u,d){var g,b,E=m.file,R=m.compression,I=d!==h.utf8encode,z=s.transformTo("string",d(E.name)),O=s.transformTo("string",h.utf8encode(E.name)),U=E.comment,ee=s.transformTo("string",d(U)),A=s.transformTo("string",h.utf8encode(U)),F=O.length!==E.name.length,p=A.length!==U.length,W="",re="",G="",V=E.dir,L=E.date,Q={crc32:0,compressedSize:0,uncompressedSize:0};k&&!f||(Q.crc32=m.crc32,Q.compressedSize=m.compressedSize,Q.uncompressedSize=m.uncompressedSize);var j=0;k&&(j|=8),I||!F&&!p||(j|=2048);var D=0,te=0;V&&(D|=16),u==="UNIX"?(te=798,D|=function(Y,ue){var ke=Y;return Y||(ke=ue?16893:33204),(65535&ke)<<16}(E.unixPermissions,V)):(te=20,D|=function(Y){return 63&(Y||0)}(E.dosPermissions)),g=L.getUTCHours(),g<<=6,g|=L.getUTCMinutes(),g<<=5,g|=L.getUTCSeconds()/2,b=L.getUTCFullYear()-1980,b<<=4,b|=L.getUTCMonth()+1,b<<=5,b|=L.getUTCDate(),F&&(re=a(1,1)+a(w(z),4)+O,W+="up"+a(re.length,2)+re),p&&(G=a(1,1)+a(w(ee),4)+A,W+="uc"+a(G.length,2)+G);var J="";return J+=`
\0`,J+=a(j,2),J+=R.magic,J+=a(g,2),J+=a(b,2),J+=a(Q.crc32,4),J+=a(Q.compressedSize,4),J+=a(Q.uncompressedSize,4),J+=a(z.length,2),J+=a(W.length,2),{fileRecord:v.LOCAL_FILE_HEADER+J+z+W,dirRecord:v.CENTRAL_FILE_HEADER+a(te,2)+J+a(ee.length,2)+"\0\0\0\0"+a(D,4)+a(x,4)+z+W+ee}}var s=n("../utils"),l=n("../stream/GenericWorker"),h=n("../utf8"),w=n("../crc32"),v=n("../signature");function y(m,k,f,x){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=k,this.zipPlatform=f,this.encodeFileName=x,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(y,l),y.prototype.push=function(m){var k=m.meta.percent||0,f=this.entriesCount,x=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,l.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:f?(k+100*(f-x-1))/f:100}}))},y.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var k=this.streamFiles&&!m.file.dir;if(k){var f=o(m,k,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:f.fileRecord,meta:{percent:0}})}else this.accumulate=!0},y.prototype.closedSource=function(m){this.accumulate=!1;var k=this.streamFiles&&!m.file.dir,f=o(m,k,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(f.dirRecord),k)this.push({data:function(x){return v.DATA_DESCRIPTOR+a(x.crc32,4)+a(x.compressedSize,4)+a(x.uncompressedSize,4)}(m),meta:{percent:100}});else for(this.push({data:f.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},y.prototype.flush=function(){for(var m=this.bytesWritten,k=0;k<this.dirRecords.length;k++)this.push({data:this.dirRecords[k],meta:{percent:100}});var f=this.bytesWritten-m,x=function(u,d,g,b,E){var R=s.transformTo("string",E(b));return v.CENTRAL_DIRECTORY_END+"\0\0\0\0"+a(u,2)+a(u,2)+a(d,4)+a(g,4)+a(R.length,2)+R}(this.dirRecords.length,f,m,this.zipComment,this.encodeFileName);this.push({data:x,meta:{percent:100}})},y.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},y.prototype.registerPrevious=function(m){this._sources.push(m);var k=this;return m.on("data",function(f){k.processChunk(f)}),m.on("end",function(){k.closedSource(k.previous.streamInfo),k._sources.length?k.prepareNextSource():k.end()}),m.on("error",function(f){k.error(f)}),this},y.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},y.prototype.error=function(m){var k=this._sources;if(!l.prototype.error.call(this,m))return!1;for(var f=0;f<k.length;f++)try{k[f].error(m)}catch{}return!0},y.prototype.lock=function(){l.prototype.lock.call(this);for(var m=this._sources,k=0;k<m.length;k++)m[k].lock()},r.exports=y},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var a=n("../compressions"),o=n("./ZipFileWorker");i.generateWorker=function(s,l,h){var w=new o(l.streamFiles,h,l.platform,l.encodeFileName),v=0;try{s.forEach(function(y,m){v++;var k=function(d,g){var b=d||g,E=a[b];if(!E)throw new Error(b+" is not a valid compression method !");return E}(m.options.compression,l.compression),f=m.options.compressionOptions||l.compressionOptions||{},x=m.dir,u=m.date;m._compressWorker(k,f).withStreamInfo("file",{name:y,dir:x,date:u,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(w)}),w.entriesCount=v}catch(y){w.error(y)}return w}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function a(){if(!(this instanceof a))return new a;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new a;for(var s in this)typeof this[s]!="function"&&(o[s]=this[s]);return o}}(a.prototype=n("./object")).loadAsync=n("./load"),a.support=n("./support"),a.defaults=n("./defaults"),a.version="3.10.1",a.loadAsync=function(o,s){return new a().loadAsync(o,s)},a.external=n("./external"),r.exports=a},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var a=n("./utils"),o=n("./external"),s=n("./utf8"),l=n("./zipEntries"),h=n("./stream/Crc32Probe"),w=n("./nodejsUtils");function v(y){return new o.Promise(function(m,k){var f=y.decompressed.getContentWorker().pipe(new h);f.on("error",function(x){k(x)}).on("end",function(){f.streamInfo.crc32!==y.decompressed.crc32?k(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}r.exports=function(y,m){var k=this;return m=a.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),w.isNode&&w.isStream(y)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):a.prepareContent("the loaded zip file",y,!0,m.optimizedBinaryString,m.base64).then(function(f){var x=new l(m);return x.load(f),x}).then(function(f){var x=[o.Promise.resolve(f)],u=f.files;if(m.checkCRC32)for(var d=0;d<u.length;d++)x.push(v(u[d]));return o.Promise.all(x)}).then(function(f){for(var x=f.shift(),u=x.files,d=0;d<u.length;d++){var g=u[d],b=g.fileNameStr,E=a.resolve(g.fileNameStr);k.file(E,g.decompressed,{binary:!0,optimizedBinaryString:!0,date:g.date,dir:g.dir,comment:g.fileCommentStr.length?g.fileCommentStr:null,unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions,createFolders:m.createFolders}),g.dir||(k.file(E).unsafeOriginalName=b)}return x.zipComment.length&&(k.comment=x.zipComment),k})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var a=n("../utils"),o=n("../stream/GenericWorker");function s(l,h){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(h)}a.inherits(s,o),s.prototype._bindStream=function(l){var h=this;(this._stream=l).pause(),l.on("data",function(w){h.push({data:w,meta:{percent:0}})}).on("error",function(w){h.isPaused?this.generatedError=w:h.error(w)}).on("end",function(){h.isPaused?h._upstreamEnded=!0:h.end()})},s.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var a=n("readable-stream").Readable;function o(s,l,h){a.call(this,l),this._helper=s;var w=this;s.on("data",function(v,y){w.push(v)||w._helper.pause(),h&&h(y)}).on("error",function(v){w.emit("error",v)}).on("end",function(){w.push(null)})}n("../utils").inherits(o,a),o.prototype._read=function(){this._helper.resume()},r.exports=o},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(a,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(a,o);if(typeof a=="number")throw new Error('The "data" argument must not be a number');return new Buffer(a,o)},allocBuffer:function(a){if(Buffer.alloc)return Buffer.alloc(a);var o=new Buffer(a);return o.fill(0),o},isBuffer:function(a){return Buffer.isBuffer(a)},isStream:function(a){return a&&typeof a.on=="function"&&typeof a.pause=="function"&&typeof a.resume=="function"}}},{}],15:[function(n,r,i){function a(E,R,I){var z,O=s.getTypeOf(R),U=s.extend(I||{},w);U.date=U.date||new Date,U.compression!==null&&(U.compression=U.compression.toUpperCase()),typeof U.unixPermissions=="string"&&(U.unixPermissions=parseInt(U.unixPermissions,8)),U.unixPermissions&&16384&U.unixPermissions&&(U.dir=!0),U.dosPermissions&&16&U.dosPermissions&&(U.dir=!0),U.dir&&(E=u(E)),U.createFolders&&(z=x(E))&&d.call(this,z,!0);var ee=O==="string"&&U.binary===!1&&U.base64===!1;I&&I.binary!==void 0||(U.binary=!ee),(R instanceof v&&R.uncompressedSize===0||U.dir||!R||R.length===0)&&(U.base64=!1,U.binary=!0,R="",U.compression="STORE",O="string");var A=null;A=R instanceof v||R instanceof l?R:k.isNode&&k.isStream(R)?new f(E,R):s.prepareContent(E,R,U.binary,U.optimizedBinaryString,U.base64);var F=new y(E,A,U);this.files[E]=F}var o=n("./utf8"),s=n("./utils"),l=n("./stream/GenericWorker"),h=n("./stream/StreamHelper"),w=n("./defaults"),v=n("./compressedObject"),y=n("./zipObject"),m=n("./generate"),k=n("./nodejsUtils"),f=n("./nodejs/NodejsStreamInputAdapter"),x=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var R=E.lastIndexOf("/");return 0<R?E.substring(0,R):""},u=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},d=function(E,R){return R=R!==void 0?R:w.createFolders,E=u(E),this.files[E]||a.call(this,E,null,{dir:!0,createFolders:R}),this.files[E]};function g(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var b={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var R,I,z;for(R in this.files)z=this.files[R],(I=R.slice(this.root.length,R.length))&&R.slice(0,this.root.length)===this.root&&E(I,z)},filter:function(E){var R=[];return this.forEach(function(I,z){E(I,z)&&R.push(z)}),R},file:function(E,R,I){if(arguments.length!==1)return E=this.root+E,a.call(this,E,R,I),this;if(g(E)){var z=E;return this.filter(function(U,ee){return!ee.dir&&z.test(U)})}var O=this.files[this.root+E];return O&&!O.dir?O:null},folder:function(E){if(!E)return this;if(g(E))return this.filter(function(O,U){return U.dir&&E.test(O)});var R=this.root+E,I=d.call(this,R),z=this.clone();return z.root=I.name,z},remove:function(E){E=this.root+E;var R=this.files[E];if(R||(E.slice(-1)!=="/"&&(E+="/"),R=this.files[E]),R&&!R.dir)delete this.files[E];else for(var I=this.filter(function(O,U){return U.name.slice(0,E.length)===E}),z=0;z<I.length;z++)delete this.files[I[z].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var R,I={};try{if((I=s.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=I.type.toLowerCase(),I.compression=I.compression.toUpperCase(),I.type==="binarystring"&&(I.type="string"),!I.type)throw new Error("No output type specified.");s.checkSupport(I.type),I.platform!=="darwin"&&I.platform!=="freebsd"&&I.platform!=="linux"&&I.platform!=="sunos"||(I.platform="UNIX"),I.platform==="win32"&&(I.platform="DOS");var z=I.comment||this.comment||"";R=m.generateWorker(this,I,z)}catch(O){(R=new l("error")).error(O)}return new h(R,I.type||"string",I.mimeType)},generateAsync:function(E,R){return this.generateInternalStream(E).accumulate(R)},generateNodeStream:function(E,R){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(R)}};r.exports=b},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var a=n("./DataReader");function o(s){a.call(this,s);for(var l=0;l<this.data.length;l++)s[l]=255&s[l]}n("../utils").inherits(o,a),o.prototype.byteAt=function(s){return this.data[this.zero+s]},o.prototype.lastIndexOfSignature=function(s){for(var l=s.charCodeAt(0),h=s.charCodeAt(1),w=s.charCodeAt(2),v=s.charCodeAt(3),y=this.length-4;0<=y;--y)if(this.data[y]===l&&this.data[y+1]===h&&this.data[y+2]===w&&this.data[y+3]===v)return y-this.zero;return-1},o.prototype.readAndCheckSignature=function(s){var l=s.charCodeAt(0),h=s.charCodeAt(1),w=s.charCodeAt(2),v=s.charCodeAt(3),y=this.readData(4);return l===y[0]&&h===y[1]&&w===y[2]&&v===y[3]},o.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=o},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var a=n("../utils");function o(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var l,h=0;for(this.checkOffset(s),l=this.index+s-1;l>=this.index;l--)h=(h<<8)+this.byteAt(l);return this.index+=s,h},readString:function(s){return a.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},r.exports=o},{"../utils":32}],19:[function(n,r,i){var a=n("./Uint8ArrayReader");function o(s){a.call(this,s)}n("../utils").inherits(o,a),o.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var a=n("./DataReader");function o(s){a.call(this,s)}n("../utils").inherits(o,a),o.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},o.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},o.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},o.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=o},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var a=n("./ArrayReader");function o(s){a.call(this,s)}n("../utils").inherits(o,a),o.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var a=n("../utils"),o=n("../support"),s=n("./ArrayReader"),l=n("./StringReader"),h=n("./NodeBufferReader"),w=n("./Uint8ArrayReader");r.exports=function(v){var y=a.getTypeOf(v);return a.checkSupport(y),y!=="string"||o.uint8array?y==="nodebuffer"?new h(v):o.uint8array?new w(a.transformTo("uint8array",v)):new s(a.transformTo("array",v)):new l(v)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var a=n("./GenericWorker"),o=n("../utils");function s(l){a.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(s,a),s.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},r.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var a=n("./GenericWorker"),o=n("../crc32");function s(){a.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(s,a),s.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var a=n("../utils"),o=n("./GenericWorker");function s(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}a.inherits(s,o),s.prototype.processChunk=function(l){if(l){var h=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=h+l.data.length}o.prototype.processChunk.call(this,l)},r.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var a=n("../utils"),o=n("./GenericWorker");function s(l){o.call(this,"DataWorker");var h=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(w){h.dataIsReady=!0,h.data=w,h.max=w&&w.length||0,h.type=a.getTypeOf(w),h.isPaused||h._tickAndRepeat()},function(w){h.error(w)})}a.inherits(s,o),s.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,a.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(a.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,h=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,h);break;case"uint8array":l=this.data.subarray(this.index,h);break;case"array":case"nodebuffer":l=this.data.slice(this.index,h)}return this.index=h,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function a(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}a.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,s){return this._listeners[o].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,s){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,s)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var s=this;return o.on("data",function(l){s.processChunk(l)}),o.on("end",function(){s.end()}),o.on("error",function(l){s.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,s){return this.extraStreamInfo[o]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},r.exports=a},{}],29:[function(n,r,i){var a=n("../utils"),o=n("./ConvertWorker"),s=n("./GenericWorker"),l=n("../base64"),h=n("../support"),w=n("../external"),v=null;if(h.nodestream)try{v=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function y(k,f){return new w.Promise(function(x,u){var d=[],g=k._internalType,b=k._outputType,E=k._mimeType;k.on("data",function(R,I){d.push(R),f&&f(I)}).on("error",function(R){d=[],u(R)}).on("end",function(){try{var R=function(I,z,O){switch(I){case"blob":return a.newBlob(a.transformTo("arraybuffer",z),O);case"base64":return l.encode(z);default:return a.transformTo(I,z)}}(b,function(I,z){var O,U=0,ee=null,A=0;for(O=0;O<z.length;O++)A+=z[O].length;switch(I){case"string":return z.join("");case"array":return Array.prototype.concat.apply([],z);case"uint8array":for(ee=new Uint8Array(A),O=0;O<z.length;O++)ee.set(z[O],U),U+=z[O].length;return ee;case"nodebuffer":return Buffer.concat(z);default:throw new Error("concat : unsupported type '"+I+"'")}}(g,d),E);x(R)}catch(I){u(I)}d=[]}).resume()})}function m(k,f,x){var u=f;switch(f){case"blob":case"arraybuffer":u="uint8array";break;case"base64":u="string"}try{this._internalType=u,this._outputType=f,this._mimeType=x,a.checkSupport(u),this._worker=k.pipe(new o(u)),k.lock()}catch(d){this._worker=new s("error"),this._worker.error(d)}}m.prototype={accumulate:function(k){return y(this,k)},on:function(k,f){var x=this;return k==="data"?this._worker.on(k,function(u){f.call(x,u.data,u.meta)}):this._worker.on(k,function(){a.delay(f,arguments,x)}),this},resume:function(){return a.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(k){if(a.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new v(this,{objectMode:this._outputType!=="nodebuffer"},k)}},r.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var a=new ArrayBuffer(0);try{i.blob=new Blob([a],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(a),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var a=n("./utils"),o=n("./support"),s=n("./nodejsUtils"),l=n("./stream/GenericWorker"),h=new Array(256),w=0;w<256;w++)h[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;h[254]=h[254]=1;function v(){l.call(this,"utf-8 decode"),this.leftOver=null}function y(){l.call(this,"utf-8 encode")}i.utf8encode=function(m){return o.nodebuffer?s.newBufferFrom(m,"utf-8"):function(k){var f,x,u,d,g,b=k.length,E=0;for(d=0;d<b;d++)(64512&(x=k.charCodeAt(d)))==55296&&d+1<b&&(64512&(u=k.charCodeAt(d+1)))==56320&&(x=65536+(x-55296<<10)+(u-56320),d++),E+=x<128?1:x<2048?2:x<65536?3:4;for(f=o.uint8array?new Uint8Array(E):new Array(E),d=g=0;g<E;d++)(64512&(x=k.charCodeAt(d)))==55296&&d+1<b&&(64512&(u=k.charCodeAt(d+1)))==56320&&(x=65536+(x-55296<<10)+(u-56320),d++),x<128?f[g++]=x:(x<2048?f[g++]=192|x>>>6:(x<65536?f[g++]=224|x>>>12:(f[g++]=240|x>>>18,f[g++]=128|x>>>12&63),f[g++]=128|x>>>6&63),f[g++]=128|63&x);return f}(m)},i.utf8decode=function(m){return o.nodebuffer?a.transformTo("nodebuffer",m).toString("utf-8"):function(k){var f,x,u,d,g=k.length,b=new Array(2*g);for(f=x=0;f<g;)if((u=k[f++])<128)b[x++]=u;else if(4<(d=h[u]))b[x++]=65533,f+=d-1;else{for(u&=d===2?31:d===3?15:7;1<d&&f<g;)u=u<<6|63&k[f++],d--;1<d?b[x++]=65533:u<65536?b[x++]=u:(u-=65536,b[x++]=55296|u>>10&1023,b[x++]=56320|1023&u)}return b.length!==x&&(b.subarray?b=b.subarray(0,x):b.length=x),a.applyFromCharCode(b)}(m=a.transformTo(o.uint8array?"uint8array":"array",m))},a.inherits(v,l),v.prototype.processChunk=function(m){var k=a.transformTo(o.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var f=k;(k=new Uint8Array(f.length+this.leftOver.length)).set(this.leftOver,0),k.set(f,this.leftOver.length)}else k=this.leftOver.concat(k);this.leftOver=null}var x=function(d,g){var b;for((g=g||d.length)>d.length&&(g=d.length),b=g-1;0<=b&&(192&d[b])==128;)b--;return b<0||b===0?g:b+h[d[b]]>g?b:g}(k),u=k;x!==k.length&&(o.uint8array?(u=k.subarray(0,x),this.leftOver=k.subarray(x,k.length)):(u=k.slice(0,x),this.leftOver=k.slice(x,k.length))),this.push({data:i.utf8decode(u),meta:m.meta})},v.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=v,a.inherits(y,l),y.prototype.processChunk=function(m){this.push({data:i.utf8encode(m.data),meta:m.meta})},i.Utf8EncodeWorker=y},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var a=n("./support"),o=n("./base64"),s=n("./nodejsUtils"),l=n("./external");function h(f){return f}function w(f,x){for(var u=0;u<f.length;++u)x[u]=255&f.charCodeAt(u);return x}n("setimmediate"),i.newBlob=function(f,x){i.checkSupport("blob");try{return new Blob([f],{type:x})}catch{try{var u=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return u.append(f),u.getBlob(x)}catch{throw new Error("Bug : can't construct the Blob.")}}};var v={stringifyByChunk:function(f,x,u){var d=[],g=0,b=f.length;if(b<=u)return String.fromCharCode.apply(null,f);for(;g<b;)x==="array"||x==="nodebuffer"?d.push(String.fromCharCode.apply(null,f.slice(g,Math.min(g+u,b)))):d.push(String.fromCharCode.apply(null,f.subarray(g,Math.min(g+u,b)))),g+=u;return d.join("")},stringifyByChar:function(f){for(var x="",u=0;u<f.length;u++)x+=String.fromCharCode(f[u]);return x},applyCanBeUsed:{uint8array:function(){try{return a.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return a.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}}()}};function y(f){var x=65536,u=i.getTypeOf(f),d=!0;if(u==="uint8array"?d=v.applyCanBeUsed.uint8array:u==="nodebuffer"&&(d=v.applyCanBeUsed.nodebuffer),d)for(;1<x;)try{return v.stringifyByChunk(f,u,x)}catch{x=Math.floor(x/2)}return v.stringifyByChar(f)}function m(f,x){for(var u=0;u<f.length;u++)x[u]=f[u];return x}i.applyFromCharCode=y;var k={};k.string={string:h,array:function(f){return w(f,new Array(f.length))},arraybuffer:function(f){return k.string.uint8array(f).buffer},uint8array:function(f){return w(f,new Uint8Array(f.length))},nodebuffer:function(f){return w(f,s.allocBuffer(f.length))}},k.array={string:y,array:h,arraybuffer:function(f){return new Uint8Array(f).buffer},uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return s.newBufferFrom(f)}},k.arraybuffer={string:function(f){return y(new Uint8Array(f))},array:function(f){return m(new Uint8Array(f),new Array(f.byteLength))},arraybuffer:h,uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return s.newBufferFrom(new Uint8Array(f))}},k.uint8array={string:y,array:function(f){return m(f,new Array(f.length))},arraybuffer:function(f){return f.buffer},uint8array:h,nodebuffer:function(f){return s.newBufferFrom(f)}},k.nodebuffer={string:y,array:function(f){return m(f,new Array(f.length))},arraybuffer:function(f){return k.nodebuffer.uint8array(f).buffer},uint8array:function(f){return m(f,new Uint8Array(f.length))},nodebuffer:h},i.transformTo=function(f,x){if(x=x||"",!f)return x;i.checkSupport(f);var u=i.getTypeOf(x);return k[u][f](x)},i.resolve=function(f){for(var x=f.split("/"),u=[],d=0;d<x.length;d++){var g=x[d];g==="."||g===""&&d!==0&&d!==x.length-1||(g===".."?u.pop():u.push(g))}return u.join("/")},i.getTypeOf=function(f){return typeof f=="string"?"string":Object.prototype.toString.call(f)==="[object Array]"?"array":a.nodebuffer&&s.isBuffer(f)?"nodebuffer":a.uint8array&&f instanceof Uint8Array?"uint8array":a.arraybuffer&&f instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(f){if(!a[f.toLowerCase()])throw new Error(f+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(f){var x,u,d="";for(u=0;u<(f||"").length;u++)d+="\\x"+((x=f.charCodeAt(u))<16?"0":"")+x.toString(16).toUpperCase();return d},i.delay=function(f,x,u){setImmediate(function(){f.apply(u||null,x||[])})},i.inherits=function(f,x){function u(){}u.prototype=x.prototype,f.prototype=new u},i.extend=function(){var f,x,u={};for(f=0;f<arguments.length;f++)for(x in arguments[f])Object.prototype.hasOwnProperty.call(arguments[f],x)&&u[x]===void 0&&(u[x]=arguments[f][x]);return u},i.prepareContent=function(f,x,u,d,g){return l.Promise.resolve(x).then(function(b){return a.blob&&(b instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(b))!==-1)&&typeof FileReader<"u"?new l.Promise(function(E,R){var I=new FileReader;I.onload=function(z){E(z.target.result)},I.onerror=function(z){R(z.target.error)},I.readAsArrayBuffer(b)}):b}).then(function(b){var E=i.getTypeOf(b);return E?(E==="arraybuffer"?b=i.transformTo("uint8array",b):E==="string"&&(g?b=o.decode(b):u&&d!==!0&&(b=function(R){return w(R,a.uint8array?new Uint8Array(R.length):new Array(R.length))}(b))),b):l.Promise.reject(new Error("Can't read the data of '"+f+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var a=n("./reader/readerFor"),o=n("./utils"),s=n("./signature"),l=n("./zipEntry"),h=n("./support");function w(v){this.files=[],this.loadOptions=v}w.prototype={checkSignature:function(v){if(!this.reader.readAndCheckSignature(v)){this.reader.index-=4;var y=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(y)+", expected "+o.pretty(v)+")")}},isSignature:function(v,y){var m=this.reader.index;this.reader.setIndex(v);var k=this.reader.readString(4)===y;return this.reader.setIndex(m),k},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var v=this.reader.readData(this.zipCommentLength),y=h.uint8array?"uint8array":"array",m=o.transformTo(y,v);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var v,y,m,k=this.zip64EndOfCentralSize-44;0<k;)v=this.reader.readInt(2),y=this.reader.readInt(4),m=this.reader.readData(y),this.zip64ExtensibleData[v]={id:v,length:y,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var v,y;for(v=0;v<this.files.length;v++)y=this.files[v],this.reader.setIndex(y.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),y.readLocalPart(this.reader),y.handleUTF8(),y.processAttributes()},readCentralDir:function(){var v;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(v=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(v);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var v=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(v<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(v);var y=v;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(v=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(v),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var k=y-m;if(0<k)this.isSignature(y,s.CENTRAL_FILE_HEADER)||(this.reader.zero=k);else if(k<0)throw new Error("Corrupted zip: missing "+Math.abs(k)+" bytes.")},prepareReader:function(v){this.reader=a(v)},load:function(v){this.prepareReader(v),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=w},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var a=n("./reader/readerFor"),o=n("./utils"),s=n("./compressedObject"),l=n("./crc32"),h=n("./utf8"),w=n("./compressions"),v=n("./support");function y(m,k){this.options=m,this.loadOptions=k}y.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var k,f;if(m.skip(22),this.fileNameLength=m.readInt(2),f=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(f),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((k=function(x){for(var u in w)if(Object.prototype.hasOwnProperty.call(w,u)&&w[u].magic===x)return w[u];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,k,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var k=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(k),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var m=a(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=m.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=m.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=m.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=m.readInt(4))}},readExtraFields:function(m){var k,f,x,u=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<u;)k=m.readInt(2),f=m.readInt(2),x=m.readData(f),this.extraFields[k]={id:k,length:f,value:x};m.setIndex(u)},handleUTF8:function(){var m=v.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=h.utf8decode(this.fileName),this.fileCommentStr=h.utf8decode(this.fileComment);else{var k=this.findExtraFieldUnicodePath();if(k!==null)this.fileNameStr=k;else{var f=o.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(f)}var x=this.findExtraFieldUnicodeComment();if(x!==null)this.fileCommentStr=x;else{var u=o.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(u)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var k=a(m.value);return k.readInt(1)!==1||l(this.fileName)!==k.readInt(4)?null:h.utf8decode(k.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var k=a(m.value);return k.readInt(1)!==1||l(this.fileComment)!==k.readInt(4)?null:h.utf8decode(k.readData(m.length-5))}return null}},r.exports=y},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function a(k,f,x){this.name=k,this.dir=x.dir,this.date=x.date,this.comment=x.comment,this.unixPermissions=x.unixPermissions,this.dosPermissions=x.dosPermissions,this._data=f,this._dataBinary=x.binary,this.options={compression:x.compression,compressionOptions:x.compressionOptions}}var o=n("./stream/StreamHelper"),s=n("./stream/DataWorker"),l=n("./utf8"),h=n("./compressedObject"),w=n("./stream/GenericWorker");a.prototype={internalStream:function(k){var f=null,x="string";try{if(!k)throw new Error("No output type specified.");var u=(x=k.toLowerCase())==="string"||x==="text";x!=="binarystring"&&x!=="text"||(x="string"),f=this._decompressWorker();var d=!this._dataBinary;d&&!u&&(f=f.pipe(new l.Utf8EncodeWorker)),!d&&u&&(f=f.pipe(new l.Utf8DecodeWorker))}catch(g){(f=new w("error")).error(g)}return new o(f,x,"")},async:function(k,f){return this.internalStream(k).accumulate(f)},nodeStream:function(k,f){return this.internalStream(k||"nodebuffer").toNodejsStream(f)},_compressWorker:function(k,f){if(this._data instanceof h&&this._data.compression.magic===k.magic)return this._data.getCompressedWorker();var x=this._decompressWorker();return this._dataBinary||(x=x.pipe(new l.Utf8EncodeWorker)),h.createWorkerFrom(x,k,f)},_decompressWorker:function(){return this._data instanceof h?this._data.getContentWorker():this._data instanceof w?this._data:new s(this._data)}};for(var v=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],y=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<v.length;m++)a.prototype[v[m]]=y;r.exports=a},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(a){var o,s,l=a.MutationObserver||a.WebKitMutationObserver;if(l){var h=0,w=new l(k),v=a.document.createTextNode("");w.observe(v,{characterData:!0}),o=function(){v.data=h=++h%2}}else if(a.setImmediate||a.MessageChannel===void 0)o="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var f=a.document.createElement("script");f.onreadystatechange=function(){k(),f.onreadystatechange=null,f.parentNode.removeChild(f),f=null},a.document.documentElement.appendChild(f)}:function(){setTimeout(k,0)};else{var y=new a.MessageChannel;y.port1.onmessage=k,o=function(){y.port2.postMessage(0)}}var m=[];function k(){var f,x;s=!0;for(var u=m.length;u;){for(x=m,m=[],f=-1;++f<u;)x[f]();u=m.length}s=!1}r.exports=function(f){m.push(f)!==1||s||o()}}).call(this,typeof Wr<"u"?Wr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var a=n("immediate");function o(){}var s={},l=["REJECTED"],h=["FULFILLED"],w=["PENDING"];function v(u){if(typeof u!="function")throw new TypeError("resolver must be a function");this.state=w,this.queue=[],this.outcome=void 0,u!==o&&f(this,u)}function y(u,d,g){this.promise=u,typeof d=="function"&&(this.onFulfilled=d,this.callFulfilled=this.otherCallFulfilled),typeof g=="function"&&(this.onRejected=g,this.callRejected=this.otherCallRejected)}function m(u,d,g){a(function(){var b;try{b=d(g)}catch(E){return s.reject(u,E)}b===u?s.reject(u,new TypeError("Cannot resolve promise with itself")):s.resolve(u,b)})}function k(u){var d=u&&u.then;if(u&&(typeof u=="object"||typeof u=="function")&&typeof d=="function")return function(){d.apply(u,arguments)}}function f(u,d){var g=!1;function b(I){g||(g=!0,s.reject(u,I))}function E(I){g||(g=!0,s.resolve(u,I))}var R=x(function(){d(E,b)});R.status==="error"&&b(R.value)}function x(u,d){var g={};try{g.value=u(d),g.status="success"}catch(b){g.status="error",g.value=b}return g}(r.exports=v).prototype.finally=function(u){if(typeof u!="function")return this;var d=this.constructor;return this.then(function(g){return d.resolve(u()).then(function(){return g})},function(g){return d.resolve(u()).then(function(){throw g})})},v.prototype.catch=function(u){return this.then(null,u)},v.prototype.then=function(u,d){if(typeof u!="function"&&this.state===h||typeof d!="function"&&this.state===l)return this;var g=new this.constructor(o);return this.state!==w?m(g,this.state===h?u:d,this.outcome):this.queue.push(new y(g,u,d)),g},y.prototype.callFulfilled=function(u){s.resolve(this.promise,u)},y.prototype.otherCallFulfilled=function(u){m(this.promise,this.onFulfilled,u)},y.prototype.callRejected=function(u){s.reject(this.promise,u)},y.prototype.otherCallRejected=function(u){m(this.promise,this.onRejected,u)},s.resolve=function(u,d){var g=x(k,d);if(g.status==="error")return s.reject(u,g.value);var b=g.value;if(b)f(u,b);else{u.state=h,u.outcome=d;for(var E=-1,R=u.queue.length;++E<R;)u.queue[E].callFulfilled(d)}return u},s.reject=function(u,d){u.state=l,u.outcome=d;for(var g=-1,b=u.queue.length;++g<b;)u.queue[g].callRejected(d);return u},v.resolve=function(u){return u instanceof this?u:s.resolve(new this(o),u)},v.reject=function(u){var d=new this(o);return s.reject(d,u)},v.all=function(u){var d=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var g=u.length,b=!1;if(!g)return this.resolve([]);for(var E=new Array(g),R=0,I=-1,z=new this(o);++I<g;)O(u[I],I);return z;function O(U,ee){d.resolve(U).then(function(A){E[ee]=A,++R!==g||b||(b=!0,s.resolve(z,E))},function(A){b||(b=!0,s.reject(z,A))})}},v.race=function(u){var d=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var g=u.length,b=!1;if(!g)return this.resolve([]);for(var E=-1,R=new this(o);++E<g;)I=u[E],d.resolve(I).then(function(z){b||(b=!0,s.resolve(R,z))},function(z){b||(b=!0,s.reject(R,z))});var I;return R}},{immediate:36}],38:[function(n,r,i){var a={};(0,n("./lib/utils/common").assign)(a,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=a},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var a=n("./zlib/deflate"),o=n("./utils/common"),s=n("./utils/strings"),l=n("./zlib/messages"),h=n("./zlib/zstream"),w=Object.prototype.toString,v=0,y=-1,m=0,k=8;function f(u){if(!(this instanceof f))return new f(u);this.options=o.assign({level:y,method:k,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},u||{});var d=this.options;d.raw&&0<d.windowBits?d.windowBits=-d.windowBits:d.gzip&&0<d.windowBits&&d.windowBits<16&&(d.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var g=a.deflateInit2(this.strm,d.level,d.method,d.windowBits,d.memLevel,d.strategy);if(g!==v)throw new Error(l[g]);if(d.header&&a.deflateSetHeader(this.strm,d.header),d.dictionary){var b;if(b=typeof d.dictionary=="string"?s.string2buf(d.dictionary):w.call(d.dictionary)==="[object ArrayBuffer]"?new Uint8Array(d.dictionary):d.dictionary,(g=a.deflateSetDictionary(this.strm,b))!==v)throw new Error(l[g]);this._dict_set=!0}}function x(u,d){var g=new f(d);if(g.push(u,!0),g.err)throw g.msg||l[g.err];return g.result}f.prototype.push=function(u,d){var g,b,E=this.strm,R=this.options.chunkSize;if(this.ended)return!1;b=d===~~d?d:d===!0?4:0,typeof u=="string"?E.input=s.string2buf(u):w.call(u)==="[object ArrayBuffer]"?E.input=new Uint8Array(u):E.input=u,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new o.Buf8(R),E.next_out=0,E.avail_out=R),(g=a.deflate(E,b))!==1&&g!==v)return this.onEnd(g),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||b!==4&&b!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(o.shrinkBuf(E.output,E.next_out))):this.onData(o.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&g!==1);return b===4?(g=a.deflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===v):b!==2||(this.onEnd(v),!(E.avail_out=0))},f.prototype.onData=function(u){this.chunks.push(u)},f.prototype.onEnd=function(u){u===v&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},i.Deflate=f,i.deflate=x,i.deflateRaw=function(u,d){return(d=d||{}).raw=!0,x(u,d)},i.gzip=function(u,d){return(d=d||{}).gzip=!0,x(u,d)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var a=n("./zlib/inflate"),o=n("./utils/common"),s=n("./utils/strings"),l=n("./zlib/constants"),h=n("./zlib/messages"),w=n("./zlib/zstream"),v=n("./zlib/gzheader"),y=Object.prototype.toString;function m(f){if(!(this instanceof m))return new m(f);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},f||{});var x=this.options;x.raw&&0<=x.windowBits&&x.windowBits<16&&(x.windowBits=-x.windowBits,x.windowBits===0&&(x.windowBits=-15)),!(0<=x.windowBits&&x.windowBits<16)||f&&f.windowBits||(x.windowBits+=32),15<x.windowBits&&x.windowBits<48&&!(15&x.windowBits)&&(x.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var u=a.inflateInit2(this.strm,x.windowBits);if(u!==l.Z_OK)throw new Error(h[u]);this.header=new v,a.inflateGetHeader(this.strm,this.header)}function k(f,x){var u=new m(x);if(u.push(f,!0),u.err)throw u.msg||h[u.err];return u.result}m.prototype.push=function(f,x){var u,d,g,b,E,R,I=this.strm,z=this.options.chunkSize,O=this.options.dictionary,U=!1;if(this.ended)return!1;d=x===~~x?x:x===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof f=="string"?I.input=s.binstring2buf(f):y.call(f)==="[object ArrayBuffer]"?I.input=new Uint8Array(f):I.input=f,I.next_in=0,I.avail_in=I.input.length;do{if(I.avail_out===0&&(I.output=new o.Buf8(z),I.next_out=0,I.avail_out=z),(u=a.inflate(I,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&O&&(R=typeof O=="string"?s.string2buf(O):y.call(O)==="[object ArrayBuffer]"?new Uint8Array(O):O,u=a.inflateSetDictionary(this.strm,R)),u===l.Z_BUF_ERROR&&U===!0&&(u=l.Z_OK,U=!1),u!==l.Z_STREAM_END&&u!==l.Z_OK)return this.onEnd(u),!(this.ended=!0);I.next_out&&(I.avail_out!==0&&u!==l.Z_STREAM_END&&(I.avail_in!==0||d!==l.Z_FINISH&&d!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(g=s.utf8border(I.output,I.next_out),b=I.next_out-g,E=s.buf2string(I.output,g),I.next_out=b,I.avail_out=z-b,b&&o.arraySet(I.output,I.output,g,b,0),this.onData(E)):this.onData(o.shrinkBuf(I.output,I.next_out)))),I.avail_in===0&&I.avail_out===0&&(U=!0)}while((0<I.avail_in||I.avail_out===0)&&u!==l.Z_STREAM_END);return u===l.Z_STREAM_END&&(d=l.Z_FINISH),d===l.Z_FINISH?(u=a.inflateEnd(this.strm),this.onEnd(u),this.ended=!0,u===l.Z_OK):d!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(I.avail_out=0))},m.prototype.onData=function(f){this.chunks.push(f)},m.prototype.onEnd=function(f){f===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},i.Inflate=m,i.inflate=k,i.inflateRaw=function(f,x){return(x=x||{}).raw=!0,k(f,x)},i.ungzip=k},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var h=Array.prototype.slice.call(arguments,1);h.length;){var w=h.shift();if(w){if(typeof w!="object")throw new TypeError(w+"must be non-object");for(var v in w)w.hasOwnProperty(v)&&(l[v]=w[v])}}return l},i.shrinkBuf=function(l,h){return l.length===h?l:l.subarray?l.subarray(0,h):(l.length=h,l)};var o={arraySet:function(l,h,w,v,y){if(h.subarray&&l.subarray)l.set(h.subarray(w,w+v),y);else for(var m=0;m<v;m++)l[y+m]=h[w+m]},flattenChunks:function(l){var h,w,v,y,m,k;for(h=v=0,w=l.length;h<w;h++)v+=l[h].length;for(k=new Uint8Array(v),h=y=0,w=l.length;h<w;h++)m=l[h],k.set(m,y),y+=m.length;return k}},s={arraySet:function(l,h,w,v,y){for(var m=0;m<v;m++)l[y+m]=h[w+m]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,s))},i.setTyped(a)},{}],42:[function(n,r,i){var a=n("./common"),o=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var l=new a.Buf8(256),h=0;h<256;h++)l[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;function w(v,y){if(y<65537&&(v.subarray&&s||!v.subarray&&o))return String.fromCharCode.apply(null,a.shrinkBuf(v,y));for(var m="",k=0;k<y;k++)m+=String.fromCharCode(v[k]);return m}l[254]=l[254]=1,i.string2buf=function(v){var y,m,k,f,x,u=v.length,d=0;for(f=0;f<u;f++)(64512&(m=v.charCodeAt(f)))==55296&&f+1<u&&(64512&(k=v.charCodeAt(f+1)))==56320&&(m=65536+(m-55296<<10)+(k-56320),f++),d+=m<128?1:m<2048?2:m<65536?3:4;for(y=new a.Buf8(d),f=x=0;x<d;f++)(64512&(m=v.charCodeAt(f)))==55296&&f+1<u&&(64512&(k=v.charCodeAt(f+1)))==56320&&(m=65536+(m-55296<<10)+(k-56320),f++),m<128?y[x++]=m:(m<2048?y[x++]=192|m>>>6:(m<65536?y[x++]=224|m>>>12:(y[x++]=240|m>>>18,y[x++]=128|m>>>12&63),y[x++]=128|m>>>6&63),y[x++]=128|63&m);return y},i.buf2binstring=function(v){return w(v,v.length)},i.binstring2buf=function(v){for(var y=new a.Buf8(v.length),m=0,k=y.length;m<k;m++)y[m]=v.charCodeAt(m);return y},i.buf2string=function(v,y){var m,k,f,x,u=y||v.length,d=new Array(2*u);for(m=k=0;m<u;)if((f=v[m++])<128)d[k++]=f;else if(4<(x=l[f]))d[k++]=65533,m+=x-1;else{for(f&=x===2?31:x===3?15:7;1<x&&m<u;)f=f<<6|63&v[m++],x--;1<x?d[k++]=65533:f<65536?d[k++]=f:(f-=65536,d[k++]=55296|f>>10&1023,d[k++]=56320|1023&f)}return w(d,k)},i.utf8border=function(v,y){var m;for((y=y||v.length)>v.length&&(y=v.length),m=y-1;0<=m&&(192&v[m])==128;)m--;return m<0||m===0?y:m+l[v[m]]>y?m:y}},{"./common":41}],43:[function(n,r,i){r.exports=function(a,o,s,l){for(var h=65535&a|0,w=a>>>16&65535|0,v=0;s!==0;){for(s-=v=2e3<s?2e3:s;w=w+(h=h+o[l++]|0)|0,--v;);h%=65521,w%=65521}return h|w<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var a=function(){for(var o,s=[],l=0;l<256;l++){o=l;for(var h=0;h<8;h++)o=1&o?3988292384^o>>>1:o>>>1;s[l]=o}return s}();r.exports=function(o,s,l,h){var w=a,v=h+l;o^=-1;for(var y=h;y<v;y++)o=o>>>8^w[255&(o^s[y])];return-1^o}},{}],46:[function(n,r,i){var a,o=n("../utils/common"),s=n("./trees"),l=n("./adler32"),h=n("./crc32"),w=n("./messages"),v=0,y=4,m=0,k=-2,f=-1,x=4,u=2,d=8,g=9,b=286,E=30,R=19,I=2*b+1,z=15,O=3,U=258,ee=U+O+1,A=42,F=113,p=1,W=2,re=3,G=4;function V(c,B){return c.msg=w[B],B}function L(c){return(c<<1)-(4<c?9:0)}function Q(c){for(var B=c.length;0<=--B;)c[B]=0}function j(c){var B=c.state,M=B.pending;M>c.avail_out&&(M=c.avail_out),M!==0&&(o.arraySet(c.output,B.pending_buf,B.pending_out,M,c.next_out),c.next_out+=M,B.pending_out+=M,c.total_out+=M,c.avail_out-=M,B.pending-=M,B.pending===0&&(B.pending_out=0))}function D(c,B){s._tr_flush_block(c,0<=c.block_start?c.block_start:-1,c.strstart-c.block_start,B),c.block_start=c.strstart,j(c.strm)}function te(c,B){c.pending_buf[c.pending++]=B}function J(c,B){c.pending_buf[c.pending++]=B>>>8&255,c.pending_buf[c.pending++]=255&B}function Y(c,B){var M,C,_=c.max_chain_length,T=c.strstart,H=c.prev_length,P=c.nice_match,N=c.strstart>c.w_size-ee?c.strstart-(c.w_size-ee):0,K=c.window,q=c.w_mask,$=c.prev,ne=c.strstart+U,pe=K[T+H-1],oe=K[T+H];c.prev_length>=c.good_match&&(_>>=2),P>c.lookahead&&(P=c.lookahead);do if(K[(M=B)+H]===oe&&K[M+H-1]===pe&&K[M]===K[T]&&K[++M]===K[T+1]){T+=2,M++;do;while(K[++T]===K[++M]&&K[++T]===K[++M]&&K[++T]===K[++M]&&K[++T]===K[++M]&&K[++T]===K[++M]&&K[++T]===K[++M]&&K[++T]===K[++M]&&K[++T]===K[++M]&&T<ne);if(C=U-(ne-T),T=ne-U,H<C){if(c.match_start=B,P<=(H=C))break;pe=K[T+H-1],oe=K[T+H]}}while((B=$[B&q])>N&&--_!=0);return H<=c.lookahead?H:c.lookahead}function ue(c){var B,M,C,_,T,H,P,N,K,q,$=c.w_size;do{if(_=c.window_size-c.lookahead-c.strstart,c.strstart>=$+($-ee)){for(o.arraySet(c.window,c.window,$,$,0),c.match_start-=$,c.strstart-=$,c.block_start-=$,B=M=c.hash_size;C=c.head[--B],c.head[B]=$<=C?C-$:0,--M;);for(B=M=$;C=c.prev[--B],c.prev[B]=$<=C?C-$:0,--M;);_+=$}if(c.strm.avail_in===0)break;if(H=c.strm,P=c.window,N=c.strstart+c.lookahead,K=_,q=void 0,q=H.avail_in,K<q&&(q=K),M=q===0?0:(H.avail_in-=q,o.arraySet(P,H.input,H.next_in,q,N),H.state.wrap===1?H.adler=l(H.adler,P,q,N):H.state.wrap===2&&(H.adler=h(H.adler,P,q,N)),H.next_in+=q,H.total_in+=q,q),c.lookahead+=M,c.lookahead+c.insert>=O)for(T=c.strstart-c.insert,c.ins_h=c.window[T],c.ins_h=(c.ins_h<<c.hash_shift^c.window[T+1])&c.hash_mask;c.insert&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[T+O-1])&c.hash_mask,c.prev[T&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=T,T++,c.insert--,!(c.lookahead+c.insert<O)););}while(c.lookahead<ee&&c.strm.avail_in!==0)}function ke(c,B){for(var M,C;;){if(c.lookahead<ee){if(ue(c),c.lookahead<ee&&B===v)return p;if(c.lookahead===0)break}if(M=0,c.lookahead>=O&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+O-1])&c.hash_mask,M=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),M!==0&&c.strstart-M<=c.w_size-ee&&(c.match_length=Y(c,M)),c.match_length>=O)if(C=s._tr_tally(c,c.strstart-c.match_start,c.match_length-O),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=O){for(c.match_length--;c.strstart++,c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+O-1])&c.hash_mask,M=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart,--c.match_length!=0;);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+1])&c.hash_mask;else C=s._tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(C&&(D(c,!1),c.strm.avail_out===0))return p}return c.insert=c.strstart<O-1?c.strstart:O-1,B===y?(D(c,!0),c.strm.avail_out===0?re:G):c.last_lit&&(D(c,!1),c.strm.avail_out===0)?p:W}function ae(c,B){for(var M,C,_;;){if(c.lookahead<ee){if(ue(c),c.lookahead<ee&&B===v)return p;if(c.lookahead===0)break}if(M=0,c.lookahead>=O&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+O-1])&c.hash_mask,M=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=O-1,M!==0&&c.prev_length<c.max_lazy_match&&c.strstart-M<=c.w_size-ee&&(c.match_length=Y(c,M),c.match_length<=5&&(c.strategy===1||c.match_length===O&&4096<c.strstart-c.match_start)&&(c.match_length=O-1)),c.prev_length>=O&&c.match_length<=c.prev_length){for(_=c.strstart+c.lookahead-O,C=s._tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-O),c.lookahead-=c.prev_length-1,c.prev_length-=2;++c.strstart<=_&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+O-1])&c.hash_mask,M=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),--c.prev_length!=0;);if(c.match_available=0,c.match_length=O-1,c.strstart++,C&&(D(c,!1),c.strm.avail_out===0))return p}else if(c.match_available){if((C=s._tr_tally(c,0,c.window[c.strstart-1]))&&D(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return p}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(C=s._tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<O-1?c.strstart:O-1,B===y?(D(c,!0),c.strm.avail_out===0?re:G):c.last_lit&&(D(c,!1),c.strm.avail_out===0)?p:W}function le(c,B,M,C,_){this.good_length=c,this.max_lazy=B,this.nice_length=M,this.max_chain=C,this.func=_}function Ee(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=d,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*I),this.dyn_dtree=new o.Buf16(2*(2*E+1)),this.bl_tree=new o.Buf16(2*(2*R+1)),Q(this.dyn_ltree),Q(this.dyn_dtree),Q(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(z+1),this.heap=new o.Buf16(2*b+1),Q(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*b+1),Q(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ve(c){var B;return c&&c.state?(c.total_in=c.total_out=0,c.data_type=u,(B=c.state).pending=0,B.pending_out=0,B.wrap<0&&(B.wrap=-B.wrap),B.status=B.wrap?A:F,c.adler=B.wrap===2?0:1,B.last_flush=v,s._tr_init(B),m):V(c,k)}function nt(c){var B=ve(c);return B===m&&function(M){M.window_size=2*M.w_size,Q(M.head),M.max_lazy_match=a[M.level].max_lazy,M.good_match=a[M.level].good_length,M.nice_match=a[M.level].nice_length,M.max_chain_length=a[M.level].max_chain,M.strstart=0,M.block_start=0,M.lookahead=0,M.insert=0,M.match_length=M.prev_length=O-1,M.match_available=0,M.ins_h=0}(c.state),B}function Qe(c,B,M,C,_,T){if(!c)return k;var H=1;if(B===f&&(B=6),C<0?(H=0,C=-C):15<C&&(H=2,C-=16),_<1||g<_||M!==d||C<8||15<C||B<0||9<B||T<0||x<T)return V(c,k);C===8&&(C=9);var P=new Ee;return(c.state=P).strm=c,P.wrap=H,P.gzhead=null,P.w_bits=C,P.w_size=1<<P.w_bits,P.w_mask=P.w_size-1,P.hash_bits=_+7,P.hash_size=1<<P.hash_bits,P.hash_mask=P.hash_size-1,P.hash_shift=~~((P.hash_bits+O-1)/O),P.window=new o.Buf8(2*P.w_size),P.head=new o.Buf16(P.hash_size),P.prev=new o.Buf16(P.w_size),P.lit_bufsize=1<<_+6,P.pending_buf_size=4*P.lit_bufsize,P.pending_buf=new o.Buf8(P.pending_buf_size),P.d_buf=1*P.lit_bufsize,P.l_buf=3*P.lit_bufsize,P.level=B,P.strategy=T,P.method=M,nt(c)}a=[new le(0,0,0,0,function(c,B){var M=65535;for(M>c.pending_buf_size-5&&(M=c.pending_buf_size-5);;){if(c.lookahead<=1){if(ue(c),c.lookahead===0&&B===v)return p;if(c.lookahead===0)break}c.strstart+=c.lookahead,c.lookahead=0;var C=c.block_start+M;if((c.strstart===0||c.strstart>=C)&&(c.lookahead=c.strstart-C,c.strstart=C,D(c,!1),c.strm.avail_out===0)||c.strstart-c.block_start>=c.w_size-ee&&(D(c,!1),c.strm.avail_out===0))return p}return c.insert=0,B===y?(D(c,!0),c.strm.avail_out===0?re:G):(c.strstart>c.block_start&&(D(c,!1),c.strm.avail_out),p)}),new le(4,4,8,4,ke),new le(4,5,16,8,ke),new le(4,6,32,32,ke),new le(4,4,16,16,ae),new le(8,16,32,32,ae),new le(8,16,128,128,ae),new le(8,32,128,256,ae),new le(32,128,258,1024,ae),new le(32,258,258,4096,ae)],i.deflateInit=function(c,B){return Qe(c,B,d,15,8,0)},i.deflateInit2=Qe,i.deflateReset=nt,i.deflateResetKeep=ve,i.deflateSetHeader=function(c,B){return c&&c.state?c.state.wrap!==2?k:(c.state.gzhead=B,m):k},i.deflate=function(c,B){var M,C,_,T;if(!c||!c.state||5<B||B<0)return c?V(c,k):k;if(C=c.state,!c.output||!c.input&&c.avail_in!==0||C.status===666&&B!==y)return V(c,c.avail_out===0?-5:k);if(C.strm=c,M=C.last_flush,C.last_flush=B,C.status===A)if(C.wrap===2)c.adler=0,te(C,31),te(C,139),te(C,8),C.gzhead?(te(C,(C.gzhead.text?1:0)+(C.gzhead.hcrc?2:0)+(C.gzhead.extra?4:0)+(C.gzhead.name?8:0)+(C.gzhead.comment?16:0)),te(C,255&C.gzhead.time),te(C,C.gzhead.time>>8&255),te(C,C.gzhead.time>>16&255),te(C,C.gzhead.time>>24&255),te(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),te(C,255&C.gzhead.os),C.gzhead.extra&&C.gzhead.extra.length&&(te(C,255&C.gzhead.extra.length),te(C,C.gzhead.extra.length>>8&255)),C.gzhead.hcrc&&(c.adler=h(c.adler,C.pending_buf,C.pending,0)),C.gzindex=0,C.status=69):(te(C,0),te(C,0),te(C,0),te(C,0),te(C,0),te(C,C.level===9?2:2<=C.strategy||C.level<2?4:0),te(C,3),C.status=F);else{var H=d+(C.w_bits-8<<4)<<8;H|=(2<=C.strategy||C.level<2?0:C.level<6?1:C.level===6?2:3)<<6,C.strstart!==0&&(H|=32),H+=31-H%31,C.status=F,J(C,H),C.strstart!==0&&(J(C,c.adler>>>16),J(C,65535&c.adler)),c.adler=1}if(C.status===69)if(C.gzhead.extra){for(_=C.pending;C.gzindex<(65535&C.gzhead.extra.length)&&(C.pending!==C.pending_buf_size||(C.gzhead.hcrc&&C.pending>_&&(c.adler=h(c.adler,C.pending_buf,C.pending-_,_)),j(c),_=C.pending,C.pending!==C.pending_buf_size));)te(C,255&C.gzhead.extra[C.gzindex]),C.gzindex++;C.gzhead.hcrc&&C.pending>_&&(c.adler=h(c.adler,C.pending_buf,C.pending-_,_)),C.gzindex===C.gzhead.extra.length&&(C.gzindex=0,C.status=73)}else C.status=73;if(C.status===73)if(C.gzhead.name){_=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>_&&(c.adler=h(c.adler,C.pending_buf,C.pending-_,_)),j(c),_=C.pending,C.pending===C.pending_buf_size)){T=1;break}T=C.gzindex<C.gzhead.name.length?255&C.gzhead.name.charCodeAt(C.gzindex++):0,te(C,T)}while(T!==0);C.gzhead.hcrc&&C.pending>_&&(c.adler=h(c.adler,C.pending_buf,C.pending-_,_)),T===0&&(C.gzindex=0,C.status=91)}else C.status=91;if(C.status===91)if(C.gzhead.comment){_=C.pending;do{if(C.pending===C.pending_buf_size&&(C.gzhead.hcrc&&C.pending>_&&(c.adler=h(c.adler,C.pending_buf,C.pending-_,_)),j(c),_=C.pending,C.pending===C.pending_buf_size)){T=1;break}T=C.gzindex<C.gzhead.comment.length?255&C.gzhead.comment.charCodeAt(C.gzindex++):0,te(C,T)}while(T!==0);C.gzhead.hcrc&&C.pending>_&&(c.adler=h(c.adler,C.pending_buf,C.pending-_,_)),T===0&&(C.status=103)}else C.status=103;if(C.status===103&&(C.gzhead.hcrc?(C.pending+2>C.pending_buf_size&&j(c),C.pending+2<=C.pending_buf_size&&(te(C,255&c.adler),te(C,c.adler>>8&255),c.adler=0,C.status=F)):C.status=F),C.pending!==0){if(j(c),c.avail_out===0)return C.last_flush=-1,m}else if(c.avail_in===0&&L(B)<=L(M)&&B!==y)return V(c,-5);if(C.status===666&&c.avail_in!==0)return V(c,-5);if(c.avail_in!==0||C.lookahead!==0||B!==v&&C.status!==666){var P=C.strategy===2?function(N,K){for(var q;;){if(N.lookahead===0&&(ue(N),N.lookahead===0)){if(K===v)return p;break}if(N.match_length=0,q=s._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++,q&&(D(N,!1),N.strm.avail_out===0))return p}return N.insert=0,K===y?(D(N,!0),N.strm.avail_out===0?re:G):N.last_lit&&(D(N,!1),N.strm.avail_out===0)?p:W}(C,B):C.strategy===3?function(N,K){for(var q,$,ne,pe,oe=N.window;;){if(N.lookahead<=U){if(ue(N),N.lookahead<=U&&K===v)return p;if(N.lookahead===0)break}if(N.match_length=0,N.lookahead>=O&&0<N.strstart&&($=oe[ne=N.strstart-1])===oe[++ne]&&$===oe[++ne]&&$===oe[++ne]){pe=N.strstart+U;do;while($===oe[++ne]&&$===oe[++ne]&&$===oe[++ne]&&$===oe[++ne]&&$===oe[++ne]&&$===oe[++ne]&&$===oe[++ne]&&$===oe[++ne]&&ne<pe);N.match_length=U-(pe-ne),N.match_length>N.lookahead&&(N.match_length=N.lookahead)}if(N.match_length>=O?(q=s._tr_tally(N,1,N.match_length-O),N.lookahead-=N.match_length,N.strstart+=N.match_length,N.match_length=0):(q=s._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++),q&&(D(N,!1),N.strm.avail_out===0))return p}return N.insert=0,K===y?(D(N,!0),N.strm.avail_out===0?re:G):N.last_lit&&(D(N,!1),N.strm.avail_out===0)?p:W}(C,B):a[C.level].func(C,B);if(P!==re&&P!==G||(C.status=666),P===p||P===re)return c.avail_out===0&&(C.last_flush=-1),m;if(P===W&&(B===1?s._tr_align(C):B!==5&&(s._tr_stored_block(C,0,0,!1),B===3&&(Q(C.head),C.lookahead===0&&(C.strstart=0,C.block_start=0,C.insert=0))),j(c),c.avail_out===0))return C.last_flush=-1,m}return B!==y?m:C.wrap<=0?1:(C.wrap===2?(te(C,255&c.adler),te(C,c.adler>>8&255),te(C,c.adler>>16&255),te(C,c.adler>>24&255),te(C,255&c.total_in),te(C,c.total_in>>8&255),te(C,c.total_in>>16&255),te(C,c.total_in>>24&255)):(J(C,c.adler>>>16),J(C,65535&c.adler)),j(c),0<C.wrap&&(C.wrap=-C.wrap),C.pending!==0?m:1)},i.deflateEnd=function(c){var B;return c&&c.state?(B=c.state.status)!==A&&B!==69&&B!==73&&B!==91&&B!==103&&B!==F&&B!==666?V(c,k):(c.state=null,B===F?V(c,-3):m):k},i.deflateSetDictionary=function(c,B){var M,C,_,T,H,P,N,K,q=B.length;if(!c||!c.state||(T=(M=c.state).wrap)===2||T===1&&M.status!==A||M.lookahead)return k;for(T===1&&(c.adler=l(c.adler,B,q,0)),M.wrap=0,q>=M.w_size&&(T===0&&(Q(M.head),M.strstart=0,M.block_start=0,M.insert=0),K=new o.Buf8(M.w_size),o.arraySet(K,B,q-M.w_size,M.w_size,0),B=K,q=M.w_size),H=c.avail_in,P=c.next_in,N=c.input,c.avail_in=q,c.next_in=0,c.input=B,ue(M);M.lookahead>=O;){for(C=M.strstart,_=M.lookahead-(O-1);M.ins_h=(M.ins_h<<M.hash_shift^M.window[C+O-1])&M.hash_mask,M.prev[C&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=C,C++,--_;);M.strstart=C,M.lookahead=O-1,ue(M)}return M.strstart+=M.lookahead,M.block_start=M.strstart,M.insert=M.lookahead,M.lookahead=0,M.match_length=M.prev_length=O-1,M.match_available=0,c.next_in=P,c.input=N,c.avail_in=H,M.wrap=T,m},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(a,o){var s,l,h,w,v,y,m,k,f,x,u,d,g,b,E,R,I,z,O,U,ee,A,F,p,W;s=a.state,l=a.next_in,p=a.input,h=l+(a.avail_in-5),w=a.next_out,W=a.output,v=w-(o-a.avail_out),y=w+(a.avail_out-257),m=s.dmax,k=s.wsize,f=s.whave,x=s.wnext,u=s.window,d=s.hold,g=s.bits,b=s.lencode,E=s.distcode,R=(1<<s.lenbits)-1,I=(1<<s.distbits)-1;e:do{g<15&&(d+=p[l++]<<g,g+=8,d+=p[l++]<<g,g+=8),z=b[d&R];t:for(;;){if(d>>>=O=z>>>24,g-=O,(O=z>>>16&255)===0)W[w++]=65535&z;else{if(!(16&O)){if(!(64&O)){z=b[(65535&z)+(d&(1<<O)-1)];continue t}if(32&O){s.mode=12;break e}a.msg="invalid literal/length code",s.mode=30;break e}U=65535&z,(O&=15)&&(g<O&&(d+=p[l++]<<g,g+=8),U+=d&(1<<O)-1,d>>>=O,g-=O),g<15&&(d+=p[l++]<<g,g+=8,d+=p[l++]<<g,g+=8),z=E[d&I];n:for(;;){if(d>>>=O=z>>>24,g-=O,!(16&(O=z>>>16&255))){if(!(64&O)){z=E[(65535&z)+(d&(1<<O)-1)];continue n}a.msg="invalid distance code",s.mode=30;break e}if(ee=65535&z,g<(O&=15)&&(d+=p[l++]<<g,(g+=8)<O&&(d+=p[l++]<<g,g+=8)),m<(ee+=d&(1<<O)-1)){a.msg="invalid distance too far back",s.mode=30;break e}if(d>>>=O,g-=O,(O=w-v)<ee){if(f<(O=ee-O)&&s.sane){a.msg="invalid distance too far back",s.mode=30;break e}if(F=u,(A=0)===x){if(A+=k-O,O<U){for(U-=O;W[w++]=u[A++],--O;);A=w-ee,F=W}}else if(x<O){if(A+=k+x-O,(O-=x)<U){for(U-=O;W[w++]=u[A++],--O;);if(A=0,x<U){for(U-=O=x;W[w++]=u[A++],--O;);A=w-ee,F=W}}}else if(A+=x-O,O<U){for(U-=O;W[w++]=u[A++],--O;);A=w-ee,F=W}for(;2<U;)W[w++]=F[A++],W[w++]=F[A++],W[w++]=F[A++],U-=3;U&&(W[w++]=F[A++],1<U&&(W[w++]=F[A++]))}else{for(A=w-ee;W[w++]=W[A++],W[w++]=W[A++],W[w++]=W[A++],2<(U-=3););U&&(W[w++]=W[A++],1<U&&(W[w++]=W[A++]))}break}}break}}while(l<h&&w<y);l-=U=g>>3,d&=(1<<(g-=U<<3))-1,a.next_in=l,a.next_out=w,a.avail_in=l<h?h-l+5:5-(l-h),a.avail_out=w<y?y-w+257:257-(w-y),s.hold=d,s.bits=g}},{}],49:[function(n,r,i){var a=n("../utils/common"),o=n("./adler32"),s=n("./crc32"),l=n("./inffast"),h=n("./inftrees"),w=1,v=2,y=0,m=-2,k=1,f=852,x=592;function u(A){return(A>>>24&255)+(A>>>8&65280)+((65280&A)<<8)+((255&A)<<24)}function d(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new a.Buf16(320),this.work=new a.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function g(A){var F;return A&&A.state?(F=A.state,A.total_in=A.total_out=F.total=0,A.msg="",F.wrap&&(A.adler=1&F.wrap),F.mode=k,F.last=0,F.havedict=0,F.dmax=32768,F.head=null,F.hold=0,F.bits=0,F.lencode=F.lendyn=new a.Buf32(f),F.distcode=F.distdyn=new a.Buf32(x),F.sane=1,F.back=-1,y):m}function b(A){var F;return A&&A.state?((F=A.state).wsize=0,F.whave=0,F.wnext=0,g(A)):m}function E(A,F){var p,W;return A&&A.state?(W=A.state,F<0?(p=0,F=-F):(p=1+(F>>4),F<48&&(F&=15)),F&&(F<8||15<F)?m:(W.window!==null&&W.wbits!==F&&(W.window=null),W.wrap=p,W.wbits=F,b(A))):m}function R(A,F){var p,W;return A?(W=new d,(A.state=W).window=null,(p=E(A,F))!==y&&(A.state=null),p):m}var I,z,O=!0;function U(A){if(O){var F;for(I=new a.Buf32(512),z=new a.Buf32(32),F=0;F<144;)A.lens[F++]=8;for(;F<256;)A.lens[F++]=9;for(;F<280;)A.lens[F++]=7;for(;F<288;)A.lens[F++]=8;for(h(w,A.lens,0,288,I,0,A.work,{bits:9}),F=0;F<32;)A.lens[F++]=5;h(v,A.lens,0,32,z,0,A.work,{bits:5}),O=!1}A.lencode=I,A.lenbits=9,A.distcode=z,A.distbits=5}function ee(A,F,p,W){var re,G=A.state;return G.window===null&&(G.wsize=1<<G.wbits,G.wnext=0,G.whave=0,G.window=new a.Buf8(G.wsize)),W>=G.wsize?(a.arraySet(G.window,F,p-G.wsize,G.wsize,0),G.wnext=0,G.whave=G.wsize):(W<(re=G.wsize-G.wnext)&&(re=W),a.arraySet(G.window,F,p-W,re,G.wnext),(W-=re)?(a.arraySet(G.window,F,p-W,W,0),G.wnext=W,G.whave=G.wsize):(G.wnext+=re,G.wnext===G.wsize&&(G.wnext=0),G.whave<G.wsize&&(G.whave+=re))),0}i.inflateReset=b,i.inflateReset2=E,i.inflateResetKeep=g,i.inflateInit=function(A){return R(A,15)},i.inflateInit2=R,i.inflate=function(A,F){var p,W,re,G,V,L,Q,j,D,te,J,Y,ue,ke,ae,le,Ee,ve,nt,Qe,c,B,M,C,_=0,T=new a.Buf8(4),H=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!A||!A.state||!A.output||!A.input&&A.avail_in!==0)return m;(p=A.state).mode===12&&(p.mode=13),V=A.next_out,re=A.output,Q=A.avail_out,G=A.next_in,W=A.input,L=A.avail_in,j=p.hold,D=p.bits,te=L,J=Q,B=y;e:for(;;)switch(p.mode){case k:if(p.wrap===0){p.mode=13;break}for(;D<16;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}if(2&p.wrap&&j===35615){T[p.check=0]=255&j,T[1]=j>>>8&255,p.check=s(p.check,T,2,0),D=j=0,p.mode=2;break}if(p.flags=0,p.head&&(p.head.done=!1),!(1&p.wrap)||(((255&j)<<8)+(j>>8))%31){A.msg="incorrect header check",p.mode=30;break}if((15&j)!=8){A.msg="unknown compression method",p.mode=30;break}if(D-=4,c=8+(15&(j>>>=4)),p.wbits===0)p.wbits=c;else if(c>p.wbits){A.msg="invalid window size",p.mode=30;break}p.dmax=1<<c,A.adler=p.check=1,p.mode=512&j?10:12,D=j=0;break;case 2:for(;D<16;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}if(p.flags=j,(255&p.flags)!=8){A.msg="unknown compression method",p.mode=30;break}if(57344&p.flags){A.msg="unknown header flags set",p.mode=30;break}p.head&&(p.head.text=j>>8&1),512&p.flags&&(T[0]=255&j,T[1]=j>>>8&255,p.check=s(p.check,T,2,0)),D=j=0,p.mode=3;case 3:for(;D<32;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}p.head&&(p.head.time=j),512&p.flags&&(T[0]=255&j,T[1]=j>>>8&255,T[2]=j>>>16&255,T[3]=j>>>24&255,p.check=s(p.check,T,4,0)),D=j=0,p.mode=4;case 4:for(;D<16;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}p.head&&(p.head.xflags=255&j,p.head.os=j>>8),512&p.flags&&(T[0]=255&j,T[1]=j>>>8&255,p.check=s(p.check,T,2,0)),D=j=0,p.mode=5;case 5:if(1024&p.flags){for(;D<16;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}p.length=j,p.head&&(p.head.extra_len=j),512&p.flags&&(T[0]=255&j,T[1]=j>>>8&255,p.check=s(p.check,T,2,0)),D=j=0}else p.head&&(p.head.extra=null);p.mode=6;case 6:if(1024&p.flags&&(L<(Y=p.length)&&(Y=L),Y&&(p.head&&(c=p.head.extra_len-p.length,p.head.extra||(p.head.extra=new Array(p.head.extra_len)),a.arraySet(p.head.extra,W,G,Y,c)),512&p.flags&&(p.check=s(p.check,W,Y,G)),L-=Y,G+=Y,p.length-=Y),p.length))break e;p.length=0,p.mode=7;case 7:if(2048&p.flags){if(L===0)break e;for(Y=0;c=W[G+Y++],p.head&&c&&p.length<65536&&(p.head.name+=String.fromCharCode(c)),c&&Y<L;);if(512&p.flags&&(p.check=s(p.check,W,Y,G)),L-=Y,G+=Y,c)break e}else p.head&&(p.head.name=null);p.length=0,p.mode=8;case 8:if(4096&p.flags){if(L===0)break e;for(Y=0;c=W[G+Y++],p.head&&c&&p.length<65536&&(p.head.comment+=String.fromCharCode(c)),c&&Y<L;);if(512&p.flags&&(p.check=s(p.check,W,Y,G)),L-=Y,G+=Y,c)break e}else p.head&&(p.head.comment=null);p.mode=9;case 9:if(512&p.flags){for(;D<16;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}if(j!==(65535&p.check)){A.msg="header crc mismatch",p.mode=30;break}D=j=0}p.head&&(p.head.hcrc=p.flags>>9&1,p.head.done=!0),A.adler=p.check=0,p.mode=12;break;case 10:for(;D<32;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}A.adler=p.check=u(j),D=j=0,p.mode=11;case 11:if(p.havedict===0)return A.next_out=V,A.avail_out=Q,A.next_in=G,A.avail_in=L,p.hold=j,p.bits=D,2;A.adler=p.check=1,p.mode=12;case 12:if(F===5||F===6)break e;case 13:if(p.last){j>>>=7&D,D-=7&D,p.mode=27;break}for(;D<3;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}switch(p.last=1&j,D-=1,3&(j>>>=1)){case 0:p.mode=14;break;case 1:if(U(p),p.mode=20,F!==6)break;j>>>=2,D-=2;break e;case 2:p.mode=17;break;case 3:A.msg="invalid block type",p.mode=30}j>>>=2,D-=2;break;case 14:for(j>>>=7&D,D-=7&D;D<32;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}if((65535&j)!=(j>>>16^65535)){A.msg="invalid stored block lengths",p.mode=30;break}if(p.length=65535&j,D=j=0,p.mode=15,F===6)break e;case 15:p.mode=16;case 16:if(Y=p.length){if(L<Y&&(Y=L),Q<Y&&(Y=Q),Y===0)break e;a.arraySet(re,W,G,Y,V),L-=Y,G+=Y,Q-=Y,V+=Y,p.length-=Y;break}p.mode=12;break;case 17:for(;D<14;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}if(p.nlen=257+(31&j),j>>>=5,D-=5,p.ndist=1+(31&j),j>>>=5,D-=5,p.ncode=4+(15&j),j>>>=4,D-=4,286<p.nlen||30<p.ndist){A.msg="too many length or distance symbols",p.mode=30;break}p.have=0,p.mode=18;case 18:for(;p.have<p.ncode;){for(;D<3;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}p.lens[H[p.have++]]=7&j,j>>>=3,D-=3}for(;p.have<19;)p.lens[H[p.have++]]=0;if(p.lencode=p.lendyn,p.lenbits=7,M={bits:p.lenbits},B=h(0,p.lens,0,19,p.lencode,0,p.work,M),p.lenbits=M.bits,B){A.msg="invalid code lengths set",p.mode=30;break}p.have=0,p.mode=19;case 19:for(;p.have<p.nlen+p.ndist;){for(;le=(_=p.lencode[j&(1<<p.lenbits)-1])>>>16&255,Ee=65535&_,!((ae=_>>>24)<=D);){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}if(Ee<16)j>>>=ae,D-=ae,p.lens[p.have++]=Ee;else{if(Ee===16){for(C=ae+2;D<C;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}if(j>>>=ae,D-=ae,p.have===0){A.msg="invalid bit length repeat",p.mode=30;break}c=p.lens[p.have-1],Y=3+(3&j),j>>>=2,D-=2}else if(Ee===17){for(C=ae+3;D<C;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}D-=ae,c=0,Y=3+(7&(j>>>=ae)),j>>>=3,D-=3}else{for(C=ae+7;D<C;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}D-=ae,c=0,Y=11+(127&(j>>>=ae)),j>>>=7,D-=7}if(p.have+Y>p.nlen+p.ndist){A.msg="invalid bit length repeat",p.mode=30;break}for(;Y--;)p.lens[p.have++]=c}}if(p.mode===30)break;if(p.lens[256]===0){A.msg="invalid code -- missing end-of-block",p.mode=30;break}if(p.lenbits=9,M={bits:p.lenbits},B=h(w,p.lens,0,p.nlen,p.lencode,0,p.work,M),p.lenbits=M.bits,B){A.msg="invalid literal/lengths set",p.mode=30;break}if(p.distbits=6,p.distcode=p.distdyn,M={bits:p.distbits},B=h(v,p.lens,p.nlen,p.ndist,p.distcode,0,p.work,M),p.distbits=M.bits,B){A.msg="invalid distances set",p.mode=30;break}if(p.mode=20,F===6)break e;case 20:p.mode=21;case 21:if(6<=L&&258<=Q){A.next_out=V,A.avail_out=Q,A.next_in=G,A.avail_in=L,p.hold=j,p.bits=D,l(A,J),V=A.next_out,re=A.output,Q=A.avail_out,G=A.next_in,W=A.input,L=A.avail_in,j=p.hold,D=p.bits,p.mode===12&&(p.back=-1);break}for(p.back=0;le=(_=p.lencode[j&(1<<p.lenbits)-1])>>>16&255,Ee=65535&_,!((ae=_>>>24)<=D);){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}if(le&&!(240&le)){for(ve=ae,nt=le,Qe=Ee;le=(_=p.lencode[Qe+((j&(1<<ve+nt)-1)>>ve)])>>>16&255,Ee=65535&_,!(ve+(ae=_>>>24)<=D);){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}j>>>=ve,D-=ve,p.back+=ve}if(j>>>=ae,D-=ae,p.back+=ae,p.length=Ee,le===0){p.mode=26;break}if(32&le){p.back=-1,p.mode=12;break}if(64&le){A.msg="invalid literal/length code",p.mode=30;break}p.extra=15&le,p.mode=22;case 22:if(p.extra){for(C=p.extra;D<C;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}p.length+=j&(1<<p.extra)-1,j>>>=p.extra,D-=p.extra,p.back+=p.extra}p.was=p.length,p.mode=23;case 23:for(;le=(_=p.distcode[j&(1<<p.distbits)-1])>>>16&255,Ee=65535&_,!((ae=_>>>24)<=D);){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}if(!(240&le)){for(ve=ae,nt=le,Qe=Ee;le=(_=p.distcode[Qe+((j&(1<<ve+nt)-1)>>ve)])>>>16&255,Ee=65535&_,!(ve+(ae=_>>>24)<=D);){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}j>>>=ve,D-=ve,p.back+=ve}if(j>>>=ae,D-=ae,p.back+=ae,64&le){A.msg="invalid distance code",p.mode=30;break}p.offset=Ee,p.extra=15&le,p.mode=24;case 24:if(p.extra){for(C=p.extra;D<C;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}p.offset+=j&(1<<p.extra)-1,j>>>=p.extra,D-=p.extra,p.back+=p.extra}if(p.offset>p.dmax){A.msg="invalid distance too far back",p.mode=30;break}p.mode=25;case 25:if(Q===0)break e;if(Y=J-Q,p.offset>Y){if((Y=p.offset-Y)>p.whave&&p.sane){A.msg="invalid distance too far back",p.mode=30;break}ue=Y>p.wnext?(Y-=p.wnext,p.wsize-Y):p.wnext-Y,Y>p.length&&(Y=p.length),ke=p.window}else ke=re,ue=V-p.offset,Y=p.length;for(Q<Y&&(Y=Q),Q-=Y,p.length-=Y;re[V++]=ke[ue++],--Y;);p.length===0&&(p.mode=21);break;case 26:if(Q===0)break e;re[V++]=p.length,Q--,p.mode=21;break;case 27:if(p.wrap){for(;D<32;){if(L===0)break e;L--,j|=W[G++]<<D,D+=8}if(J-=Q,A.total_out+=J,p.total+=J,J&&(A.adler=p.check=p.flags?s(p.check,re,J,V-J):o(p.check,re,J,V-J)),J=Q,(p.flags?j:u(j))!==p.check){A.msg="incorrect data check",p.mode=30;break}D=j=0}p.mode=28;case 28:if(p.wrap&&p.flags){for(;D<32;){if(L===0)break e;L--,j+=W[G++]<<D,D+=8}if(j!==(4294967295&p.total)){A.msg="incorrect length check",p.mode=30;break}D=j=0}p.mode=29;case 29:B=1;break e;case 30:B=-3;break e;case 31:return-4;case 32:default:return m}return A.next_out=V,A.avail_out=Q,A.next_in=G,A.avail_in=L,p.hold=j,p.bits=D,(p.wsize||J!==A.avail_out&&p.mode<30&&(p.mode<27||F!==4))&&ee(A,A.output,A.next_out,J-A.avail_out)?(p.mode=31,-4):(te-=A.avail_in,J-=A.avail_out,A.total_in+=te,A.total_out+=J,p.total+=J,p.wrap&&J&&(A.adler=p.check=p.flags?s(p.check,re,J,A.next_out-J):o(p.check,re,J,A.next_out-J)),A.data_type=p.bits+(p.last?64:0)+(p.mode===12?128:0)+(p.mode===20||p.mode===15?256:0),(te==0&&J===0||F===4)&&B===y&&(B=-5),B)},i.inflateEnd=function(A){if(!A||!A.state)return m;var F=A.state;return F.window&&(F.window=null),A.state=null,y},i.inflateGetHeader=function(A,F){var p;return A&&A.state&&2&(p=A.state).wrap?((p.head=F).done=!1,y):m},i.inflateSetDictionary=function(A,F){var p,W=F.length;return A&&A.state?(p=A.state).wrap!==0&&p.mode!==11?m:p.mode===11&&o(1,F,W,0)!==p.check?-3:ee(A,F,W,W)?(p.mode=31,-4):(p.havedict=1,y):m},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var a=n("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],h=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(w,v,y,m,k,f,x,u){var d,g,b,E,R,I,z,O,U,ee=u.bits,A=0,F=0,p=0,W=0,re=0,G=0,V=0,L=0,Q=0,j=0,D=null,te=0,J=new a.Buf16(16),Y=new a.Buf16(16),ue=null,ke=0;for(A=0;A<=15;A++)J[A]=0;for(F=0;F<m;F++)J[v[y+F]]++;for(re=ee,W=15;1<=W&&J[W]===0;W--);if(W<re&&(re=W),W===0)return k[f++]=20971520,k[f++]=20971520,u.bits=1,0;for(p=1;p<W&&J[p]===0;p++);for(re<p&&(re=p),A=L=1;A<=15;A++)if(L<<=1,(L-=J[A])<0)return-1;if(0<L&&(w===0||W!==1))return-1;for(Y[1]=0,A=1;A<15;A++)Y[A+1]=Y[A]+J[A];for(F=0;F<m;F++)v[y+F]!==0&&(x[Y[v[y+F]]++]=F);if(I=w===0?(D=ue=x,19):w===1?(D=o,te-=257,ue=s,ke-=257,256):(D=l,ue=h,-1),A=p,R=f,V=F=j=0,b=-1,E=(Q=1<<(G=re))-1,w===1&&852<Q||w===2&&592<Q)return 1;for(;;){for(z=A-V,U=x[F]<I?(O=0,x[F]):x[F]>I?(O=ue[ke+x[F]],D[te+x[F]]):(O=96,0),d=1<<A-V,p=g=1<<G;k[R+(j>>V)+(g-=d)]=z<<24|O<<16|U|0,g!==0;);for(d=1<<A-1;j&d;)d>>=1;if(d!==0?(j&=d-1,j+=d):j=0,F++,--J[A]==0){if(A===W)break;A=v[y+x[F]]}if(re<A&&(j&E)!==b){for(V===0&&(V=re),R+=p,L=1<<(G=A-V);G+V<W&&!((L-=J[G+V])<=0);)G++,L<<=1;if(Q+=1<<G,w===1&&852<Q||w===2&&592<Q)return 1;k[b=j&E]=re<<24|G<<16|R-f|0}}return j!==0&&(k[R+j]=A-V<<24|64<<16|0),u.bits=re,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var a=n("../utils/common"),o=0,s=1;function l(_){for(var T=_.length;0<=--T;)_[T]=0}var h=0,w=29,v=256,y=v+1+w,m=30,k=19,f=2*y+1,x=15,u=16,d=7,g=256,b=16,E=17,R=18,I=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],z=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],O=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ee=new Array(2*(y+2));l(ee);var A=new Array(2*m);l(A);var F=new Array(512);l(F);var p=new Array(256);l(p);var W=new Array(w);l(W);var re,G,V,L=new Array(m);function Q(_,T,H,P,N){this.static_tree=_,this.extra_bits=T,this.extra_base=H,this.elems=P,this.max_length=N,this.has_stree=_&&_.length}function j(_,T){this.dyn_tree=_,this.max_code=0,this.stat_desc=T}function D(_){return _<256?F[_]:F[256+(_>>>7)]}function te(_,T){_.pending_buf[_.pending++]=255&T,_.pending_buf[_.pending++]=T>>>8&255}function J(_,T,H){_.bi_valid>u-H?(_.bi_buf|=T<<_.bi_valid&65535,te(_,_.bi_buf),_.bi_buf=T>>u-_.bi_valid,_.bi_valid+=H-u):(_.bi_buf|=T<<_.bi_valid&65535,_.bi_valid+=H)}function Y(_,T,H){J(_,H[2*T],H[2*T+1])}function ue(_,T){for(var H=0;H|=1&_,_>>>=1,H<<=1,0<--T;);return H>>>1}function ke(_,T,H){var P,N,K=new Array(x+1),q=0;for(P=1;P<=x;P++)K[P]=q=q+H[P-1]<<1;for(N=0;N<=T;N++){var $=_[2*N+1];$!==0&&(_[2*N]=ue(K[$]++,$))}}function ae(_){var T;for(T=0;T<y;T++)_.dyn_ltree[2*T]=0;for(T=0;T<m;T++)_.dyn_dtree[2*T]=0;for(T=0;T<k;T++)_.bl_tree[2*T]=0;_.dyn_ltree[2*g]=1,_.opt_len=_.static_len=0,_.last_lit=_.matches=0}function le(_){8<_.bi_valid?te(_,_.bi_buf):0<_.bi_valid&&(_.pending_buf[_.pending++]=_.bi_buf),_.bi_buf=0,_.bi_valid=0}function Ee(_,T,H,P){var N=2*T,K=2*H;return _[N]<_[K]||_[N]===_[K]&&P[T]<=P[H]}function ve(_,T,H){for(var P=_.heap[H],N=H<<1;N<=_.heap_len&&(N<_.heap_len&&Ee(T,_.heap[N+1],_.heap[N],_.depth)&&N++,!Ee(T,P,_.heap[N],_.depth));)_.heap[H]=_.heap[N],H=N,N<<=1;_.heap[H]=P}function nt(_,T,H){var P,N,K,q,$=0;if(_.last_lit!==0)for(;P=_.pending_buf[_.d_buf+2*$]<<8|_.pending_buf[_.d_buf+2*$+1],N=_.pending_buf[_.l_buf+$],$++,P===0?Y(_,N,T):(Y(_,(K=p[N])+v+1,T),(q=I[K])!==0&&J(_,N-=W[K],q),Y(_,K=D(--P),H),(q=z[K])!==0&&J(_,P-=L[K],q)),$<_.last_lit;);Y(_,g,T)}function Qe(_,T){var H,P,N,K=T.dyn_tree,q=T.stat_desc.static_tree,$=T.stat_desc.has_stree,ne=T.stat_desc.elems,pe=-1;for(_.heap_len=0,_.heap_max=f,H=0;H<ne;H++)K[2*H]!==0?(_.heap[++_.heap_len]=pe=H,_.depth[H]=0):K[2*H+1]=0;for(;_.heap_len<2;)K[2*(N=_.heap[++_.heap_len]=pe<2?++pe:0)]=1,_.depth[N]=0,_.opt_len--,$&&(_.static_len-=q[2*N+1]);for(T.max_code=pe,H=_.heap_len>>1;1<=H;H--)ve(_,K,H);for(N=ne;H=_.heap[1],_.heap[1]=_.heap[_.heap_len--],ve(_,K,1),P=_.heap[1],_.heap[--_.heap_max]=H,_.heap[--_.heap_max]=P,K[2*N]=K[2*H]+K[2*P],_.depth[N]=(_.depth[H]>=_.depth[P]?_.depth[H]:_.depth[P])+1,K[2*H+1]=K[2*P+1]=N,_.heap[1]=N++,ve(_,K,1),2<=_.heap_len;);_.heap[--_.heap_max]=_.heap[1],function(oe,Fe){var Gn,gt,$n,be,Ur,ca,_t=Fe.dyn_tree,Is=Fe.max_code,id=Fe.stat_desc.static_tree,ad=Fe.stat_desc.has_stree,od=Fe.stat_desc.extra_bits,Ts=Fe.stat_desc.extra_base,Zn=Fe.stat_desc.max_length,Br=0;for(be=0;be<=x;be++)oe.bl_count[be]=0;for(_t[2*oe.heap[oe.heap_max]+1]=0,Gn=oe.heap_max+1;Gn<f;Gn++)Zn<(be=_t[2*_t[2*(gt=oe.heap[Gn])+1]+1]+1)&&(be=Zn,Br++),_t[2*gt+1]=be,Is<gt||(oe.bl_count[be]++,Ur=0,Ts<=gt&&(Ur=od[gt-Ts]),ca=_t[2*gt],oe.opt_len+=ca*(be+Ur),ad&&(oe.static_len+=ca*(id[2*gt+1]+Ur)));if(Br!==0){do{for(be=Zn-1;oe.bl_count[be]===0;)be--;oe.bl_count[be]--,oe.bl_count[be+1]+=2,oe.bl_count[Zn]--,Br-=2}while(0<Br);for(be=Zn;be!==0;be--)for(gt=oe.bl_count[be];gt!==0;)Is<($n=oe.heap[--Gn])||(_t[2*$n+1]!==be&&(oe.opt_len+=(be-_t[2*$n+1])*_t[2*$n],_t[2*$n+1]=be),gt--)}}(_,T),ke(K,pe,_.bl_count)}function c(_,T,H){var P,N,K=-1,q=T[1],$=0,ne=7,pe=4;for(q===0&&(ne=138,pe=3),T[2*(H+1)+1]=65535,P=0;P<=H;P++)N=q,q=T[2*(P+1)+1],++$<ne&&N===q||($<pe?_.bl_tree[2*N]+=$:N!==0?(N!==K&&_.bl_tree[2*N]++,_.bl_tree[2*b]++):$<=10?_.bl_tree[2*E]++:_.bl_tree[2*R]++,K=N,pe=($=0)===q?(ne=138,3):N===q?(ne=6,3):(ne=7,4))}function B(_,T,H){var P,N,K=-1,q=T[1],$=0,ne=7,pe=4;for(q===0&&(ne=138,pe=3),P=0;P<=H;P++)if(N=q,q=T[2*(P+1)+1],!(++$<ne&&N===q)){if($<pe)for(;Y(_,N,_.bl_tree),--$!=0;);else N!==0?(N!==K&&(Y(_,N,_.bl_tree),$--),Y(_,b,_.bl_tree),J(_,$-3,2)):$<=10?(Y(_,E,_.bl_tree),J(_,$-3,3)):(Y(_,R,_.bl_tree),J(_,$-11,7));K=N,pe=($=0)===q?(ne=138,3):N===q?(ne=6,3):(ne=7,4)}}l(L);var M=!1;function C(_,T,H,P){J(_,(h<<1)+(P?1:0),3),function(N,K,q,$){le(N),$&&(te(N,q),te(N,~q)),a.arraySet(N.pending_buf,N.window,K,q,N.pending),N.pending+=q}(_,T,H,!0)}i._tr_init=function(_){M||(function(){var T,H,P,N,K,q=new Array(x+1);for(N=P=0;N<w-1;N++)for(W[N]=P,T=0;T<1<<I[N];T++)p[P++]=N;for(p[P-1]=N,N=K=0;N<16;N++)for(L[N]=K,T=0;T<1<<z[N];T++)F[K++]=N;for(K>>=7;N<m;N++)for(L[N]=K<<7,T=0;T<1<<z[N]-7;T++)F[256+K++]=N;for(H=0;H<=x;H++)q[H]=0;for(T=0;T<=143;)ee[2*T+1]=8,T++,q[8]++;for(;T<=255;)ee[2*T+1]=9,T++,q[9]++;for(;T<=279;)ee[2*T+1]=7,T++,q[7]++;for(;T<=287;)ee[2*T+1]=8,T++,q[8]++;for(ke(ee,y+1,q),T=0;T<m;T++)A[2*T+1]=5,A[2*T]=ue(T,5);re=new Q(ee,I,v+1,y,x),G=new Q(A,z,0,m,x),V=new Q(new Array(0),O,0,k,d)}(),M=!0),_.l_desc=new j(_.dyn_ltree,re),_.d_desc=new j(_.dyn_dtree,G),_.bl_desc=new j(_.bl_tree,V),_.bi_buf=0,_.bi_valid=0,ae(_)},i._tr_stored_block=C,i._tr_flush_block=function(_,T,H,P){var N,K,q=0;0<_.level?(_.strm.data_type===2&&(_.strm.data_type=function($){var ne,pe=4093624447;for(ne=0;ne<=31;ne++,pe>>>=1)if(1&pe&&$.dyn_ltree[2*ne]!==0)return o;if($.dyn_ltree[18]!==0||$.dyn_ltree[20]!==0||$.dyn_ltree[26]!==0)return s;for(ne=32;ne<v;ne++)if($.dyn_ltree[2*ne]!==0)return s;return o}(_)),Qe(_,_.l_desc),Qe(_,_.d_desc),q=function($){var ne;for(c($,$.dyn_ltree,$.l_desc.max_code),c($,$.dyn_dtree,$.d_desc.max_code),Qe($,$.bl_desc),ne=k-1;3<=ne&&$.bl_tree[2*U[ne]+1]===0;ne--);return $.opt_len+=3*(ne+1)+5+5+4,ne}(_),N=_.opt_len+3+7>>>3,(K=_.static_len+3+7>>>3)<=N&&(N=K)):N=K=H+5,H+4<=N&&T!==-1?C(_,T,H,P):_.strategy===4||K===N?(J(_,2+(P?1:0),3),nt(_,ee,A)):(J(_,4+(P?1:0),3),function($,ne,pe,oe){var Fe;for(J($,ne-257,5),J($,pe-1,5),J($,oe-4,4),Fe=0;Fe<oe;Fe++)J($,$.bl_tree[2*U[Fe]+1],3);B($,$.dyn_ltree,ne-1),B($,$.dyn_dtree,pe-1)}(_,_.l_desc.max_code+1,_.d_desc.max_code+1,q+1),nt(_,_.dyn_ltree,_.dyn_dtree)),ae(_),P&&le(_)},i._tr_tally=function(_,T,H){return _.pending_buf[_.d_buf+2*_.last_lit]=T>>>8&255,_.pending_buf[_.d_buf+2*_.last_lit+1]=255&T,_.pending_buf[_.l_buf+_.last_lit]=255&H,_.last_lit++,T===0?_.dyn_ltree[2*H]++:(_.matches++,T--,_.dyn_ltree[2*(p[H]+v+1)]++,_.dyn_dtree[2*D(T)]++),_.last_lit===_.lit_bufsize-1},i._tr_align=function(_){J(_,2,3),Y(_,g,ee),function(T){T.bi_valid===16?(te(T,T.bi_buf),T.bi_buf=0,T.bi_valid=0):8<=T.bi_valid&&(T.pending_buf[T.pending++]=255&T.bi_buf,T.bi_buf>>=8,T.bi_valid-=8)}(_)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(a){(function(o,s){if(!o.setImmediate){var l,h,w,v,y=1,m={},k=!1,f=o.document,x=Object.getPrototypeOf&&Object.getPrototypeOf(o);x=x&&x.setTimeout?x:o,l={}.toString.call(o.process)==="[object process]"?function(b){process.nextTick(function(){d(b)})}:function(){if(o.postMessage&&!o.importScripts){var b=!0,E=o.onmessage;return o.onmessage=function(){b=!1},o.postMessage("","*"),o.onmessage=E,b}}()?(v="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",g,!1):o.attachEvent("onmessage",g),function(b){o.postMessage(v+b,"*")}):o.MessageChannel?((w=new MessageChannel).port1.onmessage=function(b){d(b.data)},function(b){w.port2.postMessage(b)}):f&&"onreadystatechange"in f.createElement("script")?(h=f.documentElement,function(b){var E=f.createElement("script");E.onreadystatechange=function(){d(b),E.onreadystatechange=null,h.removeChild(E),E=null},h.appendChild(E)}):function(b){setTimeout(d,0,b)},x.setImmediate=function(b){typeof b!="function"&&(b=new Function(""+b));for(var E=new Array(arguments.length-1),R=0;R<E.length;R++)E[R]=arguments[R+1];var I={callback:b,args:E};return m[y]=I,l(y),y++},x.clearImmediate=u}function u(b){delete m[b]}function d(b){if(k)setTimeout(d,0,b);else{var E=m[b];if(E){k=!0;try{(function(R){var I=R.callback,z=R.args;switch(z.length){case 0:I();break;case 1:I(z[0]);break;case 2:I(z[0],z[1]);break;case 3:I(z[0],z[1],z[2]);break;default:I.apply(s,z)}})(E)}finally{u(b),k=!1}}}}function g(b){b.source===o&&typeof b.data=="string"&&b.data.indexOf(v)===0&&d(+b.data.slice(v.length))}})(typeof self>"u"?a===void 0?this:a:self)}).call(this,typeof Wr<"u"?Wr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(rd);var Xp=rd.exports;const eh=Bl(Xp),vn={Product:{icon:lr,color:"bg-indigo-500"},Architecture:{icon:Do,color:"bg-blue-500"},Development:{icon:jt,color:"bg-emerald-500"},Backend:{icon:ed,color:"bg-orange-500"},Database:{icon:Po,color:"bg-cyan-500"},Services:{icon:Hp,color:"bg-purple-500"},"API Documentation":{icon:Vp,color:"bg-rose-500"},Security:{icon:jo,color:"bg-amber-500"},Frontend:{icon:Kp,color:"bg-pink-500"},DevOps:{icon:Jp,color:"bg-slate-700"},Admin:{icon:nd,color:"bg-violet-500"},Operations:{icon:td,color:"bg-teal-500"},Business:{icon:Up,color:"bg-blue-600"},Integrations:{icon:Gp,color:"bg-indigo-400"},Strategy:{icon:Si,color:"bg-fuchsia-500"},Guides:{icon:_i,color:"bg-green-500"},Custom:{icon:nn,color:"bg-slate-400"}},rr=["product-platform","overview","custom-architecture","code-standards","backend-setup","api-gateway","database-design","data-ingestion","apis","security","frontend-architecture","monitoring-observability","deployment","admin-documentation","maintenance-operation","billing-subscription","integrations-extensions","future-scaling","implementation-guide"],th=()=>{var T,H;const[e,t]=de.useState("overview"),[n,r]=de.useState(""),[i,a]=de.useState(!1),[o,s]=de.useState(""),[l,h]=de.useState({}),[w,v]=de.useState([{id:"product-platform",title:"Product & Platform Overview",icon:lr,category:"Product"},{id:"overview",title:"Architecture Overview",icon:lr,category:"Architecture"},{id:"custom-architecture",title:"Custom Architecture Template",icon:jt,category:"Architecture"},{id:"code-standards",title:"Code Guidelines & Standards",icon:jt,category:"Development"},{id:"backend-setup",title:"Backend Setup",icon:jt,category:"Backend"},{id:"api-gateway",title:"API Gateway Configuration",icon:La,category:"Backend"},{id:"database-design",title:"Database Design",icon:Po,category:"Database"},{id:"data-ingestion",title:"Data Ingestion Service",icon:Po,category:"Services"},{id:"apis",title:"APIs",icon:jt,category:"API Documentation"},{id:"security",title:"Security & Authentication",icon:jo,category:"Security"},{id:"frontend-architecture",title:"Frontend Architecture",icon:jt,category:"Frontend"},{id:"monitoring-observability",title:"Monitoring & Observability",icon:La,category:"DevOps"},{id:"deployment",title:"Deployment",icon:La,category:"DevOps"},{id:"admin-documentation",title:"Admin Documentation",icon:jo,category:"Admin"},{id:"maintenance-operation",title:"Maintenance & Operation",icon:nn,category:"Operations"},{id:"billing-subscription",title:"Billing & Subscription",icon:nn,category:"Business"},{id:"integrations-extensions",title:"Integrations & Extensions",icon:jt,category:"Integrations"},{id:"future-scaling",title:"Future & Scaling",icon:lr,category:"Strategy"},{id:"implementation-guide",title:"Implementation Guide",icon:nn,category:"Guides"}]),[y,m]=de.useState(!1),[k,f]=de.useState(""),[x,u]=de.useState("Custom"),[d,g]=de.useState(!1),[b,E]=de.useState(!1),[R,I]=de.useState(null),[z,O]=de.useState({}),[U,ee]=de.useState(!1),[A,F]=de.useState(""),[p,W]=de.useState(""),[re,G]=de.useState(null),[V,L]=de.useState(!1),[Q,j]=de.useState(!1);de.useState("");const[D,te]=de.useState(!1),[J,Y]=de.useState(!1);de.useEffect(()=>{D?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[D]);const ue=()=>{if(!A.trim()){alert("Please enter a note title");return}if(p.trim().split(/\s+/).filter(q=>q.length>0).length>50){alert("Note content must be 50 words or less");return}const N=Date.now().toString();z[e]||(z[e]=[]);const K={id:N,title:A,content:p,isCustom:!0,completed:!1,items:[]};O(q=>({...q,[e]:[...q[e]||[],K]})),F(""),W(""),ee(!1)},ke=P=>{var K;const N=(K=z[e])==null?void 0:K.find(q=>q.id===P);if(N&&!N.isCustom){alert("Cannot delete built-in todo lists");return}G(P),L(!0)},ae=()=>{re&&(O(P=>({...P,[e]:P[e].filter(N=>N.id!==re)})),L(!1),G(null))},le=P=>{I(P),E(!0)},Ee=()=>{if(!R)return;if(rr.includes(R)){alert("Cannot delete built-in documents. You can only delete documents you created."),E(!1),I(null);return}v(w.filter(N=>N.id!==R)),h(N=>{const K={...N};return delete K[R],K});const P=w.find(N=>N.id!==R);t(P?P.id:"overview"),E(!1),I(null)},ve=()=>{if(!k.trim()){alert("Please enter a document title");return}const P=k.toLowerCase().replace(/\s+/g,"-"),N={id:P,title:k,icon:nn,category:x};v([...w,N]),h(K=>({...K,[P]:{title:k,content:`# ${k}

Write your documentation here...`}})),t(P),f(""),u("Custom"),m(!1)};de.useEffect(()=>{h({"product-platform":{title:"Product & Platform Overview",content:`# Product & Platform Overview

## Product Vision
*Define your product vision, mission, and value proposition*

`},apis:{title:"APIs",content:`# APIs

## API Overview
Complete API reference for all platform services

## Authentication
\`\`\`
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json
\`\`\`

## Base URL
\`https://api.example.com/v1\`

## Core Endpoints

### Users
- \`GET /users\` - List users
- \`POST /users\` - Create user
- \`GET /users/{id}\` - Get user details
- \`PUT /users/{id}\` - Update user
- \`DELETE /users/{id}\` - Delete user

### Resources
- \`GET /resources\` - List resources
- \`POST /resources\` - Create resource
- \`GET /resources/{id}\` - Get resource
- \`PUT /resources/{id}\` - Update resource
- \`DELETE /resources/{id}\` - Delete resource

## Rate Limiting
- **Standard**: 1000 requests/hour
- **Premium**: 5000 requests/hour
- **Enterprise**: Unlimited

## Error Handling
\`\`\`json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description",
    "details": "Additional details"
  }
}
\`\`\`

## Webhooks
- User created
- User updated
- Resource created
- Resource deleted

## API Versioning
Currently on v1. v2 coming in Q2 2026.`},"frontend-architecture":{title:"Frontend Architecture",content:`# Frontend Architecture

## Technology Stack
- **Framework**: React / Vue / Angular
- **Build Tool**: Vite / Webpack
- **State Management**: Redux / Vuex / Context API
- **UI Framework**: Tailwind CSS / Material UI
- **HTTP Client**: Axios / Fetch

## Project Structure
\`\`\`
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── store/
│   ├── styles/
│   └── utils/
├── public/
└── package.json
\`\`\`

## Component Architecture
- **Smart Components**: Container components handling logic
- **Dumb Components**: Presentational components for UI
- **Hooks**: Custom hooks for reusable logic

## State Management
- Global state for user, auth, notifications
- Local state for form data
- API caching strategy

## Routing
- Main routes
- Protected routes
- Admin routes
- Public routes

## Performance Optimization
- Code splitting
- Lazy loading
- Image optimization
- Bundle size monitoring

## Testing Strategy
- Unit tests with Jest/Vitest
- Integration tests
- E2E tests with Cypress/Playwright`},"monitoring-observability":{title:"Monitoring & Observability",content:`# Monitoring & Observability

## Metrics Collection
- **Tool**: Prometheus / DataDog / New Relic
- **Interval**: Every 15 seconds

## Key Metrics
- CPU Usage
- Memory Usage
- Disk Usage
- Request Rate
- Error Rate
- Response Time

## Alerting Rules

### Critical Alerts
- Service down (p95 > 5s)
- Error rate > 1%
- Disk usage > 90%
- Memory > 85%

### Warning Alerts
- Error rate > 0.5%
- Response time > 1s
- CPU > 70%

## Dashboards

### Operations Dashboard
- Real-time system health
- Error rates
- Request volumes
- Performance metrics

### Business Dashboard
- Daily active users
- API calls
- Revenue
- Feature usage

## Logging Strategy
- **Tool**: ELK Stack / Splunk
- **Level**: DEBUG, INFO, WARN, ERROR
- **Retention**: 30 days hot, 1 year cold

## Tracing
- **Tool**: Jaeger / Zipkin
- **Sample Rate**: 10% in production`},"billing-subscription":{title:"Billing & Subscription",content:`# Billing & Subscription

## Pricing Plans

### Starter (Free)
- **Price**: $0/month
- **Features**: Limited
- **Users**: 1
- **API Calls**: 1,000/month
- **Support**: Community

### Professional ($29)
- **Price**: $29/month
- **Features**: Full access
- **Users**: 5
- **API Calls**: 100,000/month
- **Support**: Email

### Enterprise (Custom)
- **Price**: Custom
- **Features**: All
- **Users**: Unlimited
- **API Calls**: Unlimited
- **Support**: 24/7 Phone + Email

## Billing Cycle
- Monthly: Charged on same date each month
- Annual: 20% discount
- No long-term commitment

## Payment Methods
- Credit/Debit Card
- Bank Transfer
- PayPal
- Wire Transfer

## Subscription Management
- Upgrade/Downgrade anytime
- Prorated charges
- Invoice history
- Automated receipts

## Usage Tracking
- Real-time usage dashboard
- Overage pricing: $0.01 per 100 API calls
- Alerts for approaching limits

## Cancellation Policy
- Cancel anytime
- No refunds for partial months
- Data retention: 30 days`},"integrations-extensions":{title:"Integrations & Extensions",content:`# Integrations & Extensions

## Third-Party Integrations

### Authentication
- Google OAuth
- GitHub OAuth
- Microsoft SSO
- SAML 2.0

### Payment Processing
- Stripe
- PayPal
- Square

### Communication
- Slack
- Twilio (SMS)
- SendGrid (Email)

### Analytics
- Google Analytics
- Mixpanel
- Amplitude

## Extension Architecture

### Webhooks
- Event-driven system
- Retry logic
- Payload signing
- Rate limiting

### Plugins
- Plugin API
- Plugin marketplace
- Custom plugin development

## Developer Portal
- API documentation
- SDK libraries
- Code samples
- Interactive API explorer

## Integration Guides
- Step-by-step setup
- Authentication flows
- Error handling
- Best practices`},"admin-documentation":{title:"Admin Documentation",content:`# Admin Documentation

## Admin Console Overview
Complete guide for system administrators

## User Management
- Create/edit/delete users
- Role assignment
- Permission management
- Bulk operations

## System Configuration
- API rate limiting
- Feature flags
- Email templates
- SMS templates
- Webhook endpoints

## Monitoring & Health
- System status dashboard
- Performance metrics
- Error logs
- Activity audit trail

## Backup & Recovery
- Daily automated backups
- Point-in-time recovery
- Disaster recovery plan
- Data export

## Security Settings
- IP whitelisting
- SSO configuration
- 2FA enforcement
- Session management

## Compliance
- GDPR settings
- Data retention policies
- Audit logs
- Compliance reports

## Support & Troubleshooting
- Common issues
- FAQs
- Support ticket system
- Emergency contacts`},"maintenance-operation":{title:"Maintenance & Operation",content:`# Maintenance & Operation

## Regular Maintenance Tasks

### Daily
- Monitor error rates
- Check system health
- Review security alerts

### Weekly
- Database optimization
- Log rotation
- Backup verification

### Monthly
- Security patches
- Dependency updates
- Performance review
- Capacity planning

## Scheduled Maintenance
- **Maintenance Window**: Sunday 2-4 AM UTC
- **Communication**: 24-hour advance notice
- **Rollback Plan**: Always prepared

## Incident Response

### Severity Levels
- **Critical**: Service down
- **High**: Partial service degradation
- **Medium**: Non-critical feature broken
- **Low**: Minor bugs

### Response Times
- Critical: 15 minutes
- High: 1 hour
- Medium: 4 hours
- Low: 24 hours

### Postmortem Process
1. Incident report
2. Root cause analysis
3. Action items
4. Review with team

## Runbooks
- How to restart services
- How to handle database issues
- How to scale during peak load
- How to handle security incidents

## On-Call Schedule
- Weekly rotation
- On-call support
- Escalation procedures`},"future-scaling":{title:"Future & Scaling",content:`# Future & Scaling

## Product Roadmap (2026-2027)

### H1 2026
- Mobile app launch
- Advanced analytics
- Custom integrations

### H2 2026
- AI-powered features
- Marketplace launch
- Enterprise features

### 2027
- Global expansion
- New product lines
- AI assistant

## Scaling Strategy

### Database Scaling
- Read replicas
- Sharding strategy
- Caching layer
- Archive strategy

### Application Scaling
- Horizontal scaling
- Load balancing
- Service mesh
- Circuit breakers

### Infrastructure Scaling
- Multi-region deployment
- CDN for static content
- DDoS protection
- Auto-scaling policies

## Performance Targets
- **Throughput**: 100K req/s
- **Latency**: <100ms p99
- **Availability**: 99.99%
- **Cost**: <$10 per 1K requests

## Technology Upgrades
- Upgrade to latest Java/frameworks
- Migrate to new database versions
- Refactor legacy code
- Adopt new patterns

## Team Growth
- Hire 5 backend engineers
- Hire 3 frontend engineers
- Hire 2 DevOps engineers
- Hire QA engineers`},"code-standards":{title:"Code Guidelines & Standards",content:`# Code Guidelines & Standards

## Naming Conventions
- **Classes**: PascalCase
- **Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Files**: kebab-case (frontend), PascalCase (backend classes)

## Code Style

### Java
- 2-space indentation
- 120 character line limit
- Google Java Style Guide

### JavaScript/React
- Airbnb JavaScript Style Guide
- 2-space indentation
- ESLint + Prettier

## Documentation Standards

### Comments
- Explain WHY, not WHAT
- Use JSDoc for functions
- Keep comments updated

### Commit Messages
\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

Types: feat, fix, docs, style, refactor, test, chore

## Testing Standards

### Code Coverage
- Minimum 80% coverage
- Critical paths 100%
- Utilities 85%

### Test Types
- Unit tests
- Integration tests
- E2E tests
- Performance tests

## Performance Guidelines
- Database queries < 100ms
- API responses < 500ms
- Page loads < 2s
- Bundle size < 100KB gzipped

## Security Checklist
- No hardcoded secrets
- Input validation
- SQL injection prevention
- XSS prevention
- CSRF tokens
- Rate limiting
- Logging sensitive data carefully

## Code Review Process
1. Create PR with detailed description
2. Minimum 2 approvals
3. CI/CD must pass
4. No conflicts with main
5. Merge and deploy`},overview:{title:"Architecture Overview",content:`# Architecture Overview

## Executive Summary
Enterprise-grade, cloud-native SaaS platform built with Java 17 and Spring Boot 3.x

## Core Technology Stack

### Backend Framework
- **Java 17 LTS** - Latest stable JDK
- **Spring Boot 3.2** - Microservices foundation
- **Spring Cloud** - Distributed system patterns
- **Spring Data JPA** - ORM and database access

### API & Communication
- **Spring Web MVC** - RESTful API development
- **Spring WebFlux** - Reactive programming (async I/O)
- **gRPC** - High-performance service-to-service communication
- **OpenAPI 3.0** - API documentation (Springdoc)

### Message Queue & Event Streaming
- **Apache Kafka** - Event-driven architecture
- **Spring Kafka** - Kafka integration
- **RabbitMQ** (optional) - Distributed messaging

### Data Layer
- **PostgreSQL** - Primary operational database
- **MongoDB** - NoSQL analytics storage
- **Redis** - Distributed caching & sessions
- **Elasticsearch** - Full-text search & analytics

### Security
- **Spring Security** - Authentication & authorization
- **OAuth 2.0 & OpenID Connect** - SSO integration
- **JWT** - Token-based security
- **Spring Vault** - Secrets management

### Observability
- **Micrometer + Prometheus** - Metrics collection
- **ELK Stack** - Logging (Elasticsearch, Logstash, Kibana)
- **Distributed Tracing** - Spring Cloud Sleuth + Jaeger
- **Health Checks** - Spring Boot Actuator

## Microservices Architecture

### Service Topology
1. **API Gateway** (Spring Cloud Gateway)
2. **Auth Service** (Spring Security)
3. **Data Ingestion Service**
4. **Migration Analytics Service**
5. **Child Welfare Service**
6. **Notification Service**
7. **Tenant Management Service**

## Development Lifecycle
- **Build Tool**: Maven with custom plugins
- **Testing**: JUnit 5, Mockito, TestContainers
- **CI/CD**: GitHub Actions + ArgoCD
- **Container**: Docker + Kubernetes
- **Package Manager**: Nexus Repository`},"custom-architecture":{title:"Custom Architecture Template",content:`# Your Custom Architecture - Editable Template

This is a blank template for you to document your own architecture. Edit this section to add your specific system design, technologies, and infrastructure details.

## Project Name
*Enter your project name here*

## Executive Summary
*Provide a high-level overview of your system. What does it do? What problems does it solve?*

## Technology Stack

### Backend
- Language: *e.g., Java 17, Python 3.11, Go 1.21*
- Framework: *e.g., Spring Boot, Django, Echo*
- Version: *specify version*

### Frontend (if applicable)
- Framework: *e.g., React, Vue, Angular*
- UI Library: *e.g., Tailwind CSS, Material UI*

### Database
- Primary Database: *e.g., PostgreSQL, MySQL, MongoDB*
- Cache Layer: *e.g., Redis, Memcached*
- Search Engine: *e.g., Elasticsearch, Solr*

### Message Queue & Events
- Message Broker: *e.g., Apache Kafka, RabbitMQ, AWS SQS*
- Event Processing: *describe real-time processing needs*

### Infrastructure & DevOps
- Container: *e.g., Docker, Podman*
- Orchestration: *e.g., Kubernetes, Docker Swarm*
- CI/CD: *e.g., GitHub Actions, GitLab CI, Jenkins*
- Cloud Provider: *e.g., AWS, Azure, GCP*

### Monitoring & Observability
- Metrics: *e.g., Prometheus, DataDog*
- Logging: *e.g., ELK Stack, Splunk*
- Tracing: *e.g., Jaeger, Zipkin*
- APM: *e.g., New Relic, Elastic APM*

## System Components

### Core Services
1. **Service Name**: 
   - Purpose: *What does it do?*
   - Port: *e.g., 8080*
   - Database: *which database it uses*

2. **Service Name**: 
   - Purpose: 
   - Port:
   - Database:

### Supporting Services
- *List any auxiliary services, schedulers, workers*

## Database Schema

### Key Entities
- Entity 1: *Describe what it stores*
- Entity 2: *Describe what it stores*
- Entity 3: *Describe what it stores*

### Relationships
*Describe how entities relate to each other (one-to-one, one-to-many, many-to-many)*

## API Endpoints

### Authentication
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/refresh

### Core Endpoints
- *List your main API endpoints with methods and purposes*
- GET /api/resource
- POST /api/resource
- PUT /api/resource/{id}
- DELETE /api/resource/{id}

## Security Design

### Authentication Method
*e.g., OAuth 2.0, JWT, Session-based, API Keys*

### Authorization
*How do you control access? RBAC, ABAC, custom?*

### Data Protection
- At Rest: *e.g., AES-256 encryption*
- In Transit: *e.g., TLS 1.3*
- Sensitive Data Handling: *PII masking, encryption strategy*

## Deployment Architecture

### Development Environment
*How developers set up locally*

### Staging Environment
*Pre-production testing setup*

### Production Environment
- **Deployment Strategy**: *Rolling, Blue-Green, Canary*
- **High Availability**: *Multi-region, load balancing*
- **Backup Strategy**: *Backup frequency and retention*
- **Disaster Recovery**: *RTO, RPO targets*

## Performance Targets

- **Throughput**: *e.g., 10,000 requests/second*
- **Latency**: *e.g., <200ms p95*
- **Availability SLA**: *e.g., 99.95%*
- **Database**: *Max query time, cache hit ratio*

## Scaling Strategy

### Horizontal Scaling
*Which components scale horizontally? Auto-scaling triggers?*

### Vertical Scaling
*Which components need vertical scaling?*

## Monitoring & Alerting

### Key Metrics to Monitor
1. *Metric name*
2. *Metric name*
3. *Metric name*

### Alert Thresholds
- High CPU: *e.g., >80%*
- High Memory: *e.g., >85%*
- Error Rate: *e.g., >1%*
- Response Time: *e.g., >500ms*

## Development Workflow

### Git Strategy
*e.g., Git Flow, GitHub Flow*

### Testing Strategy
- Unit Tests: *coverage target*
- Integration Tests: *scope*
- Load Tests: *frequency and targets*

### Code Quality
- Linting: *which linter*
- Static Analysis: *e.g., SonarQube*
- Code Review: *process*

## Known Limitations & Future Improvements

### Current Limitations
1. *Limitation 1*
2. *Limitation 2*

### Planned Improvements
1. *Future enhancement*
2. *Optimization planned*

## Support & Contacts

- **Tech Lead**: *Name and contact*
- **DevOps Lead**: *Name and contact*
- **On-Call**: *How to escalate issues*

---

**Last Updated**: *Date*
**Version**: *Architecture version*
**Owner**: *Team/Person responsible*
 > 💡 **Tip**: Edit this document to match your specific architecture. Save changes to download as Markdown.`},"backend-setup":{title:"Backend Setup",content:`# Backend Setup

## Project Structure
\`\`\`
aadhaar-analytics/
├── pom.xml
├── src/main/java/com/aadhaar/
│   ├── AadhaarAnalyticsApplication.java
│   ├── config/
│   │   ├── SecurityConfig.java
│   │   ├── KafkaConfig.java
│   │   └── DatabaseConfig.java
│   ├── service/
│   ├── controller/
│   ├── entity/
│   └── exception/
├── src/main/resources/
│   ├── application.yml
│   ├── application-dev.yml
│   ├── application-prod.yml
│   └── db/migration/
└── src/test/java/
\`\`\`

## Maven Configuration (pom.xml)

\`\`\`xml
<properties>
  <java.version>17</java.version>
  <spring-boot.version>3.2.0</spring-boot.version>
  <spring-cloud.version>2023.0.0</spring-cloud.version>
</properties>

<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-dependencies</artifactId>
      <version>\${spring-boot.version}</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-dependencies</artifactId>
      <version>\${spring-cloud.version}</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>
\`\`\`

## Application Configuration (application.yml)

\`\`\`yaml
spring:
  application:
    name: aadhaar-analytics
  profiles:
    active: dev
  
  datasource:
    url: jdbc:postgresql://localhost:5432/aadhaar_db
    username: postgres
    password: \${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
  
  jpa:
    hibernate:
      ddl-auto: validate
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        format_sql: true
  
  kafka:
    bootstrap-servers: localhost:9092
    producer:
      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer
    consumer:
      group-id: aadhaar-group
      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer

server:
  port: 8080
  servlet:
    context-path: /api/v1

management:
  endpoints:
    web:
      exposure:
        include: health,metrics,prometheus
  metrics:
    export:
      prometheus:
        enabled: true
\`\`\`

## Main Application Class

\`\`\`java
package com.aadhaar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.kafka.annotation.EnableKafka;

@SpringBootApplication
@EnableDiscoveryClient
@EnableKafka
public class AadhaarAnalyticsApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(AadhaarAnalyticsApplication.class, args);
    }
}
\`\`\`

## Key Dependencies

\`\`\`xml
<!-- Spring Boot Starters -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<!-- Spring Cloud -->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>

<!-- Database & ORM -->
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>org.flywaydb</groupId>
    <artifactId>flyway-core</artifactId>
</dependency>

<!-- Messaging -->
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>

<!-- Testing -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.testcontainers</groupId>
    <artifactId>testcontainers</artifactId>
    <version>1.19.0</version>
    <scope>test</scope>
</dependency>
\`\`\`
`},"data-ingestion":{title:"Data Ingestion Service",content:`# Data Ingestion Service

## Service Architecture

\`\`\`
DataIngestionService (Port: 8081)
├── REST Controller: /api/v1/ingest
├── Service Layer: DataIngestionService
├── Repository Layer: EnrolmentRepository
├── Entity Models: Enrolment, Dataset
└── Kafka Producer: IngestionEventProducer
\`\`\`

## Spring Boot Controller

\`\`\`java
package com.aadhaar.ingest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.aadhaar.ingest.service.DataIngestionService;
import com.aadhaar.ingest.dto.IngestionResponse;

@RestController
@RequestMapping("/api/v1/ingest")
@CrossOrigin(origins = "*")
public class DataIngestionController {
    
    @Autowired
    private DataIngestionService ingestionService;
    
    @PostMapping("/csv")
    public ResponseEntity<IngestionResponse> uploadCSV(
            @RequestParam("file") MultipartFile file,
            @RequestParam("dataset_type") String datasetType,
            @RequestHeader("X-Tenant-ID") String tenantId) {
        
        IngestionResponse response = ingestionService.processCSV(file, datasetType, tenantId);
        return ResponseEntity.accepted().body(response);
    }
    
    @GetMapping("/status/{jobId}")
    public ResponseEntity<?> getJobStatus(
            @PathVariable String jobId,
            @RequestHeader("X-Tenant-ID") String tenantId) {
        
        return ResponseEntity.ok(ingestionService.getJobStatus(jobId, tenantId));
    }
    
    @PostMapping("/stream")
    public ResponseEntity<IngestionResponse> streamData(
            @RequestBody StreamDataRequest request,
            @RequestHeader("X-Tenant-ID") String tenantId) {
        
        IngestionResponse response = ingestionService.processStreamData(request, tenantId);
        return ResponseEntity.accepted().body(response);
    }
}
\`\`\`

## Service Layer Implementation

\`\`\`java
package com.aadhaar.ingest.service;

import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.aadhaar.ingest.entity.Dataset;
import com.aadhaar.ingest.repository.DatasetRepository;
import lombok.extern.slf4j.Slf4j;
import java.util.UUID;

@Slf4j
@Service
public class DataIngestionService {
    
    private final DatasetRepository datasetRepository;
    private final KafkaTemplate<String, IngestionEvent> kafkaTemplate;
    private final CSVProcessorService csvProcessor;
    
    @Transactional
    public IngestionResponse processCSV(MultipartFile file, String type, String tenantId) {
        String jobId = UUID.randomUUID().toString();
        
        try {
            // Validate file
            validateFile(file);
            
            // Save metadata
            Dataset dataset = new Dataset();
            dataset.setJobId(jobId);
            dataset.setTenantId(tenantId);
            dataset.setDatasetType(DatasetType.valueOf(type));
            dataset.setStatus(JobStatus.PROCESSING);
            dataset.setFileName(file.getOriginalFilename());
            datasetRepository.save(dataset);
            
            // Parse and process CSV asynchronously
            processCSVAsync(file, jobId, tenantId);
            
            return new IngestionResponse(jobId, JobStatus.PROCESSING);
            
        } catch (Exception e) {
            log.error("Error processing CSV for tenant: {}", tenantId, e);
            throw new IngestionException("CSV processing failed", e);
        }
    }
    
    private void processCSVAsync(MultipartFile file, String jobId, String tenantId) {
        // Send to Kafka for async processing
        IngestionEvent event = new IngestionEvent(jobId, tenantId, file.getBytes());
        kafkaTemplate.send("ingest-topic", event);
    }
    
    private void validateFile(MultipartFile file) {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("File cannot be empty");
        }
        if (!file.getContentType().contains("csv")) {
            throw new IllegalArgumentException("Only CSV files are supported");
        }
    }
}
\`\`\`

## JPA Entity

\`\`\`java
package com.aadhaar.ingest.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "datasets", indexes = {
    @Index(name = "idx_job_id", columnList = "job_id"),
    @Index(name = "idx_tenant_id", columnList = "tenant_id"),
    @Index(name = "idx_status", columnList = "status")
})
@Data
public class Dataset {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    
    @Column(nullable = false, unique = true)
    private String jobId;
    
    @Column(nullable = false)
    private String tenantId;
    
    @Enumerated(EnumType.STRING)
    private DatasetType datasetType;
    
    @Enumerated(EnumType.STRING)
    private JobStatus status;
    
    private String fileName;
    private Long recordCount;
    private LocalDateTime createdAt;
    private LocalDateTime completedAt;
}
\`\`\`

## Kafka Configuration

\`\`\`java
package com.aadhaar.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.serializer.JsonSerializer;
import org.apache.kafka.common.serialization.StringSerializer;

@Configuration
public class KafkaConfig {
    
    @Bean
    public KafkaTemplate<String, IngestionEvent> kafkaTemplate(
            ProducerFactory<String, IngestionEvent> producerFactory) {
        return new KafkaTemplate<>(producerFactory);
    }
}
\`\`\`
`},"migration-analytics":{title:"Migration Analytics Service",content:`# Migration Analytics Microservice

## Overview
Analyzes migration patterns using demographic update data with real-time processing.

## Service Implementation

\`\`\`java
package com.aadhaar.analytics.service;

import org.springframework.stereotype.Service;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.data.domain.PageRequest;
import com.aadhaar.analytics.entity.MigrationAnalytic;
import com.aadhaar.analytics.repository.MigrationAnalyticsRepository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MigrationAnalyticsService {
    
    private final MigrationAnalyticsRepository analyticsRepository;
    private final KafkaTemplate<String, AnalyticsEvent> kafkaTemplate;
    
    /**
     * Kafka listener for demographic update events
     */
    @KafkaListener(topics = "demographic-updates", groupId = "analytics-group")
    public void processDemographicUpdate(DemographicEvent event) {
        try {
            String district = event.getDistrict();
            int age = event.getAge();
            
            // Calculate migration intensity
            double intensity = calculateMigrationIntensity(district, age);
            
            // Update analytics
            MigrationAnalytic analytic = getOrCreateAnalytic(district);
            analytic.setMigrationIntensity(intensity);
            analytic.incrementDemographicUpdates();
            analyticsRepository.save(analytic);
            
            // Publish alert if threshold exceeded
            if (intensity > 1000) {
                publishAlert(district, "EXTREME", intensity);
            }
            
        } catch (Exception e) {
            log.error("Error processing demographic update", e);
        }
    }
    
    public double calculateMigrationIntensity(String district, int ageGroup) {
        // Formula: demographic_updates_18+ / (new_enrolments_18+ + 1)
        long demographicUpdates = analyticsRepository.countDemographicUpdates(district, ageGroup);
        long newEnrolments = analyticsRepository.countNewEnrolments(district, ageGroup);
        
        return (double) demographicUpdates / (newEnrolments + 1);
    }
    
    public List<MigrationAnalytic> getHotspots(String tenantId) {
        return analyticsRepository.findHotspots(tenantId, PageRequest.of(0, 20));
    }
}
\`\`\`

## JPA Repository with Custom Queries

\`\`\`java
package com.aadhaar.analytics.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface MigrationAnalyticsRepository extends JpaRepository<MigrationAnalytic, String> {
    
    @Query("SELECT m FROM MigrationAnalytic m WHERE m.migrationIntensity > 100 " +
           "ORDER BY m.migrationIntensity DESC")
    List<MigrationAnalytic> findHotspots(String tenantId, Pageable pageable);
    
    @Query("SELECT COUNT(d) FROM DemographicUpdate d " +
           "WHERE d.district = :district AND d.age >= 18")
    long countDemographicUpdates(@Param("district") String district, 
                                 @Param("ageGroup") int ageGroup);
}
\`\`\`

## REST Controller

\`\`\`java
@RestController
@RequestMapping("/api/v1/migration")
public class MigrationAnalyticsController {
    
    @GetMapping("/hotspots")
    public ResponseEntity<List<MigrationAnalytic>> getHotspots(
            @RequestHeader("X-Tenant-ID") String tenantId) {
        return ResponseEntity.ok(analyticsService.getHotspots(tenantId));
    }
    
    @GetMapping("/intensity/{district}")
    public ResponseEntity<Double> getIntensity(
            @PathVariable String district,
            @RequestHeader("X-Tenant-ID") String tenantId) {
        double intensity = analyticsService.calculateMigrationIntensity(district, 18);
        return ResponseEntity.ok(intensity);
    }
}
\`\`\`

## Intensity Categories
- **EXTREME**: > 1000 (Critical hotspot, immediate intervention)
- **HIGH**: 100-1000 (Significant migration activity)
- **MODERATE**: 10-100 (Notable patterns)
- **LOW**: 0-10 (Stable population)
`},"child-welfare":{title:"Child Welfare Service",content:`# Child Welfare Analytics Microservice

## Purpose
Track biometric update compliance for children aged 5-17.

## Service Logic

\`\`\`java
@Service
@Slf4j
public class ChildWelfareService {
    
    @KafkaListener(topics = "biometric-updates", groupId = "welfare-group")
    public void processBiometricUpdate(BiometricEvent event) {
        String district = event.getDistrict();
        int age = event.getAge();
        
        if (age >= 5 && age <= 17) {
            ChildWelfareMetric metric = getOrCreateMetric(district);
            metric.incrementBiometricUpdates();
            
            double compliance = calculateCompliance(district);
            metric.setComplianceRatio(compliance);
            
            // Check risk level and trigger alerts
            if (compliance < 0.30) {
                publishAlert(district, "CRITICAL", compliance);
            }
        }
    }
    
    private double calculateCompliance(String district) {
        long biometricUpdates = getCountBiometricUpdates5_17(district);
        long totalEnrolments = getTotalEnrolments5_17(district);
        return (double) biometricUpdates / (totalEnrolments + 1);
    }
}
\`\`\`

## Compliance Risk Levels
- **CRITICAL**: 0-30% (Immediate intervention required)
- **HIGH**: 30-50% (Urgent action needed)
- **MODERATE**: 50-70% (Monitoring required)
- **LOW**: 70-100% (Healthy compliance)
`},"api-gateway":{title:"API Gateway Configuration",content:`# API Gateway Configuration

## Configuration (application.yml)

\`\`\`yaml
spring:
  cloud:
    gateway:
      routes:
        - id: ingest-service
          uri: lb://ingest-service
          predicates:
            - Path=/api/v1/ingest/**
          filters:
            - name: AuthFilter
            - name: RateLimiter
              args:
                redis-rate-limiter.replenishRate: 100
                redis-rate-limiter.burstCapacity: 200
        
        - id: analytics-service
          uri: lb://analytics-service
          predicates:
            - Path=/api/v1/migration/**,/api/v1/analytics/**
          filters:
            - name: AuthFilter
            - name: CircuitBreaker
              args:
                name: analyticsCircuitBreaker
      
      default-filters:
        - name: RequestLogging
        - name: ResponseLogging
        - name: TenantValidation
\`\`\`

## Custom Filter Implementation

\`\`\`java
@Component
@Order(1)
public class AuthenticationFilter extends AbstractNameValueGatewayFilterFactory<Config> {
    
    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            String authHeader = exchange.getRequest().getHeaders().getFirst("Authorization");
            
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return handleError(exchange, "Missing or invalid authorization header");
            }
            
            String token = authHeader.substring(7);
            
            try {
                Claims claims = validateToken(token);
                exchange.getRequest().mutate()
                    .header("X-User-ID", claims.getSubject())
                    .header("X-Tenant-ID", claims.get("tenant_id").toString())
                    .build();
                    
                return chain.filter(exchange);
                
            } catch (ExpiredJwtException e) {
                return handleError(exchange, "Token expired");
            }
        };
    }
}
\`\`\`

## Service Discovery Integration

\`\`\`java
@Configuration
@EnableDiscoveryClient
public class GatewayConfig {
    
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("ingest", r -> r
                .path("/api/v1/ingest/**")
                .uri("lb://ingest-service"))
            .route("analytics", r -> r
                .path("/api/v1/analytics/**")
                .uri("lb://analytics-service"))
            .build();
    }
}
\`\`\`
`},"database-design":{title:"Database Design",content:`# Database Design

## Flyway Migration V1.0 (V1_0__init_schema.sql)

\`\`\`sql
-- Tenants table (Multi-tenancy)
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'ACTIVE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enrolment data
CREATE TABLE enrolments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id),
    aadhaar_number VARCHAR(20) UNIQUE,
    name VARCHAR(255),
    age INT,
    age_group VARCHAR(50),
    district VARCHAR(100),
    state VARCHAR(100),
    enrolment_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_tenant FOREIGN KEY(tenant_id) REFERENCES tenants(id)
);

CREATE INDEX idx_enrolment_tenant ON enrolments(tenant_id);
CREATE INDEX idx_enrolment_district ON enrolments(district);
CREATE INDEX idx_enrolment_age_group ON enrolments(age_group);

-- Demographic updates
CREATE TABLE demographic_updates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id),
    enrolment_id UUID REFERENCES enrolments(id),
    age_before INT,
    age_after INT,
    address_change BOOLEAN,
    update_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Biometric updates
CREATE TABLE biometric_updates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL REFERENCES tenants(id),
    enrolment_id UUID REFERENCES enrolments(id),
    biometric_type VARCHAR(50),
    update_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Migration analytics table
CREATE TABLE migration_analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,
    district VARCHAR(100),
    migration_intensity DECIMAL(10,2),
    demographic_updates INT DEFAULT 0,
    new_enrolments INT DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_migration_intensity ON migration_analytics(migration_intensity DESC);
CREATE INDEX idx_migration_district ON migration_analytics(district);

-- Child welfare metrics
CREATE TABLE child_welfare_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,
    district VARCHAR(100),
    compliance_ratio DECIMAL(5,2),
    biometric_updates_5_17 INT DEFAULT 0,
    total_enrolments_5_17 INT DEFAULT 0,
    risk_level VARCHAR(50),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Audit log
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,
    user_id VARCHAR(255),
    action VARCHAR(100),
    entity_type VARCHAR(100),
    entity_id UUID,
    changes JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## Database Configuration (Spring Boot)

\`\`\`java
@Configuration
public class DatabaseConfig {
    
    @Bean
    public DataSourceProperties dataSourceProperties() {
        return new DataSourceProperties();
    }
    
    @Bean
    public HikariDataSource dataSource(DataSourceProperties properties) {
        HikariDataSource dataSource = properties.initializeDataSourceBuilder()
            .type(HikariDataSource.class)
            .build();
        
        dataSource.setMaximumPoolSize(20);
        dataSource.setMinimumIdle(5);
        dataSource.setConnectionTimeout(30000);
        dataSource.setIdleTimeout(600000);
        
        return dataSource;
    }
}
\`\`\`
`},security:{title:"Security & Authentication",content:`# Security & Authentication

## Spring Security Configuration

\`\`\`java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests()
                .requestMatchers("/api/v1/auth/**").permitAll()
                .requestMatchers("/actuator/health").permitAll()
                .anyRequest().authenticated()
            .and()
            .oauth2ResourceServer()
                .jwt()
                .jwtAuthenticationConverter(jwtAuthenticationConverter());
        
        return http.build();
    }
    
    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        JwtGrantedAuthoritiesConverter authoritiesConverter = new JwtGrantedAuthoritiesConverter();
        authoritiesConverter.setAuthoritiesClaimName("roles");
        authoritiesConverter.setAuthorityPrefix("ROLE_");
        converter.setJwtGrantedAuthoritiesConverter(authoritiesConverter);
        return converter;
    }
}
\`\`\`

## JWT Token Generation

\`\`\`java
@Service
public class JwtTokenProvider {
    
    private static final long JWT_EXPIRATION_MS = 3600000; // 1 hour
    
    @Value("\${jwt.secret}")
    private String jwtSecret;
    
    public String generateToken(String userId, String tenantId, List<String> roles) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("tenant_id", tenantId);
        claims.put("roles", roles);
        
        return Jwts.builder()
            .setSubject(userId)
            .addClaims(claims)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION_MS))
            .signWith(SignatureAlgorithm.HS512, jwtSecret)
            .compact();
    }
    
    public Claims validateAndParseClaims(String token) {
        try {
            return Jwts.parser()
                .setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody();
        } catch (ExpiredJwtException e) {
            throw new TokenExpiredException("JWT token is expired");
        } catch (SignatureException e) {
            throw new InvalidTokenException("Invalid JWT signature");
        }
    }
}
\`\`\`

## Data Encryption

\`\`\`java
@Component
public class EncryptionService {
    
    private static final String ALGORITHM = "AES";
    private static final int KEY_SIZE = 256;
    
    public String encrypt(String plainText, String encryptionKey) throws Exception {
        SecretKey key = new SecretKeySpec(
            encryptionKey.getBytes(), 0, 32, "AES");
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, key);
        
        byte[] encryptedData = cipher.doFinal(plainText.getBytes());
        return Base64.getEncoder().encodeToString(encryptedData);
    }
    
    public String decrypt(String encryptedText, String encryptionKey) throws Exception {
        SecretKey key = new SecretKeySpec(
            encryptionKey.getBytes(), 0, 32, "AES");
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.DECRYPT_MODE, key);
        
        byte[] decodedData = Base64.getDecoder().decode(encryptedText);
        byte[] decryptedData = cipher.doFinal(decodedData);
        return new String(decryptedData);
    }
}
\`\`\`

## Multi-tenant Data Isolation

\`\`\`java
@Component
public class TenantFilter extends OncePerRequestFilter {
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                    HttpServletResponse response, 
                                    FilterChain filterChain) {
        String tenantId = request.getHeader("X-Tenant-ID");
        
        if (tenantId != null && !tenantId.isEmpty()) {
            TenantContext.setTenantId(tenantId);
        }
        
        try {
            filterChain.doFilter(request, response);
        } finally {
            TenantContext.clear();
        }
    }
}

@Component
public class TenantAwareRepositoryImpl {
    
    @Bean
    public FilteringPredicate tenantFilter() {
        return (root, query, cb) -> {
            String tenantId = TenantContext.getTenantId();
            return cb.equal(root.get("tenantId"), tenantId);
        };
    }
}
\`\`\`
`},deployment:{title:"Deployment",content:`# Deployment

## Dockerfile for Spring Boot Application

\`\`\`dockerfile
# Multi-stage build
FROM eclipse-temurin:17-jdk AS builder
WORKDIR /build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy JAR from builder
COPY --from=builder /build/target/*.jar application.jar

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \\
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/actuator/health || exit 1

# Run application with JVM optimizations
ENTRYPOINT ["java", "-Xms512m", "-Xmx1024m", "-XX:+UseG1GC", "-jar", "application.jar"]
\`\`\`

## Kubernetes Deployment (K8s YAML)

\`\`\`yaml
apiVersion: v1
kind: Namespace
metadata:
  name: aadhaar-platform

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ingest-service
  namespace: aadhaar-platform
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ingest-service
  template:
    metadata:
      labels:
        app: ingest-service
    spec:
      containers:
      - name: ingest-service
        image: aadhaar-platform/ingest-service:1.0.0
        ports:
        - containerPort: 8081
        env:
        - name: SPRING_DATASOURCE_URL
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: database-url
        - name: SPRING_DATASOURCE_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: password
        resources:
          requests:
            cpu: 500m
            memory: 512Mi
          limits:
            cpu: 1000m
            memory: 1024Mi
        livenessProbe:
          httpGet:
            path: /actuator/health
            port: 8081
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8081
          initialDelaySeconds: 20
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: ingest-service
  namespace: aadhaar-platform
spec:
  selector:
    app: ingest-service
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 8081

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ingest-service-hpa
  namespace: aadhaar-platform
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ingest-service
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
\`\`\`

## Docker Compose (Local Development)

\`\`\`yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: aadhaar_db
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    depends_on:
      - zookeeper
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
    ports:
      - "9092:9092"

  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
    ports:
      - "2181:2181"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  ingest-service:
    build:
      context: ./ingest-service
      dockerfile: Dockerfile
    depends_on:
      - postgres
      - kafka
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/aadhaar_db
      SPRING_KAFKA_BOOTSTRAP_SERVERS: kafka:9092
    ports:
      - "8081:8081"

volumes:
  postgres_data:
\`\`\`
`},"implementation-guide":{title:"Implementation Guide",content:`# Implementation Guide

## Phase 1: Foundation (Weeks 1-3)

### Week 1: Infrastructure Setup
- [ ] Set up AWS/Azure cloud accounts
- [ ] Configure VPC, security groups, load balancers
- [ ] Deploy PostgreSQL RDS with Multi-AZ
- [ ] Set up RDS backups and monitoring
- [ ] Deploy Kafka cluster (3 brokers minimum)
- [ ] Configure Redis cluster
- [ ] Set up Prometheus + Grafana monitoring
- [ ] Configure CloudWatch / Application Insights

**Deliverable**: Cloud infrastructure with all databases operational

### Week 2: Java Project Scaffolding
- [ ] Create parent POM with dependency management
- [ ] Set up Maven plugins (Shade, Surefire, Checkstyle)
- [ ] Configure SonarQube for code quality
- [ ] Set up Git workflows (main, develop, feature branches)
- [ ] Create shared models/DTOs library
- [ ] Set up integration test infrastructure (TestContainers)
- [ ] Configure CI/CD with GitHub Actions

**Deliverable**: Maven project structure with CI/CD pipeline

### Week 3: API Gateway & Authentication
- [ ] Implement Spring Cloud Gateway
- [ ] Set up OAuth 2.0 / OpenID Connect
- [ ] Implement JWT token provider
- [ ] Create authentication service with Spring Security
- [ ] Set up API documentation (Springdoc OpenAPI)
- [ ] Implement request logging and tracing

**Deliverable**: Secured API Gateway with authentication

## Phase 2: Core Microservices (Weeks 4-8)

### Week 4-5: Data Ingestion Service
- [ ] Create REST endpoints for CSV upload
- [ ] Implement multipart file handling
- [ ] Create Kafka producer for data events
- [ ] Implement validation and error handling
- [ ] Create database schema for raw data
- [ ] Implement async processing with Spring Kafka
- [ ] Add comprehensive unit and integration tests

**Deliverable**: Fully functional Data Ingestion service

### Week 6-7: Analytics Services
- [ ] Implement Migration Analytics Service
  - Kafka listeners for demographic events
  - Migration intensity calculations
  - Real-time hotspot detection
- [ ] Implement Child Welfare Service
  - Biometric compliance tracking
  - Risk level calculations
  - Alert generation
- [ ] Create REST endpoints for analytics queries
- [ ] Implement caching with Redis
- [ ] Add metrics and observability

**Deliverable**: Analytics services with real-time processing

### Week 8: Supporting Services
- [ ] Create Tenant Management Service
- [ ] Implement Notification/Alert Service
- [ ] Create Admin/Configuration Service
- [ ] Set up inter-service communication patterns
- [ ] Implement circuit breakers (Resilience4j)
- [ ] Add health checks and readiness probes

**Deliverable**: Complete microservice ecosystem

## Phase 3: Data & Quality (Weeks 9-10)

### Week 9: Database Optimization
- [ ] Create performance indexes
- [ ] Implement query optimization
- [ ] Set up connection pooling (HikariCP)
- [ ] Create database migration strategy (Flyway)
- [ ] Implement backup and disaster recovery
- [ ] Load testing with JMeter

**Deliverable**: Optimized database with HA setup

### Week 10: Testing & Quality Assurance
- [ ] Unit test coverage (JUnit 5, Mockito)
- [ ] Integration tests (TestContainers)
- [ ] Performance testing (load, stress, spike tests)
- [ ] Security scanning (OWASP, SonarQube)
- [ ] Penetration testing
- [ ] Code review and cleanup

**Deliverable**: 80%+ code coverage, security certified

## Phase 4: Production Ready (Weeks 11-12)

### Week 11: Containerization & Orchestration
- [ ] Create Dockerfiles for all services
- [ ] Build Docker images and push to registry
- [ ] Create Kubernetes manifests
  - Deployments with replicas
  - Services and Ingress
  - ConfigMaps and Secrets
  - PersistentVolumes
  - StatefulSets for stateful services
- [ ] Set up Helm charts for easy deployment
- [ ] Configure auto-scaling policies

**Deliverable**: Production-ready K8s cluster

### Week 12: Go-Live Preparation
- [ ] Data migration from monolith
- [ ] Performance tuning and optimization
- [ ] Disaster recovery testing
- [ ] Runbook documentation
- [ ] On-call training and handover
- [ ] Production deployment and monitoring
- [ ] Post-deployment validation

**Deliverable**: Live production system with SLAs

## Success Criteria
- ✅ 99.95% uptime SLA
- ✅ <200ms API response time (p95)
- ✅ 10x throughput of legacy system
- ✅ Automatic horizontal scaling
- ✅ Complete audit trails
- ✅ Zero-downtime deployments
`}})},[]);const nt=()=>{l[e]&&(s(l[e].content),a(!0))},Qe=()=>{h(P=>({...P,[e]:{...P[e],content:o}})),a(!1)},c=()=>{a(!1),s("")},B=()=>{if(!l[e])return;const P=i?o:l[e].content,N=l[e].title,K=new Blob([P],{type:"text/markdown"}),q=URL.createObjectURL(K),$=document.createElement("a");$.href=q,$.download=`${N.replace(/\s+/g,"_")}_${e}.md`,document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(q)},M=async()=>{const P=new eh,N=P.folder("documentation");w.forEach(ne=>{var Fe;const pe=((Fe=l[ne.id])==null?void 0:Fe.content)||"",oe=`${ne.title.replace(/\s+/g,"_")}.md`;N.file(oe,pe)});const K=await P.generateAsync({type:"blob"}),q=URL.createObjectURL(K),$=document.createElement("a");$.href=q,$.download="project_documentation_all.zip",document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(q)},C=w.filter(P=>P.title.toLowerCase().includes(n.toLowerCase())||P.category.toLowerCase().includes(n.toLowerCase())),_=[...new Set(C.map(P=>P.category))];return S.jsx("div",{className:`${D?"dark":""} h-screen transition-colors duration-500`,children:S.jsxs("div",{className:"flex h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500",children:[J&&S.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[40] md:hidden transition-all duration-300",onClick:()=>Y(!1)}),S.jsxs("div",{className:`fixed lg:relative inset-y-0 left-0 w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-y-auto shadow-lg transition-all duration-300 z-[45] lg:z-0 ${J?"translate-x-0":"-translate-x-full lg:translate-x-0"}`,children:[S.jsxs("div",{className:"p-6 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-blue-600 to-indigo-600 relative",children:[S.jsx("button",{onClick:()=>Y(!1),className:"absolute right-4 top-4 p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 lg:hidden transition-colors",children:S.jsx(li,{className:"h-5 w-5"})}),S.jsxs("div",{className:"flex items-center justify-between mb-2",children:[S.jsx("h1",{className:"text-2xl font-bold text-white",children:"Project Documentation"}),S.jsx("button",{onClick:()=>te(!D),className:"p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 transform hover:scale-110 active:scale-90",title:D?"Switch to Light Mode":"Switch to Dark Mode",children:D?S.jsx(qp,{className:"h-5 w-5"}):S.jsx(Zp,{className:"h-5 w-5"})})]}),S.jsx("p",{className:"text-blue-100 text-sm",children:"Text Complete Architecture Hub"})]}),S.jsxs("div",{className:"p-4 border-b border-slate-200 dark:border-slate-800",children:[S.jsxs("div",{className:"relative mb-3",children:[S.jsx(Yp,{className:"absolute left-3 top-2.5 h-5 w-5 text-slate-400"}),S.jsx("input",{type:"text",placeholder:"Search docs...",className:"w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors",value:n,onChange:P=>r(P.target.value)})]}),S.jsxs("div",{className:"flex flex-col gap-2 mb-3",children:[S.jsxs("button",{onClick:()=>m(!0),className:"w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-md hover:shadow-indigo-200 dark:hover:shadow-none hover:-translate-y-0.5 active:scale-95",children:[S.jsx(oi,{className:"h-4 w-4"}),"Add New Document"]}),S.jsxs("button",{onClick:M,className:"w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 dark:bg-slate-700 text-white rounded-xl hover:bg-slate-900 dark:hover:bg-slate-600 transition-all duration-300 font-semibold shadow-md hover:shadow-slate-200 dark:hover:shadow-none hover:-translate-y-0.5 active:scale-95 border border-slate-700 dark:border-slate-600",children:[S.jsx(Fp,{className:"h-4 w-4"}),"Download All (ZIP)"]})]})]}),S.jsx("div",{className:"p-4",children:_.map(P=>S.jsxs("div",{className:"mb-6",children:[S.jsxs("div",{className:"flex items-center gap-2 mb-2 px-2",children:[vn[P]&&S.jsx("div",{className:`w-2 h-2 rounded-full ${vn[P].color}`}),S.jsx("h3",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-widest",children:P})]}),C.filter(N=>N.category===P).map(N=>{const K=N.icon;return S.jsxs("button",{onClick:()=>{t(N.id),Y(!1)},className:`w-full flex items-center gap-3 px-3 py-2.5 mb-1 rounded-lg transition-all ${e===N.id?"bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium":"text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"}`,children:[S.jsx(K,{className:"h-4 w-4 flex-shrink-0"}),S.jsx("span",{className:"text-sm text-left flex-1",children:N.title}),e===N.id&&S.jsx(Wp,{className:"h-4 w-4 flex-shrink-0"})]},N.id)})]},P))})]}),S.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col",children:[S.jsxs("div",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 md:px-8 py-4 flex items-center justify-between shadow-sm transition-colors sticky top-0 z-30",children:[S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("button",{onClick:()=>Y(!0),className:"p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 lg:hidden hover:bg-slate-100 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700",children:S.jsx($p,{className:"h-5 w-5"})}),S.jsx("h2",{className:"text-lg md:text-2xl font-bold text-slate-800 dark:text-slate-100 line-clamp-1",children:((T=l[e])==null?void 0:T.title)||"Loading..."})]}),S.jsx("div",{className:"flex items-center gap-2 md:gap-3",children:i?S.jsxs(S.Fragment,{children:[S.jsxs("button",{onClick:c,className:"flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 md:py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-50/30 dark:bg-slate-500/10 border border-slate-200 dark:border-slate-500/20 rounded-lg hover:bg-slate-500 hover:text-white dark:hover:bg-slate-500 dark:hover:text-white transition-all duration-300 active:scale-95",children:[S.jsx("span",{className:"hidden sm:inline",children:"Cancel"}),S.jsx(li,{className:"h-3.5 w-3.5 sm:hidden"})]}),S.jsxs("button",{onClick:Qe,className:"flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 md:py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50/30 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300 active:scale-95",children:[S.jsx(Qp,{className:"h-3.5 w-3.5"}),S.jsx("span",{className:"hidden sm:inline",children:"Save"})]})]}):S.jsxs(S.Fragment,{children:[S.jsxs("button",{onClick:nt,className:"flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 md:py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50/30 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300 active:scale-95",children:[S.jsx(nn,{className:"h-3.5 w-3.5"}),S.jsx("span",{className:"hidden md:inline",children:"Edit"})]}),S.jsxs("button",{onClick:B,className:"flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 md:py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50/30 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 active:scale-95",children:[S.jsx(Ul,{className:"h-3.5 w-3.5"}),S.jsx("span",{className:"hidden md:inline",children:"Download"})]}),S.jsxs("button",{onClick:()=>!rr.includes(e)&&le(e),disabled:rr.includes(e),className:`flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 md:py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${rr.includes(e)?"text-slate-400 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 cursor-not-allowed opacity-50":"text-rose-600 dark:text-rose-400 bg-rose-50/30 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white active:scale-95"}`,title:rr.includes(e)?"Core document cannot be deleted":"Delete this document",children:[S.jsx(si,{className:"h-3.5 w-3.5"}),S.jsx("span",{className:"hidden md:inline",children:"Delete"})]})]})})]}),S.jsx("div",{className:"flex-1 overflow-y-auto p-4 md:p-10 bg-slate-100/50 dark:bg-slate-950 transition-colors",children:l[e]&&S.jsxs("div",{className:"max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 md:p-12 min-h-[calc(100vh-180px)] border border-slate-200 dark:border-slate-800 transition-colors",children:[i?S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-xl flex items-center gap-4 transition-colors",children:[S.jsx("div",{className:"bg-emerald-600 p-2 rounded-lg text-white",children:S.jsx(jt,{className:"h-5 w-5"})}),S.jsxs("div",{children:[S.jsx("h4",{className:"font-bold text-emerald-900 dark:text-emerald-100 text-[11px] md:text-sm uppercase tracking-wider",children:"Editor View"}),S.jsx("p",{className:"text-[10px] md:text-xs text-emerald-700 dark:text-emerald-300",children:"Markdown format supported"})]})]}),S.jsx("textarea",{value:o,onChange:P=>s(P.target.value),className:"w-full h-[calc(100vh-350px)] p-6 md:p-10 font-mono text-xs md:text-sm text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-emerald-500/50 dark:focus:border-emerald-500/30 transition-all resize-none shadow-inner",placeholder:"Start writing your documentation here..."})]}):S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800 rounded-xl flex items-center gap-4 transition-colors",children:[S.jsx("div",{className:"bg-blue-600 p-2 rounded-lg text-white",children:S.jsx(td,{className:"h-5 w-5"})}),S.jsxs("div",{children:[S.jsx("h4",{className:"font-bold text-blue-900 dark:text-blue-100 text-sm",children:"Design Optimization"}),S.jsx("p",{className:"text-xs text-blue-700 dark:text-blue-300",children:"Customize your documentation architecture with precision."})]})]}),S.jsx("pre",{className:"whitespace-pre-wrap font-mono text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50/30 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors",children:l[e].content})]}),S.jsxs("div",{className:"mt-12 md:mt-16 pt-8 md:pt-10 border-t border-slate-200 dark:border-slate-800",children:[S.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg text-amber-600 dark:text-amber-400",children:S.jsx(_i,{className:"h-5 w-5"})}),S.jsx("h3",{className:"text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight",children:"📝 Small Notes"})]}),S.jsxs("button",{onClick:()=>ee(!0),className:"w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/20 dark:shadow-none transition-all duration-300 font-semibold hover:-translate-y-0.5 active:scale-95",children:[S.jsx(oi,{className:"h-4 w-4"}),"Add Small Note"]})]}),z[e]&&z[e].length>0?S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:z[e].map(P=>S.jsxs("div",{className:"bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-5 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg group relative",children:[S.jsxs("div",{className:"flex items-center justify-between mb-3",children:[S.jsx("span",{className:"font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors",children:P.title}),S.jsx("button",{onClick:()=>ke(P.id),disabled:!P.isCustom,className:`p-1.5 rounded-lg transition-all ${P.isCustom?"text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30":"text-slate-300 dark:text-slate-600 cursor-not-allowed opacity-50"}`,title:P.isCustom?"Delete note":"Built-in item",children:S.jsx(si,{className:"h-4 w-4"})})]}),P.content&&S.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed bg-white/50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mb-3 line-clamp-3",children:['"',P.content,'"']}),S.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-100 rounded-full",children:[S.jsx(nd,{className:"w-3 h-3"}),"User Note"]})]},P.id))}):S.jsxs("div",{className:"text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 transition-colors",children:[S.jsx(Si,{className:"h-8 w-8 text-slate-300 dark:text-slate-600 mx-auto mb-3"}),S.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-sm font-medium",children:"No small notes yet. Enrich your docs with quick insights!"})]})]})]})}),S.jsx("footer",{className:"bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-4 md:px-8 py-4 md:py-6 shadow-lg z-10 transition-all",children:S.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6",children:[S.jsx("div",{className:"flex flex-col items-center md:items-start gap-1",children:S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(Do,{className:"w-5 h-5 text-blue-600 dark:text-blue-400"}),S.jsx("p",{className:"text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight text-center md:text-left",children:"Project Documentation Hub"})]})}),S.jsxs("div",{className:"flex flex-col items-center gap-1",children:[S.jsx("p",{className:"text-[9px] md:text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-[0.2em]",children:"Content"}),S.jsxs("div",{className:"text-[11px] md:text-xs text-slate-600 dark:text-slate-400 text-center leading-relaxed",children:["© Design by ",S.jsx("strong",{children:"Manish Kumar With Ai"}),S.jsx("span",{className:"block md:inline md:ml-2 opacity-80 font-medium",children:S.jsx("p",{children:"manishkanojia79@gmail.com"})})]})]}),S.jsxs("div",{className:"flex items-center gap-3 md:gap-4",children:[S.jsxs("button",{onClick:()=>j(!0),className:"flex items-center gap-2 px-3 md:px-4 py-2 text-[11px] md:text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 rounded-xl transition-all",children:[S.jsx(_i,{className:"w-3.5 h-3.5"}),"Guide"]}),S.jsxs("a",{href:"mailto:manishkumar@example.com",className:"flex items-center gap-2 px-3 md:px-4 py-2 text-[11px] md:text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 rounded-xl transition-all hover:scale-105 active:scale-95",children:[S.jsx(ed,{className:"w-3.5 h-3.5"}),"Support"]})]})]})})]}),Q&&S.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[100] p-4 transition-all animate-in fade-in duration-300",children:S.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden animate-in zoom-in-95 duration-200 border border-white/20 dark:border-slate-800 flex flex-col",children:[S.jsxs("div",{className:"p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors",children:[S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("div",{className:"bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-500/30",children:S.jsx(_i,{className:"h-6 w-6"})}),S.jsxs("div",{children:[S.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-slate-100",children:"Project Manual & Guide"}),S.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-sm font-medium",children:"How to use the Documentation Hub"})]})]}),S.jsx("button",{onClick:()=>j(!1),className:"p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all",children:S.jsx(li,{className:"h-6 w-6"})})]}),S.jsxs("div",{className:"flex-1 overflow-y-auto p-10 space-y-8 custom-scrollbar bg-white dark:bg-slate-900 transition-colors",children:[S.jsxs("section",{children:[S.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[S.jsx("div",{className:"w-1.5 h-6 bg-blue-600 rounded-full"}),S.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight",children:"Project Overview"})]}),S.jsxs("p",{className:"text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm",children:["Welcome to the ",S.jsx("strong",{children:"SaaS Documentation Hub"}),", a high-performance workspace designed by ",S.jsx("strong",{children:"Manish Kumar"}),". This platform allows teams to build, organize, and manage complex architecture guides with a premium, user-friendly interface."]})]}),S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[S.jsxs("div",{className:"bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:border-blue-300 dark:hover:border-blue-700 transition-colors",children:[S.jsxs("h4",{className:"font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-3",children:[S.jsx(oi,{className:"w-4 h-4 text-blue-500"}),"Creation"]}),S.jsxs("p",{className:"text-sm text-slate-500 dark:text-slate-400 leading-relaxed",children:["Instantly create new documents by clicking the ",S.jsx("strong",{children:'"Add New Document"'})," button. Each doc is slug-optimized and automatically categorized."]})]}),S.jsxs("div",{className:"bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors",children:[S.jsxs("h4",{className:"font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-3",children:[S.jsx(lr,{className:"w-4 h-4 text-indigo-500"}),"Organization"]}),S.jsxs("p",{className:"text-sm text-slate-500 dark:text-slate-400 leading-relaxed",children:["Use the ",S.jsx("strong",{children:"Category System"})," to group documents. Visual icons and color-coded dots maintain a clean hierarchy in your sidebar."]})]}),S.jsxs("div",{className:"bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-amber-300 transition-colors",children:[S.jsxs("h4",{className:"font-bold text-slate-800 flex items-center gap-2 mb-3",children:[S.jsx(Si,{className:"w-4 h-4 text-amber-500"}),"Optimization"]}),S.jsxs("p",{className:"text-sm text-slate-500 leading-relaxed",children:["The ",S.jsx("strong",{children:'"Small Notes"'})," feature allows you to attach context-specific insights (max 50 words) to any documentation entry."]})]}),S.jsxs("div",{className:"bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-emerald-300 transition-colors",children:[S.jsxs("h4",{className:"font-bold text-slate-800 flex items-center gap-2 mb-3",children:[S.jsx(Ul,{className:"w-4 h-4 text-emerald-500"}),"Portability"]}),S.jsxs("p",{className:"text-sm text-slate-500 leading-relaxed",children:["Export your work as production-ready ",S.jsx("strong",{children:"Markdown (.md)"})," files with a single click using the Download feature."]})]})]}),S.jsxs("section",{className:"bg-blue-600 rounded-2xl p-8 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden group",children:[S.jsxs("div",{className:"relative z-10",children:[S.jsx("h3",{className:"text-xl font-bold mb-2",children:"Developed with Passion"}),S.jsx("p",{className:"text-blue-100 text-sm leading-relaxed opacity-90 italic",children:'"This hub was built to solve the complexity of software documentation, making it beautiful and accessible for every developer."'}),S.jsx("p",{className:"mt-4 text-xs font-black uppercase tracking-widest",children:"— Manish Kumar"})]}),S.jsx(Do,{className:"absolute -right-10 -bottom-10 w-40 h-40 text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-700"})]})]}),S.jsx("div",{className:"p-6 bg-slate-50 border-t border-slate-100 flex justify-end",children:S.jsx("button",{onClick:()=>j(!1),className:"px-8 h-12 bg-slate-900 text-white rounded-xl hover:bg-slate-800 shadow-lg shadow-slate-900/20 transition-all font-bold active:scale-95",children:"Understood"})})]})}),y&&S.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-all animate-in fade-in duration-300",children:S.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 max-w-lg w-full animate-in zoom-in-95 duration-200 border border-white/20 dark:border-slate-800",children:[S.jsxs("div",{className:"flex items-center justify-between mb-8",children:[S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("div",{className:"bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-500/30",children:S.jsx(oi,{className:"h-6 w-6"})}),S.jsxs("div",{children:[S.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight",children:"Create Document"}),S.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-sm font-medium",children:"Add a new guide to your hub"})]})]}),S.jsx("button",{onClick:()=>{m(!1),g(!1)},className:"p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all",children:S.jsx(li,{className:"h-6 w-6"})})]}),S.jsxs("div",{className:"space-y-6",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2 px-1",children:"Document Title *"}),S.jsx("input",{type:"text",placeholder:"e.g. Custom API Design",value:k,onChange:P=>f(P.target.value),className:"w-full h-12 px-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-slate-900 dark:text-slate-100 font-semibold transition-all shadow-inner",onKeyPress:P=>{P.key==="Enter"&&ve()}}),S.jsx("p",{className:"text-[10px] text-slate-400 dark:text-slate-500 mt-2 ml-1",children:"This will be used as the document title and slug"})]}),S.jsxs("div",{className:"relative",children:[S.jsx("label",{className:"block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2 px-1",children:"Category"}),S.jsxs("button",{onClick:()=>g(!d),className:"w-full h-12 px-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl flex items-center justify-between hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none transition-all group",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[vn[x]&&S.jsx("div",{className:`w-3.5 h-3.5 rounded shadow-sm ${vn[x].color}`}),S.jsx("span",{className:"text-slate-700 dark:text-slate-300 font-semibold",children:x})]}),S.jsx(Bp,{className:`h-4 w-4 text-slate-400 transition-transform duration-300 ${d?"rotate-180 text-blue-500":"group-hover:text-slate-600"}`})]}),d&&S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"fixed inset-0 z-[55]",onClick:()=>g(!1)}),S.jsxs("div",{className:"absolute bottom-full left-0 w-full mb-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-[60] py-2 max-h-48 overflow-y-auto animate-in fade-in slide-in-from-bottom-2 duration-200",children:[S.jsx("div",{className:"px-4 pb-2 mb-1 border-b border-slate-50 dark:border-slate-800",children:S.jsx("p",{className:"text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest",children:"Select Category"})}),["Custom",...[...new Set(w.map(P=>P.category))].filter(P=>P!=="Custom").sort()].map(P=>{const N=vn[P]||vn.Custom,K=N.icon;return S.jsxs("button",{onClick:()=>{u(P),g(!1)},className:`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group ${x===P?"bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold":"text-slate-600 dark:text-slate-400"}`,children:[S.jsx("div",{className:`w-3 h-3 rounded shadow-sm ${N.color} group-hover:scale-110 transition-transform`}),S.jsx(K,{className:`h-4 w-4 ${x===P?"text-blue-500":"text-slate-400 group-hover:text-slate-500"}`}),S.jsx("span",{className:"flex-1 text-left",children:P}),x===P&&S.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"})]},P)})]})]})]}),S.jsxs("div",{className:"flex gap-4 pt-4",children:[S.jsx("button",{onClick:()=>{m(!1),g(!1)},className:"flex-1 h-12 px-4 border-2 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-600 transition-all font-bold",children:"Cancel"}),S.jsx("button",{onClick:ve,className:"flex-1 h-12 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 transition-all font-bold",children:"Create Guide"})]})]})]})}),b&&S.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:S.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4 border border-white/20 dark:border-slate-800 animate-in zoom-in-95 duration-200",children:[S.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[S.jsx("div",{className:"bg-red-100 dark:bg-red-900/30 p-3 rounded-2xl",children:S.jsx(si,{className:"h-6 w-6 text-red-600 dark:text-red-400"})}),S.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight",children:"Delete Document?"})]}),S.jsxs("div",{className:"mb-8",children:[S.jsxs("p",{className:"text-slate-600 dark:text-slate-400 mb-3 font-medium",children:["Are you sure you want to delete ",S.jsxs("strong",{children:['"',((H=l[R])==null?void 0:H.title)||"this document",'"']}),"?"]}),S.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 flex items-start gap-3",children:[S.jsx("div",{className:"bg-red-200 p-1.5 rounded-lg mt-0.5",children:S.jsx(Mp,{className:"w-4 h-4 text-red-700"})}),S.jsx("p",{className:"text-[11px] text-red-800 dark:text-red-300 leading-relaxed font-bold",children:"This action is permanent and cannot be reversed. All content within this guide will be lost forever."})]})]}),S.jsxs("div",{className:"flex gap-4",children:[S.jsx("button",{onClick:()=>E(!1),className:"flex-1 h-12 px-4 border-2 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-600 transition-all font-bold",children:"Cancel"}),S.jsx("button",{onClick:Ee,className:"flex-1 h-12 px-4 bg-red-600 text-white rounded-xl hover:bg-red-700 shadow-lg shadow-red-500/25 transition-all font-bold",children:"Delete Now"})]})]})}),U&&S.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[100] p-4 transition-all animate-in fade-in duration-300",children:S.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 max-w-lg w-full animate-in zoom-in-95 duration-200 border border-white/20 dark:border-slate-800",children:[S.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[S.jsx("div",{className:"bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-500/30",children:S.jsx(nn,{className:"h-6 w-6"})}),S.jsxs("div",{children:[S.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight",children:"Create Small Note"}),S.jsx("p",{className:"text-slate-500 dark:text-slate-400 text-sm font-medium",children:"Add a quick insight to this section"})]})]}),S.jsxs("div",{className:"space-y-6",children:[S.jsxs("div",{children:[S.jsx("label",{className:"block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2 px-1",children:"Note Heading"}),S.jsx("input",{type:"text",placeholder:"e.g. Configuration Hint",className:"w-full h-12 px-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-slate-900 dark:text-slate-100 font-semibold transition-all shadow-inner",value:A,onChange:P=>F(P.target.value)})]}),S.jsxs("div",{children:[S.jsx("label",{className:"block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2 px-1",children:"Note Description"}),S.jsx("textarea",{placeholder:"Briefly explain your insight...",className:"w-full h-32 p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-slate-900 dark:text-slate-100 font-medium transition-all shadow-inner",value:p,onChange:P=>W(P.target.value)}),S.jsxs("div",{className:"mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg flex items-center gap-2",children:[S.jsx(Si,{className:"w-4 h-4 text-blue-600 dark:text-blue-400"}),S.jsx("p",{className:"text-[11px] text-blue-800 dark:text-blue-300 leading-relaxed font-medium",children:"Keep your note concise (under 50 words) for best readability."})]})]}),S.jsxs("div",{className:"flex gap-4 pt-4",children:[S.jsx("button",{onClick:()=>{ee(!1),F(""),W("")},className:"flex-1 h-12 px-4 border-2 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-600 transition-all font-bold",children:"Cancel"}),S.jsx("button",{onClick:ue,className:"flex-1 h-12 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 transition-all font-bold",children:"Save Note"})]})]})]})}),V&&S.jsx("div",{className:"fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[80] p-4 transition-all animate-in fade-in duration-300",children:S.jsxs("div",{className:"bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 max-w-md w-full animate-in zoom-in-95 duration-200 border border-white/20 dark:border-slate-800",children:[S.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[S.jsx("div",{className:"bg-red-100 dark:bg-red-900/30 p-3 rounded-full",children:S.jsx(si,{className:"h-6 w-6 text-red-600 dark:text-red-400"})}),S.jsx("h2",{className:"text-2xl font-bold text-slate-800 dark:text-slate-100",children:"Delete Small Note?"})]}),S.jsxs("div",{className:"mb-6",children:[S.jsx("p",{className:"text-slate-600 dark:text-slate-400 mb-3 font-medium",children:"Are you sure you want to delete this small note?"}),S.jsx("div",{className:"bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3",children:S.jsxs("p",{className:"text-sm text-red-800 dark:text-red-300",children:["⚠️ ",S.jsx("strong",{children:"Warning:"})," This action cannot be undone."]})})]}),S.jsxs("div",{className:"flex gap-4",children:[S.jsx("button",{onClick:()=>L(!1),className:"flex-1 h-12 px-4 border-2 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-600 transition-all font-bold",children:"Cancel"}),S.jsx("button",{onClick:ae,className:"flex-1 h-12 px-4 bg-red-600 text-white rounded-xl hover:bg-red-700 shadow-lg shadow-red-500/25 transition-all font-bold",children:"Delete Note"})]})]})})]})})};Ma.createRoot(document.getElementById("root")).render(S.jsx(_d.StrictMode,{children:S.jsx(th,{})}));
