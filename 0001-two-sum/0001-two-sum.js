/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    if(nums.length < 2 ) return false;
    let table = {};
    for (let i =0 ; i< nums.length; i++ ) {
        let dif = target - nums[i];
        if(table[dif]!=undefined){
            return [table[dif] , i] 
        }else{
            table[nums[i]] = i;
        }
    }
    return []
};