/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    
    for (let img of image) {
        let row = img;
        let left = 0;
        let right = row.length - 1;

        while (left <= right) {
            [row[left], row[right]] = [1 - row[right], 1 - row[left]];
            left++;
            right--
        };

    }

    return image
};