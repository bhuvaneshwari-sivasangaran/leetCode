/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {

    let prevHeight = Array.from(heights);
    let sortedHeight = heights.sort( ( a , b ) => a - b );
    let count = 0;

    for ( let i = 0 ; i < heights.length ; i++ ){
        if ( prevHeight[i] != sortedHeight[i] ) {
            count++;
        }
    }

    return count;
    
};
