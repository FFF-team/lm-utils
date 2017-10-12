'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var setCookie = exports.setCookie = function setCookie(key, value, days) {

	var expires = void 0;

	if (days) {

		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

		expires = '; expires=' + date.toGMTString();
	} else {

		expires = '';
	}

	document.cookie = key + '=' + value + expires + '; path=/';
};

var getCookie = exports.getCookie = function getCookie(key) {

	var keyEQ = key + '=';
	var itemList = document.cookie.split(';');
	for (var i = 0, len = itemList.length; i < len; i++) {

		var item = itemList[i];
		item = item.replace(/(^\s*)/g, '');

		if (item.indexOf(keyEQ) === 0) {

			return item.substring(keyEQ.length, item.length);
		}
	}

	return null;
};