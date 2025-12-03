/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    let newS = s
    for (let i = 0; i < s.length; i++) {
        let first = newS[0]
        newS = newS.slice(1);
        newS += first
        if(newS === goal){
            return true
        }
    }

    return false
};