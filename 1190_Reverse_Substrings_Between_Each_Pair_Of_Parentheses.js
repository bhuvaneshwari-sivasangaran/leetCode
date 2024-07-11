/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let indexArr = [], strArr = [];
    for ( let i = 0 ; i < s.length ; i++ ) {
        if ( s[i] === '(' ) {
            indexArr.push(i)
        } else if ( s[i] === ')' ) {
            let idx = indexArr.pop();
            let str = s.substring(idx+1, i).split('').reverse().join('');
            s = s.slice(0, idx) + str + s.slice(i+1);
            i = i - 2;
        }
    }

    return s;

};
