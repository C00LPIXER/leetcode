/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    const totalLeft = Math.floor((m + n + 1) / 2);

    let left = 0;
    let right = m;

    while (left < right) {
        const i = Math.floor((left + right + 1) / 2);
        const j = totalLeft - i;

        if (nums1[i - 1] > nums2[j]) {
            right = i - 1;
        } else {
            left = i;
        }
    }

    const i = left;
    const j = totalLeft - i;

    const nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1];
    const nums1RightMin = i === m ? Infinity : nums1[i];
    const nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1];
    const nums2RightMin = j === n ? Infinity : nums2[j];

    if ((m + n) % 2 === 1) {
        return Math.max(nums1LeftMax, nums2LeftMax);
    } else {
        return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin,nums2RightMin)) / 2;
    }

};