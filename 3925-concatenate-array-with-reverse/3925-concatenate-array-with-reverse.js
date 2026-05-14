/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    let temp = structuredClone(nums)
    temp2 = nums.reverse();
    return [...temp,...temp2]
};