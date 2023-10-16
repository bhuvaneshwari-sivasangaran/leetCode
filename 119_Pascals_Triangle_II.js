/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [];
    for ( let i = 0 ; i <= rowIndex ; i++ ) {
        if ( i === 0 || i === rowIndex ) {
            res.push(1);
        } else {
            res.push( res[i-1] * ( rowIndex - i + 1 ) / i );
        }
    }
    return res;
};
