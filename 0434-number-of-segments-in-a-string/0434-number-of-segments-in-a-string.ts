function countSegments(s: string): number {
    let str = s.trim()
    if (str === "") return 0
    let array = str.split(" ")
    let count = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] !== ""){
            count++
        }
    }
    return count
};