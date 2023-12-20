/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b) => a-b);
    let total = money - (prices[0] + prices[1]);
    return total >= 0 ? total : money;
};
