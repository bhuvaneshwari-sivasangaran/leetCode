/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {

    let len = s.length, halfLen = len / 2;
    let s1 = s.slice(0, halfLen), s2 = s.slice(halfLen);
    let s1VowelCount = countVowel(s1), s2VowelCount = countVowel(s2);
    return s1VowelCount == s2VowelCount;

    function countVowel(str) {

        const vowel = "aeiouAEIOU";
        let count = 0;

        for ( let s of str ) {
            if ( vowel.includes(s) ){
                count++;
            }
        }

        return count;

    }
};
