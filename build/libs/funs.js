'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var type = exports.type = function type(data) {

	return Object.prototype.toString.call(data).match(/.*\s(.*)]/)[1].toLowerCase();
};

/**
 * deepClone
 */
var deepClone = exports.deepClone = function deepClone(arg) {

	var result = void 0;
	//undefined null '' 0 false
	if (!arg) {
		return arg;
	};
	//基础类型判断
	var baseTypeList = ['string', 'number', 'boolen'];
	if (baseTypeList.indexOf(typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) !== -1) {

		return arg;
	}
	//复杂类型判断
	if (type(arg) === 'array') {

		result = [];

		arg.forEach(function (item, index) {

			result[index] = deepClone(item);
		});
	} else if (type(arg) === 'object') {

		result = {};

		var keysList = Object.keys(arg);

		for (var i = 0, len = keysList.length; i <= len; i++) {

			var key = keysList[i];
			var value = arg[key];

			result[key] = deepClone(value);
		}
	} else if (type(arg) === 'date') {

		result = new Date(arg);
	} else {

		result = arg;
	}

	return result;
};
/**
 * deepEqual
 */
var deepEqual = exports.deepEqual = function deepEqual(arg1, arg2) {

	if (arg1 === arg2) return true;
	//NaN
	if (typeof arg1 === 'number' && typeof arg2 === 'number' && isNaN(arg1) && isNaN(arg2)) {

		return true;
	}
	//function
	if (type(arg1) === 'function' && type(arg2) === 'function') {

		return arg1.toString() === arg2.toString();
	}
	//regexp
	if (type(arg1) === 'regexp' && type(arg2) === 'regexp') {

		return arg1.toString() === arg2.toString();
	}
	//date
	if (type(arg1) === 'date' && type(arg2) === 'date') {

		return arg1.getTime() === arg2.getTime();
	}
	if (type(arg1) === 'object' && type(arg2) === 'object') {

		var arg1KeyList = Object.keys(arg1);
		var arg2KeyList = Object.keys(arg2);

		if (arg1KeyList.length !== arg2KeyList.length) return false;

		var len = arg1KeyList.length;

		for (var i = 0; i <= len; i++) {

			var arg1Key = arg1KeyList[i],
			    arg2Key = arg2KeyList[i];

			if (type(arg1Key) !== type(arg2Key)) return false;

			if (!deepEqual(arg1Key, arg2Key)) return false;
		}

		return true;
	} else if (type(arg1) === 'array' && type(arg2) === 'array') {

		var arg1Length = arg1.length;
		var arg2Length = arg2.length;
		//长度判断
		if (arg1Length !== arg2Length) return false;
		for (var _i = 0; _i <= arg1Length; _i++) {

			var _arg1Key = arg1[_i],
			    _arg2Key = arg1[_i];

			if (type(_arg1Key) !== type(_arg2Key)) return false;

			if (!deepEqual(_arg1Key, _arg2Key)) return false;
		}

		return true;
	} else {

		return false;
	}
};