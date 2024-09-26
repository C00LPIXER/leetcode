/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = +x.toString().split("").reverse().join("");
    if(x < 0){
        return false
    }else if(x === y){
        return true
    }else{
        return false
    }
}

