function distinctDifferenceArray(nums: number[]): number[] {
    let result: number[] = [];
    let n: number = nums.length;

    for (let i: number = 0; i < n; i++) {
        let prefix: number[] = nums.slice(0, i + 1);
        let suffix: number[] = nums.slice(i + 1, n);

        let prefixDistinctCount = new Set(prefix).size;
        let suffixDistinctCount = new Set(suffix).size;

        result.push(prefixDistinctCount - suffixDistinctCount);
    }

    return result;
}
