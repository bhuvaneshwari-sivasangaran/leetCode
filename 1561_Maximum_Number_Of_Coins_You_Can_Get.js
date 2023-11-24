/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    
    piles.sort((a, b) => a-b);

    let bob = 0, alice = piles.length-1, my_count = 0;

    while ( bob < alice ) {
        bob++;
        my_count += piles[alice-1];
        alice = alice - 2;
    }

    return my_count;


};
