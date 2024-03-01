/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    
    let OnesCount = s.split('').filter((val)=> val === '1').length;
    let res = [];

    for ( let i = 0, j = 1 ; i < s.length - 1 ; i++ ) {
        if ( j < OnesCount ) {
            res.push('1');
            j++;
        } else {
            res.push('0');
        }
    }

    res.push('1');
    return res.join('');

};
