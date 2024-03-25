/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    
    let map = new Map();
    let res = [];

    for ( let i = 0 ; i < nums.length ; i++ ) {
        if ( map.has(nums[i]) ) {
            map.set( nums[i], map.get(nums[i]) + 1 )
        } else {
            map.set( nums[i], 1 )
        }
    }

    map.forEach((value, key) => {
        if ( value == 2 ) {
            res.push(key);
        }
    });

    return res;

};
