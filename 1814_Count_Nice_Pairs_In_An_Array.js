/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    
    let count = 0;

    const rev = ( num ) => parseInt(num.toString().split('').reverse().join(''));

    for ( let i = 0 ; i < nums.length - 1 ; i++ ) {
        for ( let j = i + 1 ; j < nums.length ; j++ ) {
            console.log(nums[i], rev(nums[j]), nums[j], rev(nums[i]))
            if ( nums[i] + rev(nums[j]) == nums[j] + rev(nums[i]) ) {
                count++;
            }
        }
    }

    return count % 10000007;

};
