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
        console.log(key, frequency[key])
        if (max === frequency[key]) {
            count++
        } else if (max < frequency[key]) {
            count = 1;
            max = frequency[key]
        }
    }

    return count * max;
};