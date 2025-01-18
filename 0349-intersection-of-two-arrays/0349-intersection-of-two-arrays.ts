function intersection(nums1: number[], nums2: number[]): number[] {
    let array: number[] = [];

    for (let i: number = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) !== -1) {
            array.push(nums1[i])
        }
    }

    return [...new Set(array)]
};