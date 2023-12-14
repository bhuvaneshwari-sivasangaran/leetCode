/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {

    let rowLen = grid.length,
    colLen = grid[0].length,
    zerosRow = new Array(rowLen).fill(0), 
    zerosCol = new Array(colLen).fill(0);

    for ( let i = 0 ; i < rowLen ; i++ ) {
        for ( let j = 0 ; j < colLen ; j++ ) {

            if ( grid[i][j] == 0 ) {
                zerosRow[i] += 1;
                zerosCol[j] += 1;
            }

        }
    }

    let res = [];

    for ( let i = 0 ; i < rowLen ; i++ ) {
        let temp = []
        for ( let j = 0 ; j < colLen ; j++ ) {
            temp.push(rowLen + colLen - ( (zerosCol[j] + zerosRow[i]) * 2 ))
        }
        res.push(temp);
        console.log(temp);
    }

    return res;

};
