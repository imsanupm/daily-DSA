/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;

    let left = 0;
    let right = height.length-1;
    let lLargest = height[left];
    let rLargest = height[right];

    while(left < right){
        if(lLargest < rLargest){
            left++;
            lLargest = Math.max(lLargest, height[left]);
            
            result += lLargest - height[left]
        }else{
            right--;
            rLargest = Math.max(rLargest , height[right]);
            result += rLargest - height[right];
        }
    };
    return result;
};