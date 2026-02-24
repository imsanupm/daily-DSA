/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;

    let left = 0; 
    let right = height.length-1;

    while(left < right){
        let container = (right-left) * Math.min(height[left], height[right]);
         res = Math.max(container, res);
        if(height[left] < height[right]){
            left++;
        }else if (height[right] < height[left]){
            right--;
        }else{

            right--;
        }
        
    };

    return res
};