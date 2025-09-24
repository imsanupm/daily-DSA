/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let table = {};
    for(char of strs){
        let key = char.split('').sort().join('');
        if(!table[key]){
            table[key] = [];
        };
        table[key].push(char);
    };
    return Object.values(table)
};