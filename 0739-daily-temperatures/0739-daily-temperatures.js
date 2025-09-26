/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
   
    let res = new Array(temperatures.length).fill(0);

    let stack = [];

    for(let i = 0; i<temperatures.length; i++){

        // t means current temperatur

        let t = temperatures[i];

        while(stack.length > 0 && t > stack[stack.length-1][0]){

            // taking temperature and index

            const [temp , tempIndex] = stack.pop();

            res[tempIndex] = i - tempIndex;
        }

        // pushing the current teperatur to the stack

        stack.push([t , i]);
    };
    return res
};