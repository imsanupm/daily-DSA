/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr=[]

  while(nums.length>0){
    let smallest=Infinity
    let second=Infinity

    for(let i=0;i<nums.length;i++){
        if(nums[i]<smallest){
            second=smallest
            smallest=nums[i]
        }else if(nums[i]<second){
            second=nums[i]
        }
    }
    nums.splice(nums.indexOf(second),1)
    nums.splice(nums.indexOf(smallest),1)
    arr.push(second,smallest)
  }
  return arr
  
};