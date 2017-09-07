/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchSearch", function() { return matchSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyParams", function() { return stringifyParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIosApp", function() { return isIosApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWechat", function() { return isWechat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is58App", function() { return is58App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locStorage", function() { return locStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageBackFromNextPage", function() { return pageBackFromNextPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbsoultePath", function() { return getAbsoultePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_xssFilter__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_cookie__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_string__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_sort__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "xssFilter", function() { return __WEBPACK_IMPORTED_MODULE_0__src_xssFilter__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arrSortQuick", function() { return __WEBPACK_IMPORTED_MODULE_3__src_sort__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arrSortBubble", function() { return __WEBPACK_IMPORTED_MODULE_3__src_sort__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arrSortMerge", function() { return __WEBPACK_IMPORTED_MODULE_3__src_sort__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "strReverse", function() { return __WEBPACK_IMPORTED_MODULE_2__src_string__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "strTirm", function() { return __WEBPACK_IMPORTED_MODULE_2__src_string__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "strTrunc", function() { return __WEBPACK_IMPORTED_MODULE_2__src_string__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return __WEBPACK_IMPORTED_MODULE_1__src_cookie__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return __WEBPACK_IMPORTED_MODULE_1__src_cookie__["b"]; });
const matchSearch=(search,reg)=>search.match(reg)&&search.match(reg)[1]?search.match(reg)[1]:null;/**
 * 配合fetch 格式化body
 * @param params
 */const stringifyParams=params=>Object.keys(params).map(key=>key+'='+encodeURIComponent(params[key])).join('&');/**
 * 判断是否是58iosapp
 * @returns {boolean}
 */const isIosApp=()=>{return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)&&Object(__WEBPACK_IMPORTED_MODULE_1__src_cookie__["a" /* getCookie */])('58ua')==='"58app"';};/**
 * 判断是否是58app
 */const is58App=()=>{return Object(__WEBPACK_IMPORTED_MODULE_1__src_cookie__["a" /* getCookie */])('58ua')==='"58app"';};/**
 * 判断是否是微信
 */const isWechat=()=>{return /micromessenger/i.test(window.navigator.userAgent.toLowerCase());};const supportLocalStorage=function(){const test='test';try{localStorage.setItem(test,test);localStorage.removeItem(test);return true;}catch(e){return false;}}();const supportSessionStorage=function(){const test='test';try{sessionStorage.setItem(test,test);sessionStorage.removeItem(test);return true;}catch(e){return false;}}();const locStorage={set:function(key,value){if(supportLocalStorage){localStorage.setItem(key,value);}else if(supportSessionStorage){sessionStorage.setItem(key,value);}},get:function(key){if(supportLocalStorage){return localStorage.getItem(key);}else if(supportSessionStorage){return sessionStorage.getItem(key);}},removeItem:function(key){if(supportLocalStorage){return localStorage.removeItem(key);}else if(supportSessionStorage){return sessionStorage.removeItem(key);}},isSupport:function(key){return supportLocalStorage||supportSessionStorage;}};const getAbsoultePath=href=>{let link=document.createElement('a');link.href=href;return link.protocol+'//'+link.host+link.pathname+link.search+link.hash;};/**
 * 监听浏览器回退事件
 * @param actionToDo
 */const pageBackFromNextPage=actionToDo=>{// pageshow
// UA.android && window.addEventListener('focus', actionToDo, false);
window.addEventListener('pageshow',function(e){if(e.persisted){actionToDo(e);}},false);// visibilityChange
document.addEventListener('visibilitychange',function(e){if(document.visibilityState=='visible'||!document.hidden){actionToDo(e);}},false);// webkitVisibilityChange
document.addEventListener('webkitVisibilitychange',function(e){if(document.webkitVisibilityState=='visible'||!document.webkitHidden){actionToDo(e);}},false);};/**
 * 截流函数
 * @param func
 * @param wait
 * @param immediate
 * @returns {Function}
 */const debounce=(func,wait,immediate)=>{let timeout,result;return function(){let context=this,args=arguments;let later=function(){timeout=null;if(!immediate)result=func.apply(context,args);};let callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)result=func.apply(context,args);return result;};};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * xssFilter
 */const xssFilter=str=>{str=str.replace(/&/g,'&amp;');str=str.replace(/</g,'&lt;');str=str.replace(/>/g,'&gt;');str=str.replace(/'/g,'&acute;');str=str.replace(/"/g,'&quot;');str=str.replace(/\|/g,'&brvbar;');return str;};
/* harmony export (immutable) */ __webpack_exports__["a"] = xssFilter;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const setCookie=(key,value,days)=>{let expires;if(days){let date=new Date();date.setTime(date.getTime()+days*24*60*60*1000);expires=`; expires=${date.toGMTString()}`;}else{expires='';}document.cookie=key+'='+value+expires+'; path=/';};
/* harmony export (immutable) */ __webpack_exports__["b"] = setCookie;
const getCookie=key=>{let keyEQ=key+'=';let itemList=document.cookie.split(';');for(let i=0,len=itemList.length;i<=len;i++){let item=itemList[i];item=item.replace(/(^\s*)/g,'');if(item.indexOf(keyEQ)===0){return item.substring(keyEQ.length,item.length);}}return null;};
/* harmony export (immutable) */ __webpack_exports__["a"] = getCookie;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//回文
const strReverse=str=>{return str.splite('').reverse().join('');};
/* harmony export (immutable) */ __webpack_exports__["a"] = strReverse;
//trim
const strTirm=str=>{if(typeof str!=='string')throw new Error('strTirm arg not string');if(String.prototype.trim)return String.prototype.trim.call(str);//fallback
return str.replace(/(^\s*)|(\s*$)/g,'');};
/* harmony export (immutable) */ __webpack_exports__["b"] = strTirm;
//截断
const strTrunc=(str,totel=10)=>{if(typeof str!=='string')throw new Error('strTrunc arg not string');if(str.length<=total||total<=3)return str;let tmplStr=str.substr(0,total-3)+'...';return tmplStr;};
/* harmony export (immutable) */ __webpack_exports__["c"] = strTrunc;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 快速排序-不稳定复杂排序
 * @param func
 * @param []
 * @returns []
 */const arrSortQuick=arr=>{if(Object.prototype.toString.call(arr)!=='[object Array]')throw new Error('arrSortQuick函数参数不为Array');if(arr.length<=1)return arr;//找到轴点
let pivotIndex=Math.floor(arr.length/2);//删除轴点
let pivot=arr.splice(pivotIndex,1)[0];let left=[];let right=[];for(let i=0,len=arr.length;i<len;i++){if(arr[i]<pivot){left.push(arr[i]);}else{right.push(arr[i]);}}return arrSortQuick(left).concat(pivot,arrSortQuick(right));};
/* harmony export (immutable) */ __webpack_exports__["c"] = arrSortQuick;
/**
 * 冒泡排序-稳定简单排序
 * @param func
 * @param []
 * @returns []
 */const arrSortBubble=arr=>{if(Object.prototype.toString.call(arr)!=='[object Array]')throw new Error('arrSortQuick函数参数不为Array');if(arr.length<=1)return arr;let tmp;let len=arr.length;for(let i=0;i<=len;i++){for(let j=0;j<=len-i;j++){if(arr[j]>a[j+1]){tmp=arr[j];arr[j]=arr[j+1];arr[j+1]=tmp;}}}};
/* harmony export (immutable) */ __webpack_exports__["a"] = arrSortBubble;
/**
 * 归并排序-稳定复杂排序
 * @param func
 * @param []
 * @returns []
 */const arrSortMerge=arr=>{if(Object.prototype.toString.call(arr)!=='[object Array]')throw new Error('arrSortQuick函数参数不为Array');if(arr.length<=1)return arr;let merge=(left,right)=>{let tmp=[];while(left.length&&right.length){if(left[0]<righ[0]){tmp.push(left.shift());}else{tmp.push(right.shift());}}return tmp.concat(left,right);};let pivotIndex=Math.floor(arr.length/2);let left=arr.slice(0,pivotIndex);let right=arr.slice(pivotIndex);return merge(arrSortMerge(left),arrSortMerge(right));};
/* harmony export (immutable) */ __webpack_exports__["b"] = arrSortMerge;


/***/ })
/******/ ]);