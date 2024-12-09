/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0]
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        current += nums[i]
        if (current > max) {
            max = current;
        }
        if (current < 0) {
            current = 0
        }
    }
    return max
};