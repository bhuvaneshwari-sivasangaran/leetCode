/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums = nums.filter((val) => val > 0);
    nums = [...new Set(nums)];
    nums.sort((a,b) => (a-b));
    let i = 1;
    for ( let num of nums ) {
        if ( i === num ) {
            i++;
        } else {
            return i;
        }
    }
    return i;
};
