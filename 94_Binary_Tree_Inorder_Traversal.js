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
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    let res = [];
    traverse(root, res);
    return res;

};

var traverse = function(node, res) {

    if ( node ) {
        traverse(node.left, res);
        res.push(node.val);
        traverse(node.right, res);
    }

}
