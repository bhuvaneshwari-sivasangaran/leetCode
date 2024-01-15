/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    
    winnersMap = new Map(), losersMap = new Map();

    for ( arr of matches ) {

        if ( winnersMap.has(arr[0]) ) {
            winnersMap.set( arr[0], winnersMap.get(arr[0]) + 1 );
        } else {
            winnersMap.set( arr[0], 1 );
        }

        if ( losersMap.has(arr[1]) ) {
            losersMap.set( arr[1], losersMap.get(arr[1]) + 1 );
        } else {
            losersMap.set( arr[1], 1 );
        }
    }

    let notLostCount = [];
    let oneLostCount = [];

    for ( [key,value] of winnersMap ) {
        if ( losersMap.get(key) === undefined ) {
            notLostCount.push(key);
        }
    }

    for ( [key,value] of losersMap ) {
        if ( value === 1 ) {
            oneLostCount.push(key);
        }
    }

    return [notLostCount.sort((a, b) => a - b), oneLostCount.sort((a, b) => a - b)];

};
