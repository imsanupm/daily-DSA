/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   let table = {};


    for (let val of nums) {
        table[val] = (table[val] || 0) + 1;
    }


    let sorted = Object.entries(table).sort((a, b) => b[1] - a[1]);


    return sorted.slice(0, k).map(entry => Number(entry[0]));
};

