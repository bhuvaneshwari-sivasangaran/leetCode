/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    
    nums.sort( (a,b) => a - b );
    let i = 0, j = nums.length - 1;
    while( i < j && nums[i] < 0 ) {
        if ( -1 * nums[i] === nums[j] ) {
            return nums[j];
        } else {
            if ( -1 * nums[i] > nums[j] ) {
                i++;
            } else {
                j--;
            }
        }
    }

    return -1;

};
