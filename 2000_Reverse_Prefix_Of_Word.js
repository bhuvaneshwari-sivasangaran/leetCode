/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
    return word.substring( 0 , word.indexOf( ch ) + 1 ).split('').reverse().join('') + word.substring( word.indexOf( ch ) + 1 );

};
