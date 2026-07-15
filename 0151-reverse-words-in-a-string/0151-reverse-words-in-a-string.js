/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(" ").filter((val) => val != "");

    let left = 0;

    let right = arr.length - 1;

    while (left < right) {

        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;

        right--;
    };

    return arr.join(" ")

};