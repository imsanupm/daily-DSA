/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let [length,arr] = word1.length > word2.length ? [word1.length,"arr1"] : [word2.length,'arr2']
    let result = [];
    for(let i = 0; i<length;i++){
        if(word1[i]){
            result.push(word1[i])
        };
        if(word2[i]){
            result.push(word2[i])
        }
    };
    return result.join("")
};