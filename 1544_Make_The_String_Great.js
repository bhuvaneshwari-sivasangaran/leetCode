/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    
    let stack  = [];

    for ( let char of s ) {

        if ( stack.length > 0 ) {
            
            if ( ( char != stack.at(-1) ) && ( ( char === (stack.at(-1)).toUpperCase() ) || ( char.toUpperCase() === stack.at(-1) ) ) ) {
                stack.pop();
            } else {
                stack.push(char);
            }

        } else {
            stack.push(char);
        }

    }

    return stack.join('');

};
