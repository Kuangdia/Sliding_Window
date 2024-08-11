/*
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
*/

/*
Input: prices = [10,1,5,6,7,1]
Output: 6

Input: prices = [10,8,7,5,2]
Output: 0
*/

// set left and right pointer
// set maxProfit at 0
// left starts at 0 and right starts at 1
// while right is less than arr.length
// if right is smaller than left => left = right
// if price[right] > price[left] => calculate maxProfit
// then right++
function maxProfit(prices) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}

console.log(maxProfit([2, 4, 1]));
