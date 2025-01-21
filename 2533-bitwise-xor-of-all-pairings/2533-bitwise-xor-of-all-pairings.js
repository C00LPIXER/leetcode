/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
    let xor1 = 0, xor2 = 0;

    for (let num of nums1) {
        xor1 ^= num;
    }

    for (let num of nums2) {
        xor2 ^= num;
    }

    return (nums2.length % 2 ? xor1 : 0) ^ (nums1.length % 2 ? xor2 : 0);
};