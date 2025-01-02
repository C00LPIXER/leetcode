/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let result = +digits.join("");
    ++result;
    let a = result.toString();
    let array = []
    for (let i = 0; i < a.length; i++) {
        array.push(+a[i])

    }
    return array
};