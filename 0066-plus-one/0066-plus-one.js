/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let str = digits.join("").toString()
    console.log(str)
    let inc = BigInt(str) + 1n
    return inc.toString().split("").map((v) => +v)
};