/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
    gifts.sort((a, b) => b - a);
    for (let i = 0; i < k; i++) {
        let maxGifts = gifts[0];
        let remainingGifts = Math.floor(Math.sqrt(maxGifts));
        gifts[0] = remainingGifts;
        gifts.sort((a, b) => b - a);
    }
    return gifts.reduce((sum, gift) => sum + gift, 0);
};