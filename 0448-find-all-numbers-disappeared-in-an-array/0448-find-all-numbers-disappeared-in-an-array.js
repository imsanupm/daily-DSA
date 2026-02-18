/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let largest = nums.length;
    let smallest = 1;
    let set = new Set(nums);
    let result = [];
    console.log(largest , smallest,set)
    for(let i = smallest; i<=largest; i++){
        if(!set.has(i)){
            result.push(i);
        }
    };
    return result;
};