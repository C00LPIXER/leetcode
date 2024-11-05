/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n < 1) {
        return arr.slice()
    }

    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            acc.push(...flat(val, n - 1))
        } else {
            acc.push(val)
        }

        return acc
    }, [])

};