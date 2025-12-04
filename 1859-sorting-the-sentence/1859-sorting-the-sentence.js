/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    const array = s.split(" ")
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[array[i][array[i].length - 1] - 1] = array[i].slice(0, array[i].length - 1)
    }
    
    return result.join(" ")
};