function canAliceWin(nums: number[]): boolean {
    let sum2: number = 0
    let sum1: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] > 9) {
            sum2 += nums[i]
        } else {
            sum1 += nums[i]
        }
    }

    return sum1 !== sum2
};