/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
   let str = String(num).split('');
   let sum = str.reduce((acc,value)=>Number(value)+acc,0);
   if(sum<10){
    return sum
   }
   return addDigits(sum)
};