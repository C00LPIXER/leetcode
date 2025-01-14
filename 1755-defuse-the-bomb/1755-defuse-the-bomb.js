/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    const n = code.length;
    let output = new Array(n).fill(0);

    if (k === 0) {
        return output;
    }

    for (let i = 0; i < n; i++) {
        let sum = 0;

        if (k > 0) {
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % n];
            }
        } else {
            for (let j = 1; j <= Math.abs(k); j++) {
                sum += code[(i - j + n) % n];
            }
        }

        output[i] = sum;
    }

    return output;
};
