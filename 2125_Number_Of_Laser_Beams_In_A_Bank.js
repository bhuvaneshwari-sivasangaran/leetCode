/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {

    let prev = 0, total = 0;
    for ( let row of bank ) {
        let cur = countOne(row);
        total += prev * cur;
        prev= cur > 0 ? cur: prev;
    }

    return total

};

function countOne(binaryString) {

    let count = 0;

    for (let char of binaryString) {
        if (char === '1') {
            count++;
        }
    }

    return count;

}
