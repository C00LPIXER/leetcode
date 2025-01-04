/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let frequency = {};
    for (let i = 0; i < nums.length; i++) {
        frequency[nums[i]] = (frequency[nums[i]] || 0) + 1;
    }

    let count = 0;
    let max = 0;

    for (let key in frequency) {
        if (max === frequency[key]) {
            count++
        } else if (max < frequency[key]) {
            count = 1;
            max = frequency[key]
        }
    }
    delete frequency;

    return count * max;
};