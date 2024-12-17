/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    let count = 0;
    for (let i = 0; i < details.length; i++) {
        if (60 < +(details[i].toString()[11] + details[i].toString()[12])) {
            count++
        }
    }
    return count
};