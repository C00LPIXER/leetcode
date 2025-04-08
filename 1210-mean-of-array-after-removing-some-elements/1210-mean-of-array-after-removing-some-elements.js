/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    const array = arr.sort((a, b) => a - b)
    let l = array.length

    let p = Math.floor((l * 5) / 100)

    console.log(p)

    let total = 0
    // let after = array.slice(, 15)
    let after = array.slice(p, (l - p));

    for (let i = 0; i < after.length; i++) {
        total += after[i]
    }

    return (total / after.length)
};