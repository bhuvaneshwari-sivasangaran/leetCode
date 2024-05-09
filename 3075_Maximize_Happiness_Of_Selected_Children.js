/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    
    let sum = 0;

    for ( let i = 0 ; i < k ; i++ ) {
        let max = Math.max(...happiness);
        let index = happiness.indexOf(max);
        happiness.splice(index, 1);
        console.log(happiness, max, i)
        if( max - i > 0 ) {
            sum += max - i;
        }
        if ( max == 1 ) {
            break;
        }
    }

    return sum;

};
