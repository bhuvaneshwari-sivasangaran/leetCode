/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    
    let start = new TreeNode();
    let pointer = start;
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        pointer.right = new TreeNode(node.val);
        pointer = pointer.right
        inorder(node.right);
    }
    inorder(root);
    return start.right;

};
