/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {

    let totalSum = nums.reduce((acc, val) => acc + val, 0);
    let leftSum = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];

        result.push(Math.abs(leftSum - rightSum));
        leftSum += nums[i];
    }
    return result
};