/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let result = []

    for(let i=0; i< candies.length; i++) {

        let currKid = candies[i] + extraCandies;

        let currentMax = Math.max(...candies);

        if(currKid>=currentMax){
            result.push(true)
        }else{
            result.push(false)
        }

    };
    return result
};