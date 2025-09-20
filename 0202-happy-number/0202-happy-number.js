/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, seen=new Set()) {
if(n==1)return true
if(n<0)return false
if(seen.has(n))return false
seen.add(n)
let list=String(n)
let value=list.split("")

let sum=value.reduce((acc,ele)=>{
    return acc+Number(ele)*Number(ele)
    return acc
},0)

return isHappy(sum,seen)

};

