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
var findBottomLeftValue = function(root) {

    let arr = [root];
    let res = null;

    while( arr.length > 0 ) {

        res = arr.shift();

        if ( res.right ) {
            arr.push(res.right);
        }
        if ( res.left ) {
            arr.push(res.left);
        }

    }

    return res.val;
    
};
