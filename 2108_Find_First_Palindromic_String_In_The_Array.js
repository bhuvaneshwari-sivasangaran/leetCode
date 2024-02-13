/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    for ( let i = 0 ; i < words.length ; i++ ) {
        let j = 0, n = words[i].length;
        if ( n === 1 ) {
            return words[i];
        }
        while ( j < n ) {
            if ( words[i].charAt(j) === words[i].charAt( n - j - 1 ) ) {
                j++;
                if ( j === Math.floor( n / 2 ) ) {
                    return words[i];
                }
            } else {
                break;
            }
        }
    }

    return "";

};
