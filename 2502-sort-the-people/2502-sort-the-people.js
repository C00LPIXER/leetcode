/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const paired = names.map((name, index) => [name, heights[index]]);
    paired.sort((a, b) => b[1] - a[1]);
    return paired.map(pair => pair[0]);
};