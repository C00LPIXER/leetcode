/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reversedStr = Math.abs(x).toString().split("").reverse().join("");
    let reversedNum = parseInt(reversedStr, 10);
    
    if (reversedNum > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    return x < 0 ? -reversedNum : reversedNum;
};