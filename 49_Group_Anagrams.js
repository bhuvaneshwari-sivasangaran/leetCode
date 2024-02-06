/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let res = [];
    let map = new Map();

    for ( let i = 0 ; i < strs.length ; i++ ) {
        let sorted_str = strs[i].split('').sort().join('');
        if ( map.has(sorted_str) ) {
            res[map.get(sorted_str)].push(strs[i]);
        } else {
            map.set(sorted_str, res.length);
            res.push([strs[i]]);
        }
    }
    
    return res;

};
