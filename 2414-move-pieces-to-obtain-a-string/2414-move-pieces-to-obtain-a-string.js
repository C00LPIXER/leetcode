/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
    if (start.replace(/_/g, '') !== target.replace(/_/g, '')) {
        return false;
    }

    let i = 0, j = 0;
    const n = start.length;

    while (i < n && j < n) {
        while (i < n && start[i] === '_') i++;
        while (j < n && target[j] === '_') j++;

        if (i === n && j === n) return true;

        if (i === n || j === n) return false;

        if (start[i] !== target[j]) return false;
        if (start[i] === 'L' && i < j) return false; 
        if (start[i] === 'R' && i > j) return false; 

        i++;
        j++;
    }

    return true;
};