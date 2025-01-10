/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
    if (nums.length < 3) return -1
    let min = Infinity
    let max = 0
    let selected = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
        }
        if (nums[i] > max) {
            max = nums[i]
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== min && nums[j] !== max) {
            return nums[j]
        }
    }

    return -1
};