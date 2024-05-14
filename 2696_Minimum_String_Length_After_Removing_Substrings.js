/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    
    let stack = [];

    for ( let val of s ) {
        if ( ( val === 'B' && stack.at(-1) === 'A' ) || ( val === 'D' && stack.at(-1) === 'C' ) ) {
            stack.pop();
        } else {
            stack.push(val);
        }
    }

    return stack.length;
    
};
