/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {

    for (let i = 0; i < image.length; i++) {
        image[i].reverse()
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] === 0) {
                image[i][j] = 1
            } else {
                image[i][j] = 0
            }
        }
    }
    
    return image
};