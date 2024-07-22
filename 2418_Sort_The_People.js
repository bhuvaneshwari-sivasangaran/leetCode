/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    
    for ( let i = 0 ; i < heights.length - 1 ; i++ ) {
        for ( let j = i + 1 ; j < heights.length ; j++ ) {
            if ( heights[i] < heights[j] ) {
                let tempHeight = heights[i], tempName = names[i];
                heights[i] = heights[j]; 
                names[i] = names[j];
                heights[j] = tempHeight;
                names[j] = tempName;
            }
        }
    }

    return names;

};
