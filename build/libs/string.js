'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
//回文
var strReverse = exports.strReverse = function strReverse(str) {

	return str.splite('').reverse().join('');
};
//trim
var strTirm = exports.strTirm = function strTirm(str) {

	if (typeof str !== 'string') throw new Error('strTirm arg not string');

	if (String.prototype.trim) return String.prototype.trim.call(str);
	//fallback
	return str.replace(/(^\s*)|(\s*$)/g, '');
};
//截断
var strTrunc = exports.strTrunc = function strTrunc(str) {
	var totel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;


	if (typeof str !== 'string') throw new Error('strTrunc arg not string');

	if (str.length <= total || total <= 3) return str;

	var tmplStr = str.substr(0, total - 3) + '...';

	return tmplStr;
};