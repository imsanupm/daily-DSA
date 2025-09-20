/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
   let value=0
   let sum=0
   for(let i=0;i<nums.length;i++){
    value+=nums[i]
    value===0 ? sum++ : null
   }
   return sum
   
};