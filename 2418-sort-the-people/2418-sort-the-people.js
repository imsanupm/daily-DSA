/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    
    let result = [];

    while (result.length !== heights.length) {

        let currMax = Math.max(...heights);

        let maxIndex = heights.indexOf(currMax);

        result.push(names[maxIndex]);

        heights[maxIndex] = null;
    }

    return result

};