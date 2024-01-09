/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    
    function getLeaf(root, curLeaf) {

        if ( root == null ) {
            return;
        }
        
        if ( root.left === null && root.right === null ){
            curLeaf.push(root.val);
        }

        getLeaf(root.left, curLeaf);
        getLeaf(root.right, curLeaf);

    }

    let root1Leaf = [], root2Leaf = []

    getLeaf(root1, root1Leaf);
    getLeaf(root2, root2Leaf);

    return JSON.stringify(root1Leaf) === JSON.stringify(root2Leaf);

};
