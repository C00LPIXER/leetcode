/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // 1. Ignore leading whitespace
    s = s.trim();
    if (s.length === 0) return 0;

    // 2. Determine sign
    let sign = 1;
    let i = 0;
    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }

    // 3. Read digits
    let num = 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

        // 4. Check for overflow before multiplying
        if (num > Math.floor(INT_MAX / 10) || 
           (num === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        num = num * 10 + digit;
        i++;
    }

    // 5. Apply sign and return result
    return num * sign;
};