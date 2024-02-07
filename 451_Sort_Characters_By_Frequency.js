/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    let map = new Map();
    for ( let char of s ) {
        map.set( char, ( map.get(char) || 0 ) + 1 );
    }

    let sorted = new Map([...map.entries()].sort((a,b) => b[1]- a[1]));
    let res = '';
    for (const [char, freq] of sorted.entries()) {
        res += char.repeat(freq);
    }
    
    return res;
    

};
