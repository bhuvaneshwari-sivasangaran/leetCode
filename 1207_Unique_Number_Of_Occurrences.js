/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {

    let map = new Map();
    
    for ( let val of arr ) {
        if ( map.has(val) ) {
            map.set(val, map.get(val) + 1 )
        } else {
            map.set(val, 1 )
        }
    }

    let keysArray = Array.from(map.values()).sort();

    for ( let i = 0; i < keysArray.length - 1; i++ ) {
        if ( keysArray[i] == keysArray[i+1] ) {
            return false;
        }
    }

    return true;

};
