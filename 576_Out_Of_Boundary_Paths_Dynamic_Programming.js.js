/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {

    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array( maxMove + 1 ).fill(-1) ) );

    return solve(m, n, maxMove, startRow, startColumn);

    function solve(m, n, maxMove, startRow, startColumn) {
        if ( startRow === m || startColumn === n || startRow < 0 || startColumn < 0 ) return 1;
        if ( maxMove ===0 ) return 0;

        if ( dp[startRow][startColumn][maxMove] != -1 ) return dp[startRow][startColumn][maxMove];

        return dp[startRow][startColumn][maxMove] = solve( m, n, maxMove - 1, startRow - 1, startColumn )
            + solve( m, n, maxMove - 1, startRow + 1, startColumn )
            + solve( m, n, maxMove - 1, startRow, startColumn - 1 )
            + solve( m, n, maxMove - 1, startRow, startColumn + 1 )
    }
};
