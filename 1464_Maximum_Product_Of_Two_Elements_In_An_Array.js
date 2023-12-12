/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort(function(a,b){return a - b})
    return (nums[nums.length-1] - 1) * (nums[nums.length-2] - 1);  
};
