function countSegments(s: string): number {
    let str: string = s.trim()
    if (str === "") return 0
    let array: string[] = str.split(" ")
    let count: number = 0
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] !== "") {
            count++
        }
    }
    return count
};