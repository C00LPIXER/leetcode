/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
    let array = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) {
            
                array.push(i)
            
        }
    }
    console.log(array)
    if (array.length == 0) {
        return -1
    }
    return array[0]
};
