/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, '')
    return str.toLowerCase() === str.split("").reverse().join("").toLowerCase()
};