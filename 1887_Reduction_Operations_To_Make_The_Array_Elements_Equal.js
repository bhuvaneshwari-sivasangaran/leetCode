/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    
    let min = Math.min(...nums);
    nums.sort( (a,b) => a - b );
    let i = nums.length - 1, count = 0;

    while ( i >= 0 ) {
        if ( nums[i] > nums[i-1] ) {
            count += nums.length - i
        } 
        i--;
    }

    return count;

};
