/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let a = []
    let array = []

    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        let a = nums[i].toString().split("")
        for (let j = 0; j < a.length; j++) {
            sum += +a[j]
        }
        array.push(sum)
    }

    return array.sort((a, b) => a - b)[0]
};