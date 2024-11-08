/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // let l = nums.length
    // for (let i = 0; i < k; i++) {
    //     nums.unshift(nums[l-1])
    //     nums.pop()
    // }
    // return nums
    k = k % nums.length;
    nums.unshift(...nums.splice(nums.length - k, k));
};