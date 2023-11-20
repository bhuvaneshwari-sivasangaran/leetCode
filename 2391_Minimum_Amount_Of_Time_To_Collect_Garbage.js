/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {

    let fs_map = new Map();
    let travel_map = new Map();
    travel_map.set(0, 0);
    let count_map = new Map();
    let travel_sum = 0;
    let n = travel.length;
    let combined_garbage = garbage.join('');
    count_map.set('G', combined_garbage.split('G').length - 1);
    count_map.set('P', combined_garbage.split('P').length - 1);
    count_map.set('M', combined_garbage.split('M').length - 1);

    for ( let i = garbage.length - 1 ; i >= 0 ; i-- ) {

        travel_sum = travel_sum + travel[n - i];

        if ( garbage[i].includes('P') && !fs_map.has('P') ) {
            fs_map.set('P', i);
        }
        if ( garbage[i].includes('G') && !fs_map.has('G') ) {
            fs_map.set('G', i);
        }
        if ( garbage[i].includes('M') && !fs_map.has('M') ) {
            fs_map.set('M', i);
        }

        travel_map.set( n - i + 1 , travel_sum )

    }
    
    let result = 0;

    for (let [key, value] of count_map) {
        if ( value > 0 ){
            console.log( value, fs_map.get(key), travel_map.get(fs_map.get(key)) )
            result = result + ( value + travel_map.get(fs_map.get(key)) )
        }
    }

    return result;

};
