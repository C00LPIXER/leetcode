/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
    const remainderCount = new Map();
    let pairCount = 0;
    
    for (const hour of hours) {
        const remainder = hour % 24;
        const complement = remainder === 0 ? 0 : 24 - remainder;

        if (remainderCount.has(complement)) {
            pairCount += remainderCount.get(complement);
        }

        remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
    }
    
    return pairCount;
};
