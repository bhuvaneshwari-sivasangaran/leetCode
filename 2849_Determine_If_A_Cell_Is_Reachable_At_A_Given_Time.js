/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {

    if ( ( sx === fx && sy === fy ) && (t === 1) ) {
        return false;
    }

    let maxDifference = Math.max(Math.abs(sx-fx), Math.abs(sy-fy));
    if (maxDifference <= t) {
        return true;
    }
    
    return false;
};
