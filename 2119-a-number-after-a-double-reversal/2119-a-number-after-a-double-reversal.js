/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {

    let reversed = num.toString().split('').reverse().join('');

    let doubleReversed = parseInt(reversed).toString().split('').reverse().join('');

    return num.toString() === doubleReversed;

};