var maxProfit = function (prices) {
    let currMin = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        // can i sell
        if (prices[i] > currMin) {
            // you can sell but check whether its better than previous profit
            profit = Math.max(profit, prices[i] - currMin);

        }
        // can i buy
        if (prices[i] < currMin) {
            currMin = prices[i];
        }
    }
    return profit;
};
let arr = [7, 6, 5, 4, 1];
console.log(maxProfit(arr));