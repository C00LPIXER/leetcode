/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let result = [];
    let temp = ""

    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] === " " || s[i + 1] === undefined) {
            result[s[i] - 1] = temp;
            temp = ""
            i++
        } else {
            temp += s[i]
        }
    }

    return result.join(" ")
};