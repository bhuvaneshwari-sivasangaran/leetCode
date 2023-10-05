/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let res = [];
    let limit = Math.floor( nums.length / 3 );
    let map = new Map();
    for ( let i = 0 ; i < nums.length ; i++ ) {
        if ( map.get(nums[i]) ) {
            map.set( nums[i], map.get(nums[i]) + 1 );
        } else {
            map.set( nums[i], 1 );
        }
    }

    for ( let ele of map.entries() ) {
        if( ele[1] > limit ) {
            res.push(ele[0]);
        }
    }

    return res;
};
