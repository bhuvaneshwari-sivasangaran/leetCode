/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {

    let current = 0, total = 0;

    for ( let i = 0 ;  i < nums.length ; i++ ) {
        current += nums[i];
        if ( current === 0 ) {
            total++;
        }
    }

    return total;
    
};
