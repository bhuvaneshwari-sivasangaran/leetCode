/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {

    let answer = [];

    for ( let i = 0 ; i < prices.length - 1 ; i++ ) {

        let found = false;
        for ( let j = i + 1 ; j < prices.length ; j++ ) {
            if ( prices[j] <= prices[i] ) {
                found = true;
                answer.push( prices[i] - prices[j] )
                break;
            }
        }
        if ( !found ) {
            answer.push( prices[i] );
        }

    }

    answer.push( prices[prices.length - 1] );
    return answer;

};
