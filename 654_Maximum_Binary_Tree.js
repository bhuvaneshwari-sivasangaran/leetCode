/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    
    if (nums.length === 0) return null;
    let maxIndex = nums.indexOf(Math.max(...nums));

    const node = new TreeNode(nums[maxIndex]);
    node.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    node.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));

    return node;

};
