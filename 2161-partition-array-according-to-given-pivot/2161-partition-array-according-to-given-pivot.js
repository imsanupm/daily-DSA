/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    
    let small = [];
    let large = [];
    let equal = [];

    nums.forEach((value,index)=>{
        if(value < pivot){
            small.push(value)
        }else if( value > pivot){
            large.push(value)
        }else{
            equal.push(value)
        }
    });

    return [...small,...equal,...large];
};