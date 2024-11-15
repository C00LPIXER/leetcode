/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let a = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().trim();
    return a.length < 0 ? false: a === a.split("").reverse().join("")
};