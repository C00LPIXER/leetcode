/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(nums) {
    if (nums.length <= 1) return nums;

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    let count = new Array(max - min + 1).fill(0);
    for (let num of nums) {
        count[num - min]++;
    }

    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i]-- > 0) {
            nums[index++] = i + min;
        }
    }

    return nums;
}