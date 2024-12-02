/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let flag = 0;
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j + 1] < nums[j]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                flag = 1
            }
        }
        if (flag !== 1) break;
    }
};