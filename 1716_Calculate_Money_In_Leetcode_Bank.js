/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    
    let total = 0;

    for ( let i = 1, j = 1; i <= n ; i++ , j++ ) {
        if ( (i - 1) % 7 === 0 ) {
            j = 1 + Math.floor( i / 7);
        }
        total += j;
    }

    return total;

};
