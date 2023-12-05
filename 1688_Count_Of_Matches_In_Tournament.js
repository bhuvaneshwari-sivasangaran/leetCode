/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    
    let matches = 0;

    while( n > 1 ) {
        matches += Math.floor( n / 2 )
        if ( n % 2 === 1 ) {
            n = Math.floor( n / 2 ) + 1;
        } else {
            n = Math.floor( n / 2 )
        }
    }

    return matches;

};
