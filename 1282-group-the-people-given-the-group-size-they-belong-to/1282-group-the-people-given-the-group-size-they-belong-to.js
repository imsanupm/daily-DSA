/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {

    let map = {}

    let result = [];

    for (let i = 0; i < groupSizes.length; i++) {

        let size = groupSizes[i];

        if (!map[size]) {

            map[size] = [];

        };

        map[size].push(i);

        if (map[size].length == size) {

            result.push(map[size]);

            map[size] = [];

        }

    };

    return result
};