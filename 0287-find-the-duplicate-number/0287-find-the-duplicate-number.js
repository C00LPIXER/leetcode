/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
            return nums[i]; 
        }
        seen[nums[i]] = true; 
    }
    return null;
};