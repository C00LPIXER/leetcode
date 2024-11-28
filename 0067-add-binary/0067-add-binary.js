/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const bitA = i >= 0 ? parseInt(a[i], 10) : 0;
        const bitB = j >= 0 ? parseInt(b[j], 10) : 0;
        const sum = bitA + bitB + carry;

        result = (sum % 2) + result; 
        carry = Math.floor(sum / 2); 

        i--;
        j--;
    }

    return result;
};