function sortArrayByParityII(nums: number[]): number[] {
    let evenIndex = 0;
    let oddIndex = 1;
    const n = nums.length;

    while (evenIndex < n && oddIndex < n) {
        if (nums[evenIndex] % 2 === 0) {
            evenIndex += 2;
        }
        else if (nums[oddIndex] % 2 !== 0) {
            oddIndex += 2;
        }
        else {
            [nums[evenIndex], nums[oddIndex]] = [nums[oddIndex], nums[evenIndex]];
            evenIndex += 2;
            oddIndex += 2;
        }
    }

    return nums;
}
