/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
    let j = 0;

    for (let i = 0; i < str1.length; i++) {
        if (j === str2.length) return true;

        if (str1[i] === str2[j]) {
            j++;
        }
        else if (
            (str1[i].charCodeAt(0) - 'a'.charCodeAt(0) + 1)
            % 26 === (str2[j].charCodeAt(0) - 'a'.charCodeAt(0))
        ) {
            j++;
        }
    }

    return j === str2.length;
};