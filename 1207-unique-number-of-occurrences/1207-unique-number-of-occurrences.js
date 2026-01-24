/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let obj ={};
    for(item of arr){
        if(obj[item]){
            obj[item] +=1
        }else{
            obj[item] =1
        }
    };

    let values = Object.values(obj);
        
    for(let i = 0; i<values.length;i ++){
        for(let j = i+1;j<values.length; j++){
            if(values[i]==values[j]){
                console.log(values[i], values[j])
                return false
            }
        }
    };
    return true
    
};