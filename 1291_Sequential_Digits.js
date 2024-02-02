/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {

    let num = [], str = '123456789', res = [];
    
    for ( let i = 1 ; i <= 8 ; i++ ) {
        for ( j = i + 1 ; j <= 9 ; j++ ) {
            num.push(parseInt(str.slice(i-1, j)));
        }
    }

    num.sort( (a,b) => a - b )
    
    for ( let i = 0 ; i < num.length ; i++ ) {
        if ( num[i] < low ) {
            continue;
        } else if ( num[i] <= high ) {
            res.push(num[i])
        } else {
            break;
        }
    }

    return res;

};
