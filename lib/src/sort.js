'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 快速排序-不稳定复杂排序
 * @param func
 * @param []
 * @returns []
 */
var arrSortQuick = exports.arrSortQuick = function arrSortQuick(arr) {

    if (Object.prototype.toString.call(arr) !== '[object Array]') throw new Error('arrSortQuick函数参数不为Array');
    if (arr.length <= 1) return arr;
    //找到轴点
    var pivotIndex = Math.floor(arr.length / 2);
    //删除轴点
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];

    for (var i = 0, len = arr.length; i < len; i++) {

        if (arr[i] < pivot) {

            left.push(arr[i]);
        } else {

            right.push(arr[i]);
        }
    }

    return arrSortQuick(left).concat(pivot, arrSortQuick(right));
};
/**
 * 冒泡排序-稳定简单排序
 * @param func
 * @param []
 * @returns []
 */
var arrSortBubble = exports.arrSortBubble = function arrSortBubble(arr) {

    if (Object.prototype.toString.call(arr) !== '[object Array]') throw new Error('arrSortQuick函数参数不为Array');
    if (arr.length <= 1) return arr;

    var tmp = void 0;
    var len = arr.length;

    for (var i = 0; i <= len; i++) {

        for (var j = 0; j <= len - i; j++) {

            if (arr[j] > a[j + 1]) {

                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
};
/**
 * 归并排序-稳定复杂排序
 * @param func
 * @param []
 * @returns []
 */
var arrSortMerge = exports.arrSortMerge = function arrSortMerge(arr) {

    if (Object.prototype.toString.call(arr) !== '[object Array]') throw new Error('arrSortQuick函数参数不为Array');
    if (arr.length <= 1) return arr;

    var merge = function merge(left, right) {

        var tmp = [];

        while (left.length && right.length) {

            if (left[0] < righ[0]) {

                tmp.push(left.shift());
            } else {

                tmp.push(right.shift());
            }
        }

        return tmp.concat(left, right);
    };

    var pivotIndex = Math.floor(arr.length / 2);
    var left = arr.slice(0, pivotIndex);
    var right = arr.slice(pivotIndex);

    return merge(arrSortMerge(left), arrSortMerge(right));
};