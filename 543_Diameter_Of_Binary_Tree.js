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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {

    let diameter = 0;
    
    function traverse( node ) {

        if ( !node ) return 0;

        let left = traverse(node.left);
        let right = traverse(node.right);

        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) + 1;

    }

    traverse(root);

    return diameter;

};
