/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let max = 0;

    function isUnique(str) {
        let temp = str.split('');
        if ( str.length != new Set(temp).size ) return false;
        return true;
    }

    const iterate = ( i, cur ) => {
        max = Math.max( max, cur.length );
        for ( let j = i; j < arr.length ; j++ ) {
            isUnique(cur + arr[j]) && iterate(j+1 , cur + arr[j]);
        }
    }

    iterate(0,'');

    return max;
};
