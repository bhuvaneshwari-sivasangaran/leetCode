/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
  
    let x = new Array(mat.length).fill(0);
    let y = new Array(mat[0].length).fill(0);
    let count = 0;

    for ( let i = 0 ; i < mat.length ; i++ ) {
        for ( let j = 0 ; j < mat[i].length ; j++ ) {
            x[i] = x[i] + mat[i][j];
            y[j] = y[j] + mat[i][j];
        }
    }

    for ( let i = 0 ; i < mat.length ; i++ ) {
        for ( let j = 0 ; j < mat[i].length ; j++ ) {
            if ( x[i] != 0 && y[j] != 0 && ( x[i] - mat[i][j] == 0 ) && ( y[j] - mat[i][j] == 0 ) ) {
                count++;
            }
        }
    }

    return count;

};
