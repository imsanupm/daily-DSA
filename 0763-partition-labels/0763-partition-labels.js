/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
 
    let map = new Map();
    
    for(let i =0; i<s.length; i++){
        map.set(s[i], i);
    };
    
    let res = [];
    let size = 0;
    let end = 0;
    
    for(let i = 0; i<s.length;i++ ){
        size += 1;
        end = Math.max(end,map.get(s[i]))
        
        if(i==end){
            res.push(size)
            size = 0
        }
    }

    return res
};