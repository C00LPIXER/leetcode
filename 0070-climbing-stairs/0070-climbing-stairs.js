/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 3) return n;

    let prev1 = 3;
    let prev2 = 2;
    let cur = 0;

    for (let i = 3; i < n; i++) {
        cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }

    return cur;
};