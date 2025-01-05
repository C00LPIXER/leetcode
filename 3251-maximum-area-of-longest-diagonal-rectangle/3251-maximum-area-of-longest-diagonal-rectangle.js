/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;

    for (let i = 0; i < dimensions.length; i++) {
        let length = dimensions[i][0];
        let width = dimensions[i][1];

        let diagonal = Math.sqrt(length * length + width * width);

        let area = length * width;

        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal;
            maxArea = area; 
        }
        else if (diagonal === maxDiagonal) {
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};