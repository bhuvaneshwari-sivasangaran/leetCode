/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {

    let cur = 0, res = 0;
    
    for ( let i = 0 ; i < s.length ; i++ ) {
        if ( s[i] === '(' ) {
            cur++;
            res = Math.max(res, cur);
        } else if ( s[i] === ')' ) {
            cur--;
        }
    }

    return res;

};
