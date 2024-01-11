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
var maxAncestorDiff = function(root) {

    if ( root === null ) {
        return 0;
    }

    let diff = 0;

    findDiff ( root, root.val, root.val );

    return diff;

    function findDiff ( root, min, max ) {

        if ( root === null ) {
            return;
        }

        diff = Math.max( diff, Math.abs( min - root.val ), Math.abs( max - root.val ) );
        min = Math.min(min, root.val);
        max = Math.max(max, root.val);

        findDiff ( root.left, min, max );
        findDiff ( root.right, min, max );

    }
    
};
