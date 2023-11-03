/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = [];
    let position = 0;
    for ( let i = 1 ; i <= n ; i++ ) {
        if ( target[position] === i ) {
            result.push('Push');
            position++;
        } else result.push(...['Push','Pop']);
        if ( position === target.length ) return result;
    }
    return result;
};
