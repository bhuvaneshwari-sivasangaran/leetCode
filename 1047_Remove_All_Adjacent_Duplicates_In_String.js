/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    
    let stack = [];

    for ( let val of s ) {
        if (  val=== stack.at(-1) ) {
            stack.pop();
        } else {
            stack.push(val);
        }
    }

    return stack.join('');

};
