function getFinalState(nums: number[], k: number, multiplier: number): number[] {
     for (let i = 0; i < k; i++) {
        let minIndex = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        nums[minIndex] *= multiplier;
    }
    return nums;
};