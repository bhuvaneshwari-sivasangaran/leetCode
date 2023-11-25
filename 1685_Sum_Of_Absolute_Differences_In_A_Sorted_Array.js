/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    
    const n = nums.length;
    let left = 0, right = nums.reduce((acc, curr) => acc + curr, 0);
    const ans = [];

    for ( let i = 0 ; i < nums.length ; i++ ) {
        ans.push((2 * i - n) * nums[i] + right - left);
        left += nums[i];
        right -= nums[i];
    }

    return ans;

};
