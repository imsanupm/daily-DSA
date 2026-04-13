/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let set  = new Set(jewels);
    let count = 0;

    for(let val of stones){
        if(set.has(val)){
            count++
        }
    };

    return count
};