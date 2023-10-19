/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let s_arr = new Array();
    let t_arr = new Array();

    for ( let i = 0 ; i < s.length ; i++ ) {
        if ( s[i] === '#' ) {
            s_arr.pop();
        } else {
            s_arr.push(s[i]);
        }
    }

    for ( let i = 0 ; i < t.length ; i++ ) {
        if ( t[i] === '#' ) {
            t_arr.pop();
        } else {
            t_arr.push(t[i]);
        }
    }

    if ( t_arr.length !== s_arr.length ) {
        return false;
    } else {
        for ( let i = 0 ; i < t.length ; i++ ) {
            if ( s_arr[i] !== t_arr[i] ) {
                return false;
            }
        }
        return true;
    }
};
