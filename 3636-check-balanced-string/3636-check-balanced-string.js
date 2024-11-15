/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    let array = num.split("")
    let oddSum = 0
    let evenSum = 0
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            oddSum += +array[i]
        } else {
            evenSum += +array[i]
        }
    }
    console.log(oddSum, evenSum)
    if (oddSum === evenSum) {
        return true
    }
    return false
};