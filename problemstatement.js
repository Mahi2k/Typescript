"use strict";
exports.__esModule = true;
var ProblemStatementFirst = /** @class */ (function () {
    function ProblemStatementFirst(originalArray) {
        this.originalArray = originalArray;
    }
    ProblemStatementFirst.prototype.displayValue = function () {
        return this.originalArray.slice(0);
    };
    ProblemStatementFirst.prototype.sortArray = function () {
        if (this.originalArray.length) {
            return this.originalArray.sort(function (a, b) { return a.length - b.length; });
        }
        return [];
    };
    ProblemStatementFirst.prototype.reverseArray = function () {
        if (this.originalArray.length) {
            return this.originalArray.reverse();
        }
        return [];
    };
    return ProblemStatementFirst;
}());
exports.ProblemStatementFirst = ProblemStatementFirst;
var ProblemStatementSecond = /** @class */ (function () {
    function ProblemStatementSecond(OriginalString) {
        this.OriginalString = OriginalString;
    }
    ProblemStatementSecond.prototype.findNoOfChar = function (char) {
        var count = 0;
        if (char) {
            for (var _i = 0, _a = this.OriginalString.split(''); _i < _a.length; _i++) {
                var looping = _a[_i];
                if (looping == char) {
                    count += 1;
                }
            }
            return "Total number of character " + char + " is : " + count;
        }
        return "Empty String";
    };
    ProblemStatementSecond.prototype.capitalize = function () {
        var count = 0;
        var returnString = "";
        var tempArray = [];
        if (this.OriginalString) {
            var arr = this.OriginalString.split('.');
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var sentence = arr_1[_i];
                tempArray.push(sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1));
            }
            return tempArray.join(". ");
        }
        return tempArray.join();
    };
    return ProblemStatementSecond;
}());
exports.ProblemStatementSecond = ProblemStatementSecond;
