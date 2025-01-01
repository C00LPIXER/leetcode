/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    let maxScore = 0;

    let totalOnes = 0;
    for (let char of s) {
        if (char === '1') {
            totalOnes++;
        }
    }

    let leftZeros = 0, rightOnes = totalOnes;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            leftZeros++;
        } else {
            rightOnes--;
        }

        maxScore = Math.max(maxScore, leftZeros + rightOnes);
    }

    return maxScore;
};