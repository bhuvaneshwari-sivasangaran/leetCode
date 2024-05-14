/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    let stack = [];

    function traverse(node) {
        if ( !node ) return;
        stack.push(node.val);
        for ( let n of node.children ) {
            traverse(n);
        }
    }

    traverse(root);
    return stack;

};
