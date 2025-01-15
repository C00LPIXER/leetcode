/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let i: number = s.length - 1
    let j: number = 0
    while (i > j) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
        j++
        i--
    }
};