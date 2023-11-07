/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    let curr = []
    for ( let i = 0 ; i < dist.length ; i++ ) {
            curr.push(Math.ceil(dist[i]/speed[i]))
    }
    curr.sort((a,b)=>a-b);
    for ( let i = 0 ; i < curr.length ; i++ ) {
        if ( curr[i] <= i ) {
            return i;
        }
    }
    return curr.length;
};
