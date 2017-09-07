'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setCookie = exports.getCookie = exports.strTrunc = exports.strTirm = exports.strReverse = exports.arrSortMerge = exports.arrSortBubble = exports.arrSortQuick = exports.debounce = exports.getAbsoultePath = exports.xssFilter = exports.pageBackFromNextPage = exports.locStorage = exports.is58App = exports.isWechat = exports.isIosApp = exports.stringifyParams = exports.matchSearch = undefined;

var _xssFilter = require('./libs/xssFilter');

var _cookie = require('./libs/cookie');

var _string = require('./libs/string');

var _sort = require('./libs/sort');

var matchSearch = function matchSearch(search, reg) {
    return search.match(reg) && search.match(reg)[1] ? search.match(reg)[1] : null;
};

/**
 * 配合fetch 格式化body
 * @param params
 */
var stringifyParams = function stringifyParams(params) {
    return Object.keys(params).map(function (key) {
        return key + '=' + encodeURIComponent(params[key]);
    }).join('&');
};

/**
 * 判断是否是58iosapp
 * @returns {boolean}
 */
var isIosApp = function isIosApp() {
    return (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && (0, _cookie.getCookie)('58ua') === '"58app"'
    );
};

/**
 * 判断是否是58app
 */
var is58App = function is58App() {
    return (0, _cookie.getCookie)('58ua') === '"58app"';
};

/**
 * 判断是否是微信
 */
var isWechat = function isWechat() {
    return (/micromessenger/i.test(window.navigator.userAgent.toLowerCase())
    );
};

var supportLocalStorage = function () {
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}();

var supportSessionStorage = function () {
    var test = 'test';
    try {
        sessionStorage.setItem(test, test);
        sessionStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}();

var locStorage = {
    set: function set(key, value) {
        if (supportLocalStorage) {
            localStorage.setItem(key, value);
        } else if (supportSessionStorage) {
            sessionStorage.setItem(key, value);
        }
    },
    get: function get(key) {
        if (supportLocalStorage) {
            return localStorage.getItem(key);
        } else if (supportSessionStorage) {
            return sessionStorage.getItem(key);
        }
    },
    removeItem: function removeItem(key) {
        if (supportLocalStorage) {
            return localStorage.removeItem(key);
        } else if (supportSessionStorage) {
            return sessionStorage.removeItem(key);
        }
    },
    isSupport: function isSupport(key) {
        return supportLocalStorage || supportSessionStorage;
    }
};

var getAbsoultePath = function getAbsoultePath(href) {
    var link = document.createElement('a');
    link.href = href;
    return link.protocol + '//' + link.host + link.pathname + link.search + link.hash;
};

/**
 * 监听浏览器回退事件
 * @param actionToDo
 */
var pageBackFromNextPage = function pageBackFromNextPage(actionToDo) {

    // pageshow
    // UA.android && window.addEventListener('focus', actionToDo, false);
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            actionToDo(e);
        }
    }, false);

    // visibilityChange
    document.addEventListener('visibilitychange', function (e) {
        if (document.visibilityState == 'visible' || !document.hidden) {
            actionToDo(e);
        }
    }, false);

    // webkitVisibilityChange
    document.addEventListener('webkitVisibilitychange', function (e) {
        if (document.webkitVisibilityState == 'visible' || !document.webkitHidden) {
            actionToDo(e);
        }
    }, false);
};

/**
 * 截流函数
 * @param func
 * @param wait
 * @param immediate
 * @returns {Function}
 */
var debounce = function debounce(func, wait, immediate) {
    var timeout = void 0,
        result = void 0;
    return function () {
        var context = this,
            args = arguments;
        var later = function later() {
            timeout = null;
            if (!immediate) result = func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(context, args);
        return result;
    };
};

exports.matchSearch = matchSearch;
exports.stringifyParams = stringifyParams;
exports.isIosApp = isIosApp;
exports.isWechat = isWechat;
exports.is58App = is58App;
exports.locStorage = locStorage;
exports.pageBackFromNextPage = pageBackFromNextPage;
exports.xssFilter = _xssFilter.xssFilter;
exports.getAbsoultePath = getAbsoultePath;
exports.debounce = debounce;
exports.arrSortQuick = _sort.arrSortQuick;
exports.arrSortBubble = _sort.arrSortBubble;
exports.arrSortMerge = _sort.arrSortMerge;
exports.strReverse = _string.strReverse;
exports.strTirm = _string.strTirm;
exports.strTrunc = _string.strTrunc;
exports.getCookie = _cookie.getCookie;
exports.setCookie = _cookie.setCookie;