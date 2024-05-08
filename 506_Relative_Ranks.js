/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    
    let len = score.length;
    let arr = new Array( len );
    let scoreWithIndex = score.map( ( val, i ) => [val, i] );

    scoreWithIndex.sort( ( a, b ) => b[0] - a[0] );
    const rank = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    for ( let i = 0 ; i < len ; i++ ) {
        const idx = scoreWithIndex[i][1];
        if ( i < 3 ) {
            arr[idx] = rank[i];
        } else {
            arr[idx] = String( i + 1 )
        }
    }

    return arr;

};
