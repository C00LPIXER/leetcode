/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    const column = coordinates[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const row = parseInt(coordinates[1]);
    return (column + row) % 2 === 1;
};