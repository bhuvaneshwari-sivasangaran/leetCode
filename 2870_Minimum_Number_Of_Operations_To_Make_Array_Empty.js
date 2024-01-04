/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let map = new Map();

    for ( let num of nums ) {
        if ( map.has(num) ) {
            map.set( num, map.get( num ) + 1 );
        } else {
            map.set( num, 1 );
        }
    }

    let count = 0;

    console.log(map)

    for (let [key, value] of map.entries()) {

        if ( value % 3 === 0 ) {
            count += value / 3;
            continue;
        } else if ( value % 2 === 0 ) {
            count += value / 2;
            continue;
        } else {
            let val3 = value % 3 ;
            count += Math.floor( value / 3 );
            if ( val3 == 0 ) {
                continue;
            } else {
                console.log('hai')
                let val2 = val3 % 2;
                count += Math.floor( val3 / 2 );
                if ( val2 != 0 ) {
                    return -1;
                }
            }
        }
    }

    return count;

};
