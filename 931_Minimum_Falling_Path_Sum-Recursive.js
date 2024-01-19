/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {

    let min = Number.MAX_SAFE_INTEGER;
    let len = matrix.length;

    for ( let i = 0 ; i < len ; i++ ) {
        checkFallingPath( matrix[0][i], i , 0, 0)
    }

    function checkFallingPath(val, pos, curMin, iteration) {

        console.log(val, pos, curMin, iteration)

        curMin += val;

        iteration++;

        if ( iteration === len ){
            min = Math.min(min, curMin);
            return;
        }

        if ( pos > 0 ) {
            checkFallingPath(matrix[iteration][pos-1], pos-1, curMin, iteration);
        }
        if ( pos < len - 1 ) {
            checkFallingPath(matrix[iteration][pos+1], pos+1, curMin, iteration);
        }
        checkFallingPath(matrix[iteration][pos], pos, curMin, iteration);

    }

    return min;


};
