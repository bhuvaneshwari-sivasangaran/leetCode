/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {

    let cur = 0; 
    let res = [];

    for ( let i = 0 ; i < s.length ; i++ ) {
        res.push(s[i]);
        if ( s[i] === '(' ) {
            cur++;
            if ( cur == 1 ) {
                res.pop();
            }
        } else if ( s[i] === ')' ) {
            cur--;
            if ( cur == 0 ) {
                res.pop();
            }
        } 
    }

    return res.join('');

};
