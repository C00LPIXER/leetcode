/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};