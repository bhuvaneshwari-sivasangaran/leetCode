/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    colors = colors.split('');
    let ptr1 = 0, ptr2 = 0;

    while( true ) {
        for ( ; ptr1 < colors.length ; ptr1++ ) {
            if ( ptr1 === 0 && colors.length != 1 ) {
                continue;
            } else if ( ptr1 === colors.length -1 ) {
                return false;
            } else if ( colors[ptr1-1] === 'A' && colors[ptr1] === 'A' && colors[ptr1+1] === 'A' ) {    
                colors.splice(ptr1-1, 1);
                ptr1--;
                break;
            } else if ( ptr1 === colors.length-1 ) {
                return false;
            } else {
                continue;
            }
        }
        for ( ; ptr2 < colors.length ; ptr2++ ) {
            if ( ptr2 === 0 ) {
                continue;
            } else if ( ptr2 === colors.length -1 ) {
                return true;
            } else if ( colors[ptr2-1] === 'B' && colors[ptr2] === 'B' && colors[ptr2+1] === 'B' ) {
                colors.splice(ptr2-1, 1);
                ptr2--;
                break;
            } else if ( ptr2 === colors.length-1 ) {
                return true;
            } else {
                continue;
            }
        }
    }
};
