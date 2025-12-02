/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {

        if (obj[nums[i]] != undefined) {
            obj[nums[i]] = + 1
        } else {
            obj[nums[i]] = 0
        }
    }

    let result
    for (const key in obj){
        if(obj[key] == 0){
            result = key
        }
    }

    return +result
};