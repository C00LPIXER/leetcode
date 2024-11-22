/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    let y = 0
    let a = x.toString()
    for (let i = 0; i < a.length; i++) {
        y += +a.toString().charAt(i)
    }
    if (x % y === 0) return y
    return -1
};