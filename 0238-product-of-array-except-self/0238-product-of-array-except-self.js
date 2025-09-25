/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let n = nums.length;
    let result = new Array(n).fill(1);

    let prefix = 1;
    for(let i = 0; i<n; i++){
        result[i] = prefix;
        prefix *= nums[i]; 
    };

    let sufix = 1;
    for(let i = n-1; i>=0; i--){
        result[i] *= sufix;
        sufix *= nums[i];
    };

    return result

};