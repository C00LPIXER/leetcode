/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let a = []
    let sum = 0
    let array = []

    for (let i = 0; i < nums.length; i++) {
        let a = nums[i].toString().split("")
        console.log(a)
        for (let j = 0; j < a.length; j++) {
            sum += +a[j]
        }
        array.push(sum)
        sum = 0
    }
    console.log(a,sum,array)

    return array.sort((a,b)=>a-b)[0]
};