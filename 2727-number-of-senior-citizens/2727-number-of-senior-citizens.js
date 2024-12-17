/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    let count = 0;
    for (let i = 0; i < details.length; i++) {
        if (60 < +(details[i][11] + details[i][12])) {
            count++
        }
    }
    return count
};