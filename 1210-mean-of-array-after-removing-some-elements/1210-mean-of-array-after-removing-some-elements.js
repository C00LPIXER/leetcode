/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    const array = arr.sort((a, b) => a - b)
    let l = array.length

    let p = Math.floor(l * 0.05)
    let count = 0
    let total = 0

    for (let i = p; i < (l - p); i++) {
        count++;
        total += array[i]
    }

    return (total / count)
};