/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    let result = "";
    let spaceIndex = 0; 

    for (let i = 0; i < s.length; i++) {
        if (spaceIndex < spaces.length && i === spaces[spaceIndex]) {
            result += " ";
            spaceIndex++;
        }
        result += s[i];
    }

    return result;
};