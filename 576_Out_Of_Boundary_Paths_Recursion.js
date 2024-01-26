/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    if ( startRow === m || startColumn === n || startRow < 0 || startColumn < 0 ) return 1;
    if ( maxMove ===0 ) return 0;

    return findPaths( m, n, maxMove - 1, startRow - 1, startColumn )
        + findPaths( m, n, maxMove - 1, startRow + 1, startColumn )
        + findPaths( m, n, maxMove - 1, startRow, startColumn - 1 )
        + findPaths( m, n, maxMove - 1, startRow, startColumn + 1 )
};
