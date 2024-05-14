/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {

    let res = [];
    
    function traverse( node ) {

        if( !node ) return;
        for ( let n of node.children ) {
            traverse( n );
            res.push( n.val );
        }

    }

    traverse( root );
    if ( root ) {
        res.push( root.val );
    }

    return res;

};
