function findNonMinOrMax(nums: number[]): number {
    if (nums.length < 3) return -1
    let min: number = Infinity
    let max: number = 0
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
        }
        if (nums[i] > max) {
            max = nums[i]
        }
    }

    for (let j: number = 0; j < nums.length; j++) {
        if (nums[j] !== min && nums[j] !== max) {
            return nums[j]
        }
    }

    return -1
};