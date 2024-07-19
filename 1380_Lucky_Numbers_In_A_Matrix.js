/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    
    let rows = matrix.length;
    let cols = matrix[0].length;

    let minRow = new Array(rows).fill(Infinity);
    let maxCol = new Array(cols).fill(0);

    for ( let i = 0 ; i < rows ; i++ ) {
        for ( let j = 0 ; j < cols ; j++ ) {
            let cur = matrix[i][j];
            minRow[i] = Math.min(minRow[i], cur);
            maxCol[j] = Math.max(maxCol[j], cur);
        }
    }

    for ( let i = 0 ; i < rows ; i++ ) {
        for ( let j = 0 ; j < cols ; j++ ) {
            let cur = matrix[i][j];
            if ( cur == minRow[i] && cur == maxCol[j] ) {
                return [cur];
            }
        }
    }

    return [];

};
