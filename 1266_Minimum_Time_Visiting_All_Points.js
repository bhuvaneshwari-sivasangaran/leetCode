/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {

    let min_count = 0;
    
    for ( let i = 1 ; i < points.length ; i++ ) {
        min_count += Math.max(Math.abs(points[i][0]-points[i - 1][0]), Math.abs(points[i][1]- points[i - 1][1]));
    }

    return min_count;

};
