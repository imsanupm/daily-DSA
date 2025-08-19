/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let arrLength = arr.length;

   if(arrLength<3)return false;

   let rightIndex = arrLength-1;
   let leftIndex = 0
   while ( leftIndex +1 < arrLength && arr [leftIndex] <arr [leftIndex+1 ] ) {
    leftIndex++
   };
   while( leftIndex >0&& arr[rightIndex-1] > arr[rightIndex]){
    rightIndex--
   }
    if(leftIndex==rightIndex && rightIndex !== 0 && leftIndex !== arrLength-1){
    return true
   }else{
    return false
   }
  
};