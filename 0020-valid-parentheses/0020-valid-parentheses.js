/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  map = {
    ')': '(',
    ']': '[',
    '}': '{',
}
 let stack = [];
   for(let val of s){
    if(map[val]){
        if(stack.length>0 && stack[stack.length-1]==map[val]){
            stack.pop()
        }else{
            return false
        }
    }else{
        stack.push(val)
    }
   }
   return stack.length===0
   
};
