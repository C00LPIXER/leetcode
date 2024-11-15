/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    let sort = nums.sort((a, b) => a - b)
    let l = sort.length;

    return (sort[l - 2] * sort[l - 1]) - (sort[0] * sort[1])
};