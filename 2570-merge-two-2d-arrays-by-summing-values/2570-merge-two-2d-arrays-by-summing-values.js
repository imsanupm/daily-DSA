/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let result = [];
    let index = [];
   

    for(let i = 0; i< nums1.length; i++){
        for(let j = 0; j< nums2.length; j++){

            if(nums1[i][0] == nums2[j][0]){
            item = nums1[i][1] + nums2[j][1]

            result.push([nums1[i][0],item]);

            index.push(nums1[i][0]);
        }

        }

        

    };

    for(let i = 0; i<nums1.length; i++){

        if(!index.includes(nums1[i][0])){
            result.push(nums1[i]);
        };
    };

    for(let i = 0; i< nums2.length; i++){
        if(!index.includes(nums2[i][0])){
            result.push(nums2[i]);
        }
    };


  return result.sort((a,b)=> a[0] - b[0]);
};