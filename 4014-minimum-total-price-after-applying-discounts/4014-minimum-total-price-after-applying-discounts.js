/**
 * @param {number[]} prices
 * @param {number[]} discounts
 * @return {number}
 */
var minPrice = function(prices, discounts) {
    prices = prices.sort((a, b) => b - a);
    discounts = discounts.sort((a, b) => b - a);
    let i = 0;
    let result = 0;
    while (i < discounts.length && i < prices.length) {
        result += (prices[i] * (100 - discounts[i])) / 100;
        i += 1;
    }
    while (i < prices.length) {
        result += prices[i];
        i += 1;
    }
    return result;
};