/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0
    let current = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            current++;
            count = Math.max(count, current);
        } else {
            current = 0;
        }
    }

    return count
};