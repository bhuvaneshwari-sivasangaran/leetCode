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
var largestValues = function(root) {
    if ( root === null ) {
        return [];
    } else {
        let data = getRowValue(root, [], 0);
        return data;
    }
};

function getRowValue ( root, rowValue, level ) {

    if ( root ) {
        if ( rowValue[level] ) {
            rowValue[level] = Math.max(root.val, rowValue[level]);
        } else {
            rowValue[level] = root.val;
        }

        getRowValue( root.right, rowValue, level+1 );
        getRowValue( root.left, rowValue, level+1 );
        return rowValue;
    }
    
}
