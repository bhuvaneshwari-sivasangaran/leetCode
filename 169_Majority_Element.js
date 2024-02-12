/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let count = 0;
    let element;

    for ( let i = 0 ; i < nums.length ; i++ ) {
        if ( count === 0 ) {
            element = nums[i];
            count++;
        } else if ( element === nums[i] ) {
            count++;
        } else {
            count--;
        }
    }

    return element;

};
