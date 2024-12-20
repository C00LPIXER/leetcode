/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let maxHeap = [...stones].sort((a, b) => b - a);

    while (maxHeap.length > 1) {
        let stone1 = maxHeap.shift();
        let stone2 = maxHeap.shift();

        if (stone1 !== stone2) {
            let newStone = stone1 - stone2;
            maxHeap.push(newStone);
            maxHeap.sort((a, b) => b - a);
        }
    }

    return maxHeap.length === 1 ? maxHeap[0] : 0;
};