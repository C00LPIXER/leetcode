/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    let product1 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

    let product2 = nums[0] * nums[1] * nums[nums.length - 1];

    return Math.max(product1, product2);
};