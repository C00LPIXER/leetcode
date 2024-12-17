/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
    const freqMap = new Map();
    for (const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const sorted = Array.from(freqMap.entries()).sort((a, b) => b[0].localeCompare(a[0]));

    let result = [];
    while (sorted.length > 0) {
        const [char, count] = sorted.shift();
        const toAdd = Math.min(count, repeatLimit);

        result.push(...Array(toAdd).fill(char));
        const remaining = count - toAdd;

        if (remaining > 0) {
            if (sorted.length > 0) {
                const [nextChar, nextCount] = sorted.shift();
                result.push(nextChar);

                if (nextCount - 1 > 0) {
                    sorted.unshift([nextChar, nextCount - 1]);
                }

                sorted.unshift([char, remaining]);
            } else {
                break;
            }
        }
    }

    return result.join('');
};
