/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    
    let map = new Map();

    for ( let num of nums ) {
        if ( map.has(num) ) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    let freq = Array.from(map.values());
    freq.sort((a,b)=>b-a);
    
    let total = freq[0], cur = 1;

    while ( freq[cur] === freq[0] ) {
        total += freq[cur];
        cur++;
    }

    return total;

};
