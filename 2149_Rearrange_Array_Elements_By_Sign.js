/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    
    let positive_nums = nums.filter((a) => a > 0 );
    let negative_nums = nums.filter((a) => a < 0 );
    let res = [];

    for ( let i = 0 ; i < positive_nums.length ; i++ ) {
        res.push( positive_nums[i] );
        res.push( negative_nums[i] );
    }

    return res;

};
